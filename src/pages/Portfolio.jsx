import { Link } from 'react-router-dom'
import { useState } from 'react'
import FeaturedBanner from '../components/FeaturedBanner.jsx'
import { GitBranch, BookOpen } from 'lucide-react'

// ── Tool logo system ──────────────────────────────────────────────────────────
// logo: path to real image, or null → renders initials badge with bg color

const TOOLS = {
  claude:   { label: 'Claude',    logo: '/images/Logos/claude.svg',   bg: '#c5895a', initials: 'An' },
  n8n:      { label: 'n8n',       logo: '/images/Logos/n8n.png',      bg: '#ea4b71', initials: 'n8' },
  openai:   { label: 'OpenAI',    logo: '/images/Logos/openai.webp',  bg: '#10a37f', initials: 'Ai' },
  figma:    { label: 'Figma',     logo: null, bg: '#9b59b6', initials: 'Fi' },
  cursor:   { label: 'Cursor',    logo: null, bg: '#1a1a2e', initials: 'Cu' },
  pinecone: { label: 'Pinecone',  logo: null, bg: '#45c3b8', initials: 'Pn' },
  flask:    { label: 'Flask',     logo: null, bg: '#3d4f63', initials: 'Fl' },
  strava:   { label: 'Strava',    logo: null, bg: '#fc4c02', initials: 'St' },
  telegram: { label: 'Telegram',  logo: null, bg: '#2ba5e0', initials: 'Tg' },
  render:   { label: 'Render',    logo: null, bg: '#46e3b7', initials: 'Rn' },
  apple:    { label: 'Apple',     logo: null, bg: '#555555', initials: 'Ap' },
  swift:    { label: 'Swift',     logo: null, bg: '#f05138', initials: 'Sw' },
  react:    { label: 'React',     logo: null, bg: '#0ea5e9', initials: 'Re' },
  python:   { label: 'Python',    logo: null, bg: '#3776ab', initials: 'Py' },
}

function ToolLogo({ toolKey }) {
  const tool = TOOLS[toolKey]
  if (!tool) return null
  return (
    <div
      title={tool.label}
      className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ring-1 ring-white"
      style={{ background: tool.logo ? '#f5f5f5' : tool.bg }}
    >
      {tool.logo ? (
        <img src={tool.logo} alt={tool.label} className="w-full h-full object-contain p-0.5" />
      ) : (
        <span className="text-white font-bold leading-none" style={{ fontSize: '8px' }}>{tool.initials}</span>
      )}
    </div>
  )
}

// ── Gradient-only thumbs (projects without a real image yet) ──────────────────

const GRADIENT_THUMBS = {
  mcpcopilot: { gradient: 'linear-gradient(135deg, #5b21b6 0%, #6d28d9 100%)', icon: GitBranch },
  quizcraft:  { gradient: 'linear-gradient(135deg, #0369a1 0%, #4338ca 100%)', icon: BookOpen  },
}

function GradientThumb({ config }) {
  const Icon = config.icon
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: config.gradient }}
    >
      <Icon size={52} strokeWidth={1.25} className="text-white/50" />
    </div>
  )
}

// ── Project data ──────────────────────────────────────────────────────────────

const aiProjects = [
  {
    id: 3,
    title: 'PM Dashboard: Multi-Agent Briefing',
    image: '/images/pm-dashboard.gif',
    imageTransform: 'scale(3.77) translate(-3%, 14%)',
    desc: 'Replaces 30+ minutes of daily triage. Four AI agents synthesize email, calendar, tickets, and competitors into one brief.',
    link: 'https://raoulkahn.github.io/pm-brief/',
    linkLabel: 'View Case Study',
    pills: ['n8n', 'Claude', 'Python'],
  },
  {
    id: 12,
    title: 'Model Selection Framework',
    customThumbnail: 'model-selection',
    desc: 'I tested 6 AI models on a real extraction task — the cheapest one won. Here\'s the data behind the decision.',
    link: '/model-selection',
    linkLabel: 'View Case Study',
    pills: ['Python', 'Claude API', 'OpenAI', 'Together AI'],
  },
  {
    id: 2,
    title: 'EvalBench: AI Evaluation Framework',
    image: '/images/evalbench-thumbnail.png',
    imageFit: 'contain',
    desc: 'Reduced AI failure rate from 82% to 1%. Nine failure modes identified, validated LLM judges built.',
    link: 'https://raoulkahn.github.io/evalbench/',
    linkLabel: 'View Case Study',
    pills: ['Claude', 'Python', 'OpenAI'],
  },
  {
    id: 11,
    title: 'Gryd Mode Calculator App',
    video: '/images/case-studies/grydmode/lights.mp4',
    desc: 'I wanted a calculator that reminded me of Tron Legacy and Daft Punk, so I built one.',
    link: 'https://grydmode.com',
    linkLabel: 'Visit Grydmode.com to download the app',
    pills: ['Claude AI', 'Claude Code', 'Figma'],
  },
  {
    id: 6,
    title: "Product Expert Insights — Lenny's Podcast",
    image: null,
    customThumbnail: 'lenny-slider',
    desc: 'Ask a product question, get cited answers from 300+ expert interviews. Leaders from Google, Stripe, Airbnb, and more.',
    link: '/product-expert-insights',
    linkLabel: 'View Case Study',
    pills: ['OpenAI', 'Claude', 'Python'],
  },
  {
    id: 4,
    title: 'MCP Product Decision Copilot',
    image: '/images/case-studies/mcp/diagram.gif',
    imageFit: 'contain',
    imageBg: '#0d0d0d',
    desc: 'Turns live product data into Ship / Delay / Kill recommendations. Connected to real metrics, roadmap, and OKRs.',
    link: 'https://raoulkahn.github.io/mcp-product-copilot/',
    linkLabel: 'View Case Study',
    pills: ['Claude', 'MCP', 'Python'],
  },
  {
    id: 5,
    title: 'AI Run Partner',
    image: '/images/ai-run-partner.avif',
    desc: 'A running coach I use every day. Adapts to my goals, weather, and training history with live Strava and Garmin data.',
    link: '/ai-run-partner',
    linkLabel: 'View Case Study',
    pills: ['Claude', 'Strava', 'React', 'Python', 'Cursor'],
  },
  {
    id: 1,
    title: 'Lyst Mode: AI-Built iOS App',
    image: '/images/lystmode-thumbnail.avif',
    imagePosition: 'top',
    desc: 'Live on the App Store. Privacy-first task manager built end-to-end with AI.',
    link: 'https://raoulkahn.github.io/lystmode/',
    linkLabel: 'View Case Study',
    pills: ['Claude Code', 'Figma', 'Swift', 'Xcode'],
  },
  {
    id: 7,
    title: 'Agentic Content Reviewer',
    image: '/images/agentic-content-reviewer.avif',
    desc: 'Not a chatbot — an agent that evaluates, scores, and explains its reasoning. Visible AI reasoning with PII detection.',
    link: '/agentic-content-reviewer',
    linkLabel: 'View Case Study',
    pills: ['Claude', 'Flask', 'Cursor'],
  },
  {
    id: 9,
    title: 'Daily To Do — AI Workflow',
    image: '/images/case-studies/daily-to-do/hero.png',
    desc: 'The workflow behind all of these projects. Explore → Plan → Execute → Review → Peer Review → Postmortem.',
    link: '/daily-to-do',
    linkLabel: 'View Case Study',
    pills: ['Claude Code', 'Cursor', 'Figma'],
  },
  {
    id: 10,
    title: 'Quiz Craft App',
    image: '/images/quizcraft-thumbnail.png',
    desc: 'Paste your notes, get a quiz, retain what you read. Five AI-generated questions from any text with instant feedback.',
    link: '/quizapp',
    linkLabel: 'View Case Study',
    pills: ['Claude', 'Flask', 'Cursor'],
  },
]

const professionalProjects = [
  {
    id: 12,
    title: 'Spin Consumer App',
    image: '/images/spin-consumer-app.jpg',
    impact: '30% improvement in new user conversion, directly driving revenue growth.',
    desc: 'As first PM at Spin, led the consumer app for 4 years across UI/UX improvements and growth.',
    link: '/spin',
    linkLabel: 'View Details',
    tools: ['react', 'figma', 'python'],
  },
  {
    id: 13,
    title: 'Auto-Tune Ignite Mobile App',
    image: '/images/auto-tune-ignite.avif',
    impact: '30% new user conversion improvement. User research-driven feature design.',
    desc: 'Launched mobile app beta with voice separation and third-party APIs for music creators.',
    link: '/autotune',
    linkLabel: 'View Details',
    tools: ['swift', 'apple', 'figma'],
  },
]

// ── Model Selection thumbnail ─────────────────────────────────────────────────

function ModelSelectionThumbnail() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between py-4 px-3"
      style={{ background: '#1a2332' }}
    >
      {/* Top headline */}
      <p className="text-[13px] font-semibold tracking-wide text-center" style={{ color: '#e2eaf3' }}>
        Cheapest model won
      </p>

      {/* Main figures row */}
      <div className="flex items-center justify-center gap-4 flex-1">

        {/* Winner — $0.03 */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-start gap-0.5">
            <span className="text-[15px] font-bold mt-1" style={{ color: '#4ade80' }}>$</span>
            <span className="text-[46px] font-extrabold leading-none text-white" style={{
              textShadow: '0 0 28px rgba(74,222,128,0.5)',
            }}>0.03</span>
          </div>
          <div className="flex items-center gap-1">
            <span style={{ color: '#4ade80', fontSize: '13px' }}>✓</span>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#cbd5e1' }}>Prompting</span>
          </div>
        </div>

        {/* beats */}
        <span className="text-[11px] font-semibold pb-5" style={{ color: '#6b8299' }}>beats</span>

        {/* Loser — $0.11 */}
        <div className="flex flex-col items-center gap-1.5" style={{ opacity: 0.65 }}>
          <div className="flex items-start gap-0.5">
            <span className="text-[11px] font-bold mt-1.5" style={{ color: '#94a3b8' }}>$</span>
            <span className="text-[30px] font-extrabold leading-none line-through decoration-red-400 decoration-2" style={{ color: '#94a3b8' }}>0.11</span>
          </div>
          <div className="flex items-center gap-1">
            <span style={{ color: '#f87171', fontSize: '12px' }}>✕</span>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#94a3b8' }}>Fine-Tuned</span>
          </div>
        </div>

      </div>

      {/* Bottom footnote */}
      <p className="text-[11px] font-medium" style={{ color: '#6b8299' }}>
        6 models · 300 episodes
      </p>
    </div>
  )
}

// ── Lenny slider thumbnail ────────────────────────────────────────────────────

const LENNY_IMAGES = [
  '/images/case-studies/product-expert/1.webp',
  '/images/case-studies/product-expert/2.webp',
  '/images/case-studies/product-expert/3.webp',
  '/images/case-studies/product-expert/7157f9e7-df1c-4989-b35b-bd6ac1d7eef4_2048x2048.webp',
]

function LennySlider() {
  const images = [...LENNY_IMAGES, ...LENNY_IMAGES, ...LENNY_IMAGES, ...LENNY_IMAGES]
  return (
    <div
      className="w-full h-full overflow-hidden flex items-center"
      style={{ background: '#f09050' }}
    >
      <div
        className="flex items-center gap-4"
        style={{
          animation: 'slide-left 40s linear infinite',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Expert"
            className="rounded-2xl flex-shrink-0 shadow-md"
            style={{ width: '130px', height: '130px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Pill row component ────────────────────────────────────────────────────────

function PillRow({ pills }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {pills.map(pill => (
        <span
          key={pill}
          className="text-sm font-medium text-[#1e2f42] px-2 py-0.5 rounded"
          style={{ background: '#e8ecf0' }}
        >
          {pill}
        </span>
      ))}
    </div>
  )
}

// ── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const hasLink = Boolean(project.link)
  const isInternal = hasLink && project.link.startsWith('/')

  const cardInner = (
    <div className="bg-white border border-[#cdd5de] rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">

      {/* Thumbnail */}
      <div className="mx-5 mt-5 rounded-xl overflow-hidden h-52 flex-shrink-0">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            style={{ background: '#000' }}
          />
        ) : project.customThumbnail === 'lenny-slider' ? (
          <LennySlider />
        ) : project.customThumbnail === 'model-selection' ? (
          <ModelSelectionThumbnail />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full"
            style={{
              objectFit: project.imageFit || 'cover',
              objectPosition: project.imagePosition || 'center',
              background: project.imageBg || (project.imageFit === 'contain' ? '#fff' : 'transparent'),
              transform: project.imageTransform || 'none',
              transformOrigin: 'center center',
            }}
          />
        ) : (
          <GradientThumb config={GRADIENT_THUMBS[project.gradientKey]} />
        )}
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">

        {/* Title */}
        <h3 className="font-bold text-[#1e2f42] text-[15px] leading-snug mb-1.5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#3d4f63] text-sm leading-relaxed line-clamp-2 mb-4">
          {project.desc}
        </p>

        {/* CTA area */}
        <div className="mt-auto flex flex-col gap-2">
          {project.pills?.length > 0 && <PillRow pills={project.pills} />}
          <div className="flex items-center">
            {hasLink ? (
              <span className="text-[#3b6ea5] text-sm font-semibold">
                {project.linkLabel} →
              </span>
            ) : (
              <span className="text-[#8898aa] text-sm">{project.linkLabel || 'Coming Soon'}</span>
            )}
          </div>
        </div>

      </div>
    </div>
  )

  if (!hasLink) return <div>{cardInner}</div>
  if (isInternal) return <Link to={project.link} target="_blank" rel="noopener noreferrer" className="block">{cardInner}</Link>
  return <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">{cardInner}</a>
}

// ── Portfolio Page ────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('ai')
  const projects = activeTab === 'ai' ? aiProjects : professionalProjects

  return (
    <div className="pb-20">
      <FeaturedBanner />
      <div className="max-w-5xl mx-auto px-6 pt-12">

        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e2f42] tracking-tight mb-3">
            Selected Work
          </h1>
          <p className="text-[#3d4f63] text-[15px] max-w-xl leading-relaxed">
            Product Manager building at the intersection of AI and user experience.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10">
          {[['ai', 'AI Projects (10)'], ['professional', 'Professional (2)']].map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-[#1e2f42] text-white shadow-sm'
                  : 'bg-white border border-[#cdd5de] text-[#3d4f63] hover:border-[#3b6ea5] hover:text-[#3b6ea5]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  )
}
