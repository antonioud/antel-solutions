# Antel Solutions website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4. No animation library: reveals and parallax run from one small client component (`src/components/Motion.tsx`) and respect `prefers-reduced-motion`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configure

| Env var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain used for canonical URLs, sitemap, robots and OpenGraph. Defaults to `https://www.antelsolutions.com`; confirm before launch. |
| `CONTACT_WEBHOOK_URL` | Where contact-form inquiries are POSTed as JSON (Zapier, Make, Formspree, a CRM, Slack/Teams webhook…). Without it, the form logs inquiries in development and shows an error in production so nothing is lost silently. |

## Imagery

All photography lives in `public/images/` using the agreed filenames (`01_Global_Earth.jpg` … `12_Global_Network.jpg`, plus `13_Mountains.jpg`, `14_World_Map.jpg`, `15_Boardroom.jpg`).
The current files are **low-resolution placeholders cropped from the mockups**. Replace each file in place with the full-resolution original (same name, ideally ≥2400px wide JPG); Next.js generates responsive AVIF/WebP automatically. Alt text lives in `src/lib/site.ts`.

The logo is a typographic stand-in (`src/components/Logo.tsx`, `src/app/icon.svg`). Swap in the supplied logo files when available.

## Content

- Copy, navigation, capabilities, process steps and contact options: `src/lib/site.ts` and the page files in `src/app/`.
- Leadership: add entries to `leadership` in `src/lib/site.ts`; the About page section appears automatically.
- Privacy and Terms pages are short drafts for legal review.
