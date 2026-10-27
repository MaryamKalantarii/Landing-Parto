# PARTO — Landing Page (React + TS + Vite + Tailwind 4 + GSAP + Motion + Lenis)

## Run
    npm install
    npm run dev        # development
    npm run build      # tsc + production build
    npm run preview

## Customize
- Purchase/demo/video/social links: `src/config/site.ts` (empty = buttons scroll to a section)
- Images: `src/config/assets.ts` (placeholder art is generated in `components/ui/Art.tsx`; set a URL per slot to use real photos)
- Texts: `src/data/*.ts` (nav, features, pages, FAQ) and the section components
- Colors/fonts: `@theme` block in `src/styles/globals.css`

## Animation system
- `hooks/useLenis.ts`: one Lenis instance driven by gsap.ticker + ScrollTrigger
- `hooks/useScrollReveal.ts`: GSAP scroll reveals (`data-reveal`) and parallax (`data-parallax`)
- Motion for React: hero entrance, accordion, modal, mobile menu
- Everything respects prefers-reduced-motion

## Status
Written without being able to run `npm install` here, so it has NOT been type-checked, built or visually compared with the screenshot. Imagery is generated placeholder art, not photography.
