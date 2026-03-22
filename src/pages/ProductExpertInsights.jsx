import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'Vanilla HTML/CSS/JS', 'Python (Flask)', 'OpenAI (embeddings)',
  'Claude API (generation)', 'Pinecone', 'Render', 'Cursor',
]

const links = [
  { label: 'Try It Now', url: 'https://product-expert-insights.onrender.com', primary: true },
]

export default function ProductExpertInsights() {
  return (
    <CaseStudyPage
      title="Product Expert Insights"
      intro="I built this to make 300+ hours of product leadership wisdom instantly searchable. Instead of scrubbing through episodes, users ask a question and get cited answers in seconds — powered by RAG architecture."
      techStack={tech}
      links={links}
    >

      <Section heading="Key Features">
        <BulletList items={[
          'AI-powered answers from 300+ Lenny\'s Podcast interviews using RAG',
          'Expert insights from leaders at Google, Meta, Stripe, Airbnb, Figma, and Netflix',
          'Direct links to source episodes for every answer',
          'Semantic search across 15,685 transcript chunks',
          'No hallucination — only uses actual podcast transcripts',
          'Clean minimal UI with summary-first answer format',
        ]} />
        <img
          src="/images/case-studies/product-expert/app-screenshot.png"
          alt="Product Expert Insights app screenshot"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '920px', width: '100%' }}
        />
      </Section>

      <Section heading="How I Built This">
        <p>
          Building on the "Claude CTO" approach learned from Zevi Arnovitz (Meta PM) on Lenny's Podcast. Key architecture decisions included chunking strategy (500 tokens with overlap), prompt engineering for structured responses, and a summary-first UI pattern inspired by Rotten Tomatoes.
        </p>
      </Section>

      <Section heading="Challenges Solved">
        <BulletList items={[
          'Data pipeline — parsed 303 markdown transcripts with YAML front matter',
          'Prompt engineering for consistent, citation-rich responses across varied questions',
          'Package compatibility issues during Render deployment',
        ]} />
      </Section>

      <Section heading="V2 Ideas">
        <BulletList items={[
          'Filter answers by topic, company, or guest',
          'Save and bookmark favorite answers',
          'Related questions surfaced after each answer',
        ]} />
      </Section>

    </CaseStudyPage>
  )
}
