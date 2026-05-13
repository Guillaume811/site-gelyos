# MIGRATION_LOG.md

Ce fichier sert à suivre les étapes de migration React vers Next.js.

Il doit être mis à jour après chaque étape significative.

---

## Informations générales

- Nom du projet : `site-gelyos`
- Branche de migration : `nextjs-migration`
- Date de démarrage : `13-05-2026`
- Responsable / intervenant : `Guillaume Huguet`
- Objectif : migration progressive React vers Next.js sans interruption du site

---

## État initial

- Framework actuel : `React 19 + TypeScript (strict)`
- Build tool actuel : `Vite 7 (+ @vitejs/plugin-react), build via tsc --noEmit && vite build`
- Nombre de routes/pages identifiées : `6 routes actives + 1 wildcard + 1 errorElement ; 2 pages non routées (Blog, Article)`
- Gestion des styles : `SCSS Modules + styles globaux SCSS/CSS`
- Gestion des données : `Contenu statique TypeScript dans src/ressources/content + hooks React locaux + validation zod`
- Risques principaux : `routing React Router -> Next App Router, SEO Helmet -> metadata Next, import.meta.env -> env Next, composants browser-only a isoler en client`

---

## Journal des décisions

Format :

```md
- [DD-MM-YYYY] [topic] [decision] [raison courte] [impact]
```

### Décisions

- [13-05-2026] [migration] [migration dans le même repository] [éviter duplication et préserver historique Git] [travail sur branche dédiée]
- [13-05-2026] [architecture] [routing dans src/app/(site)] [séparer routing, layout et metadata] [routes Next.js centralisées]
- [13-05-2026] [architecture] [pages métier dans src/_pages] [éviter la confusion avec le Pages Router src/pages] [composants de pages isolés du routing]
- [13-05-2026] [workflow] [migration progressive] [réduire les risques de régression] [validation étape par étape]
- [13-05-2026] [setup] [scripts Vite conservés + scripts Next.js dédiés] [éviter une régression build immédiate liée à src/pages] [coexistence temporaire des deux workflows]

---

## Journal des étapes

Format :

```md
## DD-MM-YYYY — Titre de l'étape

### Objectif

...

### Fichiers modifiés

- `chemin/du/fichier`

### Changements effectués

- ...

### Vérifications effectuées

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build
- [ ] vérification manuelle

### Résultat

...

### Risques / points à surveiller

- ...

### Prochaine étape recommandée

...
```

---

## Étapes réalisées

## 13-05-2026 — Audit technique du projet actuel

### Objectif

Identifier la stack actuelle, les routes, les styles, les données, les composants partagés, les API, les formulaires, les éléments SEO et les risques de migration.

### Fichiers modifiés

- `MIGRATION_PLAN.md`
- `MIGRATION_LOG.md`

### Changements effectués

- Complété l'audit factuel dans `MIGRATION_PLAN.md`.
- Mis à jour l'état initial et le journal de décisions.
- Documenté les risques de migration observés depuis le code existant.

### Vérifications effectuées

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build
- [x] vérification manuelle

### Résultat

Audit terminé sans modification de fichier source applicatif.

### Risques / points à surveiller

- Migration du routing `react-router-dom` vers Next App Router sans casser les URLs.
- Migration SEO `react-helmet-async` vers `metadata` Next.js.
- Migration des variables `import.meta.env` vers variables Next.js.
- Composants dépendants de `window`/`document`/`localStorage` à isoler côté client.
- Alignement sitemap/robots avec les routes Next après migration.

### Prochaine étape recommandée

Préparer la phase 2 (branche dédiée et état Git propre), puis initier la configuration minimale Next.js sans migrer de page.

## 13-05-2026 — Setup minimal Next.js (phase 3)

### Objectif

Ajouter la base Next.js App Router dans le même repository, sans migrer toutes les pages et sans supprimer l'ancien code React.

### Fichiers modifiés

- `package.json`
- `.gitignore`
- `MIGRATION_LOG.md`

### Fichiers créés

- `next.config.ts`
- `next-env.d.ts`
- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/_pages/Home/Home.tsx`
- `src/_pages/Home/Home.module.scss`

### Changements effectués

- Ajout de `next` dans les dépendances.
- Conservation des scripts Vite par défaut (`dev`, `build`, `preview`) pour préserver le flux existant.
- Ajout de scripts Next.js dédiés (`dev:next`, `build:next`, `start:next`) pour lancer l'adoption progressive.
- Création du routing cible minimal `src/app/(site)` avec page d'accueil connectée à `src/_pages/Home/Home.tsx`.
- Ajout d'un root layout Next.js (`src/app/layout.tsx`) et d'un layout de groupe `(site)`.
- Création d'une page Home minimale en SCSS Modules pour démarrer la migration sans refactor global.
- Ajustement ESLint pour ignorer `.next` et désactiver une règle Vite incompatible sur `src/app/**`.
- Ajout d'une configuration Next minimale (`next.config.ts`) pour alias imports et pré-injection Sass globale.

### Vérifications effectuées

- [x] lint
- [x] typecheck
- [ ] tests
- [x] build
- [x] vérification manuelle

### Résultat

Base Next.js ajoutée et vérifications Vite passantes (`lint`, `type-check`, `build`).

### Risques / points à surveiller

- Le dossier historique `src/pages` est interprétable par le Pages Router Next.js et peut provoquer des erreurs de build tant que la migration n'est pas encadrée route par route.
- La page d'accueil Next créée est volontairement minimale : le rendu actuel Vite n'est pas encore reproduit à l'identique.
- `npm run build:next` échoue encore à ce stade (cohabitation `src/pages` + contraintes SCSS/CSS Modules du code historique).

### Prochaine étape recommandée

Traiter explicitement la stratégie de cohabitation avec `src/pages` pour rendre `build:next` exploitable, puis migrer la Home complète dans `src/_pages/Home`.

---

## Points ouverts

- [x] Compléter les informations projet
- [x] Auditer le framework React actuel
- [x] Identifier les routes existantes
- [x] Identifier les composants partagés
- [x] Identifier les appels API
- [x] Identifier les formulaires
- [x] Identifier les dépendances critiques
- [x] Identifier les éléments SEO existants
- [x] Valider la stratégie de migration avec la branche dédiée
