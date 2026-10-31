# Ventura Dental Care – website demo

A multi-page dental clinic website with scroll animations, a booking form and Google Map.
Plain HTML, CSS and JavaScript – no build step.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us – team and doctors |
| `service.html?s=cosmetic` / `restorative` / `preventive` / `wellness` | Service pages |
| `laboratory.html` | Our Lab |
| `faq.html` | FAQ |
| `contact.html` | Contact & booking |

## Publish with GitHub Pages

1. Upload all files in this folder to the root of a repository (all files sit side by side, no sub-folders).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Editing content

| What | Where |
|---|---|
| Phone, address, hours, map, social links, form email | `site.js` → `SITE` |
| Services, treatments, symptoms | `site.js` → `SERVICES` |
| FAQs | `site.js` → `FAQS` |
| Team members and doctors | `about.html` → `TEAM` / `DOCTORS` |
| Technology list and reviews | `index.html` → `TECH` / `REVIEWS` |
| Photos and videos | the .jpg / .mp4 files (keep the same file names) |

## Booking form emails

The form works in demo mode (shows a thank-you message). To receive requests by email,
create a free form at formspree.io and paste its URL into `formEndpoint` in `site.js`.

## Demo content

Doctor and staff names, phone number, address, stats and reviews are **imaginary demo data**.
Replace them with the clinic's real details before going live.
