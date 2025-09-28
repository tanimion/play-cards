# play-cards — Next.js + Storyblok + Tailwind

A production-ready starter featuring a beautiful Card component and a CardsGrid block with live Visual Editor previews.

## Quick Start
```bash
npm i
cp .env.example .env.local
# fill NEXT_PUBLIC_STORYBLOK_TOKEN and (optionally) STORYBLOK_REGION
npm run dev
```

## Storyblok
Create components:

- **card** (Nestable)
  - `image` (Asset) · `title` (Text) · `description` (Textarea) · `button_text` (Text) · `button` (Link)
- **cards_grid** (Nestable)
  - `title` (Text) · `cards` (Blocks -> card)
- **page** (Content type)
  - `body` (Blocks -> cards_grid)

Create a story **Home** with slug `home`, type **page**.  
Visual Editor Preview URL: `http://localhost:3000/`

## Notes
- Draft in dev, Published in prod (auto).
- Images allowed domains: a.storyblok.com, img2.storyblok.com.
