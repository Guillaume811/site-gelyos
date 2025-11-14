# Contact Worker

Ce Worker Cloudflare :
1. vérifie les tokens reCAPTCHA v3 envoyés par le front ;
2. transfère le message vers l'API Brevo (Sendinblue) une fois la vérification réussie.

## Installation rapide

1. Installer wrangler : `npm install -g wrangler`
2. Se connecter : `wrangler login`
3. Depuis ce dossier, définir les secrets :
   - `wrangler secret put RECAPTCHA_SECRET`
   - `wrangler secret put BREVO_API_KEY`
   - `wrangler secret put BREVO_FROM_EMAIL`
   - `wrangler secret put BREVO_FROM_NAME`
   - `wrangler secret put BREVO_TO` (liste CSV de destinataires)
   - `wrangler secret put BREVO_SUBJECT_PREFIX` (optionnel, défaut `[Contact]`)
   - (optionnel) `wrangler secret put ALLOWED_ORIGINS` (ex: `https://gelyos.fr,https://www.gelyos.fr`)
4. En dev : `wrangler dev --remote`
5. En prod : `wrangler deploy`

Le front doit appeler l'URL exposée par la route Worker (ex. `/api/contact`) en envoyant `{ token, payload }` comme dans `src/services/contactApi.ts`.
