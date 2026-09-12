# MAROI

Brand website for MAROI, a Spanish menswear label built around a Mediterranean
way of dressing. *More than clothing. A way of life.*

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Bodoni Moda (display) + Inter (UI)
- pnpm
- Deployed on Vercel, auto-deploy from `main`

## Getting started

```bash
pnpm install
pnpm dev
```

Runs on http://localhost:3000.

## Structure

| Route | What it is |
|---|---|
| `/` | Home: hero, wardrobe categories, A³ teaser, lifestyle grid |
| `/hombre` | Catalogue, filterable by category |
| `/hombre/[slug]` | Product page with colours, sizes and styling notes |
| `/a3` | A³ by MAROI, the younger line |
| `/la-marca` | Brand story: origin, garments, palette, manifesto |
| `/journal` | Editorial |
| `/journal/[slug]` | Article |

Copy and product data live in `src/data/`. Imagery sits in `public/images/`.

## Imagery

`MediaPlaceholder` renders a real photo when given a `src` and falls back to a
tonal gradient labelled with the shot that is still missing, so unshot slots
stay obvious instead of silently breaking the layout.

Still to shoot: Camisa Resort, Camisa Oxford, Pantalón de Lino Relajado, Jersey
de Lino y Seda, Camiseta de Punto, Short Cargo Resort.

## Environment

Supabase is provisioned but not yet wired into any feature.

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Deploy

`main` is connected to Vercel, so every push to it ships to production. Run
`pnpm build` before pushing: the build fails on lint errors.
