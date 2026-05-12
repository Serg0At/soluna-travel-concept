# Soluna Travel — demo site

Next.js 15 + Tailwind v4 + Framer Motion. Static-export ready.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to ./out/ (static export)
```

## Stack

- **Next.js 15** App Router, static export (`output: "export"`)
- **Tailwind CSS v4** — CSS-first config in `app/globals.css` via `@theme`
- **next/font** — Fraunces (display serif), Inter (body), Noto Armenian (HY fallback)
- **Motion** — subtle scroll/entry animations

## Design tokens (from logo)

| Token       | Hex       | Role                                  |
|-------------|-----------|---------------------------------------|
| `brand`     | `#1B9FA6` | Teal — structural (nav scrolled, footer) |
| `brand-deep`| `#137278` | Hover/depth                            |
| `sun`       | `#F2901A` | Primary CTA, accents                  |
| `sun-deep`  | `#C8740E` | CTA hover                             |
| `ink`       | `#0E2729` | Body text                              |
| `cream`     | `#FBF8F4` | Alternate section background          |
| `muted`     | `#6F8385` | Secondary text                         |

## Build checkpoints

- [x] **Checkpoint 1** — Nav + Hero
- [ ] **Checkpoint 2** — Services grid (4 cards)
- [ ] **Checkpoint 3** — Destinations with region tabs
- [ ] **Checkpoint 4** — About + trust strip + HY/RU locale toggle
- [ ] **Checkpoint 5** — Multi-channel contact + footer
- [ ] **Polish** — replace stock hero photo, swap-in real assets, SEO, OG image

## Contact info baked in

- Instagram: [@soluna_travel](https://instagram.com/soluna_travel)
- WhatsApp / phone: +374 91 341 143
# soluna-travel-concept
