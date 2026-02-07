# Cold Army – Aircon Specialist Website

A responsive, professional website for Cold Army aircon services built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Responsive design** – Works on mobile, tablet, and desktop
- **Blue theme** – Matches your Cold Army logo (primary blue and white)
- **Filipino-friendly** – Malasakit messaging and local tone (e.g. "Salamat po!" on form submit)
- **Sections** – Hero, Services, Aircon types, Maintenance plan, Brands, Book a service form
- **Smooth navigation** – Sticky header with anchor links and smooth scroll

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Production build
- `npm run start` – Run production server
- `npm run lint` – Run ESLint

## Logo

The logo is served from `public/cold-army-logo.png`. Replace this file to update the logo site-wide.

## Customization

- **Colors** – Edit `tailwind.config.ts` (primary, cold blue/navy) and `src/app/globals.css` (CSS variables).
- **Content** – Edit components in `src/components/` and copy in `src/app/page.tsx`.
- **Book form** – Submissions are sent to **andy.radam@gmail.com** via [Resend](https://resend.com). To enable:
  1. Sign up at [resend.com](https://resend.com) (use andy.radam@gmail.com for the free tier).
  2. Create an API key in the Resend dashboard.
  3. Copy `.env.local.example` to `.env.local` and set `RESEND_API_KEY=your_key`.
  4. Restart the dev server. Form submissions will then email you.
# coldarmy
