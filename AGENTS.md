# AGENTS.md

Ce fichier définit les règles de travail du projet.

Il s'applique strictement tant qu'il ne contredit pas :

- le codebase existant,
- la stack réellement détectée,
- une consigne explicite de l'utilisateur.

Ne jamais inventer une information absente du projet.

---

## Statut documentaire post-migration

- `AGENTS.md` est le document de règles actif.
- `CODE_REVIEW.md` est une checklist active pour les revues.
- Les documents dans `docs/migration/` sont archivés à titre historique.
- Les documents archivés ne pilotent plus le développement courant sauf demande explicite.

---

## 0) Identification du projet

- Nom du projet : `site-gelyos`
- CWD attendu : racine du repository contenant ce fichier `AGENTS.md`
- Objectif produit : `Présenter et vendre des services de développement web : landing pages, sites vitrines, sites e-commerce, SEO et maintenance. L’objectif est de rassurer les visiteurs, valoriser l’expertise, expliquer les offres et convertir les prospects en demandes de contact.`
- Type de site : `site vitrine`
- Environnements : `local`, `production`
- URL de production : `https://gelyos.fr/`
- Hébergeur / plateforme de déploiement : `Cloudflare`
- Branche active recommandée : `main`

---

## 1) Stack actuelle et stack cible

### 1.1 Stack actuelle

À détecter dans le codebase avant toute modification.

- Framework actuel : `À compléter après audit`
- Build tool actuel : `À compléter après audit`
- Routing actuel : `À compléter après audit`
- Gestion des styles actuelle : `À compléter après audit`
- Gestion des données actuelle : `À compléter après audit`
- Dépendances critiques : `À compléter après audit`

### 1.2 Stack cible

- Next.js
- React
- TypeScript si déjà présent ou validé par l'utilisateur
- Next.js App Router
- SCSS Modules si cohérent avec l'existant
- ESLint
- Build sans erreur obligatoire

---

## 2) Comportement obligatoire au démarrage

- Lire ce fichier avant toute action.
- Inspecter l'état réel du codebase avant d'agir.
- Ne jamais inventer une information absente du projet.
- Confirmer le scope avant modification si la demande est ambiguë, large ou risquée.
- Si le scope est clair, agir avec une modification minimale et localisée.
- Confirmer le `cwd` exact avant toute modification si le contexte peut être ambigu.
- Si une information projet manque :
  - poser une question claire si cela bloque réellement ;
  - sinon laisser le champ à compléter ;
  - ne jamais inventer.
- Si un fichier de référence n'existe pas encore, le signaler clairement avant de créer quoi que ce soit.
- Si ce fichier contient encore des champs à compléter, lister uniquement ceux qui bloquent la tâche.

---

## 3) Règles non négociables

- Répondre en français.
- Être concis, factuel et utile.
- Éviter le blabla.
- Expliquer le pourquoi lorsqu'un choix technique impacte la suite, la maintenance ou l'architecture.
- Travailler par étapes courtes.
- Ne modifier que le scope demandé.
- Toujours donner les chemins exacts des fichiers créés ou modifiés.
- Toujours signaler un risque de régression avant de faire une modification à risque.
- Ne pas changer le design sans demande explicite.
- Ne pas ajouter de dépendance sans justification claire.
- Ne pas supprimer de code sans expliquer pourquoi.
- Préserver le comportement existant autant que possible.
- Terminer par un compte-rendu clair avec :
  - ce qui a été modifié ;
  - les fichiers touchés ;
  - les vérifications effectuées ;
  - les vérifications non effectuées et pourquoi ;
  - la prochaine étape recommandée.

---

## 4) Politique de modification des fichiers

### 4.1 Avant chaque modification

- Toujours relire les fichiers cibles juste avant modification.
- Toujours travailler depuis l'état sauvegardé le plus récent.
- Partir du principe que l'utilisateur peut avoir modifié le fichier manuellement depuis la dernière demande.
- Ne jamais écraser des changements récents non compris.
- Préserver les modifications existantes qui ne sont pas en conflit avec la tâche demandée.

### 4.2 Stratégie de modification

- Ne jamais refaire un fichier depuis zéro si un patch ciblé suffit.
- Toujours privilégier une modification minimale et localisée.
- Ne jamais réorganiser, reformater ou réécrire un fichier entier sans raison réelle.
- Ne pas reconstruire un composant, une section ou un fichier uniquement parce qu'une autre approche serait plus propre.
- Si une refonte plus large est vraiment nécessaire :
  - l'annoncer avant ;
  - expliquer pourquoi un patch local ne suffit pas ;
  - appliquer la version la plus limitée possible de cette refonte.

---

## 5) Workflow de collaboration

### 5.1 Cycle standard

1. Relecture du contexte et des fichiers cibles.
2. Récapitulatif court de ce qui va être fait.
3. Modifications minimales.
4. Vérifications pertinentes.
5. Compte-rendu final avec :
   - changements effectués ;
   - fichiers touchés ;
   - vérifications effectuées ;
   - next step recommandé.

### 5.2 Règles de validation

- Fichiers de contenu :
  - générer la structure et les champs ;
  - laisser le contenu éditorial final à l'utilisateur sauf demande explicite contraire.
- Composants UI :
  - livrer le composant et son style associé ensemble si le projet utilise des styles par composant ;
  - attendre validation humaine si l'impact visuel est important.
- Gros chantier :
  - découper en sous-étapes explicites ;
  - éviter les modifications transverses non nécessaires.

### 5.3 Communication attendue

- Réponse concise, factuelle, sans blabla.
- Expliquer le pourquoi quand un choix impacte la structure, la maintenance ou la réutilisation.
- En cas de blocage, dire précisément ce qui manque.
- Ne pas masquer les erreurs de build, lint, typecheck ou tests.

---

## 6) Migration React vers Next.js

La migration React vers Next.js est terminée. Cette section ne s'applique que si une nouvelle migration est explicitement demandée.

### 6.1 Règles de migration

- Travailler sur une branche dédiée, par exemple `nextjs-migration`.
- Ne jamais migrer tout le site en une seule modification.
- Ne pas créer une deuxième application séparée sauf demande explicite.
- Préserver le comportement et le rendu existants.
- Ne pas modifier le design pendant la migration sauf demande explicite.
- Migrer page par page ou composant par composant.
- Ne pas supprimer l'ancien code tant que l'équivalent Next.js n'est pas validé.
- Les anciens documents de migration sont archivés dans `docs/migration/`.
- Ne les utiliser comme consigne active que sur demande explicite.
- Après chaque étape, lancer les vérifications disponibles :
  - lint ;
  - typecheck ;
  - tests ;
  - build.

### 6.2 Ordre recommandé

1. Auditer le projet React actuel.
2. Identifier les routes, composants, styles, assets et appels API.
3. Installer/configurer Next.js dans le même projet.
4. Créer la structure minimale `src/app`.
5. Migrer le layout global.
6. Migrer les composants partagés.
7. Migrer les pages une par une.
8. Migrer les appels API et la logique de données.
9. Migrer SEO, metadata, sitemap, robots et redirections.
10. Nettoyer l'ancien code uniquement après validation.
11. Faire une vérification finale complète.

### 6.3 Règles spécifiques Next.js

- Utiliser Next.js App Router.
- Éviter de mettre `use client` par défaut.
- Utiliser `use client` uniquement si nécessaire :
  - hooks React côté client ;
  - événements navigateur ;
  - état local interactif ;
  - accès à `window`, `document`, `localStorage` ;
  - librairie nécessitant le navigateur.
- Privilégier les Server Components quand c'est possible.
- Ne pas déplacer toute la logique côté client par facilité.
- Utiliser les conventions Next.js pour les routes.
- Ne pas casser les URLs existantes sans prévoir de redirection.

---

## 7) Politique de réutilisation avant création

### 7.1 Règle générale

Avant de créer un nouveau composant, helper, hook, style local, variante UI ou logique métier :

1. vérifier si un équivalent existe déjà ;
2. vérifier si un composant partagé couvre déjà le besoin ;
3. vérifier si un helper ou une logique métier existe déjà ;
4. vérifier si un pattern SCSS, une variable, un mixin ou un token existe déjà.

Créer du nouveau uniquement si l'existant ne couvre pas proprement le besoin.

### 7.2 Composants partagés

- Toujours privilégier un composant partagé existant plutôt que du markup local brut.
- Ne pas recréer localement une logique UI déjà centralisée ailleurs.
- Réutiliser les primitives existantes avant de créer une variante locale métier.
- Si un composant partagé important existe, le prendre comme source de vérité avant d'implémenter un besoin proche.

### 7.3 Headings et primitives UI

- Avant d'utiliser un `h1`, `h2`, `h3`, `h4`, `h5` ou `h6` directement dans un composant métier, vérifier si un composant partagé `Heading` existe déjà.
- Si `Heading` existe et couvre le besoin, l'utiliser par défaut.
- Ne pas recréer de logique typographique localement si elle peut être centralisée.
- Le même principe s'applique aux composants partagés existants : `Button`, `Modal`, `Input`, `Tag`, wrappers, primitives de layout, etc.

---

## 8) Conventions techniques

### 8.1 Arborescence cible recommandée

Adapter à l'existant si le projet a déjà une convention claire, mais privilégier cette organisation dans le projet courant.

#### Routing Next.js

- `src/app/(site)` contient le routing public du site.
- `src/app/(site)/layout.tsx` contient le layout public du site.
- `src/app/(site)/page.tsx` contient la route d'accueil.
- `src/app/(site)/<route>/page.tsx` contient les routes statiques.
- `src/app/(site)/[slug]/page.tsx` ou `src/app/(site)/[...slug]/page.tsx` contient les routes dynamiques si nécessaire.
- Les fichiers `page.tsx` peuvent exporter les metadata Next.js de leur route.
- Les fichiers de route doivent rester fins : ils importent le composant de page depuis `src/_pages`.

#### Composants de pages

- `src/_pages` contient les composants de pages métier.
- Ne pas utiliser `src/pages` pour les composants métier, car ce nom est réservé au Pages Router de Next.js.
- Dans `src/_pages`, créer un dossier par page.
- Chaque dossier de page est nommé en PascalCase, par exemple `Home`, `Contact`, `Services`.
- Chaque dossier de page contient au minimum :
  - `<PageName>.tsx` ;
  - `<PageName>.module.scss`.
- Chaque section de page vit dans un dossier dédié à l'intérieur de la page.
- Chaque section est nommée en PascalCase, par exemple `Hero`, `Intro`, `ContactForm`.
- Chaque dossier de section contient au minimum :
  - `<SectionName>.tsx` ;
  - `<SectionName>.module.scss`.

#### Dossiers partagés

- `src/components` contient les composants réutilisables entre plusieurs pages.
- `src/lib` contient les fonctions utilitaires partagées.
- `src/services` ou `src/api` existe uniquement si une vraie logique d'accès aux données existe.
- `src/resources` contient les contenus structurés si déjà présent ou validé.
- `src/styles` contient variables, mixins, globals, tokens et styles transverses.
- `public` contient les assets publics servis directement.
- Les dossiers complémentaires ne doivent être créés que s'ils sont réellement nécessaires.
- Éviter les dossiers vides ou purement anticipés.

### 8.2 Types et contenu

- TypeScript strict si le projet est en TypeScript.
- Ne pas introduire `any` sans justification explicite.
- Garder des types clairs et stables.
- Si une interface est réutilisée au moins deux fois, proposer de la rendre globale ou partagée.
- Ne pas déplacer les types sans raison réelle.

### 8.3 SCSS / UI

- Utiliser des SCSS Modules par composant si cette convention est validée pour le projet.
- Réutiliser d'abord les variables, mixins, placeholders et tokens existants.
- Utiliser le nesting SCSS uniquement quand il améliore la lisibilité.
- Éviter le nesting excessif.
- Garder les fichiers SCSS légers.
- Préférer la réutilisation de composants partagés à la duplication de styles locaux.
- Éviter les duplications visuelles.
- Ne pas alourdir un fichier SCSS si l'existant peut être mutualisé.

### 8.4 Accessibilité minimale

- Préserver le HTML sémantique.
- Conserver labels, focus visible et navigation clavier correcte.
- `alt` des images selon le rôle :
  - décoratif : `alt=""` ;
  - informatif : `alt` pertinent dans la langue du site.
- Ne pas ajouter d'ARIA inutile.
- Ne pas casser la hiérarchie des titres.

---

## 9) Routing

- Utiliser Next.js App Router.
- Utiliser le route group `src/app/(site)` pour le routing public du site.
- Le segment `(site)` est organisationnel et ne doit pas apparaître dans les URLs.
- Routes statiques :
  - `src/app/(site)/page.tsx` ;
  - `src/app/(site)/<route>/page.tsx`.
- Routes dynamiques si besoin :
  - `src/app/(site)/[slug]/page.tsx` ;
  - `src/app/(site)/[...slug]/page.tsx`.
- Les composants de pages sont importés depuis `src/_pages`.
- Ne pas créer de fichiers de route dans `src/_pages`.
- Ne pas utiliser `src/pages` pour éviter l'activation ou la confusion avec le Pages Router.
- Pas de segment locale par défaut.
- Hypothèse par défaut : site mono-langue, sauf preuve contraire dans le repo.
- Préserver les URLs existantes autant que possible.
- Si une URL change, proposer une redirection.

---

## 10) Design system

- Centraliser la typographie autant que possible.
- Éviter de recréer localement des variantes si une primitive partagée existe.
- Avant de créer une structure UI locale, vérifier s'il existe déjà un composant partagé équivalent ou proche.
- Ne pas recréer localement des styles de heading si `Heading` existe.
- Ne pas introduire un nouveau système visuel sans demande explicite.
- Ne pas modifier l'identité visuelle sans demande explicite.

---

## 11) Formulaires / sécurité / backend

- Validation front : validation UX uniquement.
- Validation backend : source de vérité finale.
- Ne jamais mettre de données sensibles dans les query params.
- Si un prefill URL existe :
  - le limiter aux champs non sensibles ;
  - revalider côté serveur.
- Ne jamais exposer de secret côté client.
- Vérifier les variables d'environnement avant de modifier la logique d'API.

---

## 12) SEO / Metadata

- Préserver les titres, descriptions et balises importantes existantes.
- Utiliser le système `metadata` de Next.js quand les pages sont migrées.
- Ne pas changer les URLs canoniques sans raison validée.
- Préserver ou recréer :
  - title ;
  - description ;
  - open graph ;
  - canonical ;
  - robots ;
  - sitemap si présent ;
  - redirections si nécessaires.
- Signaler toute perte SEO potentielle avant modification.

---

## 13) Tests / qualité

- Après modification, lancer les vérifications pertinentes quand elles existent :
  - lint ;
  - typecheck ;
  - tests ;
  - build si pertinent.
- Si une vérification n'est pas exécutée, expliquer pourquoi.
- Préférer des solutions simples, robustes et maintenables.
- Éviter le JavaScript inutile sur les pages statiques.
- Vérifier Lighthouse seulement en fin de gros lot ou sur demande.
- Ne pas ignorer une erreur TypeScript, lint ou build sans justification.

---

## 14) Commentaires de documentation locale

### 14.1 Quand ils sont obligatoires

Ajouter un bloc de commentaire structuré en anglais simplifié au-dessus :

- des composants partagés importants ;
- des composants feature non triviaux ;
- des hooks avec vraie logique ;
- des fonctions avec logique métier ou transformation non triviale ;
- des helpers au comportement non évident.

Ne pas en ajouter sur les composants ultra simples ou les helpers évidents.

### 14.2 Format pour les composants

```ts
/* Component ComponentName
 * Render logic:
 * - ...
 * - ...
 *
 * View TSX:
 * - ...
 * - ...
 */
```

### 14.3 Format pour les fonctions

```ts
/* Function functionName
 * Logic:
 * - ...
 * - ...
 *
 * Output:
 * - ...
 * - ...
 */
```

### 14.4 Format pour les hooks

```ts
/* Hook useHookName
 * Logic:
 * - ...
 * - ...
 *
 * Returns:
 * - ...
 * - ...
 */
```

### 14.5 Règles d'écriture

- Écrire en anglais simplifié.
- Garder des phrases courtes et concrètes.
- Décrire le vrai comportement du code.
- Expliquer la logique de rendu, de transformation ou de retour quand c'est utile.
- Ne pas paraphraser le code ligne par ligne.

---

## 15) Journal des décisions

Ajouter une ligne à chaque décision structurante dans le support actif demandé (PR, ticket, fichier de décision dédié). Les journaux de migration sont archivés dans `docs/migration/`.

Format recommandé :

```md
- [DD-MM-YYYY] [topic] [decision] [raison courte] [impact]
```

---

## 16) Checklist avant merge

- [ ] Scope respecté
- [ ] Pas de fichiers hors sujet modifiés
- [ ] Contenu existant préservé autant que possible
- [ ] Patch minimal respecté
- [ ] Composants / helpers / styles existants vérifiés avant création
- [ ] Types OK
- [ ] Lint exécuté ou raison donnée
- [ ] Typecheck exécuté ou raison donnée
- [ ] Tests exécutés ou raison donnée
- [ ] Build exécuté ou raison donnée
- [ ] UX responsive vérifiée si impact UI
- [ ] Accessibilité minimale vérifiée
- [ ] SEO préservé si impact route/page
- [ ] Compte-rendu final avec chemins exacts des fichiers
