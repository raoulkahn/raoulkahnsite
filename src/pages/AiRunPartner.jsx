import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'React', 'Python (Flask)', 'Claude API', 'Strava API',
  'Garmin (via Strava)', 'WeatherAPI', 'Figma Make',
  'Warp + Claude Code + Cursor', 'Render',
]

const links = [
  { label: 'Try the Demo', url: 'https://ai-run-partner.onrender.com', primary: true },
  { label: 'View the Code', url: 'https://github.com/raoulkahn/running-dashboard' },
]

export default function AiRunPartner() {
  return (
    <CaseStudyPage
      title="AI Run Partner — Powered by Strava and Garmin"
      intro="Unlike my other portfolio projects, AI Run Partner isn't a demo — it's a product I actually use every day. Built in a day and continuously improved through real daily usage, it integrates live fitness data from multiple sources and uses Claude's API as an AI coaching assistant that adapts to my weekly goals, weather conditions, and training history. I built a public demo with realistic mock data so anyone can explore it, and a private live version connected to my real Strava and Garmin accounts."
      techStack={tech}
      links={links}
    >

      <Section heading="Why I Built This">
        <p>
          I use Strava and Garmin daily but my running workflow was spread across multiple apps — Strava for activity data, the Garmin app for VO2 max and fitness metrics, a weather app to decide when to run, a notes app for fitness reminders, and Runna (a paid app) for structured training plans with custom run types. None of them talked to each other.
        </p>
        <p>
          I built AI Run Partner to bring all of that into one dashboard — with an AI coach that ties it all together and adapts to my week in real time. Built in a day, for free, exactly the way I want it.
        </p>
      </Section>

      <Section heading="How I Built This">
        <p>
          Same structured workflow as my other projects — a CLAUDE.md system prompt and reusable /commands for each phase. New for this project: a two-layer AI workflow where Claude chat handles product thinking and brainstorming while Claude Code handles implementation.
        </p>
        <p>
          Commands are refined collaboratively before execution, reducing back-and-forth. Also introduced feature branching, Warp as a dedicated Claude Code terminal, and Figma Make for UX review checkpoints throughout development.
        </p>
      </Section>

      <Section heading="The Build">
        <p>
          Core dashboard built and deployed in one day. Strava OAuth, activity cards, weekly goal tracker, weather widget, and AI assistant all wired up in the first session.
        </p>
        <img
          src="/images/case-studies/ai-run-partner/screenshot.avif"
          alt="AI Run Partner dashboard screenshot"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '725px', width: '100%' }}
        />
      </Section>

      <Section heading="The Iteration">
        <p>
          Real daily usage uncovered issues no amount of planning would catch — the AI referencing last week's run as "this week" due to week boundary logic, suggesting double runs, guilt-tripping about missed mileage, writing off entire rainy days when mornings were clear.
        </p>
        <p>
          Each bug became a prompt engineering exercise, leading to a comprehensive rule system with 15+ behavioral rules for the AI coaching assistant.
        </p>
      </Section>

      <Section heading="Design with Figma Make">
        <p>
          Used for initial design exploration including hover animations, card layouts, and theme concepts. Handed designs back to Claude Code as reference screenshots to implement. Later used for settings panel design and UX review checkpoints throughout development.
        </p>
      </Section>

      <Section heading="UX Polish">
        <p>
          Referenced Linear's design system for visual improvements — soft borders, layered backgrounds, subtle card gradients, staggered page load animations, and a two-stage hover pattern (immediate lighten + delayed shift). Every theme was refined to match this level of polish.
        </p>
      </Section>

      <Section heading="Process Improvements">
        <p>
          This project exposed gaps in my workflow. Claude Code accidentally pushed untested changes to production — I added a branch protection rule and adopted feature branching as a result. Manually testing AI messages one at a time proved unsustainable, leading me to design an eval framework for batch scenario testing with automated rule checking.
        </p>
      </Section>

      <Section heading="What Makes This Different">
        <p>
          Dual-mode architecture, multi-source data integration, AI assistant with 15+ behavioral rules, iterative prompt engineering through real-world usage, 12 custom themes with Linear-inspired visual polish.
        </p>
        <img
          src="/images/case-studies/ai-run-partner/demo.gif"
          alt="AI Run Partner live demo"
          className="w-full rounded-xl border border-[#cdd5de] my-6"
        />
      </Section>

      <Section heading="Key Features">
        <BulletList items={[
          'AI coaching assistant with weather-aware suggestions',
          '12 themes with Linear-inspired visual polish',
          'Weekly mileage goal tracker',
          'Weekly run plan with custom run types and pace targets',
          'Activity cards with splits, route map, heart rate, and cadence',
          'Compact / expanded activity display toggle',
          'Notes scratchpad',
          'Shoe tracker',
          'VO2 max from Garmin',
          'Strava avatar integration',
          'Staggered page load animations',
        ]} />
      </Section>

    </CaseStudyPage>
  )
}
