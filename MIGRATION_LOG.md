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
- [13-05-2026] [cohabitation] [ancien dossier src/pages déplacé vers src/_legacy/pages] [empêcher Next d'activer le Pages Router sur le code legacy] [build:next compilable sans supprimer l'ancien routing React]

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

## 13-05-2026 — Sécurisation cohabitation Vite / Next.js

### Objectif

Empêcher Next.js d'interpréter l'ancien dossier `src/pages` (legacy React/Vite) comme Pages Router, tout en conservant le fonctionnement Vite actuel.

### Fichiers modifiés

- `vite.config.ts`
- `next.config.ts`
- `tsconfig.app.json`
- `tsconfig.json`
- `MIGRATION_LOG.md`

### Fichiers déplacés

- `src/pages/**` -> `src/_legacy/pages/**`

### Changements effectués

- Déplacement du dossier legacy `src/pages` vers `src/_legacy/pages`.
- Conservation de l'API d'import existante (`~pages/...`) via mise à jour des alias vers `src/_legacy/pages`.
- Aucun changement de design, aucune migration de nouvelle page, aucun retrait de l'ancien routing React.

### Vérifications effectuées

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] vérification manuelle

### Résultat

- `npm run build` (Vite) : OK.
- `npm run build:next` : OK.

### Risques / points à surveiller

- Le code legacy reste non migré et doit être traité page par page vers `src/_pages` / `src/app/(site)`.
- Les références documentaires historiques à `src/pages` dans les fichiers de migration sont désormais obsolètes et devront être actualisées au fil des étapes.

### Prochaine étape recommandée

Migrer la Home réelle (ancienne `~pages/Home/Home`) vers `src/_pages/Home` en conservant le rendu, puis brancher `src/app/(site)/page.tsx` sur cette version migrée.

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

## 13-05-2026 — Migration Home React/Vite vers Next (phase 4)

### Decision structurante

- [13-05-2026] [home-next] [wrapper client Home avec MemoryRouter + ModalProjectProvider] [garder le comportement legacy sans migrer tout le routing/modals] [build:next OK sur / pendant la cohabitation]

### Objectif

Migrer uniquement la vraie page d'accueil vers `src/_pages/Home` et la connecter a `src/app/(site)/page.tsx` sans migrer les autres pages.

### Fichiers modifies

- `src/app/(site)/page.tsx`
- `src/_pages/Home/Home.tsx`
- `src/_pages/Home/Home.module.scss`
- `src/_pages/Home/Hero/Hero.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/components/Buttons/Button.module.scss`
- `src/components/Carousel/CardCarousel/CardCarousel.module.scss`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/_pages/Home/HomeClientShell.tsx`
- `src/_pages/Home/Hero/Hero.tsx`
- `src/_pages/Home/Hero/Hero.module.scss`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.module.scss`
- `src/_pages/Home/SectionProcess/SectionProcess.tsx`
- `src/_pages/Home/SectionProcess/SectionProcess.module.scss`
- `src/_pages/Home/SectionProcess/DivProcess/DivProcess.tsx`
- `src/_pages/Home/SectionProcess/DivProcess/DivProcess.module.scss`
- `src/_pages/Home/SectionProcess/DivAvantages/DivAvantages.tsx`
- `src/_pages/Home/SectionProcess/DivAvantages/DivAvantages.module.scss`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.module.scss`
- `src/_pages/Home/ServicesPreview/ServicesPreviewItem.tsx`

### Changements effectues

- Copie de la structure Home legacy vers `src/_pages/Home` (Hero, ServicesPreview, SectionProcess, ProjectPreview).
- Remplacement SEO Home (`Seo` / react-helmet-async) par `metadata` Next dans `src/app/(site)/page.tsx`.
- Adaptation des liens Home de section vers `next/link`.
- Correctifs SCSS minimaux pour compatibilite Next CSS Modules.
- Ajout d'un wrapper client Home avec `MemoryRouter` et `ModalProjectProvider` pour conserver le comportement de la section projets pendant la transition.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification rapide de `/` cote Next: `STATUS=200` via `npm run start:next -p 3100` + requete HTTP locale.

### Risques / points a surveiller

- Le wrapper `MemoryRouter` + `ModalProjectProvider` est transitoire: la Home Next depend encore partiellement de la logique React Router legacy.
- Warning Next restant: `metadataBase` non defini.

### Prochaine etape recommandee

Migrer ensuite le layout public vers `src/app/(site)/layout.tsx` pour retirer progressivement la dependance au wrapper client Home.

## 13-05-2026 — Migration du layout public vers Next (phase 5)

### Decision structurante

- [13-05-2026] [layout-public] [layout legacy reutilise via wrapper client MemoryRouter dans src/app/(site)] [preserver header/footer/navigation/provideurs sans migrer toutes les pages] [Home Next utilise le layout public commun, wrapper local Home reduit]

### Objectif

Migrer uniquement le layout public vers `src/app/(site)/layout.tsx` pour commencer a retirer les wrappers legacy locaux de la Home.

### Fichiers modifies

- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/app/layout.tsx`
- `src/app/layout/RootLayout.module.scss`
- `src/ressources/config/analytics.ts`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/Providers.tsx`

### Changements effectues

- Creation d'un composant client de cohabitation `src/app/(site)/Providers.tsx` qui monte le `RootLayout` legacy dans un `MemoryRouter` avec synchronisation du pathname Next.
- Migration du layout public Next (`src/app/(site)/layout.tsx`) pour utiliser ce composant et centraliser header/footer/navigation/providers.
- Home Next reconnectee directement a `Home` (suppression du wrapper local obligatoire sur la route Home).
- Configuration de `metadataBase` sur `https://gelyos.fr` dans `src/app/layout.tsx`.
- Correctif CSS Modules Next sur `RootLayout.module.scss` (`p` -> `.wrapper p`).
- Correctif de compatibilite env dans `analytics.ts` (`import.meta.env?.VITE_GA_ID` + fallback `process.env.NEXT_PUBLIC_GA_ID`).

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification rapide de `/` cote Next: `STATUS=200` via `npm run start:next -p 3100` + requete HTTP locale.

### Risques / points a surveiller

- Le layout Next repose encore sur un `MemoryRouter` transitoire pour les composants legacy React Router.
- Les liens de navigation legacy dans ce contexte ne migrent pas encore vers un routing Next natif page par page.

### Prochaine etape recommandee

Migrer les composants de navigation partages (`ButtonLink`, `MainNav`, `DesktopHeader`, `MobileHeader`, `Footer`, `CallToAction`) vers des primitives Next (`next/link`, `usePathname`) pour retirer progressivement `react-router-dom` du layout public.

## 13-05-2026 — Navigation layout public: compatibilite Next progressive (phase 6)

### Decision structurante

- [13-05-2026] [navigation] [composants de navigation Next dedies dans src/app/(site)/navigation] [eviter de casser le layout legacy Vite partage] [liens du layout public Next passes a next/link sans supprimer react-router-dom global]

### Objectif

Reduire la dependance a `react-router-dom` dans la navigation du layout public Next, sans migrer d'autres pages ni supprimer le routing legacy.

### Fichiers modifies

- `src/app/(site)/Providers.tsx`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/navigation/MainNavNext.tsx`
- `src/app/(site)/navigation/DesktopHeaderNext.tsx`
- `src/app/(site)/navigation/MobileHeaderNext.tsx`
- `src/app/(site)/navigation/FooterNext.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`

### Changements effectues

- Analyse des usages `react-router-dom` dans `DesktopHeader`, `MobileHeader`, `MainNav`, `Footer`, `CallToAction`.
- Creation de variantes Next dediees pour ces composants de navigation, en reemployant les styles existants.
- Remplacement des liens de navigation du layout public Next par `next/link` (logo, menu principal, CTA header/footer, liens footer, menu mobile).
- `Providers` Next ne reutilise plus `RootLayout` legacy pour la navigation.
- `MemoryRouter` conserve temporairement uniquement pour le sous-arbre de contenu qui depend encore de `ModalProjectProvider`.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification rapide `/` cote Next : `STATUS=200`.

### Risques / points a surveiller

- `MemoryRouter` reste necessaire tant que `ModalProjectProvider` et ses usages restent bases sur `react-router-dom`.
- Les composants legacy d'origine (`src/components/**`) conservent leurs usages `react-router-dom` pour le site Vite, ce qui est volontaire a ce stade.

### Prochaine etape recommandee

Migrer la logique du `ModalProjectProvider` vers des primitives Next (`useRouter`, `useSearchParams`) pour pouvoir retirer `MemoryRouter` du layout public Next.

## 13-05-2026 — Migration logique modale vers primitives Next (phase 7)

### Decision structurante

- [13-05-2026] [modal-next] [provider modal Next dedie + suppression MemoryRouter du layout Next] [retirer la dependance react-router-dom du rendu Next public] [cohabitation maintenue: provider legacy conserve pour Vite]

### Objectif

Migrer la logique modale dependante de `react-router-dom` vers des primitives compatibles Next.js afin de retirer `MemoryRouter` du layout public Next.

### Fichiers modifies

- `src/app/(site)/Providers.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreviewItem.tsx`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/components/ModalProject/providers/ModalProjectProviderNext.tsx`
- `src/components/ModalProject/ModalProjectNext.tsx`
- `src/components/Carousel/CardCarousel/CardCarouselNext.tsx`
- `src/components/CardProject/home/CardProjectHomeNext.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`

### Changements effectues

- Analyse des usages modale legacy: `useSearchParams`, `useNavigate`, `useLocation` dans `ModalProjectProvider`, et `ButtonLink` react-router dans les cartes/projets.
- Creation de `ModalProjectProviderNext` base sur `useRouter` et `usePathname` (Next), avec synchro query `?project=` et ecoute `popstate`.
- Creation de `ModalProjectNext` (pas de `ButtonLink` react-router, CTA externe via `<a>` style bouton).
- Creation de composants Home Next dedies sans `react-router-dom` pour les points de declenchement modale (`CardProjectHomeNext`, `CardCarouselNext`, `CardServiceNext`).
- Rebranchement de la Home Next sur ces composants dedies.
- Suppression de `MemoryRouter` dans `src/app/(site)/Providers.tsx` et utilisation de `ModalProjectProviderNext`.
- Provider legacy original conserve pour Vite (`ModalProjectProvider.tsx` non supprime).

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification rapide de `/` cote Next : `STATUS=200`.
- Verification smoke test URL modale `/?project=jaqen` : `STATUS=200`.

### Risques / points a surveiller

- Le comportement modale a ete verifie en smoke test build + reponse HTTP, pas en interaction navigateur complete (ouverture/fermeture/clavier) dans cette session CLI.
- Le provider Next utilise `popstate` pour synchro URL; une verification manuelle UI est recommandee pour confirmer l'experience exacte back/forward.

### Prochaine etape recommandee

Valider manuellement en navigateur l'ouverture/fermeture de modale (clic carte, ESC, focus trap, back/forward), puis migrer la route `/portfolio` vers l'equivalent Next en reutilisant la meme logique modale Next.

### Point ouvert (13-05-2026)

- La modale projet Next remonte en haut de page a l'ouverture.
- Cause probable : comportement de scroll automatique lie a `router.push` / `router.replace`.
- Correction prevue : utiliser `{ scroll: false }` ou revoir la logique d'ouverture une fois toutes les pages migrees.

## 13-05-2026 — Migration page simple `/mentions-legales` vers Next (phase 8)

### Decision structurante

- [13-05-2026] [page-next] [migration de `/mentions-legales` en priorite] [page statique a faible logique et sans API/formulaire] [progression sure du plan page par page]

### Objectif

Migrer uniquement la prochaine page simple vers Next.js, en preservant URL, contenu, design et metadata.

### Page migree

- `MentionsLegales` (`/mentions-legales`)

### Fichiers modifies

- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/mentions-legales/page.tsx`
- `src/_pages/MentionsLegales/MentionsLegales.tsx`
- `src/_pages/MentionsLegales/MentionsLegales.module.scss`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.module.scss`

### Sections migrees

- `SectionBlock` (reutilisee pour chaque bloc legal)

### Changements effectues

- Selection de la page la plus simple restante: `MentionsLegales` (statique, sans logique metier complexe).
- Creation de la route Next `src/app/(site)/mentions-legales/page.tsx` connectee au composant metier `src/_pages/MentionsLegales/MentionsLegales.tsx`.
- Preservation du rendu via reprise des styles modules et de la structure de sections.
- Preservation de l'action de preference cookies (bouton qui declenche `openCookieBanner`).
- Migration des metadata de la page legacy (`title`, `description`, `canonical`, `robots`, `openGraph`).

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification HTTP Next `/` : `200`.
- Verification HTTP Next `/mentions-legales` : `200`.

### Risques / points a surveiller

- Dette UX modale deja documentee (scroll a l'ouverture) non traitee ici, conformement au scope.
- Une verification HTTP intermediaire a d'abord retourne `404` sur `/mentions-legales` car un ancien process occupait le port `3100`; re-test propre apres nettoyage de port: `200`.

### Prochaine etape recommandee

Migrer ensuite la page statique suivante recommandee par le plan (`/services`) en conservant la meme approche route fine + composant metier dans `src/_pages`.

## 13-05-2026 — Migration page `/services` vers Next (phase 9)

### Decision structurante

- [13-05-2026] [page-next] [migration de `/services` en route App Router dediee] [page statique avec logique faible et contenu structure] [progression du plan page par page sans casser Vite]

### Objectif

Migrer uniquement la page `/services` vers Next.js en preservant URL, contenu, design, responsive, accessibilite et metadata.

### Page migree

- `Services` (`/services`)

### Fichiers modifies

- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/services/page.tsx`
- `src/_pages/Services/Services.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.module.scss`

### Sections migrees

- `ServicesSection`

### Changements effectues

- Analyse de la page legacy `src/_legacy/pages/Services/Services.tsx` et de sa section `ServicesSection`.
- Creation de la route Next `src/app/(site)/services/page.tsx` connectee au composant metier `src/_pages/Services/Services.tsx`.
- Migration de la structure de page (HeaderSection + PageIntro + mapping des blocs services) sans changer le contenu.
- Migration de la section `ServicesSection` dans `src/_pages/Services/ServicesSection` avec conservation du rendu TwoColumnSection, Accordion et image.
- Migration des metadata legacy (`title`, `description`, `canonical`, `openGraph`) dans la route Next.
- `src/_pages/Services/Services.module.scss` non cree car aucun style local de page n'etait present en legacy.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification HTTP Next `/` : `200`.
- Verification HTTP Next `/services` : `200`.

### Risques / points a surveiller

- Dette UX modale deja documentee (scroll a l'ouverture) non traitee ici, conformement au scope.
- Warning Vite non bloquant sur taille de chunk (`> 500 kB`) toujours present.

### Prochaine etape recommandee

Migrer ensuite la page `/portfolio` vers App Router en reutilisant la logique modale Next deja migree.

## 13-05-2026 — Migration page `/portfolio` vers Next (phase 10)

### Decision structurante

- [13-05-2026] [page-next] [migration de `/portfolio` avec reutilisation du provider modale Next existant] [eviter une double logique modale et garder le comportement] [route Next compilee sans toucher au legacy Vite]

### Objectif

Migrer uniquement la page `/portfolio` vers Next.js en conservant URL, contenu, design, responsive, accessibilite et logique modale existante.

### Page migree

- `Portfolio` (`/portfolio`)

### Fichiers modifies

- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/portfolio/page.tsx`
- `src/_pages/Portfolio/Portfolio.tsx`
- `src/_pages/Portfolio/ProjectGrid/ProjectGrid.tsx`
- `src/_pages/Portfolio/ProjectGrid/ProjectGrid.module.scss`
- `src/_pages/Portfolio/ProjectGrid/ProjectCardNext.tsx`

### Sections migrees

- `ProjectGrid`

### Composants modale/projets reutilises

- `ModalProjectProviderNext` (deja monte dans `src/app/(site)/Providers.tsx`)
- `useModalProject` (contexte modal partage)
- `CardProjectContent` (structure de carte projet partagee)
- `CardProject.module.scss` (skin portfolio partage)

### Changements effectues

- Analyse de la page legacy `src/_legacy/pages/Portfolio/Portfolio.tsx` et de ses dependances.
- Creation de la route Next `src/app/(site)/portfolio/page.tsx` avec metadata migrees.
- Migration du composant metier `src/_pages/Portfolio/Portfolio.tsx` avec conservation du tri des projets.
- Creation d'une section dediee `ProjectGrid` pour afficher la grille des projets.
- Creation d'une carte Next `ProjectCardNext` qui ouvre la modale via `useModalProject` et conserve l'URL fallback `?project=<slug>`.
- Aucune duplication de provider modale; le provider Next existant est reutilise.
- `src/_pages/Portfolio/Portfolio.module.scss` non cree car non necessaire pour le rendu legacy actuel.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification HTTP Next `/` : `200`.
- Verification HTTP Next `/portfolio` : `200`.
- Verification HTTP Next `/portfolio?project=jaqen` : `200`.

### Risques / points a surveiller

- Dette UX modale deja documentee (scroll a l'ouverture) non traitee ici, conformement au scope.
- Warning Vite non bloquant sur taille de chunk (`> 500 kB`) toujours present.

### Prochaine etape recommandee

Migrer ensuite la page `/contact` en conservant la logique formulaire/API existante et en preparant la transition SEO finale.
