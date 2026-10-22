# Antel Solutions

A complete Next.js App Router / TypeScript / Tailwind CSS website with Home, About, Capabilities, Our Network, Contact, Privacy, Terms and a custom 404. It exports static HTML for portable hosting.

## Current design

The site now implements the selected Intimate Cinematic direction: a quiet conversation setting, the headline “The right relationships. A world of possibility.”, a shorter homepage, four broad capability areas and a more personal tone. See `INTIMATE-CINEMATIC.md` for the revision and new image provenance. Louis Antoniou’s edited portrait and a broad working biography now appear on Home and About. The biography uses career details from the supplied LinkedIn screenshots and broad international travel context from Louis’s message; see `BIO-NOTES.txt` for sources and the content location.

## Run locally

Use Node.js 22 or newer and pnpm (the exact package manager version is in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the Local address printed by Next.js. To verify production:

```sh
pnpm typecheck
pnpm build
pnpm test
```

The deployable site is generated in `out/`. Run `pnpm start` to serve the production export locally on port 3000. This uses the included static preview server. Production hosting should use a CDN or web server.

## Deployment

### Vercel

Import this directory as a repository. The included vercel.json selects Next.js, installs the pinned pnpm version and points the Vercel adapter at .next/ for its build metadata. Vercel detects the static export and publishes the generated out/ files. Do not set the Next.js preset’s Output Directory to out/: that makes its adapter look for routes-manifest.json in the wrong folder. The former /network path redirects to /our-network/. The default site URL is https://antel-solutions.vercel.app; set NEXT_PUBLIC_SITE_URL if using another domain. No server runtime or database is required.

### Netlify / Cloudflare Pages / other static hosts

Build command: `pnpm build`. Publish directory: `out`. Set Node.js 22 or later and the same build-time environment variables. Serve directory indexes for nested paths, and configure `404.html` as your error page. No SPA catch-all rewrite is needed because each route has its own HTML.

### Existing web server

Upload the contents of `out/` into the web root. Preserve directory structure. Configure the server to serve `index.html` in each directory. A portable built copy is also included separately in the delivery package.

## Site URL and SEO

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS origin without a trailing slash. Rebuild after changing it. This updates the canonical URLs, sitemap, robots, OpenGraph and Organization structured data. No addresses, partner identities, licenses or regulatory credentials are included. The .openai/ directory is local preview metadata and is excluded from the GitHub upload.

## Inquiry delivery — configuration required

A verified contact address and delivery provider were not supplied. The form validates fields but deliberately does not claim a successful send until its configured service returns a successful HTTP response. Without configuration, the form explicitly says the message was not sent and preserves the entered details.

Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an HTTPS endpoint operated by your chosen form service or backend. It must accept POST JSON containing `name`, `company`, `email`, `phone`, `interest`, `message`, and `website` (an empty honeypot field), allow CORS from the deployed origin, perform independent server-side validation, apply spam/rate controls, deliver to a verified inbox and return HTTP 2xx only after accepting delivery. Never put an API secret in a `NEXT_PUBLIC_` variable: the endpoint URL is public. Public static sites cannot keep credentials secret. Rebuild after setting the endpoint. The app does not persist drafts in local storage.

Before public launch, confirm an actual submission reaches the intended inbox. Review the included privacy notice and terms against the selected provider, legal entity and final retention/contact arrangements. These pages describe the implementation and are not a substitute for the operator's policies.

## Distinct section photography

Hero, editorial and closing-section backgrounds each use a unique image across the main pages. Six newly generated scenes complement existing unused assets; see ASSETS.md for the complete prompts. Legal and error pages use a plain navy header. Louis’s portrait remains consistent between his homepage introduction and About biography.

## Content and assets

- `src/lib/content.ts`: navigation, capability sectors, service groups, process and inquiry interests.
- `src/lib/network.ts`: confirmed business destinations, derived experience totals and illustrative featured connections.
- `src/data/world-map.json`: local, simplified Natural Earth world geometry.
- `src/app/`: route content and metadata.
- `src/components/`: shared header, footer, image treatment, sections and form.
- `src/app/globals.css`: layout, responsive styling, design tokens and reduced-motion rules.
- `public/images/`: optimized, text-free generated imagery in two responsive widths.
- `ASSETS.md`: image provenance and prompt set.

The retrieved reference conversation supplied the detailed approved copy and design specification but exposed no original image attachments or mockup. This implementation follows that written specification. Photography is newly generated, illustrative imagery; it does not depict Antel premises, clients, partners or completed projects. The selected Architectural Mark is recreated as scalable vector artwork in the shared Brand component and favicon. Light and navy logo files are in public/images/antel-logo-light.svg and antel-logo-navy.svg. The About page includes the user-confirmed 61 business markets (60 countries plus Puerto Rico) and 2 languages for Louis, alongside Antel’s documented 30+ years of international relationships. The map uses only Louis’s supplied business list. It builds from USA to China into a persistent branching network, ending with all 61 markets highlighted and 60 illustrative connections. The complete text directory remains available. See `NETWORK-NOTES.txt` and `src/lib/network.ts` for content and animation settings.

## Cinematic motion

The desktop homepage hero gently settles from a 3.5% zoom over five seconds. The approach architecture image has a scroll offset capped at 18px within a clipped frame. Both effects are disabled on mobile and for reduced-motion visitors. Parallax updates only on scroll or resize; the portrait stays stationary after its existing entrance. No scroll interception or animation library is used.

## Page navigation

Ordinary internal page links start at the top, including header/footer links back to the current page. Explicit section links retain their anchor destinations. Route resets are immediate so the hero appears without a long scroll from the previous page.

## Accessibility and behavior

Semantic landmarks, one primary heading per page, descriptive navigation, a skip link, keyboard focus states, labeled form inputs, native validation and live status messages are included. The mobile navigation supports Escape and closes on route changes. Motion uses CSS transforms, an intersection observer and `prefers-reduced-motion`; content remains visible without animation or JavaScript. Imagery is responsive WebP with lazy loading below the hero. Decorative photos have empty alt text, with meaningful alt text on editorial imagery.

No analytics, advertising scripts, external font requests or invented contact details are included. The system font stack prefers Inter if installed. The static copyright year is evaluated when building; rebuild to refresh it for a new year.

## Framework references

The export and Tailwind setup follow the [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports) and [Tailwind’s Next.js installation guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs). The lockfile records the exact installed versions.
