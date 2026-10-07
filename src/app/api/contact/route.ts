import { NextResponse } from "next/server";
import { interestOptions } from "@/lib/site";

/**
 * Contact form endpoint.
 * Set CONTACT_WEBHOOK_URL to deliver inquiries (as JSON) to an inbox service, CRM or automation
 * (e.g. Zapier, Make, Formspree, a Slack or Teams webhook). Without it, inquiries are only logged
 * in development and rejected in production so nothing is silently lost.
 */
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled: pretend success
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const inquiry = {
    name: str(body.name, 120),
    company: str(body.company, 160),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    interest: interestOptions.includes(str(body.interest, 80)) ? str(body.interest, 80) : "",
    message: str(body.message, 5000),
    receivedAt: new Date().toISOString(),
  };

  if (!inquiry.name || !inquiry.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return NextResponse.json({ error: "Please provide your name, a valid email address and a message." }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] inquiry (CONTACT_WEBHOOK_URL not set):", inquiry);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] CONTACT_WEBHOOK_URL is not configured");
    return NextResponse.json({ error: "We could not send your inquiry right now. Please try again later." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "antel-website", ...inquiry }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json({ error: "We could not send your inquiry right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
