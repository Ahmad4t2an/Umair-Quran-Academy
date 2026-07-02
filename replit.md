# Umair Quran Academy

A professional 7-page website for an online Islamic Quran learning academy targeting Muslim families in the USA and Australia.

## Run & Operate

- `pnpm --filter @workspace/umair-quran-academy run dev` — run the website (port assigned by workflow)
- `pnpm --filter @workspace/umair-quran-academy run build` — production build (outputs to `artifacts/umair-quran-academy/dist/public/`)
- `pnpm --filter @workspace/umair-quran-academy run typecheck` — typecheck the frontend

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Routing: Wouter
- Animations: Framer Motion
- Fonts: Playfair Display (headings) + Inter (body) — Google Fonts
- Contact form: Formspree (POST to `https://formspree.io/f/xpwzglyb`)
- No backend — fully static site

## Where things live

- `artifacts/umair-quran-academy/src/pages/` — 7 page components (home, about, courses, pricing, teachers, credentials, contact)
- `artifacts/umair-quran-academy/src/components/layout/Shell.tsx` — sticky header + footer
- `artifacts/umair-quran-academy/public/assets/` — logo, Hifz certificate, HEC certificate
- `artifacts/umair-quran-academy/src/App.tsx` — wouter routes

## Brand

- Deep Islamic Green: `#0E4B3A`
- Antique Gold: `#C9A227`
- Cream: `#FBF8F1`
- Charcoal: `#1A1A1A`
- Headings: Playfair Display, Body: Inter

## Vercel Deployment

Deploy the `artifacts/umair-quran-academy` folder. Build command: `pnpm run build`. Output: `dist/public`. No environment variables required (the Vite config defaults gracefully without PORT/BASE_PATH).

## Contact Info (in site content)

- WhatsApp: https://wa.me/923047634342 (+92 304 7634342)
- Email: umairquranacademy.pk@gmail.com
- Address: Bahawalpur, Punjab, Pakistan
- Formspree endpoint: `https://formspree.io/f/xpwzglyb` (replace with real form ID from formspree.io)

## User Preferences

- No photographs of people anywhere on the site
- Pricing in USD ($) only
- No free trial messaging throughout
