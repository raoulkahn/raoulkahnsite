import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'Vanilla HTML/CSS/JS', 'Python (Flask)', 'Claude API', 'Render', 'Cursor + Claude Code',
]

const links = [
  { label: 'Try It Now', url: 'https://agentic-content-reviewer.onrender.com', primary: true },
]

export default function AgenticContentReviewer() {
  return (
    <CaseStudyPage
      title="Agentic Content Reviewer"
      intro="I built this to demonstrate agentic AI patterns — multi-step reasoning, tool use, and structured outputs — that are becoming essential in production AI systems. The goal was to create something functional, not just a toy demo."
      techStack={tech}
      links={links}
    >

      <Section heading="Key Features">
        <BulletList items={[
          'Visible AI reasoning — step-by-step thinking process shown in UI',
          'Quality scoring across clarity, grammar, and tone (1–10)',
          'Safety guardrails — PII detection built into the evaluation loop',
          'Smart content improvement suggestions',
          'Context-aware analysis adapts to content type',
          'Real-time processing via Claude API',
        ]} />
        <img
          src="/images/case-studies/agentic-reviewer/screenshot-1.png"
          alt="Agentic Content Reviewer — input UI"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '900px', width: '100%' }}
        />
      </Section>

      <Section heading="How I Built This">
        <p>
          Used a "Claude CTO" approach — creating a Claude project with custom instructions to act as an opinionated technical advisor. For implementation, used Claude Code in Cursor.
        </p>
        <p>
          The agentic loop runs a structured multi-step evaluation: ingest content, analyze for quality dimensions, check for safety issues, generate improvement suggestions, and return a structured output. Each step is visible to the user in real time.
        </p>
        <img
          src="/images/case-studies/agentic-reviewer/output-panel.jpg"
          alt="Agentic Content Reviewer — full output panel"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '900px', width: '100%' }}
        />
      </Section>

      <Section heading="Challenges Solved">
        <BulletList items={[
          'UX timing issues with loading animation scroll behavior',
          'PII detection nuance — email in a signature vs. exposed PII are treated differently',
          'Progressive disclosure of results sections as each step completes',
          'Validation using intentionally flawed content to stress-test the evaluation logic',
        ]} />
      </Section>

      <Section heading="V2 Ideas">
        <BulletList items={[
          'Strict PII mode toggle for high-sensitivity content',
          'Document type presets (marketing copy, technical docs, support replies)',
          'User feedback on AI suggestions to close the evaluation loop',
        ]} />
      </Section>

    </CaseStudyPage>
  )
}
