# README — Dimension-like Landing Page

**Project:** Dimension-like Landing (single-file demo)

**Tech stack**
- Next.js (13+)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- clsx (optional small utility for classNames)


## What this file contains
This single file is a self-contained React component meant to serve as `pages/index.tsx` in a fresh Next.js + TypeScript + Tailwind project.
It includes:
- Hero section with animated gradient blobs and subtle parallax-like motion.
- Responsive layout for mobile, tablet, and desktop.
- Simple navbar, CTA buttons, feature cards, and footer.
- Framer Motion animations for entrance and looping background motion.


## How to use
1. Create a new Next.js + TypeScript project (or use your existing one):

```bash
npx create-next-app@latest my-landing --typescript
cd my-landing
```

2. Install dependencies:

```bash
npm install framer-motion clsx
# Tailwind (if not installed):
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure Tailwind: in `tailwind.config.js`, set `content` to include `./pages/**/*.{js,ts,jsx,tsx}` and `./components/**/*.{js,ts,jsx,tsx}`.

4. Copy this file into `pages/index.tsx` (replace existing index) or into `app/page.tsx` for App Router (minor adjustments for `use client`).

5. Add Tailwind directives in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Run dev server:

```bash
npm run dev
# open http://localhost:3000
```


## Notes & Tips
- The design relies on Tailwind for styling and Framer Motion for animation. Feel free to swap animations for custom CSS keyframes.
- Replace placeholder text, icons, and assets with your own content and SVGs.
- For production performance, reduce number of animated elements and enable `will-change` sparingly.
