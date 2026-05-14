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

## 13-05-2026 — Migration page `/contact` vers Next (phase 11)

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

## 13-05-2026 — Verification SEO globale Next (phase 12)

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

## 13-05-2026 — Preparation nettoyage legacy (phase 13)

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

- **Lot A — Candidats deja non references (a verifier une derniere fois avant suppression)**
  - `src/_legacy/pages/Article.tsx`
  - `src/_legacy/pages/Blog/Blog.tsx`
  - `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.tsx`
  - `src/_legacy/pages/Portfolio/PortfolioSection/PortfolioSection.module.scss`
  - `src/_pages/Home/HomeClientShell.tsx`

- **Lot B — Apres bascule officielle en Next-only (arreter le runtime Vite legacy)**
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

- **Lot C — Apres retrait scripts/build Vite**
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

## 13-05-2026 — Execution nettoyage legacy Lot A (phase 14)

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

## 14-05-2026 — Nettoyage des references legacy commentees (phase 15)

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
- Dettes hors scope inchangées: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Continuer le nettoyage documentaire/commentaires legacy restants hors scope critique, puis preparer les preconditions de bascule Next-only avant Lot B.

## 14-05-2026 — Dernier micro-lot commentaires legacy morts (phase 16)

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
- Dettes hors scope inchangées: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.

### Prochaine etape recommandee

Passer a une verification de pre-bascule Next-only (cartographie des entrees Vite encore obligatoires) avant toute action Lot B.

## 14-05-2026 — Verification pre-bascule Next-only (phase 17)

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

## 14-05-2026 — Migration page `/a-propos` vers Next (phase 18)

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

- Dettes hors scope inchangées: scroll modale a l'ouverture, cle publique reCAPTCHA manquante en local.
- Double source sitemap toujours presente (fichier public + route metadata Next) tant que la bascule Next-only n'est pas actee.

### Prochaine etape recommandee

Valider le runbook de bascule Next-only (scripts par defaut, source sitemap unique), puis executer Lot B en lot controle.
