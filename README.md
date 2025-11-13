# Static Site Starter (HTML/CSS/JS)

A fast, accessible, mobile‑first template you can deploy for free on GitHub Pages, Netlify, or Vercel — and point your GoDaddy domain at it.

## 1) Customize content
- Edit `index.html` (text, links, sections).
- Swap colors in `styles.css` (the `:root` CSS variables).
- Replace `hello@example.com` with your email in the Contact section.
- Update meta tags in `<head>` and `robots.txt` / `sitemap.xml` with your real domain.

## 2) Preview locally
Option A — Simple Python server (already on macOS/Linux; on Windows, use Python too):
```bash
python3 -m http.server 8000
```
Visit http://localhost:8000

Option B — VS Code extension “Live Server”.

## 3) Publish (choose one)

### Option A: GitHub Pages (free)
1. Create a GitHub repo (any name).
2. Commit all files and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In GitHub **Settings → Pages**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. (Optional) Add a `CNAME` file (just the single line with your domain) to enable your custom domain **or** set it in Pages settings.

### Option B: Netlify (free)
- drag‑and‑drop this folder at https://app.netlify.com/drop or connect your Git repo.
- In **Site settings → Domain management**, add your custom domain.

### Option C: Vercel (free)
- import the repo at https://vercel.com/new or run `vercel` from the folder (requires Vercel CLI).

## 4) Point your GoDaddy domain

### If using GitHub Pages
Create these **A records** for your apex/root (example.com):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Create **CNAME** for `www` → `<your-username>.github.io` (or your Pages subdomain).  
Then add your domain in GitHub Pages settings (or a `CNAME` file in the repo).

### If using Netlify or Vercel
- They will show a verification **TXT** and the **A/CNAME** records you need. Copy those into GoDaddy DNS.
- Enable HTTPS — they’ll automatically issue a Let’s Encrypt certificate.

## 5) Optional hardening
- Add analytics (e.g., Plausible/GA) by pasting their `<script>` in `index.html`.
- Add a `favicon.png`/`og.png` image and update the `<meta property="og:image">` tag.

---
MIT License — do anything, no warranty. Enjoy!


---

## Business Description (reference)
Business Description (for your reference):
A professional IT consulting firm specializing in Java engineering, AWS cloud architecture, and practical AI solutions. 
We help organizations modernize applications, build secure/scalable cloud platforms, and apply AI responsibly to real business problems.
Services include: architecture & delivery for Java-based systems, AWS migration & optimization aligned to the Well-Architected Framework, and AI integration (ML workflows, LLM-powered apps) with MLOps best practices.
Ideal clients: product teams and IT leaders who want a reliable partner to deliver outcomes—on time, securely, and with measurable value.


## Copywriting tips we used (sources)
- Clear above‑the‑fold value proposition and strong CTA; show social proof and case studies. 
- For AWS work, align messaging to the Well‑Architected pillars (reliability, security, performance, cost, operational excellence, sustainability).
