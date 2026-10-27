# PARTO — Header + Hero

## 1. Install (inside your existing Vite + React + TS project)

```bash
npm install gsap lucide-react @fontsource-variable/vazirmatn @fontsource-variable/cormorant-garamond
```
Tailwind is already in your project; these components are styled with plain CSS
(so they work with Tailwind v3 or v4 and no `content` config), Tailwind stays free for the rest of the page.

## 2. Copy files (nothing else in your project is touched)

```
src/config/heroConfig.ts        ← assets, URLs, nav, copy
src/lib/links.ts                ← smooth-scroll + external-link helpers
src/styles/parto-base.css       ← tokens, base rules, shared buttons
src/components/Header.tsx / Header.css
src/components/Hero.tsx / Hero.css
src/components/DeviceShowcase.tsx
public/images/hero/             ← your three images go here
```

## 3. Wire up

* `index.html` → `<html lang="fa" dir="rtl">`
* `src/main.tsx` → add (after your existing `index.css` import):
  ```ts
  import "@fontsource-variable/vazirmatn/index.css";
  import "@fontsource-variable/cormorant-garamond/index.css";
  import "./styles/parto-base.css";
  ```
* `src/App.tsx` → render `<Header />` and `<main><Hero /></main>` (see the included App.tsx / main.tsx).

Then `npm run dev`.

## 4. Replace assets / links

`src/config/heroConfig.ts`
```ts
heroAssets  = { laptopScreen, mobileScreen, stoneBackground }   // paths under /public
DEMO_URL / PURCHASE_URL                                          // CTA destinations
```
Missing images show a neutral placeholder (no broken-image icon).

## 4b. Stone background = full-screen

`stone.png` is now a full-bleed photo behind the whole hero (wall + stone block, `object-fit: cover`).
Controls at the top of the `.hero` rule in Hero.css:
```css
--stone-scale: 1;  --stone-offset-x: 0%;  --stone-offset-y: 0%;
--stone-position: center bottom;   /* which part of the photo stays visible */
--stone-flip: 1;                   /* -1 mirrors the photo */
--stone-veil: 0.45;                /* ivory wash behind the text (0 = off) */
```

## 4c. Vite template note

The default Vite `index.css` gives `#root` a fixed width with two side borders (the two vertical lines).
`parto-base.css` already overrides that, but you can also simply delete the `#root { ... }` rule from index.css.

## 5. Adjust the devices (top of the `.showcase` rule in Hero.css)

```css
--laptop-scale: 1;      --phone-scale: 1;
--laptop-bottom: 12cqw; --phone-bottom: 4cqw;    --phone-left: 4cqw;
```
`cqw` = % of the showcase width, so everything scales together at every screen size.

