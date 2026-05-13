# CODE_REVIEW.md

Checklist de review pour les modifications du projet.

À utiliser avant merge ou avant validation d'une étape importante.

---

## 1) Scope

- [ ] La modification respecte le scope demandé
- [ ] Aucun fichier hors sujet n'a été modifié
- [ ] Aucun refactor non demandé n'a été ajouté
- [ ] Aucun changement design non demandé n'a été introduit
- [ ] Les chemins des fichiers modifiés sont listés dans le compte-rendu

---

## 2) Migration React vers Next.js

- [ ] La migration reste progressive
- [ ] Une seule page ou un seul lot cohérent a été traité
- [ ] L'ancien code n'a pas été supprimé avant validation
- [ ] Les URLs existantes sont préservées ou les redirections sont prévues
- [ ] Les composants interactifs utilisent `use client` uniquement si nécessaire
- [ ] Les Server Components sont privilégiés quand c'est possible
- [ ] Le build Next.js reste cohérent

---

## 3) Architecture

- [ ] La structure respecte les conventions du projet
- [ ] Le routing public est placé dans `src/app/(site)`
- [ ] Les composants de pages sont placés dans `src/_pages`
- [ ] Aucun composant métier n'a été placé dans `src/pages`
- [ ] Les fichiers de route `page.tsx` restent fins
- [ ] Aucun dossier vide ou anticipé inutile n'a été créé
- [ ] Aucun composant existant n'a été dupliqué inutilement
- [ ] Les composants partagés ont été vérifiés avant création
- [ ] Les helpers/hooks existants ont été vérifiés avant création
- [ ] Les fichiers restent lisibles et localisés

---

## 4) TypeScript

- [ ] Les types sont corrects
- [ ] Aucun `any` n'a été ajouté sans justification
- [ ] Les interfaces réutilisables sont mutualisées si pertinent
- [ ] Les imports/export sont propres
- [ ] Le typecheck passe ou les erreurs sont documentées

---

## 5) UI / Styles

- [ ] Le rendu visuel existant est préservé
- [ ] Le responsive est préservé
- [ ] Les styles existants sont réutilisés si possible
- [ ] Aucun style global inutile n'a été ajouté
- [ ] Les SCSS Modules restent légers si utilisés
- [ ] Les duplications visuelles sont évitées

---

## 6) Accessibilité

- [ ] Le HTML sémantique est préservé
- [ ] La hiérarchie des titres reste cohérente
- [ ] Les images ont des `alt` adaptés
- [ ] Les labels de formulaire sont présents si nécessaire
- [ ] Le focus clavier reste visible
- [ ] Aucun ARIA inutile n'a été ajouté

---

## 7) SEO

- [ ] Les titles existants sont préservés ou migrés
- [ ] Les descriptions existantes sont préservées ou migrées
- [ ] Les canonical sont préservées si présentes
- [ ] Les balises Open Graph sont préservées si présentes
- [ ] Les routes importantes restent accessibles
- [ ] Les redirections nécessaires sont prévues
- [ ] `robots.txt` et `sitemap` sont cohérents si concernés

---

## 8) Sécurité / Données

- [ ] Aucun secret n'est exposé côté client
- [ ] Les variables d'environnement sont correctement utilisées
- [ ] Les données sensibles ne sont pas placées dans les query params
- [ ] Les formulaires sont validés côté front pour l'UX
- [ ] La validation backend reste la source de vérité

---

## 9) Qualité

- [ ] Lint exécuté ou raison documentée
- [ ] Typecheck exécuté ou raison documentée
- [ ] Tests exécutés ou raison documentée
- [ ] Build exécuté ou raison documentée
- [ ] Pas de console.log inutile
- [ ] Pas de code mort évident
- [ ] Pas de dépendance ajoutée sans justification
- [ ] Pas de suppression non expliquée

---

## 10) Compte-rendu final attendu

Le compte-rendu final doit contenir :

```md
## Résumé

...

## Fichiers modifiés

- `chemin/du/fichier`

## Vérifications effectuées

- lint : OK / non exécuté, raison
- typecheck : OK / non exécuté, raison
- tests : OK / non exécuté, raison
- build : OK / non exécuté, raison

## Risques / points à surveiller

- ...

## Prochaine étape recommandée

...
```
