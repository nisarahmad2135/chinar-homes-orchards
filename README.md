# Chinar Homes & Orchards — business site

A 4-page site (Home, Properties, Fruits, Products) plus an admin panel to manage
everything — listings, prices, photos, contact info — with zero coding after setup.

Cost to run: **$0**, using the free tiers below.

## What's inside
- `index.html`, `properties.html`, `fruits.html`, `products.html` — the public site
- `content.json` — all business info, properties, fruits, and products (the admin panel edits this)
- `admin/` — your admin panel (Decap CMS, free & open-source)
- `common.js` / `style.css` — shared code and styling

## Go live in ~10 minutes (all free)

### 1. GitHub
- Free account at github.com.
- New repository (e.g. `chinar-homes-orchards`), upload all these files.

### 2. Netlify (free hosting)
- Free account at netlify.com.
- "Add new site" → "Import an existing project" → GitHub → your repo.
- Leave build settings blank, click Deploy.
- You get a live URL like `https://chinar-homes-123.netlify.app`.
- A custom domain (e.g. chinarhomes.com) is optional and costs ~$10-15/year — not required to go live.

### 3. Turn on the admin login
- Site configuration → Identity → **Enable Identity**.
- Identity settings → set registration to **Invite only**.
- Identity → Services → **Enable Git Gateway**.
- Identity → Invite users → invite your own email, accept the invite, set a password.

### 4. Start editing
- Go to `https://your-site.netlify.app/admin/`, log in.
- Update the business name, phone/WhatsApp number, and address first (Business Info section) —
  these are placeholders right now.
- Add/edit/remove properties, fruits, and products, each with its own photo.
- Click **Publish** — the live site updates automatically in under a minute.

## How enquiries work right now
Every listing has an "Enquire on WhatsApp" button that opens a pre-filled WhatsApp
message to the number you set in Business Info. No online payments or booking system yet —
this is a "browse and message us" setup, which is the simplest to run day-to-day.
If you later want online payments or booking forms, that's a bigger addition — let me know
and we can plan it.

## Before going live, replace:
- Business name, tagline, about text
- Phone, WhatsApp number, email, address (currently placeholders)
- All sample properties/fruits/products and their photos
