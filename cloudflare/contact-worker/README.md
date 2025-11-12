# Contact Worker

Ce Worker Cloudflare vérifie les tokens reCAPTCHA v3 pour le formulaire de contact.

## Installation rapide

1. Installer wrangler : 
pm install -g wrangler
2. Se connecter : wrangler login
3. Depuis ce dossier :
   - wrangler secret put RECAPTCHA_SECRET
   - (optionnel) wrangler secret put ALLOWED_ORIGINS (ex: https://gelyos.com,https://www.gelyos.com,http://localhost:5173)
4. En dev : wrangler dev
5. En prod : wrangler deploy

Le formulaire front enverra les données sur l'endpoint exposé (/contact). La logique d'envoi d'email peut être ajoutée dans src/index.ts une fois la vérification reCAPTCHA passée.
