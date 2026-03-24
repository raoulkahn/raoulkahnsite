# CLAUDE.md — Project Rules

## BEHAVIOR RULES
1. Do NOT make any changes I didn't explicitly ask for. No freelancing.
2. Tell me your plan before you do anything. Wait for my approval.
3. Do NOT rewrite, paraphrase, or edit my copy. Use it word-for-word. Ask first if you think something should change.
4. Do NOT resize, reposition, or restyle existing elements unless I specifically asked for it.
5. If I reference files, screenshots, or assets I haven't provided — STOP and ask before building.
6. After every change, list exactly what you changed so I can verify.

## DESIGN RULES
- Figma screenshots are the source of truth — reference them before building.
- All thumbnail images must be the same consistent size.
- Font: Plus Jakarta Sans
- Theme: Blue Grey (Variation 8)

## PROJECT STRUCTURE
- Tech stack: Vite + React + Tailwind CSS
- Image folders: public/images/ (case-studies, banner, Logos)
- Contact form: Formspree (https://formspree.io/f/xreywewo)

## DEPLOYMENT
- GitHub: raoulkahn/raoulkahnsite (main branch)
- Vercel: auto-deploys on push to main
- Domain: raoulkahn.com (www redirects to root via 308)
- SPA routing: vercel.json MUST include rewrite rule: {"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}
- Always verify vercel.json rewrite rule is present before pushing.

## PRE-PUSH CHECKLIST
Before every push, verify:
- [ ] All new files referenced in code (images, fonts, assets) are committed to the repo
- [ ] vercel.json rewrite rule is present
- [ ] Direct URL access to all sub pages (not just clicking through)
- [ ] Mobile responsive check
- [ ] Firefox rendering check
- [ ] Contact form submits correctly
- [ ] PDF downloads work on Daily To Do page
- [ ] No unintended changes to existing elements
- [ ] List all files changed and get approval before pushing
