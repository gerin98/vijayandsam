# Wedding Site

A simple, static single-page wedding website. No build step, no dependencies — just `index.html`, `styles.css`, and `script.js`.

## Preview locally

Open `index.html` directly in your browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Fill in your details

All editable content lives in `index.html`. Search for text inside square brackets and replace it. Placeholders to update:

| Placeholder | Where | What to put |
| --- | --- | --- |
| `[BRIDE NAME]`, `[GROOM NAME]` | hero, footer, title | Full names |
| `[BRIDE]`, `[GROOM]` | top-left nav brand | First names |
| `[WEDDING DATE]` | hero, footer | e.g. `June 14, 2026` |
| `[CITY, STATE]` | hero | e.g. `Austin, TX` |
| Our Story paragraph | `#story` section | A short welcome message |
| `[TIME]`, event details | `#schedule` section | Ceremony / cocktail / reception times |
| `[VENUE NAME]`, `[Street Address]`, `[City, State ZIP]` | `#venue` section | Venue info |
| Google Maps `href` | `#venue` section | Your venue's Google Maps link |
| `[RSVP DEADLINE]` | `#rsvp` section | e.g. `May 1, 2026` |
| `[GOOGLE_SHEET_RSVP_URL]` | `#rsvp` section | Your shared Google Sheet/Form link |
| `[CONTACT NAME]`, `[CONTACT EMAIL]`, `[CONTACT PHONE]` | `#contact` section | Contact details |

### RSVP via Google Sheet

1. Create a Google Sheet (or Google Form) for guests to RSVP.
2. Click **Share** and set access to **Anyone with the link**.
3. Copy the link and paste it into the `[GOOGLE_SHEET_RSVP_URL]` placeholder in the `#rsvp` section of `index.html`.

> Tip: A Google **Form** is often friendlier for guests than editing a Sheet directly. Either link works in the RSVP button.

### Colors & fonts

Adjust the palette in the `:root` block at the top of `styles.css` (e.g. `--accent`). Fonts are loaded from Google Fonts in `index.html`.

## Deploy free on GitHub Pages

1. Create a repo on GitHub (e.g. `wedding-site`).
2. From this folder, push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial wedding site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings -> Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. Wait ~1 minute. Your site goes live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

### Optional: custom domain

If you own a domain (e.g. `oursdayname.com`), add a file named `CNAME` (no extension) to this folder containing just your domain, then configure the domain's DNS to point at GitHub Pages. See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
