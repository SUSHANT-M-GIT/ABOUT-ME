# Sushant Mishra — Portfolio

Personal portfolio for Sushant Mishra, full-stack developer and ML engineer.

🌐 **Live:** [about-me-rho-one.vercel.app](https://about-me-rho-one.vercel.app)

<!-- TODO: add screenshot — public/og.png (1200×630) -->

---

## Stack

Built with what's actually in `package.json` — no library claims beyond this:

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | CSS3 with custom properties (dark theme, purple/cyan accent) |
| Fonts | Sora (display) · Space Grotesk (body) via Google Fonts |
| Deployment | Vercel |

---

## Features

- **Hero** — circular photo slot with graceful initials fallback, high-contrast GitHub/LinkedIn buttons, download resume
- **Projects** — featured cards with screenshot, metric chips, tech badges, live + GitHub links; compact list for other projects
- **Skills** — resume-accurate chip grid grouped by category (Languages, Frontend, Backend, Databases, Data & ML, Cloud & Deployment, Core CS)
- **About** — 3-sentence bio, education card
- **Virtual Internship** — honest framing (project-based, unpaid, remote)
- **Education & Certifications** — REVA University B.Tech + KV AFS Avadi + 4 certifications with correct issuers
- **Contact** — email, LinkedIn, GitHub, resume download; "Open to full-stack and software developer roles"
- Intro animation — session-once, instantly skippable, skipped for `prefers-reduced-motion`
- Nav scroll-spy — fixed `rootMargin: '-45% 0px -50% 0px'` so tall sections register correctly
- SEO — JSON-LD Person schema, `og:image`, `twitter:card summary_large_image`, `<noscript>` fallback

---

## Run locally

```bash
# 1. Install
npm install

# 2. Dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── Sushant_Resume.pdf       # resume download
│   ├── photo.jpg                # TODO: add your photo
│   ├── og.png                   # TODO: 1200×630 social share image
│   └── projects/
│       ├── campus-event-finder.svg
│       ├── linkshield.svg
│       └── taskflow.svg
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Navigation/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── About/
│   │   ├── Experience/          # Virtual Internship section
│   │   ├── EducationCerts/
│   │   ├── Contact/
│   │   ├── Intro/               # Intro animation (session-once)
│   │   ├── CustomCursor/        # Desktop only — disabled on touch
│   │   ├── Footer/
│   │   └── hooks/
│   │       └── useInView.js     # IO-based reveal, reduced-motion aware
│   ├── data/
│   │   └── portfolio.js         # Single source of truth for all content
│   └── styles/
│       ├── globals.css
│       └── App.css
├── index.html                   # JSON-LD, OG tags, noscript fallback
├── vite.config.js
└── package.json
```

---

## TODOs (manual steps)

| # | What | Where |
|---|------|-------|
| 1 | Add `photo.jpg` (your face, square crop) | `public/photo.jpg` |
| 2 | Add `og.png` (1200×630 social share image) | `public/og.png` |
| 3 | Add real PNG screenshots to replace SVG placeholders | `public/projects/*.png` |
| 4 | Add GitHub link for LinkShield repo (once public) | `src/data/portfolio.js` → `linkshield.github` |
| 5 | Add Streamlit live demo link for LinkShield | `src/data/portfolio.js` → `linkshield.live` |
| 6 | Add GitHub link for TaskFlow repo | `src/data/portfolio.js` → `taskflow.github` |
| 7 | Add CGPA for REVA University (once confirmed) | `src/data/portfolio.js` → `education[0]` comment |
| 8 | Write the LinkShield case study bullet (one hard problem you solved) | `src/data/portfolio.js` → `campus-event-finder` TODO comment |
| 9 | Verify Campus Event Finder live URL is `c-e-s.vercel.app` (not the old one) | `src/data/portfolio.js` already updated |

---

## Connect

- GitHub: [github.com/SUSHANT-M-GIT](https://github.com/SUSHANT-M-GIT)
- LinkedIn: [linkedin.com/in/sushant-sm](https://www.linkedin.com/in/sushant-sm)
- Email: mishrasushant029@gmail.com
