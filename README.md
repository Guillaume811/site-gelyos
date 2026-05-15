# site-gelyos

Site vitrine Next.js (App Router) pour la presentation des services Gelyos.

## Stack

- Next.js (App Router)
- React
- TypeScript
- SCSS Modules

## Installation

```bash
npm install
```

## Scripts utiles

```bash
npm run dev
npm run lint
npm run type-check
npm run build
npm run start
```

## Deploiement Cloudflare Pages (statique)

Le projet est configure pour un export statique Next.js via `output: 'export'`.
La configuration active aussi `trailingSlash: true` pour generer des routes sous forme de dossiers (`/route/index.html`) et faciliter les URLs propres sur Cloudflare Pages.

- Build command : `npm run build`
- Output directory : `out`

## Variables d'environnement publiques

Creer un fichier `.env.local` a la racine avec les variables suivantes (sans valeur committee) :

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
NEXT_PUBLIC_CONTACT_ENDPOINT=
NEXT_PUBLIC_GA_ID=
```
