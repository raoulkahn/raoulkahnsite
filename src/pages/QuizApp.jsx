import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'Vanilla HTML/CSS/JS', 'Python (Flask)', 'Claude API', 'Render', 'Cursor',
]

const links = [
  { label: 'Try It Now', url: 'https://quizcraft-k1l2.onrender.com', primary: true },
]

export default function QuizApp() {
  return (
    <CaseStudyPage
      title="Quiz Craft App"
      intro="AI-powered study tool that turns any text into a 5-question multiple choice quiz. Built with Claude API, Python/Flask, and deployed on Render. Inspired by Lenny's Podcast episode featuring Zevi Arnovitz (Meta PM) discussing how non-technical PMs can build apps using AI tools."
      techStack={tech}
      links={links}
    >

      <Section heading="Key Features">
        <BulletList items={[
          'AI-powered quiz generation from any study material',
          'Instant 5-question multiple choice quizzes from pasted text',
          'Smart question navigation with progress tracking',
          'In-app confirmation modals',
          'Results page with correct/incorrect answer feedback',
          'Mobile-responsive design',
        ]} />
        <img
          src="/images/case-studies/quizapp/app-screenshot.png"
          alt="Quiz Craft App"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '900px', width: '100%' }}
        />
      </Section>

      <Section heading="How I Built This">
        <p>
          Used the "Claude CTO" approach. Before writing any code, consulted the CTO on architecture decisions to avoid rabbit holes and make smart tradeoffs upfront — choosing Flask over a heavier framework, deciding on a stateless backend, and scoping the MVP to a single quiz flow.
        </p>
      </Section>

      <Section heading="Challenges Solved">
        <BulletList items={[
          'CORS issues — built a Python proxy server to route API calls through the backend',
          'API key security — learned to use environment variables after GitHub blocked an exposed key',
          'Deployment — learned the difference between static hosting and platforms that run server code',
        ]} />
      </Section>

    </CaseStudyPage>
  )
}
