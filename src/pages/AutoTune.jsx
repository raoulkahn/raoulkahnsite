import CaseStudyPage, { Section, ImagePlaceholder } from '../components/CaseStudyPage.jsx'

const tech = ['iOS', 'Android', 'API Integration']

export default function AutoTune() {
  return (
    <CaseStudyPage
      title="Auto-Tune Ignite — Mobile App for Music Creators"
      intro="As Senior Product Manager at Antares Technologies, I led product development for Auto-Tune Ignite — a mobile app bringing professional vocal processing tools to music creators. Owned the product roadmap and feature prioritization for the flagship audio processing application."
      techStack={tech}
      links={[]}
    >

      <Section heading="The Role">
        <p>
          Senior Product Manager owning the product roadmap and feature prioritization for Auto-Tune's mobile application serving music production professionals. Managed a cross-functional team through design, development, and launch phases.
        </p>
      </Section>

      <Section heading="Mobile App Launch">
        <p>
          Led the development and launch of Auto-Tune Ignite mobile app beta. Designed and implemented core mobile features based on comprehensive user research and market analysis.
        </p>
        <p><strong>Impact:</strong> 30% improvement in new user conversion through iterative UX optimization and streamlined first-run experience.</p>
        <img
          src="/images/case-studies/autotune/app-screenshot.avif"
          alt="Auto-Tune Ignite app screenshot"
          className="block mx-auto rounded-xl border border-[#cdd5de] my-6"
          style={{ maxWidth: '493px', width: '100%' }}
        />
      </Section>

      <Section heading="Feature Development">
        <p>
          Integrated third-party features including voice separation and other APIs to enhance mobile app functionality. Focused on making professional-grade audio tools accessible to a broader creator audience.
        </p>
      </Section>

      <Section heading="User Research & Optimization">
        <p>
          Drove iterative UX optimization based on comprehensive user research. Streamlined the first-run experience to reduce friction and increase activation.
        </p>
      </Section>

    </CaseStudyPage>
  )
}
