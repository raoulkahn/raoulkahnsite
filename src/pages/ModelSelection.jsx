import { useEffect, useRef } from 'react'
import CaseStudyPage, { Section, BulletList } from '../components/CaseStudyPage.jsx'

const tech = [
  'Python', 'Claude API', 'OpenAI API', 'Together AI', 'Matplotlib', 'Ollama',
]

const links = [
  { label: 'View the Code', url: 'https://github.com/raoulkahn/model-selection-framework', primary: true },
  { label: 'Browse 300 Episodes', url: '/lenny-frameworks' },
]

function AfterCallout() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('callout-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .callout-after {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .callout-after.callout-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div
        ref={ref}
        className="callout-after border-l-4 border-[#2E7D32] bg-[#E8F5E9] px-5 py-4 rounded-r-xl flex gap-3 items-start"
      >
        <span className="text-2xl leading-none mt-0.5 flex-shrink-0">✅</span>
        <p className="text-[18px] font-bold text-[#1B5E20] leading-snug">
          For the same three episodes, you can now quickly scan what you'll learn and decide if it's worth your time — in seconds, not hours.
        </p>
      </div>
    </>
  )
}

export default function ModelSelection() {
  return (
    <CaseStudyPage
      title="Model Selection Framework — Fine-Tuning vs. Prompt Engineering"
      intro="Should I fine-tune a model or optimize prompts? I benchmarked 6 models on a real extraction task across 300 podcast episodes to find out."
      techStack={tech}
      links={links}
    >

      {/* ── Section 1 — The Problem ──────────────────────────────────────── */}
      <Section heading="The Problem">
        <p>
          Lenny's Podcast has 300+ episodes of expert product management advice from the best operators in tech. Each episode runs 60–120 minutes. The most valuable content — specific frameworks, mental models, tactical decision-making advice — is buried inside unstructured conversation.
        </p>
        <p>
          A listener today has no way to quickly see what they'll actually learn from an episode before committing 2 hours. The title tells you the guest. The description tells you the topic. Neither tells you whether this specific episode contains something worth your time.
        </p>
        <p>
          The question I wanted to answer: can we automatically extract the named frameworks and mental models from each episode — with enough structure and quality that a listener can make a real decision in 30 seconds?
        </p>
      </Section>

      {/* ── Section 2 — Before ───────────────────────────────────────────── */}
      <Section heading="Before">

        <div className="rounded-xl overflow-hidden border border-[#e8d9c4] my-6">
          <div className="bg-[#FDF6EE] px-5 py-3 border-b border-[#e8d9c4] flex items-center justify-center">
            <img src="/images/lenny.png" alt="Lenny's Podcast" className="h-7 w-auto" />
          </div>

          {[
            {
              title: "Marc Andreessen: The real AI boom hasn't even started yet",
              date: "JAN 9",
              duration: "1:44:30",
              thumb: "/images/marc.png",
              teaser: "On raising kids, why job loss fears are overblown, the future of PM/eng/design careers, and the macro force you should pay attention to. We discuss: why AI is arriving at the perfect moment to counter demographic collapse, the \"Mexican standoff\" happening between PMs, designers, and engineers, why you should still learn to code, and how to develop an \"E-shaped\" career with AI as a force multiplier.",
            },
            {
              title: "A non-technical PM's guide to vibe coding | Zevi Arnovitz (Meta)",
              date: "MAR 3",
              duration: "1:15:02",
              thumb: "/images/zevi.png",
              teaser: "Zevi Arnovitz is a product manager at Meta who has built a reputation for shipping real products using AI coding tools—without a technical background. In this episode, he walks through his exact workflow for going from idea to deployed product using Cursor, Claude, and Bolt.",
            },
            {
              title: "The world's first professional vibe coder | Lazar Yavanovich (Lovable)",
              date: "FEB 18",
              duration: "1:42:25",
              thumb: "/images/lazar.png",
              teaser: "Lazar Yavanovich is a designer-turned-builder who has become one of the most prolific vibe coders in the world, shipping dozens of products using AI tools. In this episode, he shares his complete process for turning ideas into polished products with almost no traditional engineering.",
            },
          ].map(({ title, date, duration, thumb, teaser }, i) => (
            <div key={i} className={`bg-[#FDF6EE] px-5 py-4 flex gap-4 items-start ${i < 2 ? 'border-b border-[#e8d9c4]' : ''}`}>
              <img src={thumb} alt="" className="w-[80px] h-[80px] rounded-lg object-cover flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-bold text-[#2d1f0e] leading-snug mb-1">{title}</p>
                <p className="text-[16px] text-[#1a1a1a] leading-relaxed mb-2 bg-[#f5e8d4] px-1.5 py-1 rounded border-l-2 border-[#c9975a]">
                  {teaser}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#9e7d56]">
                  <span>🔒</span>
                  <span>{date} · LENNY RACHITSKY · {duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-[#E65100] bg-[#FFF3E0] px-5 py-4 rounded-r-xl flex gap-3 items-start">
          <span className="text-2xl leading-none mt-0.5 flex-shrink-0">⚠️</span>
          <p className="text-[18px] font-bold text-[#BF360C] leading-snug">
            You get the guest's name and a topic summary. Nothing tells you what you'll actually learn, whether the advice applies to your situation, or whether the 90 minutes is worth your time today.
          </p>
        </div>
      </Section>

      {/* ── Section 2b — After ───────────────────────────────────────────── */}
      <Section heading="After">

        <div className="rounded-xl overflow-hidden border border-[#cdd5de] my-6">
          <div className="bg-white px-5 py-3 border-b border-[#e8edf2] flex items-center justify-center">
            <img src="/images/lenny.png" alt="Lenny's Podcast" className="h-7 w-auto" />
          </div>

          {[
            {
              title: "Marc Andreessen: The real AI boom hasn't even started yet",
              date: "JAN 9",
              duration: "1:44:30",
              thumb: "/images/marc.png",
              highlights: [
                { head: "AI converts abundance into rare intelligence", body: "AI transforms cheap compute into valuable thinking — individuals with deep expertise can now become exponentially more productive across adjacent domains." },
                { head: "Track task loss, not job loss", body: "Workers swap old tasks for new ones as technology evolves; focusing on task-level shifts gives a far more accurate picture than asking whether whole jobs disappear." },
                { head: "Deep expertise plus AI breadth wins", body: "The most valuable people combine mastery in one domain with AI-assisted capability across adjacent fields — two skills multiply rather than add." },
                { head: "Institutions block tech, not capability limits", body: "Regulatory cartels and bureaucratic resistance slow AI deployment more than any technical limitation — the bottleneck is political, not computational." },
                { head: "AI tutoring makes elite education universally affordable", body: "One-on-one tutoring is proven to move students two standard deviations higher; AI makes this historically exclusive method economically accessible to everyone." },
              ],
            },
            {
              title: "A non-technical PM's guide to vibe coding | Zevi Arnovitz (Meta)",
              date: "MAR 3",
              duration: "1:15:02",
              thumb: "/images/zevi.png",
              highlights: [
                { head: "Graduate through AI tools, not all at once", body: "Start with conversational ChatGPT projects, advance to no-code builders like Bolt, then move to code editors — each stage builds judgment before adding complexity." },
                { head: "Plan ruthlessly before writing any code", body: "Spend time exploring scope, data models, and UX decisions with AI before coding to prevent costly bugs and rework — especially critical without a technical background." },
                { head: "Build reusable prompt commands as your workflow", body: "Create saved /commands for each development phase (explore, plan, execute, review) that act as refined templates — your workflow becomes a compounding asset." },
                { head: "Use multiple AI models as a code review team", body: "Have Claude, Codex, and other models independently review the same code to catch different bugs, then use peer review comparisons to resolve conflicts." },
                { head: "You own everything you ship, period", body: "AI amplifies your speed and judgment, but claiming 'the AI made me do it' abdicates responsibility — you're accountable for every line in production." },
              ],
            },
            {
              title: "The world's first professional vibe coder | Lazar Yavanovich (Lovable)",
              date: "FEB 18",
              duration: "1:42:25",
              thumb: "/images/lazar.png",
              highlights: [
                { head: "Non-technical background beats coding experience", body: "People without coding experience have an advantage in AI development — they don't dismiss ideas as impossible, enabling bolder creative leaps." },
                { head: "Spend 80% planning, 20% building with AI", body: "Input clarity directly determines AI output quality — invest most time upfront clarifying your vision rather than iterating on bad output." },
                { head: "Taste and design judgment are now scarce skills", body: "Coding is commoditized; the real differentiator is developing taste to know what looks magical versus mediocre — a skill built through deliberate exposure." },
                { head: "Create four reference documents before building", body: "Vision, sequence, design standards, and user journeys — these keep the AI context-aware across long sessions and prevent drift." },
                { head: "World-class design separates winners from good enough", body: "When AI enables everyone to produce adequate work, excellence in emotional and magical design becomes the only real competitive advantage." },
              ],
            },
          ].map(({ title, date, duration, thumb, highlights }, i) => (
            <div key={i} className={i < 2 ? 'border-b border-[#e8edf2]' : ''}>
              <div className="flex gap-4 items-start px-5 py-4 bg-white border-b border-[#e8edf2]">
                <img src={thumb} alt="" className="w-[80px] h-[80px] rounded-lg object-cover flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-[16px] font-bold text-[#1e2f42] leading-snug mb-1">{title}</p>
                  <p className="text-[11px] text-[#8898aa]">{date} · Lenny's Podcast · {duration}</p>
                </div>
              </div>
              <div className="px-5 py-4 bg-[#f6f8fa]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#3b6ea5] mb-3">What you'll learn</p>
                <ul className="space-y-2.5">
                  {highlights.map(({ head, body }) => (
                    <li key={head} className="text-[16px] text-[#3d4f63] leading-relaxed">
                      <span className="font-semibold text-[#1e2f42]">{head}. </span>
                      {body}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <AfterCallout />
      </Section>

      {/* ── Section 2c — Product Impact ──────────────────────────────────── */}
      <Section heading="Product Impact">
        <p>
          This extraction layer turns 300+ hours of unstructured conversation into a structured, scannable knowledge base. It enables new browsing and filtering experiences — by topic, by actionability, by company stage — that don't exist today. The same approach generalizes to any long-form expert content: YouTube reviews, conference talks, technical podcasts.
        </p>
      </Section>

      {/* ── Section 3 — The Approach ─────────────────────────────────────── */}
      <Section heading="The Approach">
        <p>
          I tested three methods for extracting frameworks from podcast transcripts:
        </p>
        <BulletList items={[
          'Zero-shot prompting — a clear task description with no examples, relying entirely on the model\'s general instruction-following.',
          'Optimized few-shot prompting — a refined prompt with schema constraints, output format, and worked examples drawn from manually labeled episodes.',
          'Fine-tuning — a LoRA adapter (r=64, α=128) trained on 50 manually labeled episodes using Mistral-7B-Instruct-v0.2 via Together AI.',
        ]} />
        <p>
          Six models were benchmarked: Claude Haiku 4.5, Claude Sonnet 4.6, GPT-4o, Llama 3 8B, Mixtral 8x7B, and fine-tuned Mistral 7B. Each was evaluated against 30 manually labeled test episodes using precision, recall, F1 (at 0.55 name-similarity threshold), cost per episode, and latency.
        </p>
        <p>
          Ground truth labels were created by manually extracting frameworks from 80 episodes — 50 for training, 30 held out for evaluation. Each framework was labeled with name, description, category, actionability, company stage, and a verbatim evidence quote.
        </p>
      </Section>

      {/* ── Section 4 — Results ──────────────────────────────────────────── */}
      <Section heading="Results">
        <p>
          Claude Haiku with the optimized prompt was the clear winner — highest F1 at the lowest commercial cost.
        </p>

        {/* TL;DR callout */}
        <div className="border-l-4 border-[#3b6ea5] bg-[#eef4fb] px-5 py-4 rounded-r-xl my-6 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#3b6ea5] mb-2">TL;DR</p>
          <p className="text-[16px] text-[#1e2f42] leading-snug"><strong>Winner:</strong> Claude Haiku (optimized prompt) — highest F1 (0.486), lowest commercial cost ($0.031/episode), acceptable latency (47s).</p>
          <p className="text-[16px] text-[#3d4f63] leading-snug">GPT-4o over-extracted with low precision. Open-source models were cheap but inconsistent.</p>
          <p className="text-[16px] text-[#3d4f63] leading-snug">Fine-tuned Mistral under-extracted — it learned what a framework is, but not how many to find.</p>
        </div>

        {/* Results table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#cdd5de]">
                {['Model', 'Precision', 'Recall', 'F1', 'Cost/ep', 'Latency'].map(h => (
                  <th key={h} className="text-left text-[10px] font-bold uppercase tracking-widest text-[#8898aa] pb-2 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { model: 'Claude Haiku (opt)',   prec: '0.444', rec: '0.540', f1: '0.486', cost: '$0.031', lat: '47s',  winner: true },
                { model: 'Claude Sonnet (zero)', prec: '0.388', rec: '0.502', f1: '0.436', cost: '$0.103', lat: '79s',  winner: false },
                { model: 'Claude Sonnet (opt)',  prec: '0.364', rec: '0.513', f1: '0.424', cost: '$0.112', lat: '104s', winner: false },
                { model: 'GPT-4o (opt)',         prec: '0.176', rec: '0.508', f1: '0.260', cost: '$0.061', lat: '45s',  winner: false },
                { model: 'Qwen 7B (opt)',        prec: '0.290', rec: '0.410', f1: '0.337', cost: '$0.005', lat: '16s',  winner: false },
                { model: 'Mixtral 8x7B (opt)',   prec: '0.098', rec: '0.383', f1: '0.155', cost: '$0.015', lat: '65s',  winner: false },
                { model: 'Mistral FT (local)',   prec: '0.113', rec: '0.376', f1: '0.172', cost: '$0.000', lat: '87s',  winner: false },
              ].map(({ model, prec, rec, f1, cost, lat, winner }) => (
                <tr
                  key={model}
                  className={`border-b border-[#cdd5de] last:border-0 ${winner ? 'bg-[#dde9f5]' : ''}`}
                >
                  <td className={`py-2 pr-4 font-medium ${winner ? 'text-[#3b6ea5]' : 'text-[#1e2f42]'}`}>{model}</td>
                  <td className="py-2 pr-4 text-[#3d4f63]">{prec}</td>
                  <td className="py-2 pr-4 text-[#3d4f63]">{rec}</td>
                  <td className={`py-2 pr-4 font-semibold ${winner ? 'text-[#3b6ea5]' : 'text-[#3d4f63]'}`}>{f1}</td>
                  <td className="py-2 pr-4 text-[#3d4f63]">{cost}</td>
                  <td className="py-2 text-[#3d4f63]">{lat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Cost and quality don't scale together. Claude Haiku at $0.031/ep outperforms Claude Sonnet at $0.112/ep. GPT-4o shows high recall but very low precision — it extracts broadly but with poor specificity. Open-source models (Qwen, Mixtral) are extremely cheap but fall apart on structured output consistency.
        </p>
      </Section>

      {/* ── Section 4b — The Decision ────────────────────────────────────── */}
      <Section heading="The Decision">
        <p>
          If I were shipping this product today, I'd use Claude Haiku with an optimized prompt. It delivered the best accuracy at the lowest cost — and requires zero training data investment.
        </p>
        <p>
          I would not fine-tune at this stage. With only 50 training examples, the fine-tuned model learned the concept of a framework but consistently under-extracted, producing 4–8 per episode against a ground truth of 14–17. I'd revisit fine-tuning only after accumulating 200+ labeled examples and validating that the accuracy gap justifies the infrastructure cost.
        </p>
      </Section>

      {/* ── Section 5 — What I Learned ───────────────────────────────────── */}
      <Section heading="What I Learned">
        <h3 className="text-[1rem] font-bold text-[#1e2f42] mb-3 mt-1">
          Fine-tuning learned what to extract — but not how much.
        </h3>
        <p>
          The trained model reliably identified real, meaningful frameworks and named them in the right style. But it consistently under-extracted: producing 4–8 frameworks per episode against ground truth sets of 14–17. The diagnostic showed this wasn't a naming failure — when the model did extract a framework, similarity scores to ground truth were high (0.65–1.0). The model simply stopped too early.
        </p>
        <p>
          With only 50 training examples, the model didn't see enough variation in episode length and density to learn the right extraction rate. A second fine-tuning pass with stronger completeness signals — or more training data — would likely close most of the gap.
        </p>
        <p>
          <strong className="text-[#1e2f42]">For this task, prompt engineering on a commercial model was the better investment.</strong> The optimized prompt took roughly 4 hours to develop and immediately produced strong results. The fine-tuning path took significantly longer — data labeling, training pipeline setup, GGUF conversion, Ollama serving — and underperformed. The ROI calculation depends entirely on volume: at 300 episodes, Claude Haiku costs ~$9.50 total. Fine-tuning only wins at scale if the infrastructure cost is already amortized.
        </p>
        <p>
          <strong className="text-[#1e2f42]">Verify the full inference pipeline before committing to a platform.</strong> Together AI's fine-tuning was straightforward, but serving a LoRA-adapted model requires either a dedicated endpoint (gated behind a paid plan tier) or local serving via GGUF conversion. Neither was obvious upfront. For future fine-tuning projects, I'd validate the serving path before training.
        </p>
      </Section>

      {/* ── Section 6 — Next Steps ───────────────────────────────────────── */}
      <Section heading="Next Steps">
        <BulletList items={[
          'Learning curve experiment — retrain with 100, 200, and 300 labeled examples to find the point where fine-tuning starts to outperform prompt engineering on this task.',
          'Failure mode analysis — categorize the types of frameworks the model misses most often (tactical vs. strategic, early-stage vs. late-stage, named vs. unnamed) to identify where prompt or training improvements would have the most impact.',
          'Running shoe review extraction — a structurally similar task (extract named attributes: stack height, drop, durability, use case) but with more consistent document structure and cleaner ground truth. A better fine-tuning candidate to test the approach on a friendlier domain.',
          'Consumer view — a browsable interface across all 300 extracted episodes, filterable by framework category, company stage, and actionability.',
        ]} />
      </Section>

    </CaseStudyPage>
  )
}
