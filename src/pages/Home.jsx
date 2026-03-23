import { useState } from 'react'
import { Link } from 'react-router-dom'
// ── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  {
    stat: 'App Store',
    desc: 'Shipped Lyst Mode iOS app in a weekend — custom 6-phase workflow, zero lines written manually.',
  },
  {
    stat: 'Apple WWDC',
    desc: "Featured for Spin's App Clips + Apple Pay integration — scan-to-ride without downloading the app.",
  },
  {
    stat: '82% → 1%',
    desc: 'Reduced AI failure rate from 82% to 1% using rigorous evaluation and error analysis methodology.',
  },
  {
    stat: '30%',
    desc: 'New user conversion lift at Spin through user-research-driven product improvements.',
  },
  {
    stat: '60+',
    desc: 'Global markets across consumer products designed, launched, and scaled.',
  },
  {
    stat: 'IntervooAI',
    desc: 'Currently AI PM building AI-powered interview prep tools at the frontier of LLMs and UX.',
  },
]

const skillGroups = [
  {
    title: 'Technical Skills',
    skills: [
      'Prompt Engineering',
      'AI/ML Product',
      'API Integration',
      'RAG Architecture',
      'Multi-Agent Systems',
      'Evaluation Frameworks',
      'Claude Code',
      'n8n Automation',
    ],
  },
  {
    title: 'Product Skills',
    skills: [
      'Product Strategy',
      'Roadmapping',
      'User Research',
      'A/B Testing',
      'Go-to-Market',
      'OKR Definition',
      'Stakeholder Mgmt',
      'Agile / Scrum',
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      'Figma',
      'Linear',
      'Mixpanel',
      'Amplitude',
      'Notion',
      'Jira',
      'GitHub',
      'Cursor / Claude Code',
    ],
  },
]

const certs = [
  { title: 'AI for Product Managers', org: 'Product Faculty' },
  { title: 'Introduction to Generative AI', org: 'Google' },
  { title: 'Claude Code', org: 'Anthropic Academy' },
  { title: 'PM Fundamentals', org: 'Microsoft' },
]

// ── Contact Form ─────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [emailBlurred, setEmailBlurred] = useState(false)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }))

  const emailInvalid = emailBlurred && fields.email.length > 0 && !EMAIL_RE.test(fields.email)

  const valid =
    fields.name.trim() &&
    fields.subject.trim() &&
    fields.message.trim() &&
    EMAIL_RE.test(fields.email)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/xreywewo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'bg-white border border-[#cdd5de] rounded-xl px-4 py-2.5 text-sm text-[#1e2f42] placeholder-[#8898aa] focus:outline-none focus:border-[#3b6ea5] transition-colors'

  if (status === 'success') {
    return (
      <div className="bg-white border border-[#cdd5de] rounded-xl px-6 py-8 text-center">
        <p className="text-[#1e2f42] font-semibold text-base mb-1">Message sent!</p>
        <p className="text-[#8898aa] text-sm mb-4">Thanks for reaching out — I'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-[#3b6ea5] hover:text-[#1e2f42] transition-colors font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-[#3d4f63] uppercase tracking-wide">Name</span>
          <input
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={set('name')}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-[#3d4f63] uppercase tracking-wide">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={set('email')}
            onBlur={() => setEmailBlurred(true)}
            onFocus={() => setEmailBlurred(false)}
            className={`${inputClass} ${emailInvalid ? '!border-red-400 focus:!border-red-400' : ''}`}
          />
          {emailInvalid && (
            <span className="text-xs text-red-500 font-medium">Enter a valid email address.</span>
          )}
        </label>
      </div>
      <label className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-[#3d4f63] uppercase tracking-wide">Subject</span>
        <input
          type="text"
          placeholder="What's this about?"
          value={fields.subject}
          onChange={set('subject')}
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-[#3d4f63] uppercase tracking-wide">Message</span>
        <textarea
          placeholder="Your message..."
          rows={4}
          value={fields.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
        />
      </label>
      {status === 'error' && (
        <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={!valid || status === 'submitting'}
        className="self-start bg-[#1e2f42] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed
          enabled:hover:bg-[#2c4a6e]"
      >
        {status === 'submitting' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Text block */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e2f42] leading-tight tracking-tight">
                  Raoul Kahn
                </h1>
                <p className="text-[#3b6ea5] font-semibold text-lg mt-1">
                  AI Product Manager
                </p>
              </div>
              <div
                className="flex-shrink-0 w-52 h-52 bg-[#dde9f5] border-2 border-[#3b6ea5]/20 shadow-md overflow-hidden"
                style={{ borderRadius: '50%' }}
              >
                <img src="/headshot.png" alt="Raoul Kahn" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio card + CTA ─────────────────────────────────────────── */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1e2f42] mb-8">About</h2>
          <div className="bg-white border border-[#cdd5de] rounded-2xl p-6 mb-6">
            <p className="text-[#3d4f63] text-[17px] leading-relaxed">
              AI Product Manager with a track record of driving user growth and engagement across mobile, web, and SaaS platforms. Background spans music technology (BeatStars, Antares/Auto-Tune), micromobility (Spin/Ford), and wearables (Amazfit). Currently serving as AI Product Manager at IntervooAI and building AI-powered applications using Claude, Claude Code, Cursor, Figma Make, and Lovable.
            </p>
          </div>

          {/* ── Scrolling tech ticker ── */}
          {(() => {
            const items = ['Anthropic','Claude Code','n8n','OpenAI','Figma','Xcode','Cursor','Python','Flask','Strava','Garmin','Swift','React','ChatGPT']
            const doubled = [...items, ...items, ...items, ...items]
            return (
              <div className="relative overflow-hidden mb-6" style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              }}>
                <div
                  className="flex gap-6 w-max py-2"
                  style={{ animation: 'ticker-scroll 70s linear infinite' }}
                >
                  {doubled.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-[#3d4f63] bg-white px-4 py-1.5 rounded-full whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <style>{`
                  @keyframes ticker-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
              </div>
            )
          })()}

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-[#1e2f42] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#2c4a6e] transition-colors shadow-sm"
          >
            View Portfolio <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ── Skills & Expertise ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white/50 border-y border-[#cdd5de]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1e2f42] mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-white border border-[#cdd5de] rounded-2xl p-6">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8898aa] mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#dde9f5] text-[#3b6ea5] text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Certifications ─────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1e2f42] mb-8">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Degree */}
            <div className="bg-white border border-[#cdd5de] rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8898aa] mb-4">Degree</p>
              <p className="font-bold text-[#1e2f42] text-sm">BS, Business Administration</p>
              <p className="text-[#8898aa] text-sm mt-1">California State University, East Bay</p>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-[#cdd5de] rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8898aa] mb-4">Certifications</p>
              <ul className="space-y-3">
                {certs.map((c) => (
                  <li key={c.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b6ea5] flex-shrink-0 mt-[5px]" />
                    <div>
                      <p className="text-sm font-semibold text-[#1e2f42] leading-tight">{c.title}</p>
                      <p className="text-xs text-[#8898aa] mt-0.5">{c.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section id="contact" className="py-14 md:py-20 bg-white/50 border-t border-[#cdd5de]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1e2f42] mb-6">Get in touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact form */}
            <ContactForm />

            {/* Social links */}
            <div className="flex flex-col gap-3 md:pt-1">
              <a
                href="https://linkedin.com/in/raoulkahn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#3b6ea5] hover:text-[#1e2f42] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/raoulkahn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#3b6ea5] hover:text-[#1e2f42] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
