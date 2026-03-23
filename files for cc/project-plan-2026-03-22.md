⚠️ THIS IS THE LATEST VERSION. Ignore any older project-plan files.

PORTFOLIO WEBSITE — PROJECT PLAN
==================================
Owner: Raoul Kahn
Last Updated: March 22, 2026
Status: LIVE (V1 launched)


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
- Claude Projects → Planning, prompts, coordination
- Vite + React + Tailwind CSS → Tech stack
- Vercel → Hosting (Hobby plan, free)
- GitHub → Code repo (raoulkahn/raoulkahnsite)
- Formspree → Contact form backend (free tier)


LIVE URLS
---------
- Production: raoulkahn.com
- Vercel: raoulkahnsite.vercel.app
- GitHub: github.com/raoulkahn/raoulkahnsite


SITE MAP (V1 — LIVE)
---------------------
- Home page
- Portfolio page (Selected Work)
- Contact section (anchor on both pages, form wired to Formspree)
- 7 standalone case study / project detail pages


DESIGN
------
- Theme: Blue Grey (Variation 8 from Figma Make)
- Font: Plus Jakarta Sans
- Light theme, medium-toned blue-grey palette
- CC still hasn't perfectly matched the Figma screenshots — visual polish needed


CC RULES (ALWAYS ENFORCE)
-------------------------
1. If I reference screenshots, files, or visual references that I haven't provided — STOP and ask before building. Never guess.
2. Never rewrite, paraphrase, or edit my copy. Use it word-for-word. Ask first if you think something should change.
3. Do not add any features, elements, or UI that I didn't explicitly ask for.
4. All thumbnail images must be the same consistent size.
5. Always explain what you're about to do before doing it.
6. Tell me your plan before you do anything.


PAGE SPECS — CURRENT STATE
--------------------------

HOME PAGE:
  1. Nav — Raoul Kahn (left), Home, Portfolio, Contact (scroll anchor)
  2. Hero — Name, title (AI Product Manager), headshot (circular mask, close to name), "View Portfolio →" CTA
  3. About section — Bio paragraph in a card, tool pills below (Anthropic, Claude Code, n8n, OpenAI, Figma, Xcode, Cursor, Python, Flask, Strava, React, ChatGPT, Swift)
  4. Skills & Expertise — 3 groups: Technical, Product, Tools & Technologies (pill badges)
  5. Education & Certifications — Degree + 4 certs
  6. Contact section — "Get in touch" heading, form (Name, Email, Subject, Message, Send) wired to Formspree
  7. Footer — LinkedIn, GitHub links
  
  REMOVED: Career Highlights 6-card section (redundant with portfolio page)

PORTFOLIO PAGE:
  Title: "Selected Work"
  Subtitle: "Product Manager building at the intersection of AI and user experience."
  
  Two tabs: AI Projects (9) / Professional (2)
  
  Card structure (final):
    1. Thumbnail image (large, dominant — real screenshots or branded visuals)
    2. Project title
    3. One description line (merged impact + description, Why not How)
    4. Tool pills (centered, matching page bg color, dark text)
    5. "View Case Study →" / "View Details →" / "Coming Soon"
  
  Entire card is clickable → goes to case study page
  No "Show more" expand behavior — removed
  
  Color system for gradient thumbnails (where no real screenshot exists):
    - Green/teal = Mobile apps
    - Blue/slate = Web apps  
    - Purple/indigo = Data/Agent/Workflow
  
  AI Projects tab (9):
    1. Lyst Mode → View Project → /lystmode (GitHub Pages)
    2. EvalBench → View Case Study → GitHub Pages
    3. PM Dashboard → View Case Study → GitHub Pages
    4. MCP Copilot → View Case Study → GitHub Pages
    5. AI Run Partner → View Case Study → /ai-run-partner
    6. Product Expert Insights → View Case Study → /product-expert-insights
    7. Agentic Content Reviewer → View Case Study → /agentic-content-reviewer
    8. Daily To Do → View Case Study → /daily-to-do
    9. Quiz Craft → View Case Study → /quizapp
  
  Professional tab (2):
    1. Spin Consumer App → View Details → /spin
    2. Auto-Tune Ignite → View Details → /autotune
  
  REMOVED: AI Agent Personal Assistant (weak demo, redundant with PM Dashboard)
  REMOVED: Apple App Clips (merged into Spin page)


STANDALONE PAGES BUILT
----------------------
1. /ai-run-partner ✅ (real images)
2. /daily-to-do ✅ (real images + PDFs)
3. /agentic-content-reviewer ✅ (images wired up)
4. /product-expert-insights ✅ (real image)
5. /quizapp ✅ (images wired up)
6. /spin ✅ (1 image, needs more)
7. /autotune ✅ (1 screenshot)

All use article-style template layout.
Case study pages need visual polish to match Figma design (dark hero banner, spacing, typography).


THUMBNAIL STATUS
----------------
- Lyst Mode: ✅ Real screenshots (3 phone mockups)
- EvalBench: ✅ Airbnb logo (clean version)
- PM Dashboard: ✅ Animated n8n Synthesizer Agent node (zoomed in)
- MCP Copilot: ✅ Ship/Delay/Kill diagram from case study
- AI Run Partner: ✅ Real dashboard screenshot
- Product Expert Insights: ✅ Animated Lenny's Podcast guest carousel
- Agentic Content Reviewer: ✅ Real app screenshot (dark, needs light frame)
- Daily To Do: ✅ Phone mockup (angled)
- Quiz Craft: ✅ Landing page screenshot (cropped)
- Spin: ✅ Phone mockup (orange)
- Auto-Tune: ✅ App screenshots


COPY APPROACH (decided with ChatGPT feedback)
----------------------------------------------
- Lead with WHY it matters, not HOW it was built
- Speed ("built in a day") is no longer impressive — emphasize quality, real usage, solo PM capability
- One merged description line per card (no separate impact + description)
- Tools are shown in pills — don't repeat in copy
- Cards are teasers — case study pages have the depth


IMAGE STRUCTURE
---------------
public/images/
  headshot/
  projects/ (portfolio page thumbnails)
  case-studies/
    ai-run-partner/
    daily-to-do/
    agentic-reviewer/
    product-expert/
    quizapp/
    spin/
    autotune/
  tools/ (future — for real tool logos)


KNOWN ISSUES TO FIX
--------------------
- Headshot photo too small on Firefox
- Case study pages don't match Figma design (missing dark hero banner, spacing off, typography)
- Some dark screenshots need light border/frame treatment on portfolio cards
- www.raoulkahn.com SSL may need www domain added in Vercel
- Chrome may cache old SSL error — users should try without www


DEPLOYMENT
----------
- GitHub: raoulkahn/raoulkahnsite (main branch)
- Vercel: Hobby plan (free), connected to GitHub, auto-deploys on push
- Domain: raoulkahn.com pointed to Vercel (A record: 216.198.79.1)
- CNAME: www → cname.vercel-dns.com
- Contact form: Formspree (https://formspree.io/f/xreywewo)
- DNS managed through Wix (domain registered with Wix, renews Feb 6, 2027)

WORKFLOW FOR FUTURE CHANGES:
  Open CC Desktop → point to Developer/raoulkahnsite → describe the change → CC edits code → CC pushes to GitHub → Vercel auto-deploys


V2 BACKLOG
----------
Priority fixes:
  [ ] Fix headshot size on Firefox
  [ ] Match case study pages to Figma design (dark hero banner, spacing, typography)
  [ ] Add more images to /spin and /autotune pages
  [ ] Add www.raoulkahn.com in Vercel domains
  [ ] Copy audit — verify CC didn't rewrite any content

Features:
  [ ] Featured project banner (dismissible, on both pages)
  [ ] Theme selector (hidden easter egg trigger, cog icon for testing)
  [ ] Tool logo badges on cards (real logos, need to download)
  [ ] Scrolling tool ticker on home page
  [ ] Hover animations on thumbnails
  [ ] Animated carousel thumbnails (Lenny's guests, Spin projects, GrydMode themes)
  [ ] Apps page in nav
  [ ] Music page
  [ ] Lenny's Podcast Navigator card
  [ ] BeatStars standalone page
  [ ] Amazfit / Huami standalone page
  [ ] IntervooAI standalone page
  [ ] Legend for thumbnail color system
  [ ] Hover preview modal
  [ ] Spin image carousel in thumbnail
  [ ] GrydMode project card (animated Tron Legacy themes)
  [ ] "Open to Work" toggle badge
  [ ] Reskin QuizCraft app UI
  
Design polish:
  [ ] Figma-designed polished thumbnail images (2-template system: Device + Diagram)
  [ ] Dark screenshots get light frame treatment
  [ ] Case study template — match Figma specs exactly
  [ ] Migrate GitHub Pages case studies to new site (consistent design)
  [ ] Tab naming review ("AI Projects" vs "Professional")

Copy improvements:
  [ ] Audit all case study page copy for accuracy
  [ ] Rewrite case study copy with "Why not How" lens
  [ ] Professional work copy review and enhancement


DOMAIN TRANSFER (FUTURE)
-------------------------
Domain registered through Wix, renews Feb 6, 2027.
DNS currently managed in Wix.
Option to transfer domain away from Wix to Cloudflare/Namecheap for simpler DNS management.
Not urgent — Wix subscription has 11 months remaining.


NOTES
-----
- "I was at home, watching Tron Legacy, break dance fighting with my dog and I had an idea, so I had a beer with Claude Code, Xcode and Figma and boom, we made this"
- Keep it simple. Ship it. Iterate later.
- Figma credits go fast — use CC for anything code-based, save Figma for visual exploration only
- CC rules exist because CC likes to freelance — enforce them every session
- Always ask before writing CC prompts — don't jump ahead
- For CC prompts: always prefix with "For CC:" in a code block
- Everything else directed at Raoul is in plain text
