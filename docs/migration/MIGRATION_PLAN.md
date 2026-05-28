# MIGRATION_PLAN.md

Ce fichier décrit le plan de migration React vers Next.js.

Il est temporaire et pourra être supprimé une fois la migration terminée.

---

## 0) Objectif

Migrer progressivement le site React existant vers Next.js sans mettre le site en panne, sans changer le design sans demande explicite, et sans régression fonctionnelle.

---

## 1) Informations projet

- Nom du projet : `site-gelyos`
- Type de site : `site vitrine`
- Objectif produit : `Présenter et vendre des services de développement web : landing pages, sites vitrines, sites e-commerce, SEO et maintenance. L’objectif est de rassurer les visiteurs, valoriser l’expertise, expliquer les offres et convertir les prospects en demandes de contact.`
- URL actuelle : `https://gelyos.fr/`
- Hébergeur actuel : `Cloudflare`
- Branche de migration : `nextjs-migration`
- Stack actuelle détectée : `React 19 + TypeScript 5 (strict) + Vite 7 + React Router DOM 7 + SCSS Modules + react-helmet-async`
- Stack cible : Next.js App Router
- Priorité principale : stabilité, continuité de production, migration progressive

---

## 2) Stratégie retenue

- Migration dans le même repository.
- Pas de deuxième application séparée sauf décision explicite.
- Travail sur une branche dédiée.
- Migration progressive, étape par étape.
- Validation après chaque étape.
- Ne pas supprimer l'ancien code tant que l'équivalent Next.js n'est pas fonctionnel.
- Ne pas modifier le design pendant la migration sauf demande explicite.
- Préserver les URLs existantes autant que possible.
- Préserver le SEO existant.

---

## 3) Commandes utiles

```bash
npm run dev
npm run build
npm run type-check
npm run lint
npm run preview
npm run generate-sitemap
```

Commandes non détectées dans `package.json` : `npm run test`, `npm run typecheck`.

---

## 4) Phase 1 — Audit du projet actuel

Objectif : comprendre le projet avant de modifier.

### Tâches

- Identifier le framework actuel : Vite, Create React App, autre.
- Identifier les scripts existants dans `package.json`.
- Identifier les routes/pages existantes.
- Identifier les composants partagés.
- Identifier les composants spécifiques aux pages.
- Identifier la gestion des styles.
- Identifier les assets importants.
- Identifier les appels API.
- Identifier les formulaires.
- Identifier les variables d'environnement.
- Identifier les éléments SEO existants.
- Identifier les risques de migration.

### Livrable attendu

Créer ou compléter un rapport d'audit dans ce fichier ou dans un fichier dédié si nécessaire.

### Validation

- Aucun changement fonctionnel.
- Aucun changement UI.
- Aucun fichier source modifié sauf documentation de migration.

### Rapport d'audit (13-05-2026)

- Framework actuel : `React` (`react@19.1.1`) avec `TypeScript` (`strict: true`).
- Build tool actuel : `Vite` (`vite@7.1.2`) avec `@vitejs/plugin-react`.
- Routing actuel : `react-router-dom` avec `createBrowserRouter`, `RouterProvider`, lazy loading React.
- Gestion des styles actuelle : `SCSS Modules` (`*.module.scss`), styles globaux (`src/styles/main.scss`, `src/styles/globals.scss`, `src/styles/swiper.css`), variables/mixins SCSS injectés globalement par `vite.config.ts`.
- Gestion des données actuelle : contenu statique typé dans `src/ressources/content/**`, composition locale via hooks React (`useMemo`, `useState`), validation de schéma via `zod` (`src/ressources/content/portfolio/schema.ts`).
- Dépendances critiques détectées : `react`, `react-dom`, `react-router-dom`, `react-helmet-async`, `sass`, `zod`, `framer-motion`, `swiper`.
- Routes existantes (actives) :
  - `/`
  - `/services`
  - `/a-propos`
  - `/portfolio`
  - `/contact`
  - `/mentions-legales`
- Routes spéciales détectées : `*` (fallback) et `errorElement` vers `NotFound`.
- Pages détectées hors routing actif :
  - `src/pages/Blog/Blog.tsx` (route commentée)
  - `src/pages/Article.tsx` (fichier vide, non routé)
- Composants partagés détectés (`src/components`) :
  - `Accordion`, `Buttons`, `CallToAction`, `CardProcess`, `CardProject`, `CardService`, `Carousel`, `CookieBanner`, `DesktopHeader`, `Footer`, `GridProject`, `HeaderSection`, `Heading`, `MainNav`, `MobileHeader`, `ModalProject`, `PageIntro`, `ScrollToTop`, `Seo`, `TwoColumnSection`
- Appels API détectés :
  - Front : `src/services/contactApi.ts` fait un `POST` vers `VITE_CONTACT_ENDPOINT`.
  - Front : `src/services/recaptcha.ts` charge `https://www.google.com/recaptcha/api.js` et exécute `grecaptcha.execute`.
  - Backend : `cloudflare/contact-worker/src/index.ts` vérifie reCAPTCHA (`siteverify`) puis appelle Brevo (`https://api.brevo.com/v3/smtp/email`).
- Formulaires détectés :
  - `src/pages/Contact/ContactForm/ContactForm.tsx` (formulaire contact, validation front locale, submit async).
- Variables d'environnement détectées dans le code :
  - Front : `VITE_CONTACT_ENDPOINT`, `VITE_RECAPTCHA_SITE_KEY`, `VITE_SITE_URL`, `VITE_GA_ID`
  - Worker Cloudflare : `RECAPTCHA_SECRET`, `ALLOWED_ORIGINS`, `BREVO_API_KEY`, `BREVO_FROM_EMAIL`, `BREVO_FROM_NAME`, `BREVO_TO`, `BREVO_SUBJECT_PREFIX`
- Éléments SEO détectés :
  - Composant `Seo` basé sur `react-helmet-async` (title, description, canonical, robots, OG, Twitter).
  - `public/robots.txt` présent.
  - `public/sitemap.xml` présent et script de génération `scripts/generate-sitemap.ts`.
  - `index.html` contient title par défaut, favicons, manifest et script Google tag.
- Risques de migration vers Next.js (détectés) :
  - Remplacement de `react-router-dom` par App Router et conservation stricte des URLs existantes.
  - Remplacement de `react-helmet-async` par `metadata` Next.js sans perte SEO.
  - Migration des alias Vite (`~`, `~components`, etc.) vers config Next.js/TypeScript équivalente.
  - Remplacement de `import.meta.env` par variables Next (`process.env` / `NEXT_PUBLIC_*`) sans fuite de secrets.
  - Composants dépendants du navigateur (`window`, `document`, `localStorage`, `grecaptcha`) à isoler en `use client`.
  - Gestion analytics actuelle basée sur `useLocation` et `gtag('page_view')` à adapter au cycle de navigation Next.js.
  - Génération sitemap actuelle couplée à `src/ressources/routes.ts` à réaligner avec les routes Next.js.
  - Dossier `src/pages` déjà utilisé pour composants métier, conflit de convention avec Next.js (Pages Router).

---

## 5) Phase 2 — Préparation de la branche

Objectif : sécuriser le travail sans impacter la production.

### Tâches

- Vérifier la branche courante.
- Créer ou utiliser la branche `nextjs-migration`.
- Vérifier l'état Git avant modification.
- S'assurer que la branche de production reste intacte.
- Documenter l'état initial.

### Validation

- Branche dédiée active.
- Working tree propre avant première modification.
- `MIGRATION_LOG.md` initialisé.

---

## 6) Phase 3 — Installation / configuration Next.js

Objectif : introduire Next.js sans migrer tout le site.

### Tâches

- Installer les dépendances Next.js nécessaires.
- Adapter les scripts `package.json`.
- Créer ou adapter `next.config`.
- Créer la structure minimale `src/app/(site)`.
- Créer `src/app/(site)/layout.tsx`.
- Créer une première `src/app/(site)/page.tsx` minimale.
- Créer `src/_pages` pour les composants de pages métier.
- Ne pas créer `src/pages`, car ce dossier correspond au Pages Router de Next.js.
- Vérifier que le serveur local démarre.
- Vérifier que le build fonctionne ou documenter les erreurs.

### Points d'attention

- Ne pas supprimer l'ancien routing tant que le nouveau n'est pas validé.
- Ne pas déplacer tous les fichiers en une seule étape.
- Ne pas convertir tous les composants en Client Components.

### Validation

- `npm run lint` si disponible.
- `npm run typecheck` si disponible.
- `npm run build` si possible.
- Démarrage local validé.

---

## 7) Phase 4 — Layout global

Objectif : migrer la structure globale du site dans `src/app/(site)/layout.tsx`.

### Tâches

- Identifier header, footer, navigation et wrappers globaux.
- Migrer le layout global vers Next.js.
- Préserver les styles existants.
- Préserver le responsive.
- Préserver l'accessibilité de navigation.
- Préserver les liens existants.

### Validation

- Header présent.
- Footer présent.
- Navigation fonctionnelle.
- Pas de changement design involontaire.
- Build/lint OK ou erreurs documentées.

---

## 8) Phase 5 — Composants partagés

Objectif : rendre les composants réutilisables compatibles avec Next.js.

### Tâches

- Lister les composants partagés existants.
- Migrer les composants sans logique navigateur en Server Components si possible.
- Garder en Client Components uniquement les composants interactifs.
- Adapter les imports de styles.
- Remplacer les imports incompatibles avec Next.js si nécessaire.
- Vérifier chaque composant migré.

### Règles

- Ne pas recréer un composant déjà existant.
- Ne pas changer l'API d'un composant sans raison.
- Ne pas changer le rendu visuel sans demande explicite.

### Validation

- Composants importables dans Next.js.
- Pas de régression visuelle évidente.
- Lint/typecheck/build selon disponibilité.

---

## 9) Phase 6 — Migration des pages

Objectif : migrer les pages une par une avec cette séparation :

- `src/app/(site)` pour les routes, layouts et metadata ;
- `src/_pages` pour les composants de pages, sections et styles.

### Ordre recommandé

1. Page d'accueil : `/` (`src/pages/Home/Home.tsx`)
2. Page statique simple : `/services` (`src/pages/Services/Services.tsx`)
3. Page avec contenu structuré : `/portfolio` (`src/pages/Portfolio/Portfolio.tsx`)
4. Page avec formulaire : `/contact` (`src/pages/Contact/Contact.tsx`)
5. Page dynamique : `Non détecté`

### Règles

- Une page migrée à la fois.
- Le fichier `src/app/(site)/<route>/page.tsx` doit rester fin.
- Le composant principal de page doit vivre dans `src/_pages/<PageName>/<PageName>.tsx`.
- Les sections doivent vivre dans `src/_pages/<PageName>/<SectionName>/<SectionName>.tsx`.
- Chaque composant de page ou section doit avoir son fichier `.module.scss` associé si la page a des styles locaux.
- Préserver l'URL existante.
- Préserver le contenu.
- Préserver le design.
- Préserver les metadata.
- Ne pas supprimer l'ancienne page tant que la nouvelle n'est pas validée.

### Validation par page

- Route accessible.
- Responsive vérifié.
- Liens internes vérifiés.
- Metadata vérifiées.
- Build/lint/typecheck selon disponibilité.

---

## 10) Phase 7 — Données, API et formulaires

Objectif : migrer la logique métier sans régression.

### Tâches

- Identifier les appels API existants.
- Identifier les formulaires existants.
- Identifier les validations front.
- Identifier les validations backend.
- Adapter les appels au modèle Next.js si pertinent.
- Vérifier les variables d'environnement.
- Vérifier que rien de sensible n'est exposé côté client.

### Validation

- Formulaires testés.
- Erreurs gérées.
- Variables d'environnement documentées.
- Aucune donnée sensible côté client.

---

## 11) Phase 8 — SEO, metadata et redirections

Objectif : préserver ou améliorer le SEO sans changement risqué.

### Tâches

- Reprendre les titres existants.
- Reprendre les descriptions existantes.
- Reprendre Open Graph si présent.
- Reprendre canonical si présent.
- Vérifier robots.txt.
- Vérifier sitemap.
- Ajouter des redirections si une URL change.
- Vérifier les images importantes.

### Validation

- Pas de perte évidente de title/description.
- URLs critiques préservées.
- Redirections documentées.
- Sitemap/robots cohérents.

---

## 12) Phase 9 — Nettoyage de l'ancien code

Objectif : supprimer uniquement ce qui n'est plus utilisé.

### Tâches

- Identifier les fichiers React historiques devenus inutiles.
- Vérifier qu'ils ne sont plus importés.
- Supprimer les dépendances inutilisées.
- Supprimer les scripts obsolètes.
- Supprimer les configs obsolètes.
- Nettoyer les assets non utilisés uniquement si sûr.

### Règles

- Ne jamais supprimer sans vérification.
- Documenter chaque suppression significative.
- Garder temporairement ce qui est incertain.

### Validation

- Build OK.
- Lint OK.
- Typecheck OK.
- Tests OK si présents.
- Site vérifié manuellement.

---

## 13) Phase 10 — Vérification finale

Objectif : valider que la migration est prête à merger.

### Checklist finale

- [ ] Toutes les routes principales fonctionnent
- [ ] URLs importantes préservées
- [ ] Redirections nécessaires ajoutées
- [ ] Header/footer/navigation OK
- [ ] Responsive OK
- [ ] Formulaires OK
- [ ] SEO de base OK
- [ ] Pas de secrets exposés
- [ ] Lint OK ou erreurs documentées
- [ ] Typecheck OK ou erreurs documentées
- [ ] Tests OK ou absence documentée
- [ ] Build OK
- [ ] Ancien code inutile supprimé
- [ ] `MIGRATION_LOG.md` à jour
- [ ] Relecture humaine effectuée

---

## 14) Prompts Codex recommandés

### Audit uniquement

```txt
Lis AGENTS.md et MIGRATION_PLAN.md.
Commence uniquement par l'audit du projet actuel.
Ne modifie aucun fichier source.
Complète MIGRATION_PLAN.md avec les informations détectées et les risques de migration.
```

### Setup Next.js minimal

```txt
Lis AGENTS.md et MIGRATION_PLAN.md.
Prépare uniquement la configuration minimale Next.js dans le même repository.
Ne migre aucune page complète.
Ne supprime aucun ancien fichier React.
À la fin, indique les fichiers modifiés et les commandes exécutées.
```

### Migration d'une page

```txt
Lis AGENTS.md et MIGRATION_PLAN.md.
Migre uniquement la page suivante vers Next.js : [nom/route].
Préserve le rendu, le contenu et l'URL.
Ne touche pas aux autres pages.
Mets à jour MIGRATION_LOG.md.
Lance les vérifications disponibles.
```

### Nettoyage

```txt
Lis AGENTS.md et MIGRATION_PLAN.md.
Identifie uniquement le code ancien devenu inutilisé.
Ne supprime rien sans expliquer les imports vérifiés.
Propose une liste de suppressions avant modification si le risque est non trivial.
```
