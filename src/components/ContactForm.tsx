"use client";

import { useState, type FormEvent } from "react";
import { interestOptions } from "@/lib/site";
import { Arrow } from "./Button";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full rounded-none border-0 border-b border-navy/25 bg-transparent px-0 py-3 text-base text-navy placeholder:text-slate transition-colors focus:border-accent focus:outline-none focus:ring-0";
const label = "text-[0.8rem] font-medium uppercase tracking-[0.14em] text-navy/80";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-navy/15 pt-10">
        <p className="eyebrow text-corporate">Thank you</p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">Your inquiry has been received.</p>
        <p className="lede mt-4 text-muted">We will review your message and be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" maxLength={120} className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={160} className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest" className={label}>
          Area of Interest
        </label>
        <div className="relative">
          <select id="interest" name="interest" defaultValue="" className={`${field} appearance-none pr-8`}>
            <option value="" disabled>
              Select an area
            </option>
            {interestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <svg viewBox="0 0 12 8" aria-hidden="true" className="pointer-events-none absolute right-1 top-1/2 h-2 w-3 -translate-y-1/2 text-navy/60">
            <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} maxLength={5000} className={`${field} resize-y`} />
      </div>
      {/* Honeypot: hidden from people and assistive tech, often filled by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span aria-hidden="true">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-navy px-8 font-medium text-white transition-colors duration-300 hover:bg-corporate disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Inquiry"}
          <Arrow />
        </button>
      </div>
      <p role="alert" aria-live="assertive" className="text-sm text-red-700 sm:col-span-2 empty:hidden">
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}
