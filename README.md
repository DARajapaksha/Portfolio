# Portfolio — Dinsanda Amajith

A static, framework-free site (`index.html` + `style.css` + `script.js`). No build step, so it deploys to Vercel as-is.

## Before you deploy — fill in these placeholders

Search each file for these and replace with your real links:

- `data-slot="chat-repo"` / `data-slot="chat-demo"` — Real-Time Chat Application GitHub repo + live demo
- `data-slot="job-repo"` / `data-slot="job-demo"` — Job Board Application GitHub repo + live demo
- `data-slot="elder-repo"` / `data-slot="elder-demo"` — ElderExpert GitHub repo + live demo
- `data-slot="linkedin-link"` (the `href="#"`) and `data-slot="linkedin-text"` — your LinkedIn profile URL

Each of those `<a>` tags currently has `href="#"` — update the `href` to the real URL, and for the project links replace the link text if you want (e.g. "GitHub ↗" is fine as-is).

Optional: the phone number is included since it's on your CV — remove the `.contact-item` block for it in `index.html` if you'd rather not have it public.

## Deploy to Vercel

**Option A — GitHub (recommended):**
1. Create a new GitHub repo (e.g. `portfolio`) and push these three files to it.
2. Go to vercel.com → **Add New → Project** → import that repo.
3. Framework preset: choose **Other** (or leave auto-detect — it's plain HTML, no build command needed).
4. Deploy. Vercel gives you a `.vercel.app` URL immediately; you can add a custom domain later.

**Option B — Vercel CLI (no GitHub needed):**
```bash
npm i -g vercel
cd portfolio
vercel
```
Follow the prompts (accept the defaults — it's a static site).

## After deploying

Update the CV's `<add portfolio link>` line with your live Vercel URL.
