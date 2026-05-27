# MIGRATION_LOG.md

Ce fichier sert Ã  suivre les Ã©tapes de migration React vers Next.js.

Il doit Ãªtre mis Ã  jour aprÃ¨s chaque Ã©tape significative.

---

## Informations gÃ©nÃ©rales

- Nom du projet : `site-gelyos`
- Branche de migration : `nextjs-migration`
- Date de dÃ©marrage : `13-05-2026`
- Responsable / intervenant : `Guillaume Huguet`
- Objectif : migration progressive React vers Next.js sans interruption du site

---

## Ã‰tat initial

- Framework actuel : `React 19 + TypeScript (strict)`
- Build tool actuel : `Vite 7 (+ @vitejs/plugin-react), build via tsc --noEmit && vite build`
- Nombre de routes/pages identifiÃ©es : `6 routes actives + 1 wildcard + 1 errorElement ; 2 pages non routÃ©es (Blog, Article)`
- Gestion des styles : `SCSS Modules + styles globaux SCSS/CSS`
- Gestion des donnÃ©es : `Contenu statique TypeScript dans src/ressources/content + hooks React locaux + validation zod`
- Risques principaux : `routing React Router -> Next App Router, SEO Helmet -> metadata Next, import.meta.env -> env Next, composants browser-only a isoler en client`

---

## Journal des dÃ©cisions

Format :

```md
- [DD-MM-YYYY] [topic] [decision] [raison courte] [impact]
```

### DÃ©cisions

- [13-05-2026] [migration] [migration dans le mÃªme repository] [Ã©viter duplication et prÃ©server historique Git] [travail sur branche dÃ©diÃ©e]
- [13-05-2026] [architecture] [routing dans src/app/(site)] [sÃ©parer routing, layout et metadata] [routes Next.js centralisÃ©es]
- [13-05-2026] [architecture] [pages mÃ©tier dans src/_pages] [Ã©viter la confusion avec le Pages Router src/pages] [composants de pages isolÃ©s du routing]
- [13-05-2026] [workflow] [migration progressive] [rÃ©duire les risques de rÃ©gression] [validation Ã©tape par Ã©tape]
- [13-05-2026] [setup] [scripts Vite conservÃ©s + scripts Next.js dÃ©diÃ©s] [Ã©viter une rÃ©gression build immÃ©diate liÃ©e Ã  src/pages] [coexistence temporaire des deux workflows]
- [13-05-2026] [cohabitation] [ancien dossier src/pages dÃ©placÃ© vers src/_legacy/pages] [empÃªcher Next d'activer le Pages Router sur le code legacy] [build:next compilable sans supprimer l'ancien routing React]

---

## Journal des Ã©tapes

Format :

```md
## DD-MM-YYYY â€” Titre de l'Ã©tape

### Objectif

...

### Fichiers modifiÃ©s

- `chemin/du/fichier`

### Changements effectuÃ©s

- ...

### VÃ©rifications effectuÃ©es

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build
- [ ] vÃ©rification manuelle

### RÃ©sultat

...

### Risques / points Ã  surveiller

- ...

### Prochaine Ã©tape recommandÃ©e

...
```

---

## Ã‰tapes rÃ©alisÃ©es

## 13-05-2026 â€” Audit technique du projet actuel

### Objectif

Identifier la stack actuelle, les routes, les styles, les donnÃ©es, les composants partagÃ©s, les API, les formulaires, les Ã©lÃ©ments SEO et les risques de migration.

### Fichiers modifiÃ©s

- `MIGRATION_PLAN.md`
- `MIGRATION_LOG.md`

### Changements effectuÃ©s

- ComplÃ©tÃ© l'audit factuel dans `MIGRATION_PLAN.md`.
- Mis Ã  jour l'Ã©tat initial et le journal de dÃ©cisions.
- DocumentÃ© les risques de migration observÃ©s depuis le code existant.

### VÃ©rifications effectuÃ©es

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build
- [x] vÃ©rification manuelle

### RÃ©sultat

Audit terminÃ© sans modification de fichier source applicatif.

### Risques / points Ã  surveiller

- Migration du routing `react-router-dom` vers Next App Router sans casser les URLs.
- Migration SEO `react-helmet-async` vers `metadata` Next.js.
- Migration des variables `import.meta.env` vers variables Next.js.
- Composants dÃ©pendants de `window`/`document`/`localStorage` Ã  isoler cÃ´tÃ© client.
- Alignement sitemap/robots avec les routes Next aprÃ¨s migration.

### Prochaine Ã©tape recommandÃ©e

PrÃ©parer la phase 2 (branche dÃ©diÃ©e et Ã©tat Git propre), puis initier la configuration minimale Next.js sans migrer de page.

## 13-05-2026 â€” Setup minimal Next.js (phase 3)

### Objectif

Ajouter la base Next.js App Router dans le mÃªme repository, sans migrer toutes les pages et sans supprimer l'ancien code React.

### Fichiers modifiÃ©s

- `package.json`
- `.gitignore`
- `MIGRATION_LOG.md`

### Fichiers crÃ©Ã©s

- `next.config.ts`
- `next-env.d.ts`
- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/_pages/Home/Home.tsx`
- `src/_pages/Home/Home.module.scss`

### Changements effectuÃ©s

- Ajout de `next` dans les dÃ©pendances.
- Conservation des scripts Vite par dÃ©faut (`dev`, `build`, `preview`) pour prÃ©server le flux existant.
- Ajout de scripts Next.js dÃ©diÃ©s (`dev:next`, `build:next`, `start:next`) pour lancer l'adoption progressive.
- CrÃ©ation du routing cible minimal `src/app/(site)` avec page d'accueil connectÃ©e Ã  `src/_pages/Home/Home.tsx`.
- Ajout d'un root layout Next.js (`src/app/layout.tsx`) et d'un layout de groupe `(site)`.
- CrÃ©ation d'une page Home minimale en SCSS Modules pour dÃ©marrer la migration sans refactor global.
- Ajustement ESLint pour ignorer `.next` et dÃ©sactiver une rÃ¨gle Vite incompatible sur `src/app/**`.
- Ajout d'une configuration Next minimale (`next.config.ts`) pour alias imports et prÃ©-injection Sass globale.

### VÃ©rifications effectuÃ©es

- [x] lint
- [x] typecheck
- [ ] tests
- [x] build
- [x] vÃ©rification manuelle

### RÃ©sultat

Base Next.js ajoutÃ©e et vÃ©rifications Vite passantes (`lint`, `type-check`, `build`).

### Risques / points Ã  surveiller

- Le dossier historique `src/pages` est interprÃ©table par le Pages Router Next.js et peut provoquer des erreurs de build tant que la migration n'est pas encadrÃ©e route par route.
- La page d'accueil Next crÃ©Ã©e est volontairement minimale : le rendu actuel Vite n'est pas encore reproduit Ã  l'identique.
- `npm run build:next` Ã©choue encore Ã  ce stade (cohabitation `src/pages` + contraintes SCSS/CSS Modules du code historique).

### Prochaine Ã©tape recommandÃ©e

Traiter explicitement la stratÃ©gie de cohabitation avec `src/pages` pour rendre `build:next` exploitable, puis migrer la Home complÃ¨te dans `src/_pages/Home`.

## 13-05-2026 â€” SÃ©curisation cohabitation Vite / Next.js

### Objectif

EmpÃªcher Next.js d'interprÃ©ter l'ancien dossier `src/pages` (legacy React/Vite) comme Pages Router, tout en conservant le fonctionnement Vite actuel.

### Fichiers modifiÃ©s

- `vite.config.ts`
- `next.config.ts`
- `tsconfig.app.json`
- `tsconfig.json`
- `MIGRATION_LOG.md`

### Fichiers dÃ©placÃ©s

- `src/pages/**` -> `src/_legacy/pages/**`

### Changements effectuÃ©s

- DÃ©placement du dossier legacy `src/pages` vers `src/_legacy/pages`.
- Conservation de l'API d'import existante (`~pages/...`) via mise Ã  jour des alias vers `src/_legacy/pages`.
- Aucun changement de design, aucune migration de nouvelle page, aucun retrait de l'ancien routing React.

### VÃ©rifications effectuÃ©es

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] vÃ©rification manuelle

### RÃ©sultat

- `npm run build` (Vite) : OK.
- `npm run build:next` : OK.

### Risques / points Ã  surveiller

- Le code legacy reste non migrÃ© et doit Ãªtre traitÃ© page par page vers `src/_pages` / `src/app/(site)`.
- Les rÃ©fÃ©rences documentaires historiques Ã  `src/pages` dans les fichiers de migration sont dÃ©sormais obsolÃ¨tes et devront Ãªtre actualisÃ©es au fil des Ã©tapes.

### Prochaine Ã©tape recommandÃ©e

Migrer la Home rÃ©elle (ancienne `~pages/Home/Home`) vers `src/_pages/Home` en conservant le rendu, puis brancher `src/app/(site)/page.tsx` sur cette version migrÃ©e.

---

## Points ouverts

- [x] ComplÃ©ter les informations projet
- [x] Auditer le framework React actuel
- [x] Identifier les routes existantes
- [x] Identifier les composants partagÃ©s
- [x] Identifier les appels API
- [x] Identifier les formulaires
- [x] Identifier les dÃ©pendances critiques
- [x] Identifier les Ã©lÃ©ments SEO existants
- [x] Valider la stratÃ©gie de migration avec la branche dÃ©diÃ©e

## 13-05-2026 â€” Migration Home React/Vite vers Next (phase 4)

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

## 13-05-2026 â€” Migration du layout public vers Next (phase 5)

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

## 13-05-2026 â€” Navigation layout public: compatibilite Next progressive (phase 6)

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

## 13-05-2026 â€” Migration logique modale vers primitives Next (phase 7)

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

## 13-05-2026 â€” Migration page simple `/mentions-legales` vers Next (phase 8)

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

## 13-05-2026 â€” Migration page `/services` vers Next (phase 9)

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

## 13-05-2026 â€” Migration page `/portfolio` vers Next (phase 10)

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

## 13-05-2026 â€” Migration page `/contact` vers Next (phase 11)

### Decision structurante

- [13-05-2026] [page-next] [migration de `/contact` avec conservation de la logique formulaire/API existante] [eviter une re-ecriture risquee du formulaire] [cohabitation Vite/Next maintenue avec adaptation env minimale]

### Objectif

Migrer uniquement la page `/contact` vers Next.js en conservant URL, contenu, design, responsive, accessibilite, logique formulaire et appel API.

### Page migree

- `Contact` (`/contact`)

### Fichiers modifies

- `src/services/contactApi.ts`
- `src/services/recaptcha.ts`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/(site)/contact/page.tsx`
- `src/_pages/Contact/Contact.tsx`
- `src/_pages/Contact/ContactInfo/ContactInfo.tsx`
- `src/_pages/Contact/ContactInfo/ContactInfo.module.scss`
- `src/_pages/Contact/ContactForm/ContactForm.tsx`
- `src/_pages/Contact/ContactForm/ContactForm.module.scss`

### Sections migrees

- `ContactInfo`
- `ContactForm`

### Formulaire migre

- Formulaire detecte et migre: `ContactForm`
- Champs conserves: `firstName`, `lastName`, `email`, `phone`, `need`, `message`, `rgpd`
- Validation conservee:
  - `firstName` min 2 caracteres
  - `lastName` min 2 caracteres
  - email via regex
  - telephone optionnel via regex
  - `message` min 20 caracteres
  - `rgpd` obligatoire
- Etats conserves: `idle`, `submitting`, `success`, `error`
- Messages conserves: erreur champ, erreur globale, succes, focus sur premiere erreur/succes

### Logique API

- Logique de soumission conservee:
  - token reCAPTCHA via `getRecaptchaToken('contact_form')`
  - POST vers endpoint formulaire via `submitContactRequest`
- Adaptation minimale de compatibilite Next:
  - fallback env ajoute:
    - `VITE_CONTACT_ENDPOINT` ou `NEXT_PUBLIC_CONTACT_ENDPOINT`
    - `VITE_RECAPTCHA_SITE_KEY` ou `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Aucun secret serveur ajoute cote client.

### Metadata migrees

- `title`, `description`, `canonical`, `openGraph` migres depuis la page legacy.

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
- Verification HTTP Next `/contact` : `200`.
- Verification presence formulaire sans envoi:
  - `<form>` detecte
  - champ `name="email"` detecte
  - champ `name="message"` detecte

### Risques / points a surveiller

- Dette UX modale deja documentee (scroll a l'ouverture) non traitee ici, conformement au scope.
- Warning Vite non bloquant sur taille de chunk (`> 500 kB`) toujours present.
- Le formulaire n'a pas ete soumis vers l'API reelle dans cette session (controle rendu uniquement).

### Prochaine etape recommandee

Lancer une verification manuelle navigateur du parcours formulaire complet (validation, erreur API, succes), puis traiter la phase SEO globale (sitemap/robots) avant nettoyage legacy.

### Point ouvert (13-05-2026)

- Erreur de configuration detectee sur `/contact`: `La cle publique reCAPTCHA est manquante (VITE_RECAPTCHA_SITE_KEY ou NEXT_PUBLIC_RECAPTCHA_SITE_KEY).`
- Dette: configurer la cle publique reCAPTCHA avant test complet du formulaire et avant mise en production Next.

## 13-05-2026 â€” Verification SEO globale Next (phase 12)

### Decision structurante

- [13-05-2026] [seo-next] [sitemap Next App Router cree et canonical Home ajoute] [eviter de publier un sitemap avec URL non migree `/a-propos`] [coherence SEO des routes Next migrees avant nettoyage legacy]

### Objectif

Verifier les elements SEO globaux de la version Next migree et corriger uniquement les points necessaires.

### Fichiers modifies

- `src/app/(site)/page.tsx`
- `scripts/generate-sitemap.ts`
- `MIGRATION_LOG.md`

### Fichiers crees

- `src/app/sitemap.ts`

### Verification metadata

- `metadataBase` : configure sur `https://gelyos.fr` dans `src/app/layout.tsx`.
- Routes verifiees : `/`, `/services`, `/portfolio`, `/contact`, `/mentions-legales`.
- Points verifies :
  - `title` : present sur toutes les routes migrees.
  - `description` : present sur toutes les routes migrees.
  - `canonical` : present sur toutes les routes migrees apres ajout sur `/`.
  - `openGraph` : present sur toutes les routes migrees.
  - `robots` : `noindex,follow` conserve sur `/mentions-legales`.

### robots.txt

- `public/robots.txt` existant conserve (coherent avec le scope actuel).
- `src/app/robots.ts` : non necessaire a ce stade.

### sitemap

- `public/sitemap.xml` historique detecte avec URL `/a-propos` (route non migree cote Next).
- `src/app/sitemap.ts` ajoute pour aligner la convention metadata Next.
- Correction effective appliquee sur la source servie (`public/sitemap.xml`) via `scripts/generate-sitemap.ts`:
  - exclusion de `aPropos` tant que la route Next n'est pas migree.
- Sitemap coherent des routes Next migrees et indexables :
  - `/`
  - `/services`
  - `/portfolio`
  - `/contact`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Resultat

- `npm run build` : OK.
- `npm run build:next` : OK.
- Verification HTTP Next :
  - `/` : `200`
  - `/services` : `200`
  - `/portfolio` : `200`
  - `/contact` : `200`
  - `/mentions-legales` : `200`
  - `/robots.txt` : `200`
  - `/sitemap.xml` : `200`

### Risques / points a surveiller

- Dette modale (scroll) et dette reCAPTCHA restent ouvertes, non traitees ici conformement au scope.
- Le sitemap public reste genere par le script Vite ; lors de la migration de `/a-propos`, reintroduire cette URL dans `scripts/generate-sitemap.ts`.

### Prochaine etape recommandee

Finaliser la verification manuelle SEO (balises rendues dans le HTML produit), puis preparer la phase de nettoyage legacy.

## 13-05-2026 â€” Preparation nettoyage legacy (phase 13)

### Decision structurante

- [13-05-2026] [cleanup-plan] [plan de suppression par lots sans suppression immediate] [eviter toute regression entre workflows Vite et Next] [nettoyage progressif apres verification des usages]

### Objectif

Preparer un plan de nettoyage legacy post-migration Next.js, sans suppression risquee dans cette etape.

### Fichiers modifies

- `MIGRATION_LOG.md`

### Commandes d'analyse executees

- `git branch --show-current`
- `git status --short`
- `Get-Content package.json`
- `Get-Content src/main.tsx`
- `Get-Content src/app/router.tsx`
- `Get-Content src/app/layout/RootLayout.tsx`
- `Get-Content vite.config.ts`
- `Get-Content next.config.ts`
- `Get-Content tsconfig.json`
- `Get-Content tsconfig.app.json`
- `Get-Content src/ressources/routes.ts`
- `Get-ChildItem -Recurse -File src/_legacy/pages`
- `Get-ChildItem -Recurse -File scripts`
- `rg -n "~pages/|_legacy/pages|createBrowserRouter|RouterProvider" src`
- `rg -n "react-router-dom" src`
- `rg -n "react-helmet-async|Seo|HelmetProvider" src`
- `rg -n "PortfolioSection|HomeClientShell|Blog/Blog|Article.tsx" src`
- `rg -n "dotenv" scripts src cloudflare`
- `rg -n "getMainNavRoutes|getAllExceptMentions|routes" src/app src/components src/_pages`

### Synthese d'usage

- Le workflow Vite legacy est encore actif par defaut (`npm run dev`, `npm run build`, `npm run preview`) et depend de :
  - `src/main.tsx` + `RouterProvider` + `HelmetProvider`
  - `src/app/router.tsx`
  - `src/app/layout/RootLayout.tsx`
  - `src/_legacy/pages/**` via alias `~pages`
  - `react-router-dom` et `react-helmet-async`
- Le workflow Next utilise :
  - `src/app/**`
  - `src/_pages/**`
  - navigation Next dediee dans `src/app/(site)/navigation/**`
  - provider modal Next `ModalProjectProviderNext`

### Candidats a suppression (plus tard)

- **Lot A â€” Candidats deja non references (a verifier une derniere fois avant suppression)**
  - `src/_legacy/pages/Article.tsx`
  - `src/_legacy/pages/Blog/Blog.tsx`
  - `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.tsx`
  - `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.module.scss`
  - `src/_pages/Home/HomeClientShell.tsx`

- **Lot B â€” Apres bascule officielle en Next-only (arreter le runtime Vite legacy)**
  - `src/main.tsx`
  - `src/app/router.tsx`
  - `src/app/layout/RootLayout.tsx`
  - `src/app/layout/RootLayout.module.scss`
  - `src/_legacy/pages/**` (pages legacy restantes)
  - composants legacy React Router:
    - `src/components/DesktopHeader/**`
    - `src/components/MobileHeader/**`
    - `src/components/MainNav/**`
    - `src/components/Footer/**`
    - `src/components/CallToAction/**`
    - `src/components/Buttons/ButtonLink.tsx`
    - `src/components/ScrollToTop/ScrollToTop.tsx`
  - SEO legacy:
    - `src/components/Seo/Seo.tsx`
  - modal legacy:
    - `src/components/ModalProject/providers/ModalProjectProvider.tsx`
    - composants encore relies a cette version legacy

- **Lot C â€” Apres retrait scripts/build Vite**
  - `vite.config.ts`
  - `index.html` (entry Vite)
  - `scripts/generate-sitemap.ts` (si `src/app/sitemap.ts` devient unique source)
  - `public/sitemap.xml` statique (si generation Next uniquement)

### Fichiers a conserver temporairement

- `src/ressources/routes.ts` (utilise par navigation legacy **et** navigation Next)
- `src/services/contactApi.ts` et `src/services/recaptcha.ts` (utilises par le formulaire contact migre)
- `public/robots.txt` (encore servi et coherent)
- scripts et config Vite tant que les scripts par defaut restent Vite
- `src/_legacy/pages/About/**` tant que `/a-propos` n'est pas migree cote Next

### Dependances candidates a suppression future

- Apres retrait Vite/legacy routing:
  - `react-router-dom`
  - `react-helmet-async`
- Apres retrait workflow Vite:
  - `vite`
  - `@vitejs/plugin-react`
  - `eslint-plugin-react-refresh` (apres adaptation `eslint.config.js`)
- Apres retrait script sitemap legacy:
  - `tsx`
  - `dotenv`

### Risques identifies

- Suppression prematuree de fichiers legacy peut casser `npm run dev/build` (Vite reste le flux par defaut).
- Deux sources sitemap coexistent (`public/sitemap.xml` et `src/app/sitemap.ts`) : nettoyage a synchroniser avec la strategie de deploiement.
- `src/ressources/routes.ts` est partage entre legacy et Next : modification/suppression impacte les deux navigations.
- Certains candidats "non references" doivent etre reverifies juste avant suppression (dernier grep + build).

### Prochaine etape recommandee

Executer un lot "suppression Lot A" uniquement (fichiers deja non references), puis relancer les verifications standards; ensuite planifier la bascule Next-only avant Lot B.

## 13-05-2026 â€” Execution nettoyage legacy Lot A (phase 14)

### Decision structurante

- [13-05-2026] [cleanup-lot-a] [suppression uniquement des fichiers confirmes non references] [appliquer le plan sans toucher aux lots B/C] [reduction du legacy inutile avec risque limite]

### Objectif

Executer uniquement le Lot A du plan de nettoyage legacy en supprimant seulement les fichiers confirmes non references.

### Fichiers modifies

- `MIGRATION_LOG.md`

### Fichiers supprimes

- `src/_legacy/pages/Article.tsx`
- `src/_legacy/pages/Blog/Blog.tsx`
- `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.tsx`
- `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.module.scss`
- `src/_pages/Home/HomeClientShell.tsx`

### Recherches/imports effectues avant suppression

- `rg -n "_legacy/pages/Article" src` -> aucun resultat
- `rg -n "Article" src/app src/components src/_legacy src/_pages` -> aucun resultat
- `rg -n "_legacy/pages/Blog/Blog" src` -> aucun resultat
- `rg -n "Blog" src` -> uniquement occurrences commentees dans `src/app/router.tsx` + declaration locale dans `Blog.tsx`
- `rg -n "PortfolioSection" src` -> uniquement occurrences internes aux fichiers `PortfolioSection.*`
- `Get-Content src/_legacy/pages/Portfolio/Portfolio.tsx` -> pas d'import `PortfolioSection`
- `rg -n "HomeClientShell" src` -> uniquement declaration locale dans `src/_pages/Home/HomeClientShell.tsx`

### Verification des contraintes

- Aucun fichier hors Lot A supprime.
- Lot B et Lot C non executes.
- `src/main.tsx`, `src/app/router.tsx`, `src/app/layout/RootLayout.tsx`, `src/_legacy/pages/About/**` conserves.
- `package.json` non modifie.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` (premiere tentative sandbox) -> echec `Error: spawn EPERM` au chargement de `vite.config.ts`
- `npm run build` (re-execution hors sandbox) -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant l'etape `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK

### Resultat

- Suppressions Lot A executees conformement au plan.
- `npm run build` : OK (Vite). Warning non bloquant conserve: chunk `index-*.js` > 500 kB.
- `npm run build:next` : OK (Next). Routes statiques generees: `/`, `/services`, `/portfolio`, `/contact`, `/mentions-legales`, `/sitemap.xml`.

### Risques / points a surveiller

- Les lignes commentees de `src/app/router.tsx` mentionnent encore `Blog` (pas d'impact runtime, mais nettoyage textuel possible plus tard).
- Les dettes hors scope restent ouvertes : scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Verifier le retrait effectif de references mortes restantes (commentaires legacy), puis preparer un plan de bascule Next-only avant d'engager le Lot B.

## 14-05-2026 â€” Nettoyage des references legacy commentees (phase 15)

### Decision structurante

- [14-05-2026] [cleanup-comments] [suppression des commentaires legacy morts lies a Blog] [reduire le bruit sans changer le runtime] [maintenance plus claire avant lot de suppression suivant]

### Objectif

Supprimer uniquement les references legacy commentees devenues inutiles, sans modifier la logique fonctionnelle.

### Fichiers modifies

- `src/app/router.tsx`
- `src/ressources/routes.ts`
- `MIGRATION_LOG.md`

### Changements effectues

- Suppression du commentaire d'import legacy Blog dans `src/app/router.tsx`.
- Suppression du commentaire de route legacy Blog dans `src/app/router.tsx`.
- Suppression de l'entree blog commentee dans `src/ressources/routes.ts`.
- Aucun import actif retire, aucune route active modifiee.

### Verification des references avant nettoyage

- `rg -n "~pages/Blog/Blog|blog\\b|Article|src/pages|_legacy/pages" src`
- `rg -n "\\/\\*|\\/\\/" src/app/router.tsx src/ressources/routes.ts src/app/layout/RootLayout.tsx`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` (premiere tentative sandbox) -> echec `Error [TransformError]: spawn EPERM` pendant `npm run generate-sitemap`
- `npm run build` (re-execution hors sandbox) -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK

### Resultat

- Nettoyage des commentaires morts applique sans impact runtime attendu.
- `npm run build` : OK (Vite) avec warning non bloquant de taille de chunk `> 500 kB`.
- `npm run build:next` : OK (Next), routes statiques generees dont `/`, `/services`, `/portfolio`, `/contact`, `/mentions-legales`.

### Risques / points a surveiller

- Warning Vite non bloquant sur taille de chunk (`> 500 kB`) toujours present.
- Dettes hors scope inchangÃ©es: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Continuer le nettoyage documentaire/commentaires legacy restants hors scope critique, puis preparer les preconditions de bascule Next-only avant Lot B.

## 14-05-2026 â€” Dernier micro-lot commentaires legacy morts (phase 16)

### Decision structurante

- [14-05-2026] [cleanup-comments] [suppression de commentaires d'anciens chemins `src/pages`] [retirer le bruit legacy restant sans toucher au comportement] [code plus lisible avant bascule Next-only]

### Objectif

Effectuer un dernier nettoyage leger des commentaires legacy morts, sans modifier la logique runtime.

### Fichiers modifies

- `src/_pages/Home/Hero/Hero.tsx`
- `src/_legacy/pages/Home/Hero/Hero.tsx`
- `src/_legacy/pages/Contact/Contact.tsx`
- `MIGRATION_LOG.md`

### Changements effectues

- Suppression de commentaires obsoletes de chemin source `src/pages/...` dans deux composants `Hero`.
- Suppression d'un commentaire obsolete "seront crees dans src/pages/..." dans `Contact` legacy.
- Aucun changement sur routes actives, imports actifs, ou logique executable.

### Verification des references avant nettoyage

- `rg -n "^\\s*//.*(src/pages|~pages|Blog|Article|legacy|deprecated|obsolete)|/\\*.*(Blog|Article|legacy|src/pages)" src`
- `rg -n "src/pages/" src`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK

### Resultat

- Nettoyage applique sans impact runtime attendu.
- `npm run build` : OK (Vite) avec warning non bloquant de taille de chunk `> 500 kB`.
- `npm run build:next` : OK (Next), routes statiques generees dont `/`, `/services`, `/portfolio`, `/contact`, `/mentions-legales`.

### Risques / points a surveiller

- Warning Vite non bloquant sur taille de chunk (`> 500 kB`) toujours present.
- Dettes hors scope inchangÃ©es: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Passer a une verification de pre-bascule Next-only (cartographie des entrees Vite encore obligatoires) avant toute action Lot B.

## 14-05-2026 â€” Verification pre-bascule Next-only (phase 17)

### Decision structurante

- [14-05-2026] [pre-switch-next-only] [cartographie complete avant Lot B, sans suppression] [eviter une suppression legacy prematuree] [plan de bascule sequence et reversible]

### Objectif

Verifier les preconditions de bascule Next-only avant execution du Lot B, sans modifier le code fonctionnel.

### Fichiers analyses

- `package.json`
- `src/main.tsx`
- `src/app/router.tsx`
- `src/app/layout/RootLayout.tsx`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `tsconfig.node.json`
- `next.config.ts`
- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/Providers.tsx`
- `src/app/(site)/navigation/MainNavNext.tsx`
- `src/app/(site)/navigation/DesktopHeaderNext.tsx`
- `src/app/(site)/navigation/MobileHeaderNext.tsx`
- `src/ressources/routes.ts`
- `public/sitemap.xml`
- `src/app/sitemap.ts`
- `scripts/generate-sitemap.ts`
- `public/robots.txt`

### Commandes d'analyse executees

- `git branch --show-current`
- `git status --short`
- `Get-Content package.json`
- `Get-Content src/main.tsx`
- `Get-Content src/app/router.tsx`
- `Get-Content src/app/layout/RootLayout.tsx`
- `Get-Content vite.config.ts`
- `Get-Content index.html`
- `Get-Content src/app/sitemap.ts`
- `Get-Content scripts/generate-sitemap.ts`
- `Get-Content public/sitemap.xml`
- `Get-Content public/robots.txt`
- `Get-Content next.config.ts`
- `Get-Content src/app/layout.tsx`
- `Get-Content src/vite-env.d.ts`
- `Get-Content tsconfig.node.json`
- `Get-Content 'src/app/(site)/layout.tsx'`
- `Get-Content 'src/app/(site)/Providers.tsx'`
- `Get-Content 'src/app/(site)/navigation/MainNavNext.tsx'`
- `Get-Content 'src/app/(site)/navigation/DesktopHeaderNext.tsx'`
- `Get-Content 'src/app/(site)/navigation/MobileHeaderNext.tsx'`
- `Get-Content src/ressources/routes.ts`
- `Get-ChildItem -Recurse -File 'src/app/(site)'`
- `rg -n react-router-dom src`
- `rg -n react-helmet-async src`
- `rg -n HelmetProvider src`
- `rg -n "\\bSeo\\b" src`
- `rg -n next/link src`
- `rg -n next/navigation src`
- `rg -n "from 'next'" src`
- `rg -n "import\\.meta\\.env|process\\.env\\.|NEXT_PUBLIC_|VITE_" src scripts`
- `rg -n "vite|@vitejs/plugin-react|eslint-plugin-react-refresh|tsx|dotenv" package.json vite.config.ts eslint.config.js scripts src`
- `rg -n remarkGfm|gfm src`

### Entrees Vite encore presentes (necessaires au build Vite actuel)

- Entree runtime Vite: `index.html` -> `<script type="module" src="/src/main.tsx"></script>`
- Bootstrap Vite: `src/main.tsx` (RouterProvider + HelmetProvider + styles globaux)
- Routing Vite legacy: `src/app/router.tsx`
- Layout racine Vite legacy: `src/app/layout/RootLayout.tsx`
- Config build/dev Vite: `vite.config.ts`
- Scripts Vite dans `package.json`: `dev`, `build`, `preview`
- Hook build Vite: `prebuild` -> `generate-sitemap` (script `tsx scripts/generate-sitemap.ts`)
- Typage Vite: `src/vite-env.d.ts` + `tsconfig.node.json` (inclut `vite.config.ts`)

### Ce qui reste necessaire tant que Vite doit continuer a builder

- `react-router-dom` (imports actifs dans `src/main.tsx`, `src/app/router.tsx`, `src/app/layout/RootLayout.tsx` et composants legacy)
- `react-helmet-async` (imports actifs dans `src/main.tsx` et `src/components/Seo/Seo.tsx`)
- `vite`, `@vitejs/plugin-react` (scripts + config Vite actifs)
- `eslint-plugin-react-refresh` (utilise dans `eslint.config.js` via `reactRefresh.configs.vite`)
- `tsx` + `dotenv` (utilises par `generate-sitemap` / `scripts/generate-sitemap.ts`)

### Dependances cote Next (usage detecte)

- Requises (imports detectes cote routes/layout/providers/navigation Next):
  - `next`, `react`, `react-dom`
  - `clsx`, `framer-motion`, `react-markdown`, `remark-breaks`, `swiper`, `lucide-react`, `sass`, `zod`
- Non detecte dans les imports analyses:
  - `remark-gfm` (a reverifier au moment du nettoyage deps)

### Fichiers/dependances supprimables apres decision Next-only (pas dans cette etape)

- Candidats Lot B (apres validation bascule):
  - `src/main.tsx`
  - `src/app/router.tsx`
  - `src/app/layout/RootLayout.tsx`
  - `src/app/layout/RootLayout.module.scss`
  - `src/_legacy/pages/**`
  - composants legacy React Router (`src/components/*` versions non Next, `ButtonLink.tsx`, `ScrollToTop.tsx`, provider modal legacy, `Seo.tsx`)
- Candidats deps apres retrait complet legacy runtime:
  - `react-router-dom`
  - `react-helmet-async`
- Candidats Lot C (apres retrait scripts/build Vite):
  - `vite.config.ts`, `index.html`, `src/vite-env.d.ts`, `tsconfig.node.json`
  - scripts `dev`, `build`, `preview`, `generate-sitemap`, `prebuild` (a remplacer par equivalent Next)
  - deps: `vite`, `@vitejs/plugin-react`, `tsx`, `dotenv`, `eslint-plugin-react-refresh` (apres adaptation ESLint)

### Strategie sitemap (etat + recommandation)

- Etat actuel:
  - `public/sitemap.xml` est regenere par `scripts/generate-sitemap.ts` via `prebuild` Vite.
  - `src/app/sitemap.ts` expose aussi un sitemap App Router Next.
- Risque:
  - Double source de verite sitemap pendant la cohabitation.
- Recommandation pre-bascule:
  1. Garder la cohabitation actuelle tant que Vite reste le workflow par defaut.
  2. Au moment de bascule Next-only, choisir `src/app/sitemap.ts` comme source unique.
  3. Retirer ensuite `generate-sitemap` + `prebuild` et figer la suppression de `public/sitemap.xml` statique si confirme non necessaire au deploiement Cloudflare.

### Risques identifies avant Lot B

- Route `/a-propos` non migree cote Next:
  - absente de `src/app/(site)`;
  - encore presente dans `src/ressources/routes.ts`;
  - potentiellement exposee dans la navigation Next (menu principal/mobile) => risque de lien vers route non servie en Next-only.
- Dependance forte a `src/ressources/routes.ts` partagee entre legacy et Next: changement non coordonne peut casser les deux parcours.
- Suppression prematuree des artefacts Vite casserait le workflow par defaut tant que la bascule n'est pas actee.
- Deux pipelines sitemap coexistent (fichier public + route metadata Next) jusqu'a decision explicite.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build (non lance volontairement: aucune modification fonctionnelle)
- [x] verification manuelle

### Resultat

- Cartographie pre-bascule completee sans suppression ni modification fonctionnelle.
- Preconditions bloquantes identifiees avant Lot B (notamment `/a-propos` et strategie sitemap unique).

### Prochaine etape recommandee

1. Decider explicitement la strategie `/a-propos` avant bascule Next-only:
   - soit migrer `/a-propos` dans `src/app/(site)/a-propos/page.tsx`;
   - soit retirer temporairement ce lien de la navigation Next avec decision produit validee.
2. Valider le runbook de bascule:
   - changer les scripts par defaut vers Next;
   - figer la source sitemap unique Next;
   - executer ensuite Lot B en un lot controle.

## 14-05-2026 â€” Migration page `/a-propos` vers Next (phase 18)

### Decision structurante

- [14-05-2026] [page-next] [migration de `/a-propos` avant bascule Next-only] [fermer le risque de lien nav Next vers route non servie] [precondition Lot B levee cote routing public]

### Objectif

Migrer uniquement la page `/a-propos` vers Next.js en preservant URL, contenu, design, responsive, accessibilite et metadata.

### Page migree

- `About` (`/a-propos`)

### Fichiers crees

- `src/app/(site)/a-propos/page.tsx`
- `src/_pages/About/About.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/_pages/About/AboutSection/AboutSection.module.scss`

### Fichiers modifies

- `src/app/sitemap.ts`
- `scripts/generate-sitemap.ts`
- `public/sitemap.xml`
- `MIGRATION_LOG.md`

### Sections migrees

- `AboutSection`

### Metadata migrees

- `title`, `description`, `canonical`, `openGraph` migres depuis la page legacy `About`.

### Changements effectues

- Creation de la route Next `src/app/(site)/a-propos/page.tsx` connectee au composant metier `src/_pages/About/About.tsx`.
- Migration de la composition legacy de page:
  - header via `HeaderSection`;
  - rendu des sections `aboutPageContent.sections` avec alternance `reverse`.
- Migration de la section `AboutSection` (markdown + image + TwoColumnSection) avec styles preservant le rendu legacy.
- `src/_pages/About/About.module.scss` non cree (non necessaire: pas de styles locaux de page en legacy).
- Reintegration de `/a-propos` dans la strategie sitemap actuelle de cohabitation:
  - ajout de `/a-propos` dans `src/app/sitemap.ts`;
  - retrait de `aPropos` de la liste d'exclusion de `scripts/generate-sitemap.ts`;
  - regeneration de `public/sitemap.xml` via `npm run build`.

### Navigation Next `/a-propos`

- Le lien `/a-propos` reste present dans `src/ressources/routes.ts` et est consomme par la navigation Next (`MainNavNext` / `MobileHeaderNext`).
- Verification HTTP effectuee: `/a-propos` repond bien en `200`.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK
- Tentative verification HTTP via `Start-Process npm run start:next -- -p 3100` -> echec (`Acces refuse` puis `Impossible de se connecter au serveur distant`)
- Diagnostic `npm run start:next -- -p 3100` -> echec (`Invalid project directory provided ...\\3100`)
- Verification HTTP locale (Next start + requetes):
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`
  - `/mentions-legales` -> `200`
  - `/sitemap.xml` -> `200`

### Resultat

- Migration `/a-propos` terminee sans suppression legacy.
- `npm run build` : OK (Vite), warning non bloquant de taille de chunk `> 500 kB` conserve.
- `npm run build:next` : OK (Next), route statique `/a-propos` generee.
- Sitemap de cohabitation mis a jour avec `/a-propos`.

### Risques / points a surveiller

- Dettes hors scope inchangÃ©es: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.
- Double source sitemap toujours presente (fichier public + route metadata Next) tant que la bascule Next-only n'est pas actee.

### Prochaine etape recommandee

Valider le runbook de bascule Next-only (scripts par defaut, source sitemap unique), puis executer Lot B en lot controle.

## 14-05-2026 â€” Runbook final pre-bascule Next-only (phase 19)

### Decision structurante

- [14-05-2026] [runbook-next-only] [runbook final de bascule prepare sans suppression immediate] [securiser Lot B/Lot C et eviter regression de prod] [execution pas-a-pas avec points de controle]

### Objectif

Documenter le runbook final de bascule Next-only, la strategie sitemap cible et les listes Lot B / Lot C / dependances, sans modifier le code fonctionnel ni les scripts.

### Fichiers analyses

- `package.json`
- `vite.config.ts`
- `next.config.ts`
- `scripts/generate-sitemap.ts`
- `public/sitemap.xml`
- `src/app/sitemap.ts`
- `src/main.tsx`
- `src/app/router.tsx`
- `src/app/layout/RootLayout.tsx`
- `src/app/layout/RootLayout.module.scss`
- `src/app/(site)/Providers.tsx`
- `src/app/(site)/navigation/MainNavNext.tsx`
- `src/app/(site)/navigation/DesktopHeaderNext.tsx`
- `src/app/(site)/navigation/MobileHeaderNext.tsx`
- `src/app/(site)/navigation/FooterNext.tsx`
- `src/ressources/routes.ts`
- `src/components/**` (dossiers legacy navigation/seo/modal)
- `src/_legacy/pages/**`

### Commandes d'analyse executees

- `git branch --show-current`
- `git status --short`
- `Get-Content package.json`
- `Get-Content vite.config.ts`
- `Get-Content next.config.ts`
- `Get-Content scripts/generate-sitemap.ts`
- `Get-Content public/sitemap.xml`
- `Get-Content src/app/sitemap.ts`
- `rg -n "~pages/" src`
- `rg -n "RootLayout\\.module\\.scss" src`
- `rg -n "react-router-dom|react-helmet-async|~/components/Seo/Seo|RouterProvider|HelmetProvider" src`
- `rg -n "RootLayout\\.module\\.scss|components/DesktopHeader/DesktopHeader\\.module\\.scss|components/MobileHeader/MobileHeader\\.module\\.scss|components/MainNav/MainNav\\.module\\.scss|components/Footer/Footer\\.module\\.scss|components/CallToAction/CallToAction\\.module\\.scss" src`
- `Get-ChildItem -Recurse -File src/_legacy/pages`
- `Get-ChildItem -Recurse -File src/components/DesktopHeader`
- `Get-ChildItem -Recurse -File src/components/MobileHeader`
- `Get-ChildItem -Recurse -File src/components/MainNav`
- `Get-ChildItem -Recurse -File src/components/Footer`
- `Get-ChildItem -Recurse -File src/components/CallToAction`
- `Get-ChildItem -Recurse -File src/components/Buttons`
- `Get-ChildItem -Recurse -File src/components/ScrollToTop`
- `Get-ChildItem -Recurse -File src/components/ModalProject/providers`
- `rg -n "ModalProjectContext|useModalProject|ModalProjectProviderNext|ModalProjectProvider" src`

### Runbook de bascule Next-only propose

1. **Gate pre-switch (validation avant changement scripts)**
   - Confirmer que toutes les routes publiques Next cibles repondent en `200` (`/`, `/a-propos`, `/services`, `/portfolio`, `/contact`, `/mentions-legales`, `/sitemap.xml`).
   - Confirmer que les dettes hors scope restent documentees et acceptees (scroll modale, cle reCAPTCHA locale).
2. **Basculer scripts par defaut vers Next (changement planifie, non applique ici)**
   - `dev` -> `next dev --webpack`
   - `build` -> `next build --webpack`
   - `preview` -> `next start`
   - Conserver provisoirement des scripts legacy suffixes (`dev:vite`, `build:vite`, `preview:vite`) uniquement pour rollback court, puis retirer en Lot C.
3. **Fixer la strategie sitemap en source unique**
   - Garder `src/app/sitemap.ts` comme source canonique.
   - Decoupler `prebuild` de `generate-sitemap` (script Vite legacy) apres bascule scripts.
4. **Executer Lot B (apres scripts Next par defaut et smoke tests)**
   - Supprimer runtime Vite legacy + pages/components legacy devenus inutiles (liste confirmee ci-dessous).
   - Ne supprimer que ce qui n'est plus importe par le shell Next.
5. **Executer Lot C (apres validation post-Lot B)**
   - Retirer outillage Vite restant (config, scripts et dependances associees) + nettoyage sitemap legacy statique.
6. **Verification finale post-bascule**
   - `lint`, `type-check`, `build` (Next), verification HTTP des routes publiques et de `/sitemap.xml`.
   - Verification manuelle navigation/menu, modale projet et formulaire contact.

### Strategie sitemap finale recommandee

- **Source unique cible:** `src/app/sitemap.ts`.
- **A conserver en cible Next-only:**
  - `src/app/sitemap.ts`
  - `public/robots.txt` (si toujours coherent avec les routes finales)
- **A supprimer plus tard (Lot C):**
  - `scripts/generate-sitemap.ts`
  - script `generate-sitemap` + hook `prebuild` dans `package.json`
  - `public/sitemap.xml` statique (si confirme non necessaire pour le deploiement Cloudflare)

### Lot B confirme (supprimable apres bascule scripts Next)

- Entrees/runtime legacy:
  - `src/main.tsx`
  - `src/app/router.tsx`
  - `src/app/layout/RootLayout.tsx`
- Pages legacy:
  - `src/_legacy/pages/**` (inclut `About`, `Contact`, `Home`, `MentionsLÃ©gales`, `NotFound`, `Portfolio`, `Services`)
- Composants legacy React Router/SEO/modal:
  - `src/components/DesktopHeader/DesktopHeader.tsx`
  - `src/components/MobileHeader/MobileHeader.tsx`
  - `src/components/MainNav/MainNav.tsx`
  - `src/components/Footer/Footer.tsx`
  - `src/components/CallToAction/CallToAction.tsx`
  - `src/components/Buttons/ButtonLink.tsx`
  - `src/components/ScrollToTop/ScrollToTop.tsx`
  - `src/components/Seo/Seo.tsx`
  - `src/components/ModalProject/providers/ModalProjectProvider.tsx`

### Lot B conditionnel (a deplacer avant suppression)

- `src/app/layout/RootLayout.module.scss` **non supprimable immediatement**
  - raison: encore importe par `src/app/(site)/Providers.tsx`.
  - action prealable: deplacer/dupliquer les classes necessaires vers un fichier style Next dedie (ex. `src/app/(site)/Providers.module.scss`) puis supprimer.
- Fichiers SCSS des composants legacy de navigation **non supprimables immediatement**:
  - `src/components/DesktopHeader/DesktopHeader.module.scss`
  - `src/components/MobileHeader/MobileHeader.module.scss`
  - `src/components/MainNav/MainNav.module.scss`
  - `src/components/Footer/Footer.module.scss`
  - `src/components/CallToAction/CallToAction.module.scss`
  - raison: reutilises par les composants Next `*Next.tsx`.
  - action prealable: basculer ces imports vers des styles dedies Next, puis supprimer.

### Lot C confirme (apres retrait complet Vite)

- Config/entry/tooling:
  - `vite.config.ts`
  - `index.html`
  - `src/vite-env.d.ts`
  - `tsconfig.node.json` (inclut uniquement `vite.config.ts`)
- Scripts legacy a retirer de `package.json`:
  - `dev`/`build`/`preview` versions Vite (apres remplacement)
  - `generate-sitemap`
  - `prebuild`
- Assets sitemap legacy:
  - `scripts/generate-sitemap.ts`
  - `public/sitemap.xml` (si source unique `src/app/sitemap.ts` validee)

### Dependances supprimables apres bascule

- **Apres Lot B (runtime legacy retire):**
  - `react-router-dom`
  - `react-helmet-async`
- **Apres Lot C (outillage Vite retire):**
  - `vite`
  - `@vitejs/plugin-react`
  - `eslint-plugin-react-refresh` (apres adaptation `eslint.config.js`)
  - `tsx`
  - `dotenv`
- **Candidat a confirmer avant suppression:**
  - `remark-gfm` (usage non detecte dans le code analyse)

### Dependances a conserver (usage detecte cote Next actuel)

- `next`, `react`, `react-dom`
- `clsx`, `framer-motion`, `lucide-react`
- `react-markdown`, `remark-breaks`
- `swiper`, `zod`, `sass`
- outillage TypeScript/ESLint general (`typescript`, `typescript-eslint`, `eslint`, `@types/*`, `globals`, `@eslint/js`, `eslint-plugin-react-hooks`)

### Risques identifies

- Suppression anticipee de styles legacy reutilises par `*Next.tsx` (navigation/shell) => regression visuelle immediate.
- Suppression anticipee de `RootLayout.module.scss` => cassure du layout Next public (`Providers.tsx`).
- Bascule scripts sans stabiliser sitemap unique => incoherence SEO (double source ou source non alimentee).
- Dette modale scroll + dette reCAPTCHA locale restent ouvertes (hors scope), a conserver visibles post-bascule.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [ ] build (non lance volontairement: aucune modification fonctionnelle)
- [x] verification manuelle

### Resultat

- Runbook final de bascule Next-only documente avec sequence d'execution, strategie sitemap cible, listes Lot B/Lot C confirmees et dependances classees.

### Prochaine etape recommandee

Executer d'abord un mini-lot technique de decouplage styles legacy encore consommes par Next (`RootLayout.module.scss` + styles nav), puis appliquer le runbook (switch scripts -> Lot B -> Lot C) avec validations entre chaque lot.

## 14-05-2026 â€” Micro-lot decouplage styles Next vs legacy (phase 20)

### Decision structurante

- [14-05-2026] [style-decoupling] [decouplage des imports SCSS Next pointant vers styles legacy critiques] [preparer Lot B sans regression visuelle] [styles Next dedies crees sans suppression legacy]

### Objectif

Executer un micro-lot de decouplage des styles encore partages entre legacy React/Vite et composants Next, sans changer le rendu ni la logique runtime.

### Composants Next decouples

- `SiteProviders`
- `DesktopHeaderNext`
- `MobileHeaderNext`
- `MainNavNext`
- `FooterNext`
- `CallToActionNext`

### Fichiers crees

- `src/app/(site)/Providers.module.scss`
- `src/app/(site)/navigation/DesktopHeaderNext.module.scss`
- `src/app/(site)/navigation/MobileHeaderNext.module.scss`
- `src/app/(site)/navigation/MainNavNext.module.scss`
- `src/app/(site)/navigation/FooterNext.module.scss`
- `src/app/(site)/navigation/CallToActionNext.module.scss`

### Fichiers modifies

- `src/app/(site)/Providers.tsx`
- `src/app/(site)/navigation/DesktopHeaderNext.tsx`
- `src/app/(site)/navigation/MobileHeaderNext.tsx`
- `src/app/(site)/navigation/MainNavNext.tsx`
- `src/app/(site)/navigation/FooterNext.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`
- `MIGRATION_LOG.md`

### Imports styles modifies

- `src/app/(site)/Providers.tsx`
  - `~/app/layout/RootLayout.module.scss` -> `./Providers.module.scss`
- `src/app/(site)/navigation/DesktopHeaderNext.tsx`
  - `~/components/DesktopHeader/DesktopHeader.module.scss` -> `./DesktopHeaderNext.module.scss`
- `src/app/(site)/navigation/MobileHeaderNext.tsx`
  - `~/components/MobileHeader/MobileHeader.module.scss` -> `./MobileHeaderNext.module.scss`
- `src/app/(site)/navigation/MainNavNext.tsx`
  - `~/components/MainNav/MainNav.module.scss` -> `./MainNavNext.module.scss`
- `src/app/(site)/navigation/FooterNext.tsx`
  - `~/components/Footer/Footer.module.scss` -> `./FooterNext.module.scss`
- `src/app/(site)/navigation/CallToActionNext.tsx`
  - `~/components/CallToAction/CallToAction.module.scss` -> `./CallToActionNext.module.scss`

### Changements effectues

- Copie/adaptation des styles legacy necessaires vers des modules SCSS dedies dans l'arborescence Next.
- Bascule des imports styles des composants Next cibles vers ces fichiers dedies.
- Aucun changement de logique runtime, aucun changement de contenu, aucune suppression legacy.

### Styles legacy encore consommes par Next (apres ce micro-lot)

- Non detecte pour la liste prioritaire demandee (`RootLayout.module.scss`, `DesktopHeader`, `MobileHeader`, `MainNav`, `Footer`, `CallToAction`).
- Reste volontairement partage hors scope de ce lot:
  - `src/components/Buttons/Button.module.scss` (utilise par Next et legacy via composants bouton partages).

### Commandes d'analyse executees

- `git branch --show-current`
- `git status --short`
- `rg -n "import styles from '.*module\\.scss'" 'src/app/(site)'`
- `Get-Content` sur composants Next cibles et SCSS legacy associes
- `rg -n "~/app/layout/RootLayout\\.module\\.scss|~/components/DesktopHeader/DesktopHeader\\.module\\.scss|~/components/MobileHeader/MobileHeader\\.module\\.scss|~/components/MainNav/MainNav\\.module\\.scss|~/components/Footer/Footer\\.module\\.scss|~/components/CallToAction/CallToAction\\.module\\.scss" 'src/app/(site)'`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK
- Verification HTTP locale via script npm:
  - lancement `npm run start:next`
  - `GET /` -> `200`
  - `GET /a-propos` -> `200`
  - `GET /services` -> `200`
  - `GET /portfolio` -> `200`
  - `GET /contact` -> `200`

### Resultat

- Decouplage des styles prioritaires termine sans suppression legacy.
- `npm run build` : OK (warning non bloquant chunk Vite > 500 kB conserve).
- `npm run build:next` : OK apres relance hors sandbox.
- Verification HTTP rapide des routes demandees: OK (`200`).

### Risques / points a surveiller

- Verification visuelle manuelle recommandee sur desktop/mobile pour confirmer l'absence de regression fine (spacing/transparence/backdrop/hover) apres copie des SCSS.
- Dettes hors scope inchangÃ©es: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Lancer une passe de validation UI manuelle (desktop + mobile) ciblee navigation/layout, puis enchaÃ®ner sur l'execution controlee du runbook Next-only (switch scripts par defaut -> Lot B).

## 14-05-2026 - Correctif chargement images pages Next (phase 21)

### Decision structurante

- [14-05-2026] [images-next] [normalisation des `src` d'assets importes via helper `getAssetSrc`] [eviter `[object Object]` dans les balises `<img>` avec Next] [compatibilite conservee Vite + Next pendant cohabitation]

### Objectif

Corriger uniquement les images manquantes sur les pages migrees Next, sans changer le design ni le contenu.

### Cause identifiee

- Plusieurs composants de pages utilisaient des valeurs d'assets importes directement dans `src` (ou via `image.src`), alors que Next peut fournir un objet d'asset.
- Effet constate cote HTML Next: `src="[object Object]"` sur certaines images de pages.

### Fichiers crees

- `src/lib/getAssetSrc.ts`

### Fichiers modifies

- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Contact/ContactInfo/ContactInfo.tsx`
- `src/components/CardProcess/CardProcess.tsx`
- `src/components/HeaderSection/HeaderSection.tsx`
- `MIGRATION_LOG.md`

### Changements effectues

- Ajout d'un helper `getAssetSrc` pour normaliser les sources d'images (`string` ou objet asset) en URL exploitable par `<img src>`.
- Application du helper uniquement sur les composants de pages migrees concernes.
- Aucun changement de contenu, de design, de routing ou de logique metier.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` -> OK
- `npm run build:next` (premiere tentative sandbox) -> echec `Error: spawn EPERM` pendant `Running TypeScript`
- `npm run build:next` (re-execution hors sandbox) -> OK
- Verification HTTP locale (Next start):
  - `GET /` -> `200`
  - `GET /a-propos` -> `200`
  - `GET /services` -> `200`
  - `GET /portfolio` -> `200`
  - `GET /contact` -> `200`
- Verification HTML des routes migrees:
  - avant correctif final: presence de `src="[object Object]"` detectee
  - apres correctif final: plus aucune occurrence detectee
- Verification des URLs images detectees dans le HTML:
  - aucun echec HTTP detecte sur les `src` relatifs (`/_next/...` et `/pictures/...`)

### Resultat

- Chargement des images corrige sur les pages Next migrees ciblees.
- Coexistence Vite/Next preservee.
- Aucune image manquante detectee sur les routes verifiees.

### Risques / points a surveiller

- Verification visuelle manuelle recommandee (desktop/mobile) pour confirmer l'absence de regression fine sur toutes les sections imagees.
- Dettes hors scope inchangees: scroll modale a l'ouverture, cle reCAPTCHA publique manquante en local.

### Prochaine etape recommandee

Executer une validation UI manuelle complete des pages migrees, puis poursuivre le runbook Next-only (Lot B) uniquement apres validation visuelle.

### Point ouvert post-migration (14-05-2026) - Contenu et images

- La correction transitoire via `getAssetSrc(...)` est conservee pour stabiliser la migration, mais le systeme de chargement d'images devra etre remplace par une approche plus native Next.js.
- Le rendu de contenu base sur `react-markdown` devra etre reevalue.
- Le futur systeme devra gerer texte + images de maniere coherente dans une meme logique de contenu.
- Cette evolution est a traiter apres:
  1. la bascule Next-only ;
  2. la dette UX de scroll modale ;
  3. la dette reCAPTCHA / configuration d'environnement.

## 14-05-2026 - Bascule scripts par defaut vers Next.js avec fallback Vite (phase 22)

### Decision structurante

- [14-05-2026] [scripts-next-only] [scripts par defaut bascules vers Next, fallback Vite conserve] [preparer la bascule Next-only sans couper le plan de repli] [workflow principal sur Next, verification legacy encore possible]
- [14-05-2026] [sitemap] [source active unifiee sur `src/app/sitemap.ts`] [conflit detecte avec `public/sitemap.xml` qui prenait la priorite sur Next] [`/sitemap.xml` aligne sur la metadata route Next]

### Objectif

Basculer `dev/build/start` vers Next.js tout en conservant des scripts Vite explicites en fallback temporaire.

### Fichiers modifies

- `package.json`
- `MIGRATION_LOG.md`

### Fichiers supprimes

- `public/sitemap.xml`

### Changements effectues

- Scripts par defaut bascules vers Next:
  - `dev` -> `next dev --webpack`
  - `build` -> `next build --webpack`
  - `start` -> `next start`
- Scripts fallback Vite explicites conserves:
  - `dev:vite` -> `vite`
  - `build:vite` -> `tsc --noEmit && vite build`
  - `preview:vite` -> `vite preview`
- Scripts Next existants conserves en alias de compatibilite:
  - `dev:next` -> `npm run dev`
  - `build:next` -> `npm run build`
  - `start:next` -> `npm run start`
- Suppression du hook `prebuild` legacy (generation sitemap statique automatique).
- Suppression de `public/sitemap.xml` pour lever le conflit de precedence et activer la source sitemap Next `src/app/sitemap.ts`.

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` (Next par defaut) -> OK
- `npm run build:vite` (premiere tentative sandbox) -> echec `Error: spawn EPERM` (esbuild)
- `npm run build:vite` (re-execution hors sandbox) -> OK
- Verification HTTP locale (`npm run start`) sur:
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`
  - `/mentions-legales` -> `200`
  - `/sitemap.xml` -> `200`
  - `/robots.txt` -> `200`
- Verification contenu `/sitemap.xml`:
  - la reponse est desormais celle de la route Next (`https://gelyos.fr/` + `lastmod` ISO), confirmant l'usage de `src/app/sitemap.ts`.

### Resultat

- Bascule des scripts par defaut vers Next effective.
- Fallback Vite toujours disponible et valide via `build:vite`.
- Conflit sitemap resolu en faveur de la source Next cible.

### Risques / points a surveiller

- `build:vite` peut encore necessiter une execution hors sandbox sur cet environnement Windows (erreur `spawn EPERM`).
- Les dettes hors scope restent inchangÃ©es: scroll modale, reCAPTCHA/env, refactor contenu+images post-migration.

### Prochaine etape recommandee

Lancer le lot de suppression legacy suivant uniquement apres validation humaine du runbook (Lot B), maintenant que les scripts par defaut et la source sitemap Next sont stabilises.

## 14-05-2026 - Execution Lot B nettoyage legacy (phase 23)

### Decision structurante

- [14-05-2026] [lot-b-cleanup] [suppression runtime/pages/components legacy non utilises par Next] [apres bascule scripts par defaut Next et verification imports] [base Next-only simplifiee sans toucher au Lot C]

### Objectif

Executer uniquement le Lot B: retirer le runtime/page legacy et les composants legacy confirmes inutiles cote Next, sans supprimer Vite ni les dependances legacy package.

### Recherches/imports effectues

- `rg -n "RootLayout|~/app/layout/RootLayout|RootLayout\.module\.scss" src`
- `rg -n "~/components/DesktopHeader/DesktopHeader" src`
- `rg -n "~/components/MobileHeader/MobileHeader" src`
- `rg -n "~/components/MainNav/MainNav" src`
- `rg -n "~/components/Footer/Footer" src`
- `rg -n "~/components/CallToAction/CallToAction" src`
- `rg -n "~/components/Seo/Seo" src`
- `rg -n "~/components/ScrollToTop/ScrollToTop" src`
- `rg -n "~/components/Buttons/ButtonLink|PrimaryButtonLink|SecondaryButtonLink" src`
- `rg -n "components/ModalProject/providers/ModalProjectProvider|components/ModalProject/ModalProject" src`
- `rg -n "components/CardService/CardService|components/GridProject/GridProject|components/CardProject/home/CardProjectHome|components/CardProject/portfolio/CardProject|components/Carousel/CardCarousel/CardCarousel" src`

### Fichiers supprimes

- Runtime legacy:
  - `src/main.tsx`
  - `src/app/router.tsx`
  - `src/app/layout/RootLayout.tsx`
  - `src/app/layout/RootLayout.module.scss`
- Pages legacy:
  - `src/_legacy/pages/**`
- Composants legacy React Router/SEO/modal/nav:
  - `src/components/DesktopHeader/**`
  - `src/components/MobileHeader/**`
  - `src/components/MainNav/**`
  - `src/components/Footer/**`
  - `src/components/CallToAction/**`
  - `src/components/Seo/Seo.tsx`
  - `src/components/ScrollToTop/ScrollToTop.tsx`
  - `src/components/ModalProject/providers/ModalProjectProvider.tsx`
  - `src/components/ModalProject/ModalProject.tsx`
  - `src/components/Buttons/ButtonLink.tsx`
- Composants legacy dependants de `ButtonLink` non utilises par Next:
  - `src/components/CardService/CardService.tsx`
  - `src/components/CardProject/home/CardProjectHome.tsx`
  - `src/components/CardProject/portfolio/CardProject.tsx`
  - `src/components/Carousel/CardCarousel/CardCarousel.tsx`
  - `src/components/GridProject/GridProject.tsx`

### Fichiers conserves (et pourquoi)

- `src/components/Buttons/Button.module.scss` conserve: encore utilise par composants Next.
- `src/components/CardService/CardService.module.scss` conserve: encore importe par `CardServiceNext`.
- `src/components/CardProject/home/CardProjectHome.module.scss` conserve: encore importe par `CardProjectHomeNext`.
- `src/components/CardProject/portfolio/CardProject.module.scss` conserve: encore importe par `ProjectCardNext`.
- `src/components/Carousel/CardCarousel/CardCarousel.module.scss` conserve: encore importe par `CardCarouselNext`.
- `src/components/ModalProject/providers/ModalProjectContext.ts` conserve: utilise par provider Next.
- `src/components/ModalProject/providers/useModalProject.ts` conserve: utilise par composants Next.
- `src/components/ModalProject/providers/ModalProjectProviderNext.tsx` conserve: provider modal actif cote Next.
- Fallback Vite/outillage conserve hors Lot B: `vite.config.ts`, `index.html`, `src/vite-env.d.ts`, `tsconfig.node.json`, `scripts/generate-sitemap.ts`.

### Fichiers modifies

- `MIGRATION_LOG.md`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm run build` -> OK (Next)
- Verification HTTP locale (`npm run start`):
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`
  - `/mentions-legales` -> `200`
  - `/sitemap.xml` -> `200`
  - `/robots.txt` -> `200`
- `npm run build:vite` non lance volontairement: runtime legacy retire dans ce lot, echec attendu non bloquant.

### Resultat

- Lot B execute sans toucher au Lot C ni aux dependances package.
- Build Next valide apres suppression.
- Routes publiques Next et endpoints SEO techniques verifies en `200`.

### Risques / points a surveiller

- Le fallback Vite est conserve au niveau scripts/outillage mais n'est plus valide fonctionnellement apres retrait du runtime legacy (attendu avant Lot C).
- Dettes hors scope inchangÃ©es: scroll modale, reCAPTCHA/env, refactor contenu+images post-migration.

### Prochaine etape recommandee

Preparer l'execution controlee du Lot C (suppression outillage Vite + cleanup dependances) avec un gate de verification final Next-only.

## 14-05-2026 - Execution Lot C nettoyage Next-only (phase 24)

### Decision structurante

- [14-05-2026] [lot-c-cleanup] [suppression outillage Vite + scripts/dependances legacy devenus inutiles] [runtime legacy deja retire en Lot B et scripts par defaut deja sur Next] [projet aligne Next-only]

### Objectif

Finaliser le cleanup Next-only en retirant l'outillage Vite, les scripts associes et les dependances legacy non utilisees.

### Recherches/imports effectues

- `rg -n "react-router-dom" src scripts`
- `rg -n "react-helmet-async" src scripts`
- `rg -n "remark-gfm|remarkGfm" src scripts`
- `rg -n "from 'react-router-dom'" src scripts`
- `rg -n "from \"react-router-dom\"" src scripts`
- `rg -n "from 'react-helmet-async'" src scripts`
- `rg -n "from \"react-helmet-async\"" src scripts`
- `rg -n "from 'vite'|from \"vite\"|@vitejs/plugin-react|vite/client|eslint-plugin-react-refresh" src scripts eslint.config.js tsconfig.json tsconfig.app.json next.config.ts`
- `rg -n "generate-sitemap|dotenv|tsx" src scripts package.json`

### Fichiers supprimes

- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `tsconfig.node.json`
- `scripts/generate-sitemap.ts`

### Fichiers modifies

- `package.json`
- `package-lock.json`
- `eslint.config.js`
- `tsconfig.json`
- `tsconfig.app.json`
- `next.config.ts`
- `MIGRATION_LOG.md`

### Scripts supprimes

- `dev:vite`
- `build:vite`
- `preview:vite`
- `generate-sitemap`

### Dependances supprimees

- runtime legacy:
  - `react-router-dom`
  - `react-helmet-async`
- outillage Vite/legacy:
  - `vite`
  - `@vitejs/plugin-react`
  - `eslint-plugin-react-refresh`
  - `tsx`
  - `dotenv`
- markdown optionnel non utilise:
  - `remark-gfm`

### Dependances conservees (usage detecte)

- `next`, `react`, `react-dom` (runtime Next)
- `react-markdown`, `remark-breaks` (rendu contenu)
- `clsx`, `framer-motion`, `lucide-react`, `swiper`, `zod`, `sass` (imports actifs)
- outillage qualite/types: `eslint`, `typescript`, `typescript-eslint`, `@types/*`, `@eslint/js`, `eslint-plugin-react-hooks`, `globals`

### Ajustements TypeScript/ESLint

- `eslint.config.js`:
  - suppression plugin `eslint-plugin-react-refresh`
  - suppression extension `reactRefresh.configs.vite`
  - suppression de la regle `react-refresh/only-export-components`
- `tsconfig.json`:
  - suppression reference `./tsconfig.node.json`
  - suppression alias `~pages/*`
- `tsconfig.app.json`:
  - suppression alias `~pages/*`
- `next.config.ts`:
  - suppression alias webpack `~pages`

### Verifications effectuees

- [ ] lint
- [ ] typecheck
- [ ] tests
- [x] build
- [x] verification manuelle

### Commandes executees

- `npm install` -> OK (85 packages supprimes, 0 vulnerability)
- `npm run build` -> OK (Next)
- `npm run dev` non lance volontairement (non necessaire, build + start HTTP deja verifies)
- Verification HTTP locale (`npm run start`) :
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`
  - `/mentions-legales` -> `200`
  - `/sitemap.xml` -> `200`
  - `/robots.txt` -> `200`

### Resultat

- Lot C termine: outillage Vite retire, scripts/dependances legacy retires, projet nettoye pour un workflow Next-only.
- Aucune importation active detectee de `react-router-dom`, `react-helmet-async` et outillage `vite`.

### Risques / points a surveiller

- Dettes hors scope inchangees: scroll modale, cle reCAPTCHA locale, refactor post-migration contenu+images.
- Verification QA manuelle recommandee (navigation, modale, formulaire contact) avant merge final.

### Prochaine etape recommandee

Executer une passe finale de qualite (lint + type-check + smoke manuel UI) puis preparer la PR de cloture migration Next-only.

## 14-05-2026 - Passe finale qualite Next-only (phase 25)

### Decision structurante

- [14-05-2026] [quality-gate] [validation finale lint/type-check/build + scan reliquats + HTTP] [confirmer la stabilite post-migration Next-only] [pre-merge gate valide]
- [14-05-2026] [next-env] [conserver la mise a jour auto `./.next/dev/types/routes.d.ts` -> `./.next/types/routes.d.ts`] [fichier genere automatiquement par Next apres build] [coherent et necessaire au cycle de types Next]

### Objectif

Executer une passe finale qualite sur le projet Next-only sans corriger les dettes hors scope.

### Scripts disponibles detectes

- `dev`
- `build`
- `start`
- `type-check`
- `lint`
- `dev:next`
- `build:next`
- `start:next`

### Verifications effectuees

- [x] lint
- [x] typecheck (`type-check`)
- [ ] tests (non detectes)
- [x] build
- [x] verification manuelle HTTP

### Commandes executees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale (`npm run start`) :
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`
  - `/mentions-legales` -> `200`
  - `/sitemap.xml` -> `200`
  - `/robots.txt` -> `200`

### Scan technique final

- References restantes a `react-router-dom` : non detecte (imports actifs)
- References restantes a `react-helmet-async` : non detecte (imports actifs)
- References restantes a `vite` / `@vitejs/plugin-react` / `vite/client` : non detecte
- Fichiers vides evidents (`src`, `scripts`, `public`) : non detecte
- TODO/FIXME restants detectes :
  - `src/ressources/content/contentTypes.ts` (TODO documentation interne, hors scope)

### Resultat

- Passe finale qualite validee (lint/type-check/build + routes HTTP principales).
- Aucun probleme bloquant detecte.
- Aucun correctif de code fonctionnel applique durant cette passe.

### Problemes restants (hors scope)

- scroll modale a l'ouverture
- cle publique reCAPTCHA manquante en local
- refactor post-migration contenu + images

### Prochaine etape recommandee

Lancer la revue humaine finale puis preparer le merge/PR de cloture de migration Next-only.

## 14-05-2026 - Correction dette scroll modale Next (phase 26)

### Decision structurante

- [14-05-2026] [modal-scroll] [ajout `scroll: false` sur les navigations query `project`] [eviter le scroll automatique en haut a l'ouverture/fermeture de modale] [URL `?project=` et historique navigateur conserves]

### Objectif

Corriger uniquement la dette UX de scroll a l'ouverture de la modale projet cote Next.

### Cause identifiee

- `ModalProjectProviderNext` utilisait `router.push(...)` sans option de scroll pour l'ouverture/fermeture de modale.
- Le changement de query param `project` declenchait le comportement de scroll par defaut de Next.

### Fichiers modifies

- `src/components/ModalProject/providers/ModalProjectProviderNext.tsx`
- `MIGRATION_LOG.md`

### Correction appliquee

- Dans `open(...)` : `router.push(..., { scroll: false })`
- Dans `close(...)` : `router.push(..., { scroll: false })`
- Aucun changement de design, contenu, ou logique metier hors modale.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP:
  - `/` -> `200`
  - `/?project=jaqen` -> `200`
  - `/portfolio?project=jaqen` -> `200`

### Statut dette

- Dette "scroll modale a l'ouverture" : **corrigee cote implementation**.
- Verification manuelle navigateur restant a faire pour validation UX complete:
  - ouvrir une modale depuis une position scroll basse et confirmer absence de remontée en haut ;
  - fermer la modale et verifier la position ;
  - tester precedent/suivant navigateur ;
  - verifier ouverture directe via `/?project=<slug>`.

### Dettes restantes (hors scope)

- cle publique reCAPTCHA manquante en local
- refactor post-migration contenu + images

### Prochaine etape recommandee

Effectuer une verification manuelle navigateur ciblee modale (scroll + back/forward), puis clore la dette UX si comportement confirme.

## 14-05-2026 - Diagnostic et correction config locale reCAPTCHA (phase 27)

### Decision structurante

- [14-05-2026] [recaptcha-config] [prioriser `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` et clarifier le message d'erreur] [projet Next-only, variable Next attendue en local] [reduction des erreurs de configuration environnement]

### Objectif

Corriger uniquement la configuration locale de la cle publique reCAPTCHA cote Next.js (sans ajouter de cle reelle).

### Cause probable

- Le projet affichait une erreur de cle manquante car la variable attendue n'etait pas renseignee localement.
- Le code utilisait encore le fallback legacy Vite en premiere position, ce qui rendait la source principale moins explicite en contexte Next-only.

### Fichiers modifies

- `.env.example`
- `src/services/recaptcha.ts`
- `MIGRATION_LOG.md`

### Correction appliquee

- `src/services/recaptcha.ts`:
  - priorite de lecture basculee vers `process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY`;
  - fallback legacy conserve (`VITE_RECAPTCHA_SITE_KEY`) pour compatibilite transitoire;
  - message d'erreur precise: ajouter `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` dans `.env.local`.
- `.env.example`:
  - ajout de `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=` (sans valeur).

### Variable attendue cote Next

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

### Statut `.env.local`

- `.env.local` est ignore par Git (non tracke).
- Aucune cle reelle ajoutee/affichee dans le code ou les logs.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Etapes manuelles restantes (developpeur)

1. Ajouter dans `.env.local`:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...`
2. Redemarrer le serveur:
   - `npm run dev`
3. Tester la page contact:
   - ouvrir `/contact`
   - soumettre le formulaire (sans utiliser de cle factice)
   - verifier disparition de l'erreur "cle publique reCAPTCHA manquante".

### Dettes restantes (hors scope)

- scroll modale a l'ouverture
- refactor post-migration contenu + images

## 14-05-2026 - Nettoyage variables d'environnement Next-only (phase 28)

### Decision structurante

- [14-05-2026] [env-next-only] [suppression des fallbacks `VITE_*` dans le code client Next] [projet stabilise en Next-only] [source de verite alignee sur `NEXT_PUBLIC_*`]

### Objectif

Nettoyer et documenter les variables d'environnement apres migration Next-only, sans exposer de valeur sensible.

### Fichiers modifies

- `.env.example`
- `src/services/recaptcha.ts`
- `src/services/contactApi.ts`
- `src/ressources/config/analytics.ts`
- `MIGRATION_LOG.md`

### Changements effectues

- `.env.example` mis a jour avec variables publiques Next utilisees:
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `NEXT_PUBLIC_CONTACT_ENDPOINT`
  - `NEXT_PUBLIC_GA_ID`
- Ajout d'une section de documentation (sans valeurs) pour variables server-side Cloudflare/Brevo:
  - `RECAPTCHA_SECRET`, `ALLOWED_ORIGINS`, `BREVO_API_KEY`, `BREVO_FROM_EMAIL`, `BREVO_FROM_NAME`, `BREVO_TO`, `BREVO_SUBJECT_PREFIX`
- `recaptcha.ts`:
  - retrait fallback `VITE_RECAPTCHA_SITE_KEY`
  - lecture unique `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - message technique ajuste pour `.env.local`
- `contactApi.ts`:
  - retrait fallback `VITE_CONTACT_ENDPOINT`
  - lecture unique `NEXT_PUBLIC_CONTACT_ENDPOINT`
  - message technique ajuste
- `analytics.ts`:
  - retrait fallback `VITE_GA_ID`
  - conservation `NEXT_PUBLIC_GA_ID` + fallback constant existant

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- `rg -n "VITE_" src` -> aucune occurrence active
- `.env.local` confirme ignore par Git (`git check-ignore .env.local`)

### Resultat

- Variables publiques Next documentees et alignees avec les usages code.
- Fallbacks `VITE_*` retires du code actif Next-only.
- Aucune valeur sensible ajoutee ou affichee.

### Action developpeur locale attendue

- Verifier que `.env.local` contient bien (sans commit) :
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `NEXT_PUBLIC_CONTACT_ENDPOINT`
  - `NEXT_PUBLIC_GA_ID` (si souhait de surcharger la valeur par defaut)
- Redemarrer `npm run dev` apres mise a jour des variables.

### Dettes restantes (hors scope)

- scroll modale a l'ouverture
- cle publique reCAPTCHA manquante en local (si non renseignee)
- refactor post-migration contenu + images

## 14-05-2026 - Cloture dettes resolues (phase 29)

### Statut dettes

- Dette UX scroll modale a l'ouverture : **corrigee et testee**.
- Dette reCAPTCHA/contact local : **corrigee et testee**.

### Precision configuration contact/reCAPTCHA

- La correction du flux contact en local necessitait une configuration correcte de `ALLOWED_ORIGINS` cote Cloudflare avec l'origine complete (exemple: `http://localhost:3000`).
- La cle publique reCAPTCHA est desormais correctement lue en local via la configuration Next attendue.

### Dette restante

- refactor post-migration contenu + images

## 15-05-2026 - Audit interface contenu avant remplacement markdown (phase 30)

### Decision structurante

- [15-05-2026] [content-interface-audit] [audit complet sans modification fonctionnelle] [preparer le remplacement de `react-markdown`, `**` et `[[ ]]` sans nouvelle convention] [plan de migration cible documente]

### Objectif

Auditer l'interface de contenu existante pour preparer le remplacement progressif de `react-markdown`, des syntaxes `** **` et `[[ ]]`, sans supprimer les mecanismes actuels a ce stade.

### Fichiers modifies

- `MIGRATION_LOG.md`

### Fichiers de types/interfaces analyses

- `src/ressources/content/contentTypes.ts`
- `src/ressources/content/portfolio/types.ts`
- `src/ressources/content/portfolio/schema.ts`
- `src/ressources/content/ctaContent/ctaContent.ts`
- `src/ressources/content/about/index.ts`
- `src/ressources/content/services/index.ts`
- `src/ressources/content/portfolio/portfolioContent.ts`
- `src/ressources/content/contact/contactContent.ts`
- `src/ressources/content/mention/mentionContent.ts`

### Interface de contenu existante identifiee (source de verite actuelle)

- Interface principale detectee: contenu type par domaine/page dans `src/ressources/content/contentTypes.ts`.
- Modele texte detecte: `RichText = string` (texte brut, sans AST typographique structure dans l'interface actuelle).
- Modele image detecte: `ImageContent { src: string; alt: string }`.
- Interfaces pages detectees:
  - `ServicePageContent`, `AboutPageContent`, `PortfolioPageContent`, `ContactPageContent`, `MentionPageContent`.
- Interface inline specifique pour mots/groupes stylises (hors markdown/pseudo-markdown): `Non detecte`.

### Representation actuelle des paragraphes et styles inline

- Paragraphes: stockes majoritairement sous forme de chaines `string` (`RichText`).
- Stylage inline gras: encode dans les chaines via syntaxe markdown `**...**`.
- Surlignage hero: encode via tokens custom `[[...]]` (parse cote rendu).
- Convention structuree alternative (sans markdown/pseudo-markdown) deja active pour le texte riche: `Non detecte`.

### Lien contenu -> images (etat actuel)

- Cas 1: assets importes dans les fichiers de contenu (`~/assets/...`) puis stockes dans `image.src` / `icon.src`.
- Cas 2: chemins publics string (`/pictures/...`) dans les donnees portfolio (`src/ressources/content/portfolio/data/*.ts`).
- Resolution runtime cote composants: helper `getAssetSrc(...)` dans `src/lib/getAssetSrc.ts` (string direct ou objet avec `.src`).

### Usages actifs detectes

- `react-markdown` (imports actifs):
  - `src/animations/AnimatedTitle/AnimatedTitle.tsx`
  - `src/components/PageIntro/PageIntro.tsx`
  - `src/components/Accordion/AccordionItem/AccordionItem.tsx`
  - `src/_pages/About/AboutSection/AboutSection.tsx`
  - `src/_pages/Services/ServicesSection/ServicesSection.tsx`
  - `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
  - `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
  - `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
  - `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
  - `src/app/(site)/navigation/CallToActionNext.tsx`

- `remark-breaks` (imports actifs):
  - `src/animations/AnimatedTitle/AnimatedTitle.tsx`
  - `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
  - `src/app/(site)/navigation/CallToActionNext.tsx`

- `getAssetSrc` (definition + usages actifs):
  - `src/lib/getAssetSrc.ts`
  - `src/components/HeaderSection/HeaderSection.tsx`
  - `src/components/CardProcess/CardProcess.tsx`
  - `src/_pages/About/AboutSection/AboutSection.tsx`
  - `src/_pages/Services/ServicesSection/ServicesSection.tsx`
  - `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
  - `src/_pages/Contact/ContactInfo/ContactInfo.tsx`

- Syntaxe `[[` / `]]` (usages actifs):
  - contenu: `src/ressources/content/home/hero.ts`
  - parsing: `src/animations/TypewriterText/TypewriterText.tsx`

- Syntaxe `**` (usages actifs contenu):
  - detectee dans plusieurs fichiers de `src/ressources/content/**`:
    - `home/hero.ts`, `home/servicesPreview.ts`, `home/projectPreviewContent.ts`
    - `about/parcours.ts`, `about/expertise.ts`, `about/technologies.ts`
    - `services/headerIntro.ts`, `services/devWeb.ts`, `services/devApp.ts`, `services/maintenance.ts`, `services/seo.ts`
    - `portfolio/portfolioContent.ts`
    - `contact/contactContent.ts`
    - `ctaContent/ctaContent.ts`

### Composants de rendu concernes

- Rendu markdown general:
  - `PageIntro`
  - `AboutSection`
  - `ServicesSection`
  - `AccordionItem`
  - `ServicesPreview` / `CardServiceNext`
  - `ProjectPreview`
  - `SectionBlock` (mentions)
  - `CallToActionNext`
- Rendu markdown anime:
  - `AnimatedTitle`
- Rendu pseudo-markdown `[[...]]`:
  - `TypewriterText`
- Rendu image couple au contenu:
  - `HeaderSection`, `AboutSection`, `ServicesSection`, `CardProcess`, `CardServiceNext`, `ContactInfo`

### Pages/sections concernees

- Home:
  - `Hero` (titre markdown + texte `[[...]]`)
  - `ServicesPreview`
  - `ProjectPreview`
- About:
  - `AboutSection` (3 sections de contenu)
- Services:
  - `PageIntro`
  - `ServicesSection`
  - `AccordionItem`
- Portfolio:
  - `PageIntro`
- Contact:
  - `PageIntro`
- Mentions legales:
  - `SectionBlock`
- Navigation/layout:
  - `CallToActionNext`

### Plan de migration propose (markdown/pseudo-markdown -> interface existante)

1. Etablir une matrice champ-par-champ des `RichText` actuellement rendus via `react-markdown` ou `[[...]]` (sans changer le schema pour l'instant).
2. Prioriser les rendus les plus simples (paragraphes avec `**` seulement, sans liens complexes) pour retrait progressif de `react-markdown`.
3. Remplacer, composant par composant, le rendu markdown par un rendu base sur l'interface de contenu existante deja en place (pas de nouvelle convention globale dans ce lot).
4. Migrer en dernier les cas specifiques:
   - `AnimatedTitle` (markdown anime),
   - `SectionBlock` (line breaks via `remark-breaks`),
   - `TypewriterText` (`[[...]]`).
5. Garder `getAssetSrc` en place pendant la migration de texte, puis traiter le refactor contenu+images dans la dette dediee post-migration.
6. Supprimer `react-markdown` / `remark-breaks` uniquement apres disparition complete des imports actifs.

### Premiere section/page test recommandee

- Recommandation: `src/components/PageIntro/PageIntro.tsx` sur la page `/services`.
- Raison: composant isole, utilise sur plusieurs pages, structure simple (un bloc de texte), impact limite et reversible.

### Commandes d'analyse executees (sans build)

- `git branch --show-current; git status --short`
- `rg -n "react-markdown" src`
- `rg -n "remark-breaks" src`
- `rg -n "getAssetSrc" src`
- `rg -n "\[\[|\]\]" src`
- `rg -n "\*\*" src`
- `rg -l "\*\*" src/ressources/content`
- lectures ciblees (`Get-Content -Raw`) des types, contenus et composants de rendu concernes.

### Resultat

- Audit termine sans modification de code fonctionnel.
- Zone de migration et ordre de traitement clarifies pour la suppression progressive de markdown/pseudo-markdown.

### Risques / points a surveiller

- Retirer `react-markdown` trop tot peut casser les contenus `**`, liens markdown et retours ligne.
- Le token `[[...]]` est couple a `TypewriterText`; un remplacement non planifie peut casser l'effet Hero.
- Le couplage image `assets importes` + `getAssetSrc` reste une contrainte a traiter dans la dette post-migration contenu/images.

### Prochaine etape recommandee

Executer un micro-lot de POC sur `PageIntro` (`/services`) pour valider le remplacement de rendu sans markdown, puis etendre composant par composant selon la priorisation ci-dessus.
## 15-05-2026 - Audit complet des syntaxes Markdown / pseudo-Markdown (phase 31)

### Decision structurante

- [15-05-2026] [markdown-audit-global] [cartographie complete des syntaxes et renderers actifs] [preparer la suppression definitive de `react-markdown`/`remark-breaks` sans nouvelle convention] [plan de migration incremental base sur l'interface de contenu existante]

### Objectif

Auditer tous les signes, syntaxes et usages Markdown/pseudo-Markdown actifs dans le projet pour preparer leur remplacement par l'interface de contenu existante.

### Fichiers modifies

- `MIGRATION_LOG.md`

### Commandes d'analyse executees

- `git branch --show-current; git status --short`
- `rg -n "react-markdown" src`
- `rg -n "remark-breaks" src`
- `rg -n "getAssetSrc" src`
- `rg -n "\[\[|\]\]" src`
- `rg -n "\*\*[^*]+\*\*" src/ressources/content`
- `rg -n "\[[^\]]+\]\([^\)]+\)" src/ressources/content`
- `rg -n "!\[[^\]]*\]\([^\)]+\)" src` (aucun match)
- `rg -n "(?m)^\s{0,3}#{1,6}\s" src/ressources/content src/_pages src/components src/app` (aucun match)
- `rg -n "(?m)^\s{0,3}>\s" src/ressources/content src/_pages src/components src/app` (aucun match)
- `rg -n "(?m)^\s{0,3}(---|\*\*\*|___)\s*$" src/ressources/content src/_pages src/components src/app` (aucun match)
- `rg -n "(?m)^\s{0,3}(?:-|\*|\d+\.)\s+" src/ressources/content`
- `rg -n "\\n\\n|\\n" src/ressources/content`
- `rg -n "\\x60" src/ressources/content`
- `rg -n "<[a-zA-Z][^>]*>" src/ressources/content`
- lectures ciblees (`Get-Content -Raw`) des composants/pages de rendu et des fichiers de contenu concernes.

### Usages actifs des renderers / helpers

#### `react-markdown` (actif)

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/components/PageIntro/PageIntro.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`

#### `remark-breaks` (actif)

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`

#### `getAssetSrc` (actif)

- Definition: `src/lib/getAssetSrc.ts`
- Usages:
  - `src/components/HeaderSection/HeaderSection.tsx`
  - `src/components/CardProcess/CardProcess.tsx`
  - `src/_pages/About/AboutSection/AboutSection.tsx`
  - `src/_pages/Services/ServicesSection/ServicesSection.tsx`
  - `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
  - `src/_pages/Contact/ContactInfo/ContactInfo.tsx`

### Audit des syntaxes detectees (contenu editorial)

#### Markdown reel

- `src/ressources/content/home/hero.ts`
  - syntaxes: `**...**`, `\n` (titre multiline)
  - type contenu: hero title
  - rendu probable: `Hero` -> `AnimatedTitle` (`react-markdown` + `remark-breaks`)
  - risque: **eleve**

- `src/ressources/content/home/servicesPreview.ts`
  - syntaxes: `**...**`
  - type contenu: intro + cards services
  - rendu probable: `ServicesPreview`, `CardServiceNext` (`react-markdown`)
  - risque: **eleve**

- `src/ressources/content/home/projectPreviewContent.ts`
  - syntaxes: `**...**`
  - type contenu: texte intro projets
  - rendu probable: `ProjectPreview` (`react-markdown`)
  - risque: **moyen**

- `src/ressources/content/services/headerIntro.ts`
  - syntaxes: `**...**`, `*...*` (italique)
  - type contenu: intro services
  - rendu probable: `PageIntro` (`react-markdown`)
  - risque: **eleve**

- `src/ressources/content/services/devWeb.ts`, `devApp.ts`, `maintenance.ts`, `seo.ts`
  - syntaxes: `**...**`
  - type contenu: description sections services
  - rendu probable: `ServicesSection` (`react-markdown`)
  - risque: **eleve**

- `src/ressources/content/about/parcours.ts`, `expertise.ts`, `technologies.ts`
  - syntaxes: `**...**`, texte multilignes
  - type contenu: sections a-propos
  - rendu probable: `AboutSection` (`react-markdown`)
  - risque: **eleve**

- `src/ressources/content/portfolio/portfolioContent.ts`
  - syntaxes: `**...**`
  - type contenu: intro + descriptions des categories
  - rendu probable: `PageIntro` (`react-markdown`)
  - risque: **moyen**

- `src/ressources/content/contact/contactContent.ts`
  - syntaxes: `**...**`
  - type contenu: intro contact
  - rendu probable: `PageIntro` (`react-markdown`)
  - risque: **moyen**

- `src/ressources/content/mention/mentionContent.ts`
  - syntaxes: liens markdown `[label](url)` (mailto/tel/http/https), multilignes
  - type contenu: paragraphes legaux
  - rendu probable: `SectionBlock` (`react-markdown` + `remark-breaks`)
  - risque: **eleve**

- `src/ressources/content/ctaContent/ctaContent.ts`
  - syntaxes: `**...**`, `\n`
  - type contenu: bloc CTA cross-page
  - rendu probable: `CallToActionNext` (`react-markdown` + `remark-breaks`)
  - risque: **eleve**

#### Pseudo-Markdown custom

- `src/ressources/content/home/hero.ts`
  - syntaxes: `[[...]]`
  - type contenu: texte hero typewriter
  - rendu probable: `TypewriterText` (parser custom TOKEN_START/TOKEN_END)
  - risque: **eleve**

#### Texte ressemblant a du Markdown (a qualifier)

- `src/ressources/content/portfolio/data/applications.ts`
- `src/ressources/content/portfolio/data/ecommerce.ts`
  - syntaxes detectees: `\n\n` (separateurs de paragraphes/lignes)
  - type contenu: description modale + accordion portfolio
  - rendu probable:
    - `ModalProjectNext` (description en `<p>` avec `white-space: pre-line`)
    - `AccordionItem` (description via `react-markdown`)
  - classification: **texte structure par sauts de ligne**, pas de balises markdown explicites (`**`, `[]()`, `#`, etc.)
  - risque: **moyen**

### Syntaxes recherchees mais non detectees (usages actifs)

- Titres markdown `#`, `##`, `###` dans contenus applicatifs: `Non detecte`.
- Listes markdown explicites `- item`, `* item`, `1. item` dans contenus editoriaux: `Non detecte`.
- Images markdown `![alt](url)`: `Non detecte`.
- Citations markdown `> ...` dans contenus applicatifs: `Non detecte`.
- Separateurs markdown `---`, `***`, `___` dans contenus applicatifs: `Non detecte`.
- Blocs de code markdown ``` dans `src`: `Non detecte`.

### Distinction par categorie

#### 1) Usages dans le contenu editorial (a migrer)

- Tous les fichiers listes dans "Markdown reel", "Pseudo-Markdown custom" et "Texte ressemblant a du Markdown".

#### 2) Usages dans les composants de rendu (a migrer)

- Tous les composants listant `react-markdown`/`remark-breaks` dans cette entree.
- `TypewriterText` pour `[[...]]`.

#### 3) Usages dans documentation/commentaires (a ne pas migrer comme contenu)

- `src/ressources/content/ctaContent/ctaContent.ts` (commentaire de documentation interne: exemples markdown)
- Commentaires bloc `/* ... */` dans composants/pages (syntaxes `*` detectees par regex listes)
- Fichiers `.md` (MIGRATION/AGENTS/CODE_REVIEW): hors contenu runtime.

#### 4) Faux positifs identifies (a exclure)

- `src/ressources/content/mention/mentionContent.ts`: regex `.replace(/^\s*\n/, ...)` detectee lors scan italique -> ce n'est pas du markdown editorial.
- `src/ressources/content/portfolio/schema.ts`: backticks dans messages Zod (ex: `` `id` ``) -> message technique, pas contenu rendu markdown.
- `src/ressources/content/ctaContent/ctaContent.ts`: motif `<...>` detecte dans commentaire TypeScript (generic `Partial<Record<...>>`) -> pas HTML injecte en contenu.
- detections `*` issues de commentaires JSDoc/blocks dans `src/components/**`, `src/_pages/**`, `src/app/**` -> pas listes markdown editoriales.

### Plan de migration propose (sans nouvelle convention)

1. Etablir un inventaire "champ contenu -> composant renderer" comme reference de migration (home/services/about/portfolio/contact/mentions/cta).
2. Remplacer en premier les zones simples `PageIntro` (contact/services/portfolio) ou le markdown est limite a `**...**`.
3. Migrer ensuite `ServicesSection` + `AboutSection` + `CardServiceNext` (fort volume de `**...**`).
4. Traiter les contenus legaux et CTA (`SectionBlock`, `CallToActionNext`) en conservant liens et retours ligne sans `react-markdown`.
5. Isoler la migration du pseudo-markdown `[[...]]` dans `TypewriterText` apres stabilisation des blocs precedents.
6. Harmoniser les textes portfolio `\n\n` (modal + accordion) avec l'interface existante sans introduire de nouvelle syntaxe.
7. Supprimer `react-markdown` / `remark-breaks` uniquement apres disparition complete des imports actifs et verification manuelle des pages.

### Premiere section/page test recommandee

- **Test recommande:** `PageIntro` sur `/services` (`src/components/PageIntro/PageIntro.tsx` + `src/ressources/content/services/headerIntro.ts`).
- **Pourquoi:** surface faible, syntaxes connues (`**`, `*`), impact visuel limite, composant reutilise (gain de validation transverse).

### Resultat

- Audit global termine.
- Aucun fichier source fonctionnel modifie.
- Aucun build lance (conforme a la consigne).
## 15-05-2026 - Migration test PageIntro Markdown -> interface existante (phase 32)

### Decision structurante

- [15-05-2026] [pageintro-migration-test] [mode de rendu `plain` ajoute dans `PageIntro` avec compatibilite markdown conservee] [migrer `/services` sans casser `/portfolio` et `/contact`] [micro-lot valide pour migration progressive]

### Objectif

Realiser un premier test de migration sur `PageIntro` en remplacant le markdown du contenu `/services`, tout en preservant les autres usages de `PageIntro`.

### Usages `PageIntro` identifies avant modification

- `src/_pages/Services/Services.tsx` -> `introServices.text` (`src/ressources/content/services/headerIntro.ts`)
- `src/_pages/Portfolio/Portfolio.tsx` -> `portfolioContent.intro.text` (`src/ressources/content/portfolio/portfolioContent.ts`)
- `src/_pages/Contact/Contact.tsx` -> `contactContent.intro.text` (`src/ressources/content/contact/contactContent.ts`)

### Perimetre applique

- Migration active uniquement pour `/services`.
- Compatibilite legacy conservee pour `/portfolio` et `/contact` (markdown inchange).
- Types globaux conserves (`IntroContent.text: RichText = string`).

### Fichiers modifies

- `src/components/PageIntro/PageIntro.tsx`
- `src/_pages/Services/Services.tsx`
- `src/ressources/content/services/headerIntro.ts`
- `MIGRATION_LOG.md`

### Changements effectues

- `PageIntro`:
  - ajout d'une prop optionnelle `mode?: "markdown" | "plain"` (defaut `markdown` pour retro-compatibilite)
  - ajout d'un rendu `plain` sans `react-markdown`, avec conservation des retours ligne (`\n`) via `<br />`.
- `Services.tsx`:
  - activation du mode migre: `<PageIntro text={intro.text} mode="plain" />`.
- `headerIntro.ts`:
  - suppression des syntaxes markdown dans `introServices.text` (`**...**`, `*...*`) sans changer le texte lexical.

### Interface existante utilisee

- `IntroContent` + `RichText` (`string`) dans `src/ressources/content/contentTypes.ts`.
- Aucun nouveau type/interface introduit.

### Syntaxes remplacees (scope test)

- Fichier: `src/ressources/content/services/headerIntro.ts`
- Remplacements:
  - gras markdown `**...**` -> texte brut
  - italique markdown `*...*` -> texte brut

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
  - routes generees incluant `/services`, `/portfolio`, `/contact`.

### Resultat

- Migration test `PageIntro` effectuee sur `/services`.
- `/portfolio` et `/contact` restent compatibles via mode markdown par defaut.
- Aucun blocage lint/type/build.

### Risques / points a surveiller

- Le mode `plain` retire le rendu typographique markdown (gras/italique) sur `/services` pour le bloc `PageIntro`.
- Verification visuelle manuelle recommandee sur:
  - `/services` (line-breaks et hierarchie visuelle du texte intro)
  - `/portfolio` et `/contact` (absence de regression via mode markdown legacy).

### Prochaine etape recommandee

Migrer ensuite `PageIntro` de `/contact` ou `/portfolio` en reprenant la meme strategie micro-lot, puis supprimer la branche legacy markdown de `PageIntro` une fois tous ses contenus intro convertis.
## 15-05-2026 - Correction migration test PageIntro /services (phase 33)

### Decision structurante

- [15-05-2026] [pageintro-style-fix] [retour temporaire au rendu markdown pour `/services`] [la font speciale de GELYOS depend de `<em>` + style CSS existant] [regression visuelle corrigee sans inventer de nouvelle interface inline]

### Objectif

Corriger la regression visuelle apparue sur `/services` apres la migration test `mode="plain"` de `PageIntro`, tout en gardant le scope limite et sans inventer de nouvelle convention de contenu.

### Cause de la perte de style

- Avant migration test: `introServices.text` contenait `*GELYOS*`.
- `PageIntro` rendait ce marqueur via `react-markdown` en balise `<em>`.
- `PageIntro.module.scss` applique `font-family: $font-title` sur `em`.
- Apres passage en `mode="plain"`: plus de parsing markdown, donc plus de `<em>` -> perte de la font specifique.

### Verification de l'interface existante

- Interface contenu actuelle detectee pour l'intro: `IntroContent.text` (`RichText = string`).
- Aucune interface inline typee existante detectee pour representer nativement des spans styles (emphase/gras/brand word) sans marqueurs markdown.
- Conclusion: impossibilite de finaliser la migration `PageIntro` hors markdown sans introduire une nouvelle interface (hors scope demande).

### Correction appliquee (minimale)

- Rebranchement `/services` sur le rendu markdown existant de `PageIntro`.
- Restauration des marqueurs markdown de `introServices.text` (`**...**`, `*GELYOS*`).
- Suppression du chemin `mode="plain"` introduit au test pour eviter une nouvelle perte de styles.

### Fichiers modifies

- `src/components/PageIntro/PageIntro.tsx`
- `src/_pages/Services/Services.tsx`
- `src/ressources/content/services/headerIntro.ts`
- `MIGRATION_LOG.md`

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Rendu attendu `/services`

- `GELYOS` retrouve sa font particuliere (via `*GELYOS*` -> `<em>` -> style `PageIntro.module.scss`).
- Les autres mots stylises de l'intro services (marques en `**...**`) restent rendus comme avant.
- Verification visuelle navigateur: a confirmer manuellement.

### Usages `react-markdown` restants

- `src/components/PageIntro/PageIntro.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`
- `src/animations/AnimatedTitle/AnimatedTitle.tsx`

### Prochaine etape recommandee

Valider humainement la proposition d'une interface inline typee minimale (ex. segments/styles) avant toute nouvelle tentative de migration de `PageIntro` hors `react-markdown`.
## 15-05-2026 - Definition interface inline typee minimale (phase 34)

### Decision structurante

- [15-05-2026] [inline-content-types] [ajout d'une interface inline typee minimale dans `contentTypes.ts`] [preparer le remplacement progressif markdown/pseudo-markdown sans casser l'existant] [cohabitation `string` legacy + segments types]

### Objectif

Definir officiellement une interface inline typee minimale pour remplacer progressivement Markdown/pseudo-Markdown, sans migrer les contenus ni les renderers dans cette etape.

### Fichiers modifies

- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Interface ajoutee

- Segments inline minimaux:
  - `InlineTextSegment` (`type: 'text'`)
  - `InlineStrongSegment` (`type: 'strong'`)
  - `InlineEmphasisSegment` (`type: 'emphasis'`)
  - `InlineAccentSegment` (`type: 'accent'`)
  - `InlineLinkSegment` (`type: 'link'`, `href`)
  - `InlineLineBreakSegment` (`type: 'lineBreak'`)
- Union:
  - `InlineContentSegment`
  - `InlineContent = InlineContentSegment[]`
- Type de transition progressive:
  - `ProgressiveRichText = RichText | InlineContent`

### Correspondance anciens marqueurs -> nouveaux types

- `texte simple` -> `InlineTextSegment`
- `**texte**` -> `InlineStrongSegment`
- `*texte*` -> `InlineEmphasisSegment`
- `[[texte]]` -> `InlineAccentSegment`
- `[texte](url)` -> `InlineLinkSegment`
- retours ligne markdown / separateurs de ligne -> `InlineLineBreakSegment`

### Raison des noms choisis

- Prefixe `Inline` pour distinguer clairement cette couche des types de page existants (`ServicePageContent`, `AboutPageContent`, etc.).
- Suffixe `Segment` pour exprimer une structure lineaire simple (petits blocs ordonnes), sans architecture complexe.
- `Emphasis` conserve la semantique qui remplace l'usage courant de `*...*` (notamment GELYOS en font titre).
- `Accent` reserve un canal explicite pour l'ancien pseudo-marqueur `[[...]]`.
- `ProgressiveRichText` explicite la cohabitation temporaire entre `string` legacy et nouveau format type.

### Scope respecte

- Aucun contenu migre dans cette phase.
- Aucun composant de rendu modifie.
- `PageIntro` non modifie.
- `react-markdown`, `remark-breaks`, `getAssetSrc` conserves.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Prochaine etape recommandee

Introduire un micro-renderer cible pour `PageIntro` (opt-in sur `/services` uniquement) qui accepte `ProgressiveRichText`, puis migrer un seul contenu pilote en segments inline sans toucher les autres pages.
## 15-05-2026 - Micro-renderer opt-in PageIntro + migration `introServices` (phase 35)

### Decision structurante

- [15-05-2026] [pageintro-inline-poc] [PageIntro accepte `ProgressiveRichText` avec fallback markdown legacy] [activer la nouvelle interface inline sans casser `/portfolio` et `/contact`] [migration pilote limitee a `introServices`]

### Objectif

Ajouter un micro-renderer inline type uniquement pour `PageIntro` quand le contenu est au format `InlineContent`, tout en conservant `react-markdown` pour les contenus string legacy.

### Fichiers modifies

- `src/ressources/content/contentTypes.ts`
- `src/components/PageIntro/PageIntro.tsx`
- `src/ressources/content/services/headerIntro.ts`
- `MIGRATION_LOG.md`

### Interface utilisee

- `ProgressiveRichText = RichText | InlineContent`
- Segments utilises dans ce lot:
  - `text`
  - `strong`
  - `emphasis`

### Changements effectues

- `contentTypes.ts`:
  - `IntroContent.text` migre de `RichText` vers `ProgressiveRichText` (cohabitation string + inline type).
- `PageIntro.tsx`:
  - prop `text` passe en `ProgressiveRichText`.
  - ajout d'un type-guard `isInlineContent`.
  - ajout du renderer inline (segments -> balises HTML):
    - `text` -> `<span>`
    - `strong` -> `<strong>`
    - `emphasis` -> `<em>`
    - `accent` -> `<span data-inline="accent">`
    - `link` -> `<a href="...">`
    - `lineBreak` -> `<br />`
  - fallback conserve: si `text` est string, rendu inchange via `react-markdown`.
- `services/headerIntro.ts`:
  - migration de `introServices.text` vers `InlineContent`.
  - remplacement des marqueurs:
    - `**...**` -> segments `strong`
    - `*GELYOS*` -> segment `emphasis`
    - texte normal -> segments `text`

### Contenu migre

- `introServices.text` uniquement (`src/ressources/content/services/headerIntro.ts`).

### Contenus non migres

- `src/ressources/content/portfolio/portfolioContent.ts` (string markdown conserve)
- `src/ressources/content/contact/contactContent.ts` (string markdown conserve)

### Comportement legacy conserve

- `/portfolio` et `/contact` continuent d'utiliser le mode legacy string + `react-markdown` dans `PageIntro`.
- Aucun autre composant/page migre dans ce lot.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale (smoke):
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`

### Usages `react-markdown` restants

- `src/components/PageIntro/PageIntro.tsx` (fallback legacy string)
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`
- `src/animations/AnimatedTitle/AnimatedTitle.tsx`

### Risques / points a surveiller

- Verification visuelle manuelle a faire sur `/services`:
  - `GELYOS` doit conserver la font appliquee au `<em>`.
  - les segments `strong` doivent conserver le rendu attendu des anciens `**...**`.
- Verification visuelle manuelle de non-regression sur `/portfolio` et `/contact` (fallback markdown legacy).

### Prochaine etape recommandee

Migrer ensuite un second contenu `PageIntro` (contact ou portfolio) vers `InlineContent`, puis preparer la sortie progressive de `react-markdown` pour `PageIntro` seulement une fois ses trois usages convertis.
## 15-05-2026 - Migration `PageIntro` completee (`/portfolio` + `/contact`) (phase 36)

### Decision structurante

- [15-05-2026] [pageintro-inline-complete] [migration des 2 derniers contenus intro vers `InlineContent` + retrait fallback markdown dans `PageIntro`] [les 3 usages PageIntro sont maintenant inline types] [react-markdown conserve ailleurs dans le projet]

### Objectif

Migrer les 2 derniers contenus `PageIntro` (`/portfolio`, `/contact`) vers `InlineContent` et supprimer le fallback `react-markdown` uniquement dans `PageIntro`.

### Fichiers modifies

- `src/ressources/content/portfolio/portfolioContent.ts`
- `src/ressources/content/contact/contactContent.ts`
- `src/components/PageIntro/PageIntro.tsx`
- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Contenus migres

- `portfolioContent.intro.text` -> `InlineContent`
  - conversion `**...**` -> segments `strong`
  - texte normal -> segments `text`
- `contactContent.intro.text` -> `InlineContent`
  - conversion `**...**` -> segments `strong`
  - texte normal -> segments `text`

### Contenus non migres (volontaire)

- `services` deja migre precedemment (`introServices.text`)
- non migres dans ce lot:
  - `ServicesSection`
  - `AboutSection`
  - `SectionBlock`
  - `CallToActionNext`
  - `AnimatedTitle`

### `PageIntro` (renderer)

- fallback `react-markdown` **retire** de `PageIntro`.
- `PageIntro` rend maintenant uniquement `InlineContent`.
- rendu semantique confirme:
  - `strong` -> `<strong>`
  - `emphasis` -> `<em>`

### Typage

- `IntroContent.text` passe en `InlineContent` (au lieu de `ProgressiveRichText`) car les 3 usages `PageIntro` sont maintenant migres.
- `ProgressiveRichText` reste defini dans `contentTypes.ts` pour les migrations futures hors `PageIntro`.

### Comportement legacy conserve

- `react-markdown` est conserve dans le projet pour les autres composants non migres.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale:
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`

### Usages `react-markdown` restants dans le projet

- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/app/(site)/navigation/CallToActionNext.tsx`
- `src/animations/AnimatedTitle/AnimatedTitle.tsx`

### Risques / points a verifier manuellement

- verifier le rendu visuel des segments `strong` sur:
  - `/services`
  - `/portfolio`
  - `/contact`
- verifier que `GELYOS` conserve bien sa font specifique dans `/services` (segment `emphasis` -> `<em>` style existant).

### Prochaine etape recommandee

Demarrer la migration inline du composant suivant le plus simple hors `PageIntro` (recommande: `CallToActionNext`), en conservant le meme schema incremental segment par segment.
## 15-05-2026 - Migration `CallToActionNext` vers `InlineContent` (phase 37)

### Decision structurante

- [15-05-2026] [cta-inline-migration] [migration du contenu CTA et du renderer `CallToActionNext` vers `InlineContent`] [retirer markdown uniquement sur ce composant] [cohabitation maintenue pour autres composants encore en markdown]

### Objectif

Migrer uniquement `CallToActionNext` et son contenu associe vers `InlineContent`, afin de supprimer son usage local de `react-markdown` / `remark-breaks`.

### Fichiers modifies

- `src/app/(site)/navigation/CallToActionNext.tsx`
- `src/ressources/content/ctaContent/ctaContent.ts`
- `MIGRATION_LOG.md`

### Contenu CTA migre

- Fichier: `src/ressources/content/ctaContent/ctaContent.ts`
- Conversion de `text` vers `InlineContent` pour les entrees:
  - `home`
  - `services`
  - `aPropos`
  - `portfolio`

### Syntaxes markdown remplacees

- `**...**` -> segments `strong`
- retour ligne `\n` (home) -> segment `lineBreak`
- texte normal -> segments `text`
- syntaxes detectees mais absentes dans ce contenu:
  - `*...*` -> aucun usage
  - `[[...]]` -> aucun usage
  - `[...](...)` -> aucun usage

### Adaptation `CallToActionNext`

- retrait des imports:
  - `react-markdown`
  - `remark-breaks`
- ajout d'un micro-renderer inline local (mapping segments -> balises):
  - `text` -> `<span>`
  - `strong` -> `<strong>`
  - `emphasis` -> `<em>`
  - `accent` -> `<span data-inline="accent">`
  - `link` -> `<a href="...">`
  - `lineBreak` -> `<br />`
- structure visuelle conservee:
  - wrapper `<div className={styles.text}>`
  - rendu en `<p>` avec meme bloc CSS.

### Scope respecte

- Aucun autre composant migre.
- Aucune migration de `ServicesSection`, `AboutSection`, `SectionBlock`, `AnimatedTitle`, cards Home.
- `react-markdown` et `remark-breaks` conserves au niveau projet.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale:
  - `/` -> `200`
  - `/a-propos` -> `200`
  - `/services` -> `200`
  - `/portfolio` -> `200`
  - `/contact` -> `200`

### Usages `react-markdown` restants dans le projet

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`

### Risques / points a verifier manuellement

- verifier le rendu visuel exact du texte CTA sur:
  - `/`
  - `/a-propos`
  - `/services`
  - `/portfolio`
- verifier en particulier:
  - rendu des segments `strong` (semantique `<strong>`)
  - retour ligne sur le CTA home (segment `lineBreak`)
  - espacement vertical du bloc texte CTA.

### Prochaine etape recommandee

Migrer le composant markdown suivant le plus simple (recommande: `ServicesSection` ou `AboutSection`) en reutilisant la meme logique inline segmentee, sans toucher les autres zones en parallelle.
## 15-05-2026 - Migration `ServicesSection` vers `InlineContent` (phase 38)

### Decision structurante

- [15-05-2026] [services-section-inline] [migration du renderer `ServicesSection` et des champs `text` services vers `InlineContent`] [retirer markdown uniquement dans ce composant] [accordions et autres renderers markdown conserves]

### Objectif

Migrer uniquement `ServicesSection` et les contenus services associes rendus par ce composant, afin de supprimer son usage local de `react-markdown`.

### Fichiers modifies

- `src/_pages/Services/ServicesSection/ServicesSection.tsx`
- `src/ressources/content/contentTypes.ts`
- `src/ressources/content/services/devWeb.ts`
- `src/ressources/content/services/devApp.ts`
- `src/ressources/content/services/maintenance.ts`
- `src/ressources/content/services/seo.ts`
- `MIGRATION_LOG.md`

### Champs migres vers `InlineContent`

- `ServiceSectionContent.text` (`contentTypes.ts`) : `RichText` -> `InlineContent`
- Champs contenus migres:
  - `devWeb.text`
  - `devApp.text`
  - `maintenance.text`
  - `seo.text`

### Contenus services migres

- fichiers:
  - `src/ressources/content/services/devWeb.ts`
  - `src/ressources/content/services/devApp.ts`
  - `src/ressources/content/services/maintenance.ts`
  - `src/ressources/content/services/seo.ts`
- seuls les champs `text` rendus par `ServicesSection` ont ete modifies.
- `ServiceAccordionItems` non migres (hors scope, encore rendus par `AccordionItem`).

### Syntaxes markdown remplacees

- `**...**` -> segments `strong`
- texte normal -> segments `text`
- syntaxes non detectees dans ces champs:
  - `*...*`
  - `[[...]]`
  - `[texte](url)`
- retours ligne: transformes en continuite textuelle pour conserver le rendu paragraphe unique de `ServicesSection`.

### Adaptation du composant

- `ServicesSection.tsx`:
  - retrait import `react-markdown`.
  - ajout d'un micro-renderer inline local (`InlineContent` -> balises HTML).
  - rendu semantique:
    - `strong` -> `<strong>`
    - `emphasis` -> `<em>`
    - `accent` -> `<span data-inline="accent">`
    - `link` -> `<a href="...">`
    - `lineBreak` -> `<br />`
- `remark-breaks` non utilise auparavant dans ce composant (rien a retirer).

### Scope respecte

- Aucun changement sur:
  - `AboutSection`
  - `SectionBlock`
  - `AnimatedTitle`
  - cards Home
  - `AccordionItem`
- Aucune modification package/dependances.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale:
  - `/services` -> `200`

### Usages `react-markdown` restants dans le projet

- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/services`:
  - rendu exact des segments `strong` (poids/ton graphique)
  - espacements et retours ligne dans les textes des 4 sections
  - absence de regression responsive dans les colonnes.

### Prochaine etape recommandee

Migrer ensuite `AboutSection` ou `AccordionItem` (un seul composant a la fois) pour poursuivre la suppression progressive des usages markdown restants.
## 15-05-2026 - Migration `AboutSection` vers `InlineContent` (phase 39)

### Decision structurante

- [15-05-2026] [about-section-inline] [migration du renderer `AboutSection` et des champs `description` about vers `InlineContent`] [retirer markdown uniquement dans ce composant] [autres renderers markdown conserves]

### Objectif

Migrer uniquement `AboutSection` et les contenus `/a-propos` qu'il rend, afin de supprimer son usage local de `react-markdown`.

### Fichiers modifies

- `src/_pages/About/AboutSection/AboutSection.tsx`
- `src/ressources/content/contentTypes.ts`
- `src/ressources/content/about/parcours.ts`
- `src/ressources/content/about/expertise.ts`
- `src/ressources/content/about/technologies.ts`
- `MIGRATION_LOG.md`

### Champs migres vers `InlineContent`

- `AboutSectionContent.description` (`contentTypes.ts`) : `RichText` -> `InlineContent`
- Champs contenus migres:
  - `parcours.description`
  - `expertise.description`
  - `technologies.description`

### Syntaxes markdown remplacees

- `**...**` -> segments `strong`
- retours ligne markdown (double espace + newline) -> segments `lineBreak`
- texte normal -> segments `text`
- syntaxes non detectees dans ces champs:
  - `*...*`
  - `[[...]]`
  - `[texte](url)`

### Adaptation du composant

- `AboutSection.tsx`:
  - retrait de l'import `react-markdown`.
  - ajout d'un micro-renderer inline local (`InlineContent` -> balises HTML):
    - `text` -> `<span>`
    - `strong` -> `<strong>`
    - `emphasis` -> `<em>`
    - `accent` -> `<span data-inline="accent">`
    - `link` -> `<a href="...">`
    - `lineBreak` -> `<br />`
- `remark-breaks` n'etait pas utilise dans `AboutSection` (aucun retrait necessaire).

### Scope respecte

- Aucun changement sur:
  - `SectionBlock`
  - `AnimatedTitle`
  - cards Home
  - `AccordionItem`
- Aucune modification package/dependances.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale:
  - `/a-propos` -> `200`

### Usages `react-markdown` restants dans le projet

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/a-propos`:
  - rendu des segments `strong`
  - retours ligne dans chaque bloc de description
  - espacements verticaux et non-regression responsive.

### Prochaine etape recommandee

Migrer ensuite un seul renderer markdown restant (recommande: `AccordionItem` ou `SectionBlock`) avec la meme strategie inline segmentee, sans etendre le scope au reste des pages.
## 15-05-2026 - Migration `SectionBlock` + contenu `/mentions-legales` vers `InlineContent` (phase 40)

### Decision structurante

- [15-05-2026] [mentions-inline] [migration de `SectionBlock` et des descriptions legales vers `InlineContent`] [retirer markdown uniquement dans ce composant] [liens et sauts de ligne preserves]

### Objectif

Migrer uniquement `SectionBlock` et le contenu legal qu'il rend pour supprimer son usage de `react-markdown`.

### Fichiers modifies

- `src/_pages/MentionsLegales/SectionBlock/SectionBlock.tsx`
- `src/ressources/content/contentTypes.ts`
- `src/ressources/content/mention/mentionContent.ts`
- `MIGRATION_LOG.md`

### Champs migres vers `InlineContent`

- `ParagrapheInfo.description` (`contentTypes.ts`) : `RichText` -> `InlineContent`.
- champs contenus migres dans `mentionContent`:
  - `editeur.description`
  - `hebergement.description`
  - `conception.description`
  - `intellectuelle.description`
  - `responsabilite.description`
  - `cookies.description`
  - `confidentialite.description`
  - `loi.description`

### Conversion des syntaxes markdown/pseudo-markdown

- implementation dans `mentionContent.ts` via helper local `markdownLikeToInlineContent(...)`:
  - `[texte](url)` -> segment `link` (`text`, `href`)
  - retours ligne -> segment `lineBreak`
  - texte normal -> segment `text`
- syntaxes non detectees dans ce contenu:
  - `**...**`
  - `*...*`
  - `[[...]]`

### Adaptation de `SectionBlock`

- retrait des imports:
  - `react-markdown`
  - `remark-breaks`
- renderer inline local ajoute:
  - mapping des segments (`text`, `strong`, `emphasis`, `accent`, `link`, `lineBreak`)
  - gestion des paragraphes via separation sur double `lineBreak`
- styles conserves:
  - liens `<a>` conservent la meme classe visuelle (`.text a`)
  - structure `p` conservee pour marges existantes.

### Scope respecte

- aucun changement sur:
  - `AnimatedTitle`
  - cards Home
  - `AccordionItem`
- aucune modification package/dependances.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale:
  - `/mentions-legales` -> `200`

### Usages `react-markdown` restants dans le projet

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/mentions-legales`:
  - affichage des liens (mailto, tel, https) + URLs identiques
  - rendu des sauts de ligne et espacements de paragraphes
  - comportement responsive des blocs legaux
  - confirmation que le bouton "Modifier mes préférences cookies" reste inchangé.

### Prochaine etape recommandee

Migrer ensuite un seul renderer markdown restant (recommande: `AccordionItem`) avec la meme approche inline, en gardant les autres composants hors scope.## 15-05-2026 - Migration `AccordionItem` + contenus associes vers `InlineContent` (phase 41)

### Decision structurante

- [15-05-2026] [accordion-inline] [migration de `AccordionItem` et des descriptions d'accordeon vers `InlineContent`] [retirer markdown uniquement dans ce composant] [cohabitation maintenue pour les autres composants encore en markdown]

### Objectif

Migrer uniquement `AccordionItem` et les contenus qu'il rend, afin de supprimer son usage de `react-markdown`.

### Fichiers modifies

- `src/components/Accordion/AccordionItem/AccordionItem.tsx`
- `src/ressources/content/contentTypes.ts`
- `src/ressources/content/services/devWeb.ts`
- `src/ressources/content/services/devApp.ts`
- `src/ressources/content/services/maintenance.ts`
- `src/ressources/content/services/seo.ts`
- `src/ressources/content/portfolio/data/applications.ts`
- `src/ressources/content/portfolio/data/ecommerce.ts`
- `MIGRATION_LOG.md`

### Usages `AccordionItem` identifies

- `src/_pages/Services/ServicesSection/ServicesSection.tsx` (accordeons des sections services)
- `src/components/ModalProject/ModalProjectNext.tsx` (accordeons dans la modale portfolio)

### Champs migres vers `InlineContent`

- `AccordionItemContent.description` (`contentTypes.ts`) : `RichText` -> `InlineContent`
- descriptions migrees:
  - `ServiceAccordionItems[].description` dans:
    - `devWeb.ts`
    - `devApp.ts`
    - `maintenance.ts`
    - `seo.ts`
  - `project.accordionItems[].description` dans:
    - `portfolio/data/applications.ts`
    - `portfolio/data/ecommerce.ts`

### Conversion des syntaxes markdown/pseudo-markdown

- `texte normal` -> segment `text`
- paragraphes listes en texte (ancien `\n\n`) -> segments `lineBreak` (cas portfolio)
- syntaxes non detectees dans ces champs:
  - `**...**`
  - `*...*`
  - `[[...]]`
  - `[texte](url)`

### Adaptation de `AccordionItem`

- retrait de l'import `react-markdown` (plus utilise dans ce composant)
- ajout d'un renderer inline local:
  - `text` -> `<span>`
  - `strong` -> `<strong>`
  - `emphasis` -> `<em>`
  - `accent` -> `<span data-inline="accent">`
  - `link` -> `<a href="...">`
  - `lineBreak` -> `<br />`
- comportement d'ouverture/fermeture conserve (aucun changement sur la logique d'animation et de toggle)

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale: non finalisee (commande de verification precedente bloquee/interrompue)

### Usages `react-markdown` restants dans le projet

- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/animations/AnimatedTitle/AnimatedTitle.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/services`:
  - rendu des textes d'accordeon
  - retours ligne/espacements
  - ouverture/fermeture clavier + souris
- verifier visuellement `/portfolio` (modale projet):
  - rendu des descriptions d'accordeon
  - retours ligne des items "Fonctionnalites cles"

### Prochaine etape recommandee

Migrer le composant markdown restant le plus prioritaire (`AnimatedTitle` ou cards Home), un composant a la fois, avec la meme approche inline.
## 15-05-2026 - Migration `AnimatedTitle` vers `InlineContent` (phase 42)

### Decision structurante

- [15-05-2026] [animated-title-inline] [migration de `AnimatedTitle` vers renderer inline type] [supprimer markdown uniquement dans ce composant] [animation et styles conserves]

### Objectif

Migrer uniquement `AnimatedTitle` vers `InlineContent` afin de retirer son usage de `react-markdown`.

### Usages `AnimatedTitle` identifies

- `src/_pages/Home/Hero/Hero.tsx`

### Contenus associes identifies

- `src/ressources/content/home/hero.ts` (`heroContent.title`)

### Syntaxes detectees dans le contenu migre

- `**...**` (present)
- retour ligne `\n` (present)
- `*...*` (non detecte)
- `[[...]]` (non detecte dans le titre)
- `[texte](url)` (non detecte)

### Fichiers modifies

- `src/animations/AnimatedTitle/AnimatedTitle.tsx`
- `src/ressources/content/home/hero.ts`
- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Champs migres vers `InlineContent`

- `Content.title` (`contentTypes.ts`) : `RichText` -> `InlineContent`
- `heroContent.title` (`home/hero.ts`) converti en segments:
  - `text`
  - `lineBreak`
  - `strong`

### Adaptation de `AnimatedTitle`

- retrait des imports:
  - `react-markdown`
  - `remark-breaks`
- ajout d'un renderer inline local base sur les segments `InlineContent`:
  - `text` -> caracteres animes
  - `strong` -> `<strong>` + caracteres animes
  - `emphasis` -> `<em>` + caracteres animes
  - `accent` -> `<span data-inline="accent">` + caracteres animes
  - `link` -> `<a>` + caracteres animes
  - `lineBreak` -> `<br />`
- variantes Framer Motion, stagger et comportement d'animation conserves.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification HTTP locale: non realisee dans ce lot (rendu visuel a valider manuellement)

### Usages `react-markdown` restants dans le projet

- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/`:
  - rendu exact du titre hero
  - style du segment fort (`Web Sur Mesure`)
  - respect du retour ligne
  - animation caractere par caractere identique (timing/perception)

### Prochaine etape recommandee

Migrer ensuite un seul composant restant utilisant `react-markdown` (recommande: `ServicesPreview`), en conservant la meme strategie `InlineContent` progressive.
## 15-05-2026 - Migration `ServicesPreview` + `CardServiceNext` vers `InlineContent` (phase 43)

### Decision structurante

- [15-05-2026] [services-preview-inline] [migration des renderers Home services vers `InlineContent`] [retirer markdown uniquement sur `ServicesPreview` et `CardServiceNext`] [composant `ProjectPreview` conserve en markdown]

### Objectif

Migrer uniquement `ServicesPreview` et `CardServiceNext` vers `InlineContent`, afin de supprimer leurs usages locaux de `react-markdown`.

### Fichiers modifies

- `src/_pages/Home/ServicesPreview/ServicesPreview.tsx`
- `src/_pages/Home/ServicesPreview/CardServiceNext.tsx`
- `src/ressources/content/home/servicesPreview.ts`
- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Contenus Home services migres

- fichier: `src/ressources/content/home/servicesPreview.ts`
- champs migres:
  - `servicesPreviewContent.text`
  - `servicesPreviewContent.cards[].description`

### Champs migres vers `InlineContent`

- `ServicesPreview.text` (`contentTypes.ts`) : `RichText` -> `InlineContent`
- `ServiceCard.description` (`contentTypes.ts`) : `RichText` -> `InlineContent`

### Syntaxes markdown/pseudo-markdown remplacees

- `**...**` -> segments `strong`
- texte normal -> segments `text`
- syntaxes non detectees dans ce contenu:
  - `*...*`
  - `[[...]]`
  - `[texte](url)`
  - retours ligne markdown utiles (non presents)

### Adaptation des composants

- `ServicesPreview.tsx`:
  - retrait import `react-markdown`
  - ajout renderer inline local (`InlineContent` -> `span/strong/em/emphasis/accent/link/br`)
- `CardServiceNext.tsx`:
  - retrait import `react-markdown`
  - ajout renderer inline local (`InlineContent` -> `span/strong/em/emphasis/accent/link/br`)
- `remark-breaks` n'etait pas importe dans ces 2 composants.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- route `/`:
  - verification HTTP non realisee dans ce lot (a verifier manuellement)

### Usages `react-markdown` restants dans le projet

- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`

### Risques / points a verifier manuellement

- verifier visuellement `/`:
  - bloc intro ServicesPreview (segments `strong`)
  - descriptions des 4 cartes (`CardServiceNext`)
  - absence de regression d'espacement/retours ligne
  - comportement sticky/scroll de la section Home services

### Prochaine etape recommandee

Migrer ensuite uniquement `ProjectPreview` vers `InlineContent`, puis retirer `react-markdown`/`remark-breaks` du projet une fois tous les usages supprimes.
## 15-05-2026 - Migration `ProjectPreview` vers `InlineContent` (phase 44)

### Decision structurante

- [15-05-2026] [project-preview-inline] [migration de `ProjectPreview` vers renderer inline type] [retirer le dernier usage actif de markdown dans le code source] [aucune suppression de dependances dans ce lot]

### Objectif

Migrer uniquement `ProjectPreview` vers `InlineContent` afin de supprimer son usage de `react-markdown`.

### Fichiers modifies

- `src/_pages/Home/ProjectPreview/ProjectPreview.tsx`
- `src/ressources/content/home/projectPreviewContent.ts`
- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Contenus associes migres

- fichier: `src/ressources/content/home/projectPreviewContent.ts`
- champ migre:
  - `projectPreviewContent.text`

### Champs migres vers `InlineContent`

- `ProjectPreview.text` (`contentTypes.ts`) : `RichText` -> `InlineContent`

### Syntaxes markdown/pseudo-markdown remplacees

- `**...**` -> segments `strong`
- texte normal -> segments `text`
- syntaxes non detectees dans ce contenu:
  - `*...*`
  - `[[...]]`
  - `[texte](url)`
  - retours ligne markdown utiles (non presents)

### Adaptation du composant

- `ProjectPreview.tsx`:
  - retrait import `react-markdown`
  - ajout renderer inline local (`InlineContent` -> `span/strong/em/accent/link/br`)
- `remark-breaks` n'etait pas importe dans `ProjectPreview`.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- route `/`:
  - verification via build Next (route statique generee)
  - verification HTTP interactive non realisee dans ce lot

### Usages restants

- `react-markdown` : aucun usage actif detecte dans `src`.
- `remark-breaks` : aucun usage actif detecte dans `src`.

### Risques / points a verifier manuellement

- verifier visuellement `/`:
  - rendu du texte ProjectPreview
  - style des segments `strong`
  - espacements du paragraphe
  - non-regression du carousel juste en dessous

### Prochaine etape recommandee

Faire un lot dedie de nettoyage dependances pour retirer `react-markdown` et `remark-breaks` du projet (package + lock + verification build), maintenant qu'il n'y a plus d'import actif.
## 15-05-2026 - Suppression definitive `react-markdown` + `remark-breaks` (phase 45)

### Decision structurante

- [15-05-2026] [deps-cleanup] [retrait de `react-markdown` et `remark-breaks` des dependances] [plus aucun import actif detecte dans `src`] [lockfile mis a jour via `npm install`]

### Objectif

Supprimer definitivement `react-markdown` et `remark-breaks` du projet apres migration complete des composants vers `InlineContent`.

### Fichiers modifies

- `package.json`
- `package-lock.json`
- `MIGRATION_LOG.md`

### Verification des usages avant suppression

- `rg --line-number "react-markdown|remark-breaks" src` -> aucun resultat (aucun usage actif dans `src`).

### Changements effectues

- suppression de `react-markdown` dans `dependencies` (`package.json`).
- suppression de `remark-breaks` dans `dependencies` (`package.json`).
- mise a jour du lockfile via `npm install`.

### Verifications effectuees

- `npm install` -> OK (83 packages supprimes, 0 vulnerability)
- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- `rg --line-number "react-markdown|remark-breaks" src` -> aucun usage actif.

### Risques / points a surveiller

- aucun risque fonctionnel detecte via lint/typecheck/build.
- verification visuelle manuelle standard recommandee sur `/` apres nettoyage des dependances.

### Prochaine etape recommandee

Passer au lot suivant de nettoyage final (dependances legacy restantes et audit post-cleanup), ou preparer la branche pour revue/merge.
## 15-05-2026 - Audit final nettoyage post Next-only (phase 46)

### Objectif

Identifier les derniers elements potentiellement inutiles apres migration Next-only et suppression de markdown, sans modifier le code fonctionnel.

### Commandes d'analyse executees

- `git branch --show-current`
- `git status --short`
- `Get-Content package.json`
- `rg --line-number "react-markdown|remark-breaks|react-router-dom|react-helmet-async|VITE_|import.meta.env|_legacy|vite" src package.json package-lock.json next.config.ts`
- `rg --line-number "clsx|framer-motion|lucide-react|swiper|zod" src`
- `rg --line-number "getAssetSrc|markdownLikeToInlineContent|ProgressiveRichText|RichText" src`
- `Get-ChildItem -Path src -Recurse -File | Where-Object { $_.Length -eq 0 }`
- `rg --line-number "\*\*[^*]+\*\*|\*[^*]+\*|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\)|!\[[^\]]*\]\([^)]+\)" src/ressources/content`
- `Test-Path src/_legacy`
- `Test-Path scripts`
- `rg --line-number "projectArraySchema|projectSchema|categorySchema|formatZodError" src`
- `rg --line-number '"react-markdown"|"remark-breaks"' package-lock.json`

### Resultat dependances (package.json / lock)

- `react-markdown` : supprime, aucune occurrence dans `package-lock.json`.
- `remark-breaks` : supprime, aucune occurrence dans `package-lock.json`.
- Dependances runtime confirmees utilisees : `clsx`, `framer-motion`, `lucide-react`, `swiper`.
- Dependance potentiellement inutilisee : `zod` (usage detecte uniquement dans `src/ressources/content/portfolio/schema.ts`, fichier non reference ailleurs).

### Imports morts evidents

- Aucun import mort evident detecte dans `src` (lint/typecheck precedemment passants).

### Fichiers potentiellement supprimables maintenant (sous validation humaine)

- `src/ressources/content/portfolio/schema.ts`
  - raison: aucun import actif detecte pour `projectSchema`, `projectArraySchema`, `formatZodError`.
- dossier `scripts/` vide
  - raison: repertoire present mais aucun fichier.

### Helpers / types potentiellement supprimables ou a rationaliser

- `ProgressiveRichText` (`src/ressources/content/contentTypes.ts`)
  - statut: potentiellement supprimable (plus aucune occurrence hors definition detectee).
- `markdownLikeToInlineContent` (`src/ressources/content/mention/mentionContent.ts`)
  - statut: a conserver pour l'instant (utilise activement pour parser des chaines legales avec liens markdown).
- `getAssetSrc` (`src/lib/getAssetSrc.ts`)
  - statut: a conserver (imports actifs multiples dans pages/composants Next).

### References legacy restantes

- Dans `src` (code actif):
  - pas de reference active a `react-router-dom`, `react-helmet-async`, `react-markdown`, `remark-breaks`, `VITE_`, `_legacy`.
  - une occurrence de `react-router-dom` dans un commentaire (`src/app/(site)/Providers.tsx`) uniquement.
- Dans la documentation (`MIGRATION_PLAN.md`, `MIGRATION_LOG.md`, `README.md`):
  - references historiques a Vite / React Router / Helmet / `_legacy` encore presentes (normal pour historique de migration).

### Syntaxes markdown / pseudo-markdown restantes dans les contenus

- Actives dans contenu editorial:
  - `[[...]]` : present dans `src/ressources/content/home/hero.ts` (utilise par `TypewriterText` pour highlighting).
  - `[texte](url)` : present dans `src/ressources/content/mention/mentionContent.ts` (converti via `markdownLikeToInlineContent`).
  - `**...**` : present dans `src/ressources/content/portfolio/portfolioContent.ts` (`sections.*.description`).
- Non detecte dans contenus scannes:
  - `![alt](url)`.

### Faux positifs identifies

- Plusieurs occurrences detectees par recherche brute `vite` dans `src` sont des mots francais (`evite`, `visibilite`, `site`) et non des references a Vite.
- Occurrences `*...*` dans `portfolio/schema.ts` sont des commentaires/documentation, pas du contenu editorial a migrer.
- Occurrences nombreuses de references legacy dans `MIGRATION_LOG.md` et `MIGRATION_PLAN.md` sont historiques/documentaires.

### Elements a conserver

- `getAssetSrc` (encore necessaire au rendu image actuel).
- `markdownLikeToInlineContent` (necessaire pour les mentions legales tant que les blocs restent saisis en chaines markdown-like).
- `RichText` (encore massivement utilise dans les types de contenu).
- `portfolioContent.sections` (donnees non referencees actuellement, mais suppression a valider produit/UX avant retrait).

### Recommandations nettoyage par lots (sans execution dans ce lot)

1. **Lot A (sur)** : suppression de `ProgressiveRichText` si aucune reintroduction prevue.
2. **Lot B (sur validation)** : retirer `src/ressources/content/portfolio/schema.ts` + verifier si `zod` devient supprimable.
3. **Lot C (contenu)** : decider si `portfolioContent.sections` est obsolete; supprimer champ + type associe seulement apres validation produit.
4. **Lot D (documentation)** : mettre a jour `README.md` pour supprimer references Vite template restantes.

### Incertitudes a valider humainement

- `portfolio/schema.ts` peut etre garde volontairement pour validation contenu future hors runtime.
- `portfolioContent.sections` peut etre reserve a une future section UI (actuellement non exploitee).
- suppression de `zod` depend directement de la decision sur `portfolio/schema.ts`.
## 15-05-2026 - Nettoyage final Lot A : suppression `ProgressiveRichText` (phase 47)

### Objectif

Executer uniquement le Lot A du cleanup final en supprimant le type de transition inutilise `ProgressiveRichText`.

### Verification des occurrences

- commande: `rg --line-number "ProgressiveRichText" src`
- resultat: une seule occurrence, la definition dans `src/ressources/content/contentTypes.ts`.

### Fichiers modifies

- `src/ressources/content/contentTypes.ts`
- `MIGRATION_LOG.md`

### Changements effectues

- suppression de la definition:
  - `export type ProgressiveRichText = RichText | InlineContent`
- aucun autre type modifie (`RichText` et `InlineContent` conserves).

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Resultat

Lot A termine sans impact fonctionnel detecte.

### Prochaine etape recommandee

Traiter le Lot B uniquement apres validation humaine: reevaluer `src/ressources/content/portfolio/schema.ts` et la dependance `zod`.
## 15-05-2026 - Nettoyage final Lot B etape 1 : suppression `portfolio/schema.ts` (phase 48)

### Objectif

Reevaluer puis supprimer uniquement `src/ressources/content/portfolio/schema.ts` s'il est confirme inutilise.

### Recherches effectuees

- `rg --line-number "projectArraySchema|projectSchema|categorySchema|formatZodError|portfolio/schema|ressources/content/portfolio/schema" src scripts package.json package-lock.json next.config.ts tsconfig.json tsconfig.app.json eslint.config.js MIGRATION_PLAN.md MIGRATION_LOG.md README.md`
- verification presence fichier: `Test-Path src/ressources/content/portfolio/schema.ts`

### Resultat des recherches

- usages actifs dans `src` / scripts / configs : non detectes.
- occurrences detectees :
  - definitions internes dans `src/ressources/content/portfolio/schema.ts`
  - references documentaires dans `MIGRATION_PLAN.md` et `MIGRATION_LOG.md`.

### Decision

- fichier confirme non utilise en runtime actuel -> suppression executee.

### Fichiers modifies

- `src/ressources/content/portfolio/schema.ts` (supprime)
- `MIGRATION_LOG.md`

### Contraintes respectees

- `zod` conserve (non supprime dans ce lot).
- aucun changement dans `package.json` / `package-lock.json`.
- aucun autre fichier source supprime.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Prochaine etape recommandee

Traiter le lot suivant uniquement apres validation humaine: reevaluer la suppression de `zod` (Lot B etape 2) a partir de l'etat sans `portfolio/schema.ts`.
## 15-05-2026 - Nettoyage final Lot B etape 2 : suppression dependance `zod` (phase 49)

### Objectif

Reevaluer puis supprimer `zod` uniquement si aucun usage actif n'existe encore dans le projet.

### Recherches effectuees

- `rg --line-number "zod" src`
- `rg --line-number "zod" scripts`
- `rg --line-number "zod" next.config.ts tsconfig.json tsconfig.app.json eslint.config.js package.json package-lock.json`
- `rg --line-number "zod" . --glob "!node_modules/**"`
- verification tests: `NO_TESTS_DIR`

### Resultat des recherches

- usage actif dans `src` : non detecte.
- usage actif dans `scripts` : non detecte.
- usage actif dans configs : non detecte.
- occurrences restantes avant suppression : documentation (`MIGRATION_PLAN.md`, `MIGRATION_LOG.md`) + manifests npm.

### Decision

- `zod` confirme inutilise en runtime/build actuel -> suppression executee dans `package.json`.

### Fichiers modifies

- `package.json`
- `package-lock.json`
- `MIGRATION_LOG.md`

### Contraintes respectees

- aucune autre dependance supprimee.
- aucun autre fichier source ou contenu modifie.
- aucun composant/route touche.

### Verifications effectuees

- `npm install` -> OK (`removed 1 package`, `0 vulnerabilities`)
- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Prochaine etape recommandee

Passer au Lot C uniquement apres validation humaine (elements contenu/doc incertains identifies dans l'audit final), sans suppression automatique hors scope.
## 15-05-2026 - Audit cible `portfolioContent.sections` avant suppression (phase 50)

### Objectif

Verifier l'usage reel de `portfolioContent.sections` et des types associes avant toute decision de suppression.

### Recherches effectuees

- `rg --line-number "portfolioContent" src`
- `rg --line-number "sections" src/_pages/Portfolio src/_pages/Home src/components`
- lecture de:
  - `src/ressources/content/portfolio/portfolioContent.ts`
  - `src/_pages/Portfolio/Portfolio.tsx`
  - `src/ressources/content/contentTypes.ts`

### Usages actifs trouves

- `portfolioContent` est importe dans `src/_pages/Portfolio/Portfolio.tsx`.
- champs utilises explicitement dans la page: `header` et `intro` uniquement.
- `portfolioContent.sections` : aucun usage actif detecte dans les composants/pages actuels.

### Fichiers / types concernes

- contenu:
  - `src/ressources/content/portfolio/portfolioContent.ts` (`sections.vitrine/ecommerce/application/freelance`)
- types:
  - `PortfolioSectionIntro`
  - `PortfolionSectionContent`
  - `PortfolioPageContent.sections`

### Qualification

- contenu reellement inutilise a date (runtime):
  - `portfolioContent.sections` (non rendu actuellement).
- contenu possiblement conserve volontairement pour usage futur:
  - descriptions de sections portfolio (copy marketing potentielle pour future UI).
- type potentiellement supprimable (techniquement):
  - `PortfolioSectionIntro`, `PortfolionSectionContent` et le champ `PortfolioPageContent.sections`.
- type a conserver par prudence produit:
  - les memes types tant que la decision UX/produit n'est pas validee.

### Recommandation

- **Demander validation humaine** avant suppression (produit/UX).
- Si validation de suppression: retirer en lot dedie `portfolioContent.sections` + types associes, puis relancer lint/type-check/build.
- Si conservation produit: conserver tel quel et marquer explicitement comme "reserve futur" dans la documentation.
- [15-05-2026] [portfolio-sections] [portfolioContent.sections conserve volontairement] [contenu reserve pour une evolution future de la page portfolio] [ne plus traiter comme suppression prioritaire]
## 15-05-2026 - Nettoyage documentation README post Next-only (phase 51)

### Objectif

Nettoyer `README.md` pour retirer les restes du template Vite et aligner la documentation sur le workflow Next-only.

### Fichiers modifies

- `README.md`
- `MIGRATION_LOG.md`

### Changements effectues

- suppression des references obsoletes au template `React + TypeScript + Vite`.
- suppression des instructions ESLint template non pertinentes pour le projet actuel.
- ajout d'une presentation concise du projet en Next.js App Router.
- mise a jour des commandes utiles:
  - `npm install`
  - `npm run dev`
  - `npm run lint`
  - `npm run type-check`
  - `npm run build`
  - `npm run start`
- ajout des variables d'environnement publiques attendues (sans valeurs):
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `NEXT_PUBLIC_CONTACT_ENDPOINT`
  - `NEXT_PUBLIC_GA_ID`

### Verifications

- aucune commande de build/lint/typecheck relancee (modifications documentation uniquement).
## 15-05-2026 - Audit compatibilite deploiement Cloudflare post Next-only (phase 52)

### Objectif

Evaluer la compatibilite Cloudflare apres migration Next-only, sans modification du code.

### Fichiers analyses

- `package.json`
- `next.config.ts`
- `src/app/**` (routes App Router)
- `src/services/contactApi.ts`
- `src/services/recaptcha.ts`
- `public/robots.txt`

### Fichiers Cloudflare detectes/absents

- absents:
  - `wrangler.toml`
  - `wrangler.json`
  - `wrangler.jsonc`
  - `_headers`
  - `_redirects`
  - `public/_headers`
  - `public/_redirects`

### Verifications techniques Next (export statique)

- scripts actuels:
  - `build` -> `next build --webpack`
  - `start` -> `next start`
- aucune route API Next detectee (`app/api` absent, aucun `route.ts` detecte).
- aucun middleware detecte (`middleware.ts` absent).
- aucun server action (`use server`) detecte.
- aucun usage serveur detecte de `cookies()` / `headers()` / `draftMode()`.
- routes app detectees: pages statiques + `sitemap.ts`.
- build precedent deja observe avec routes statiques (`?`) sur toutes les routes principales.

### Compatibilite Cloudflare probable

- **Export statique Next (`output: 'export'` + dossier `out`)**: probable et prioritaire, compte tenu de l'absence de features serveur Next.
- **Workers/OpenNext**: option possible mais non necessaire a ce stade (complexite superieure pour un site actuellement statique).

### Parametres Cloudflare probablement a ajuster

- si projet Cloudflare encore en mode Vite:
  - `build command` a passer de workflow Vite vers Next (selon strategie retenue).
  - `output directory` a aligner:
    - `out` si export statique
    - ou sortie runtime adaptee Workers/OpenNext si strategie SSR.

### Variables d'environnement publiques a prevoir cote Cloudflare

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `NEXT_PUBLIC_CONTACT_ENDPOINT`
- `NEXT_PUBLIC_GA_ID`

### Risques avant merge

- risque principal non-code: configuration Cloudflare encore calee sur ancien pipeline Vite (`dist`).
- en strategie export statique, il faudra valider que la generation `sitemap.xml` et `robots.txt` reste bien servie apres adaptation de la config de build/deploiement.
- en strategie Workers/OpenNext, risque de complexite et de maintenance inutilement eleves pour un site actuellement statique.

### Recommandation

- prioriser **Cloudflare Pages statique** (export `out`) pour la mise en production immediate.
- basculer vers Workers/OpenNext uniquement si des besoins SSR/server-side Next apparaissent ensuite.
## 15-05-2026 - Preparation export statique Next pour Cloudflare Pages (phase 53)

### Objectif

Configurer et valider l'export statique Next.js pour une cible Cloudflare Pages (sans OpenNext/Workers).

### Fichiers modifies

- `next.config.ts`
- `src/app/sitemap.ts`
- `README.md`
- `MIGRATION_LOG.md`

### Changements effectues

- `next.config.ts`:
  - ajout `output: 'export'`.
- correction compatibilite export pour `sitemap.xml`:
  - ajout `export const dynamic = 'force-static'` dans `src/app/sitemap.ts`.
- `README.md`:
  - ajout section Cloudflare Pages statique:
    - build command: `npm run build`
    - output directory: `out`.

### Verification export statique

- Build initial apres `output: 'export'`: echec
  - erreur: route `/sitemap.xml` non configuree pour export statique.
- Build apres correctif `sitemap.ts`: OK.
- dossier `out`: genere.

### Routes exportees verifiees dans `out`

- `out/index.html`
- `out/a-propos.html`
- `out/services.html`
- `out/portfolio.html`
- `out/contact.html`
- `out/mentions-legales.html`

### SEO fichiers exportes

- `out/sitemap.xml` : present
- `out/robots.txt` : present

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Recommandation Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Variables publiques a definir:
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `NEXT_PUBLIC_CONTACT_ENDPOINT`
  - `NEXT_PUBLIC_GA_ID`

### Risques restants avant merge

- L'export genere des fichiers de route `*.html` (ex: `a-propos.html`) et non `a-propos/index.html`.
- Valider dans Cloudflare Pages le comportement URL "pretty" (`/a-propos`, `/services`, etc.) avant merge/production.
## 15-05-2026 - URLs propres export statique Cloudflare (`trailingSlash`) (phase 54)

### Objectif

Securiser l'export statique Next pour Cloudflare Pages avec des routes en dossiers `index.html`.

### Fichiers modifies

- `next.config.ts`
- `README.md`
- `MIGRATION_LOG.md`

### Configuration ajoutee

- `next.config.ts`:
  - `trailingSlash: true`
  - (`output: 'export'` etait deja en place)

### Structure `out` avant/apres

- avant:
  - `out/a-propos.html`
  - `out/services.html`
  - `out/portfolio.html`
  - `out/contact.html`
  - `out/mentions-legales.html`
- apres:
  - `out/a-propos/index.html`
  - `out/services/index.html`
  - `out/portfolio/index.html`
  - `out/contact/index.html`
  - `out/mentions-legales/index.html`
  - `out/index.html` (accueil)

### SEO export

- `out/sitemap.xml` : present
- `out/robots.txt` : present

### Verification des liens internes

- echantillon verifie dans `out/index.html`:
  - liens internes generes avec slash final (`/services/`, `/a-propos/`, `/portfolio/`, `/contact/`, `/mentions-legales/`).

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- verification locale export statique (serveur): non realisee
  - `python` indisponible sur l'environnement (`python --version` en echec).

### Recommandation Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- URLs propres: compatibles avec structure dossier `index.html` generee par `trailingSlash: true`.

### Risques restants avant merge

- valider une fois en preview Cloudflare Pages:
  - resolution des URLs sans extension (`/services`, `/portfolio`, etc.)
  - serving de `sitemap.xml` et `robots.txt`.

## 21-05-2026 - Harmonisation alias imports `~` vers `@` (phase 55)

### Objectif

Remplacer l alias `~` par l alias `@` dans les imports actifs du projet Next-only.

### Fichiers modifies

- `tsconfig.json`
- `tsconfig.app.json`
- `next.config.ts`
- `MIGRATION_LOG.md`
- fichiers `src/**/*.ts` et `src/**/*.tsx` contenant des imports en `~...`

### Changements effectues

- remplacement des imports actifs commencant par `~/...` vers `@/...`.
- remplacement des imports actifs commencant par `~assets/...`, `~components/...`, `~layout/...`, `~styles/...`, `~ressources/...`, `~animations/...` vers `@/assets/...`, `@/components/...`, etc.
- simplification des alias TypeScript:
  - suppression des mappings `~/*` et `~assets/*` (et autres aliases `~...`) dans `tsconfig.json` et `tsconfig.app.json`.
  - ajout d un alias unique `@/* -> ./src/*`.
- alignement alias webpack Next:
  - suppression des aliases `~...` dans `next.config.ts`.
  - ajout de `@ -> src`.

### Verifications effectuees

- recherche post-migration: `~/` dans `src` -> NONE
- recherche post-migration: `~assets` dans `src` -> NONE
- recherche post-migration: `~[A-Za-z]` dans `src` -> NONE

### Resultat

- base d imports harmonisee sur `@/...`.
- aucun import actif `~...` detecte dans `src`.

### Risques / points a surveiller

- VS Code peut conserver un cache TS Server et afficher encore des diagnostics obsoletes tant que le serveur TS n est pas redemarre.

### Prochaine etape recommandee

- lancer un redemarrage TS Server dans VS Code pour reindexer les aliases et diagnostics.

## 21-05-2026 - Correction TS/VS Code imports images `@/*.webp` (phase 56)

### Objectif

Supprimer les erreurs VS Code/TypeScript "Impossible de localiser le module ...webp" apres passage a l alias `@`.

### Cause corrigee

- `next-env.d.ts` n etait pas pris en compte par la configuration TS qui verifie effectivement le code applicatif.
- le script `type-check` (`tsc --noEmit`) ne validait pas reellement `src` via `tsconfig.app.json`.

### Fichiers modifies

- `tsconfig.app.json`
- `tsconfig.json`
- `package.json`
- `next.config.ts`
- `src/services/contactApi.ts`
- `src/ressources/content/contentTypes.ts`
- `src/components/CardProcess/CardProcess.tsx`
- `MIGRATION_LOG.md`

### Changements effectues

- `tsconfig.app.json`:
  - `include` mis a jour pour inclure `next-env.d.ts` et `src`.
  - suppression de `types: ["./src/types/global"]` pour laisser TypeScript charger correctement les types standards/React/Next.
- `tsconfig.json`:
  - inclusion de `next-env.d.ts`.
  - Next a ensuite complete automatiquement le fichier pendant `next build` (includes `.next/types` + plugin `next` + options obligatoires).
- `package.json`:
  - `type-check` passe de `tsc --noEmit` a `tsc -p tsconfig.app.json --noEmit`.
- `next.config.ts`:
  - ajout `typescript.tsconfigPath = 'tsconfig.app.json'` pour aligner la verification Next avec la config app.
- correction mineure detectee pendant la vraie verification TS:
  - `src/services/contactApi.ts`: import type corrige vers `@/_pages/...`.
- alignement typage images Next:
  - `ImageContent.src` passe a `string | StaticImageData` dans `contentTypes.ts`.
  - `CardProcess` tape sur `ProcessCard` pour accepter ce type sans cast.

### Declaration `*.webp`

- **Non ajoutee**.
- Raison: l inclusion correcte de `next-env.d.ts` suffit pour typer les imports d images Next, sans declaration globale custom.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Resultat

- Les imports `@/assets/...webp` sont acceptes par TypeScript.
- La verification TS est maintenant reelle et alignee entre CLI et Next build.

### Prochaine etape recommandee

- Redemarrer le serveur TypeScript dans VS Code pour purger le cache diagnostics (`TypeScript: Restart TS Server`).

## 21-05-2026 - Correction encodage textes FR (phase 57)

### Objectif

Corriger uniquement les cha�nes de texte corrompues (mojibake) sans modifier la logique, le design, les imports ni la structure des contenus.

### M�thode

- scan cibl� des s�quences corrompues dans `src` : `�`, `�`, `’`, `“`, `�`, `?`.
- correction cibl�e des cha�nes concern�es dans les fichiers TS/TSX de contenus/pages/composants.
- conservation stricte du sens des textes fran�ais.

### R�sultat

- correction des cha�nes mal encod�es sur les pages et contenus (home, services, portfolio, contact, a-propos, mentions l�gales, navigation, formulaire).
- suppression des s�quences �videntes de corruption dans `src` pour les motifs recherch�s.

### V�rifications effectu�es

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Exemples de corrections

- `DÃ©couvrez une sÃ©lection...` -> `D�couvrez une s�lection...`
- `Aller Ã�  la page Contact` -> `Aller � la page Contact`
- `Politique de ConfidentialitÃ©` -> `Politique de Confidentialit�`

### Point de vigilance

- une v�rification visuelle manuelle est recommand�e sur `/`, `/services`, `/portfolio`, `/contact`, `/mentions-legales` pour valider les cha�nes longues multi-lignes.

## 27-05-2026 - Correction TS config references (phase 58)

### Decision structurante

- [27-05-2026] [tsconfig-root] [suppression de `references` dans `tsconfig.json`] [eviter les erreurs TS6306/TS6310 sur une config app Next non composite] [diagnostics TypeScript racine alignes avec le workflow Next-only]

### Objectif

Corriger uniquement les erreurs de configuration TypeScript (TS6306/TS6310) sans modifier la config applicative Next (`tsconfig.app.json`).

### Fichiers modifies

- `tsconfig.json`
- `MIGRATION_LOG.md`

### Changements effectues

- suppression du bloc `references` dans `tsconfig.json`.
- conservation stricte de:
  - l alias `@/* -> ./src/*`
  - `include: ["next-env.d.ts"]`
- aucun changement sur `tsconfig.app.json` (`noEmit` conserve).

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK
- `npx tsc -p tsconfig.json --noEmit` -> KO (autres erreurs de typage `next`), mais TS6306/TS6310 absentes

### Resultat

- Les diagnostics TS6306/TS6310 ne sont plus reproduits sur `tsconfig.json` (commande encore en erreur pour d autres raisons).
- Le workflow Next-only reste inchange.
## 27-05-2026 - Suppression de `baseUrl` deprecie dans les tsconfig (phase 59)

### Decision structurante

- [27-05-2026] [tsconfig-baseurl] [suppression de `baseUrl` dans `tsconfig.json` et `tsconfig.app.json`] [eviter l avertissement TypeScript 7.0 sur option depreciee] [alias `@/*` conserve via `paths` explicite]

### Objectif

Corriger uniquement l avertissement TypeScript sur `baseUrl` deprecie, sans changer le comportement des imports `@/...`.

### Fichiers modifies

- `tsconfig.json`
- `tsconfig.app.json`
- `MIGRATION_LOG.md`

### Changements effectues

- suppression de `baseUrl` dans `tsconfig.json`.
- suppression de `baseUrl` dans `tsconfig.app.json`.
- conservation de `paths` avec l alias `@/* -> ./src/*` dans les deux fichiers.
- aucune reintroduction des alias `~`.
- aucune modification de code applicatif.

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Resultat

- L avertissement de depreciation `baseUrl` n est plus attendu dans les tsconfig modifies.
- Les imports `@/...` restent valides avec la configuration actuelle.
## 27-05-2026 - Exclusion Git du dossier out (phase 60)

### Decision structurante

- [27-05-2026] [git-ignore-out] [ajout de `out/` dans `.gitignore`] [eviter le versionnement des artefacts Next static export] [historique Git nettoye pour les prochains builds]

### Objectif

Verifier le suivi Git du dossier `out/` et aligner le projet sur la pratique attendue (artefacts build non versionnes).

### Fichiers modifies

- `.gitignore`
- `MIGRATION_LOG.md`

### Changements effectues

- ajout de `out/` dans `.gitignore`.
- verification: des fichiers `out/` etaient deja suivis par Git avant ce changement.
- aucune suppression physique du dossier local `out/`.

### Commande recommandee (non executee)

- `git rm -r --cached out`

### Resultat

- `out/` est maintenant ignore pour les nouveaux fichiers non suivis.
- les fichiers `out/` deja suivis necessitent la commande ci-dessus pour etre retires de l index Git.
## 27-05-2026 - Retrait de `out/` du suivi Git (phase 61)

### Objectif

Retirer le dossier `out/` de l index Git sans supprimer les fichiers locaux.

### Preconditions verifiees

- branche courante: `nextjs-migration`
- `out/` present dans `.gitignore`
- `out/` encore tracke avant action

### Commande executee

- `git rm -r --cached out`

### Resultat

- les fichiers `out/` sont retires de l index (suppressions stagees)
- le dossier local `out/` est conserve (`Test-Path out` -> `True`)
- verification `git status --short out`: uniquement des `D` (retrait index), pas de suppression physique locale
## 27-05-2026 - Correction texte RGPD formulaire contact (phase 62)

### Objectif

Corriger uniquement la chaine anormale affichee dans la case RGPD du formulaire contact.

### Cause identifiee

- libelle RGPD corrompu dans `src/_pages/Contact/ContactForm/ContactForm.tsx`:
  - `J?accepte ... conformement ? ...`

### Fichiers modifies

- `src/_pages/Contact/ContactForm/ContactForm.tsx`
- `MIGRATION_LOG.md`

### Changement effectue

- remplacement du libelle RGPD par un texte francais correct:
  - `J'accepte que mes informations soient collectees et utilisees conformement a la politique de confidentialite.`

### Verifications effectuees

- `npm run lint` -> OK
- `npm run type-check` -> OK
- `npm run build` -> OK

### Resultat

- les caracteres `?` inattendus ne sont plus presents dans le libelle RGPD.
- aucune logique formulaire/reCAPTCHA modifiee.