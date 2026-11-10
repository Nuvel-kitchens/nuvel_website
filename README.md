# Nuvel — Bespoke Cupboards website

Static multi-page site (plain HTML/CSS/JS, no build step). Upload the whole folder to any host (Netlify, Vercel, cPanel, GitHub Pages).

## Pages
| File | Page |
|---|---|
| `index.html` | Home — hero, philosophy, services, **3 featured projects** + "View All Projects", craft, testimonials, CTA |
| `projects.html` | All projects — category filters, search, loads 12 at a time ("Load More") |
| `project.html?id=…` | Single project — details, gallery with lightbox, previous/next |
| `services.html` | Services, with links to quote + filtered projects, FAQ |
| `about.html` | Company story and values |
| `process.html` | 5-step process |
| `contact.html` | Contact details + **quote request form (Web3Forms)** |

## Things to set up
1. **Web3Forms key**: get a free key at https://web3forms.com (use the email that should receive quotes), then paste it into `web3formsKey` in `assets/js/config.js`.
2. **Logo**: replace `assets/img/logo-placeholder.svg` with the real logo (or change `logo` in `config.js`). It updates the header and footer on every page.
3. **Contact details and social links**: edit `assets/js/config.js`.
4. **Projects**: edit `assets/js/projects.js`. Each project is one block. Put photos in `assets/img/projects/<id>/`. Set `featured: true` on the ones to show on the home page.

## Preview locally
```bash
npx http-server -p 5173
```
