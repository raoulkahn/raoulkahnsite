import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'React + Vite', 'CSS Modules with CSS Variables', 'localStorage (no backend)',
  'Figma Make', 'Cursor + Claude Code', 'GitHub Pages via GitHub Actions',
]

const links = [
  { label: 'Try It Live', url: 'https://raoulkahn.github.io/daily-todo', primary: true },
  { label: 'View the Code', url: 'https://github.com/raoulkahn/daily-todo' },
]

export default function DailyTodo() {
  return (
    <CaseStudyPage
      title="How I Build Products with Claude Code + Cursor + Figma Make"
      intro="This simple Daily To Do app is intentional — the focus is on the workflow, not the output. I used my own building experiences and leveraged best practices from other non-technical builders to arrive at a structured, repeatable process for shipping products with AI. This workflow continues to evolve with every project."
      techStack={tech}
      links={links}
    >

      <Section heading="How I Built This — The Setup">
        <p>
          Every project starts with two files. A CLAUDE.md system prompt that makes Claude Code behave as an opinionated CTO — it challenges my thinking, owns technical decisions, and maintains project context across sessions. And a set of 10 reusable /commands saved as markdown files, each mapped to a phase of the workflow.
        </p>
        <img
          src="/images/case-studies/daily-to-do/app-screenshot.png"
          alt="Daily To Do app interface"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '873px', width: '100%' }}
        />
      </Section>

      <Section heading="The Workflow">
        <BulletList items={[
          'Explore — /exploration-phase',
          'Plan — /create-plan',
          'Execute — /execute-plan',
          'Review — /review',
          'Peer Review — Cursor Composer + /peer-review',
          'Postmortem',
        ]} />
        <img
          src="/images/case-studies/daily-to-do/workflow-slide.png"
          alt="How I Build Products with AI — workflow overview"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '800px', width: '100%' }}
        />
      </Section>

      <Section heading="Design with Figma Make">
        <p>
          After building the core app, I used Figma Make for design exploration — generating theme concepts, a theme picker UI, and an app icon. I then handed those designs back to Claude Code as reference screenshots to implement.
        </p>
      </Section>

      <Section heading="Key Features">
        <BulletList items={[
          '8 themes with instant preview and floating theme picker',
          'Week strip calendar',
          'Task management with title, time range, notes, and checkbox',
          'Task rollover',
          'Time validation with 30-minute increments',
          'Demo tasks for first-time visitors',
          'Responsive design',
        ]} />
        <img
          src="/images/case-studies/daily-to-do/hero.png"
          alt="Daily To Do app — theme showcase"
          className="w-full rounded-xl border border-[#cdd5de] my-6"
        />
      </Section>

      <Section heading="Download the Slide Deck">
        <p>Full slide deck documenting the AI workflow — available as a PDF.</p>
        <div className="flex mt-4">
          <a
            href="/images/case-studies/daily-to-do/how-i-build-with-ai.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#cdd5de] text-[#3b6ea5] text-sm font-semibold hover:bg-[#e8ecf0] transition-colors"
          >
            ↓ Download Slide Deck (PDF)
          </a>
        </div>
      </Section>

    </CaseStudyPage>
  )
}
