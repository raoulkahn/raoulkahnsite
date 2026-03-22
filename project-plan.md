PORTFOLIO WEBSITE — PROJECT PLAN
==================================
Owner: Raoul Kahn
Last Updated: March 20, 2026
Status: In Progress


PROJECT GOAL
------------
Replace Wix website with a custom-built portfolio site that:
- Gives full control over design and content
- Is easy to update using Claude Code
- Impresses recruiters and hiring managers scanning for AI PM roles
- Loads fast, looks professional, and is mobile responsive


TOOLS & WORKFLOW
----------------
- Figma Make → Design exploration, color/font variations, layout prototyping
- Claude Code (Desktop) → Build, implement, iterate, deploy
- Claude Projects → Planning, prompts, coordination (this project)
- Vite + React + Tailwind CSS → Tech stack
- Vercel → Hosting (free tier)
- GitHub → Code repo (Developer/raoulkahnsite)


SITE MAP
--------
V1:
  - Home page
  - Portfolio page
  - Contact section (anchor on both pages)

V2 (later):
  - Case study template page (designed in Figma first for consistency)
  - Individual case study pages (EvalBench, PM Dashboard, MCP Copilot, etc.)
  - Featured project banner (dismissible, on both pages)
  - Theme selector (hidden easter egg trigger)
  - Music page

Not in scope:
  - Blog
  - CMS / admin panel
  - Analytics (can add later)


DESIGN
------
- Theme: Variation 8 — Blue Grey (from Figma Make)
- Font: Plus Jakarta Sans
- Medium-toned blue-grey palette
- Figma screenshots are the source of truth — CC must reference them before building


PAGE SPECS
----------

HOME PAGE:
  1. Nav — Home, Portfolio, Contact (scroll anchor)
  2. Hero — Name, title, bio, headshot (circular mask), "View Portfolio →" CTA
  3. Career Highlights — 6 cards in 2-column grid
  4. Skills & Expertise — 3 groups: Technical, Product, Tools
  5. Education & Certifications — compact/minimal
  6. Contact section — email, LinkedIn, GitHub
  7. Footer

PORTFOLIO PAGE:
  1. Nav (same)
  2. Heading + subtitle
  3. Two tabs: AI Projects (8) / Professional (3)
  4. 2-column card grid with consistent thumbnail sizes
  5. Each card: category label, title, description, thumbnail
  6. Interaction: "Show more" (expand inline) OR "Case Study" (external link)
  7. Contact section + Footer


PROJECT DATA
------------
All project titles, descriptions, impact metrics, and links are defined in the CC prompt.
Thumbnail images will be added manually (real project screenshots from existing Wix site).
Headshot photo will be added manually (square image, CC applies circular mask).


CC RULES
--------
1. If I reference screenshots, files, or visual references that I haven't provided — STOP and ask before building. Never guess.
2. All thumbnail placeholders must be the same consistent size.
3. Match the Figma design exactly — colors, spacing, typography, card styles.
4. Always explain what you're about to do before doing it.


PHASES
------

PHASE 1 — Design (DONE)
  [x] Portfolio page layout exploration in Figma Make
  [x] Home page design in Figma Make
  [x] Color/font variations explored
  [x] Final variation selected: Blue Grey

PHASE 2 — Build locally (IN PROGRESS)
  [ ] Scaffold React + Tailwind project
  [ ] Share Figma screenshots with CC as design reference
  [ ] Build Home page with real content
  [ ] Build Portfolio page with real content
  [ ] Test responsive/mobile
  [ ] Add real project screenshots as thumbnails
  [ ] Add headshot photo
  [ ] Iterate on design match with Figma

PHASE 3 — Deploy
  [ ] Create GitHub repo
  [ ] Push code
  [ ] Connect to Vercel
  [ ] Test on Vercel URL
  [ ] Point raoulkahn.com DNS to Vercel
  [ ] Verify site is live
  [ ] Cancel Wix

PHASE 4 — V2 Features
  [ ] Design case study template in Figma
  [ ] Build case study pages
  [ ] Featured project banner (dismissible)
  [ ] Theme selector with easter egg trigger
  [ ] Update GitHub Pages case studies to match new design
  [ ] Music page


PHASE 5 — Ongoing Maintenance
  - Update project descriptions or add new projects → CC Desktop
  - Swap thumbnail images → drop new image in project folder, CC updates the reference
  - Add new case studies → CC creates page from template
  - Design changes → Figma for exploration, CC to implement
  - Content updates (bio, skills, certifications, job title) → CC Desktop
  - Bug fixes or mobile issues → CC Desktop
  - Dependency updates (React, Tailwind) → CC Desktop
  - Domain/hosting issues → Vercel dashboard
  - Toggle featured banner on/off (V2) → CC or edit a config flag
  - Workflow: open CC Desktop → point to Developer/raoulkahnsite → describe the change → done


DOMAIN TRANSFER
---------------
TBD: Confirm if raoulkahn.com is registered through Wix or separately.
- If through Wix: transfer domain out first (takes a few days)
- If separate: just update DNS (minutes to hours)


NOTES
-----
- "I was at home, watching Tron Legacy, break dance fighting with my dog and I had an idea, so I had a beer with Claude Code, Xcode and Figma and boom, we made this"
- Keep it simple. 2 pages. Ship it. Iterate later.
