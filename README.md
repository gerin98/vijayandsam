# Wedding Site

A simple, static single-page wedding website for Vijay & Samyuktha with a peacock/floral Indian theme. No build step, no dependencies — just `index.html`, `styles.css`, `script.js`, the monogram assets (`favicon.svg`, `logo.svg`), and decorative artwork (`hero-flourish.webp`).

Live at: https://gerin98.github.io/vijayandsam/

## Preview locally

Open `index.html` directly in your browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

All content lives in `index.html`, split into clearly commented sections. To change a detail, find the matching section and edit the text:

| Section | id | What's there |
| --- | --- | --- |
| Hero | `#hero` | Names, date, location |
| Our Story | `#story` | Welcome message |
| Schedule | `#schedule` | Event times (Sangeet, Muhurtham, Reception) |
| Attire | `#attire` | Suggested attire per event |
| Venue | `#venue` | Venue name, address, embedded map, Google Maps link |
| RSVP | `#rsvp` | Button linking to the RSVP Google Form |
| Contact | `#contact` | Venue contact |

### RSVP link

The RSVP button points to a Google Form. To change it, update the `href` of the "RSVP Here" link in the `#rsvp` section. A Google **Form** is generally friendlier for guests than a raw Sheet.

### Colors & fonts

Adjust the palette in the `:root` block at the top of `styles.css` (e.g. `--accent`). Fonts are loaded from Google Fonts in `index.html`.

## Deploy & updates (GitHub Pages)

The site is hosted on GitHub Pages from the `main` branch. To publish changes, commit and push to `main`:

```bash
git add -A && git commit -m "Update details" && git push
```

GitHub Pages redeploys automatically within ~1 minute. Tip: hard-refresh with Cmd/Ctrl + Shift + R to bypass browser cache (favicons may need a browser restart).

### Optional: custom domain

To use your own domain, add a file named `CNAME` (no extension) to this folder containing just your domain, then point the domain's DNS at GitHub Pages. See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Planned / TODO

- Add a **Host Contact** section with the host's details (name / phone / email) for guest enquiries.
