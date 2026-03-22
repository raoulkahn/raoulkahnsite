import { Link } from 'react-router-dom'

// ── Reusable building blocks ──────────────────────────────────────────────────

export function ImagePlaceholder({ label = 'Screenshot — coming soon' }) {
  return (
    <div
      className="w-full rounded-xl border border-[#cdd5de] bg-[#dde3ea] flex items-center justify-center my-6"
      style={{ height: '260px' }}
    >
      <p className="text-[#8898aa] text-sm select-none">{label}</p>
    </div>
  )
}

export function Section({ heading, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-[1.1rem] font-bold text-[#1e2f42] mb-4 tracking-tight">
        {heading}
      </h2>
      <div className="space-y-4 text-[#3d4f63] text-[16px] leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#3b6ea5] flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ── Main layout wrapper ───────────────────────────────────────────────────────

export default function CaseStudyPage({ title, intro, techStack = [], links = [], children }) {
  const primaryLink = links.find(l => l.primary) || links[0]

  return (
    <div className="pb-24">

      {/* ── Dark hero banner ── */}
      <div style={{ backgroundColor: '#1a2332' }}>
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-14">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm font-medium transition-colors mb-10 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200 inline-block">←</span>
            Back to Portfolio
          </Link>

          <h1 className="text-3xl md:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight mb-3">
            {title}
          </h1>

          {primaryLink && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-sm hover:text-white/90 transition-colors break-all"
            >
              {primaryLink.url.replace('https://', '')}
            </a>
          )}
        </div>
      </div>

      {/* ── Light content area ── */}
      <div className="max-w-2xl mx-auto px-6 pt-10">

        {/* Intro */}
        <p className="text-[#3d4f63] text-[16px] leading-relaxed mb-10">
          {intro}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-10 mb-12 border-b border-[#cdd5de]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8898aa] mr-1">
              Stack
            </span>
            {techStack.map(t => (
              <span
                key={t}
                className="bg-white border border-[#cdd5de] text-[#3d4f63] text-xs font-medium px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Page content */}
        <div>{children}</div>

        {/* Links / CTA */}
        {links.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#cdd5de]">
            <h2 className="text-base font-bold text-[#1e2f42] mb-4">Try It Out</h2>
            <div className="flex flex-wrap gap-3">
              {links.map(({ label, url, primary }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    primary
                      ? 'inline-flex items-center gap-2 bg-[#1e2f42] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#3b6ea5] transition-colors'
                      : 'inline-flex items-center gap-2 bg-white border border-[#cdd5de] text-[#3d4f63] text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-[#3b6ea5] hover:text-[#3b6ea5] transition-colors'
                  }
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
