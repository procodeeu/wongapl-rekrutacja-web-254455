# WONGA.PL - Rekrutacja Front-end dev

Projekt rekrutacyjny - strona firmowa z sekcją "Nasze ostatnie projekty".

## Uruchomienie

```bash
npm install
npm run dev          # Development server z TinaCMS
npm run build:tina   # Production build
npm run preview      # Preview build
```

## Testy

```bash
npm run test         # Playwright tests
```

Testy E2E uruchamiane automatycznie przy każdym PR. Raport testów: https://procodeeu-wongapl-rekrutacja-web-254455-e2e.pages.dev

## Deploy

- **Strona główna**: https://wongapl-rekrutacja-web-254455-amy.pages.dev
- **CMS Admin**: dostępny lokalnie pod `/admin` podczas `npm run dev`

## Stack

Astro, TypeScript, TinaCMS, Playwright, Cloudflare Pages