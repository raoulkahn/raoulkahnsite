import CaseStudyPage, { Section, BulletList, ImagePlaceholder } from '../components/CaseStudyPage.jsx'

const tech = [
  'React Native', 'iOS', 'Android', 'Amplitude', 'Looker', 'Jira', 'Apple Pay', 'Google Pay',
]

export default function Spin() {
  return (
    <CaseStudyPage
      title="Spin — Building the Rider Experience from Day One"
      intro="As the first Product Manager at Spin, reporting directly to the CEO, I owned the rider experience for 4 years — from a scrappy micromobility startup through Ford acquisition to a global operation across 60+ markets. This is the full story of what I shipped."
      techStack={tech}
      links={[]}
    >

      <Section heading="The Role">
        <p>
          Joined as Spin's first PM and built the product function from the ground up. Owned the consumer mobile app (iOS and Android), rider onboarding, payments, and growth. Collaborated directly with Apple, Google Maps, Lyft, and Ford Motor Company.
        </p>
        <video
          src="/images/case-studies/spin/spin-app.mp4"
          controls
          playsInline
          className="w-full rounded-xl border border-[#cdd5de] my-6"
        />
      </Section>

      <Section heading="Growth & Experimentation">
        <p>
          Designed and executed 30+ A/B tests per quarter using Looker and Amplitude. Systematically optimized user acquisition, onboarding, and retention flows across the full rider funnel.
        </p>
        <p><strong>Impact:</strong> 30% improvement in new user conversion. 15% increase in ride frequency.</p>
      </Section>

      <Section heading="Payments Integration">
        <p>
          Integrated Apple Pay and Google Pay across the platform, reducing checkout friction and simplifying the first-ride experience. Every step removed from the payment flow directly increased conversion.
        </p>
      </Section>

      <Section heading="Product Features">
        <p>
          Shipped multiple major features including Group Rides, Monthly Rentals, and various rider experience enhancements. Managed the product backlog and sprint planning for the mobile engineering pod in a fast-paced startup environment.
        </p>
      </Section>

      <Section heading="Autonomous Vehicle App — Ford Partnership">
        <p>
          Led development of an autonomous vehicle ride-hailing app in partnership with Ford Motor Company for the Miami beta launch. Leveraged Spin's existing mobile codebase to accelerate delivery within a tight timeline — demonstrating the ability to ship with Fortune 500 partners under pressure.
        </p>
      </Section>

      <Section heading="Operations Tools">
        <p>
          Managed development of internal operations tools and platforms supporting city-wide deployments across 60+ global markets.
        </p>
      </Section>

      <Section heading="Apple App Clips — Featured at WWDC">
        <p>
          Launched Spin's App Clips integration with Apple Pay, allowing users to ride a scooter by scanning a QR code — no app download required. Zero-friction onboarding that was selected by Apple to be featured at WWDC.
        </p>
        <p><strong>Impact:</strong> 25% increase in new user activation.</p>
      </Section>

    </CaseStudyPage>
  )
}
