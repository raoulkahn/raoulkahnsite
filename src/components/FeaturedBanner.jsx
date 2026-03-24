import { useState } from 'react'

export default function FeaturedBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8">
      <div className="relative bg-white border border-[#cdd5de] rounded-2xl p-5 flex items-center gap-5 shadow-sm overflow-hidden">

        {/* Text side */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8898aa] mb-1.5">
            Featured Project
          </p>
          <h3 className="text-[#1e2f42] font-bold text-base leading-snug mb-1">
            GrydMode: Now Live on the App Store
          </h3>
          <p className="text-[#3d4f63] text-sm leading-relaxed">
            A Tron Legacy-inspired calculator app. Built with Claude Code, Xcode, and Figma.
          </p>
          <a
            href="https://grydmode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#3b6ea5] text-sm font-semibold mt-2 hover:text-[#5b8fc7] transition-colors"
          >
            grydmode.com ↗
          </a>
        </div>

        {/* Thumbnail */}
        <a
          href="https://grydmode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 rounded-xl overflow-hidden"
          style={{
            width: '35%',
            backgroundColor: '#0a0a14',
            padding: '14px',
            borderRadius: '12px',
          }}
        >
          <img
            src="/images/banner/grydmode-banner.gif"
            alt="GrydMode"
            style={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain', display: 'block' }}
          />
        </a>

        {/* Dismiss button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 flex items-center justify-center rounded-full text-[#8898aa] hover:text-[#3d4f63] hover:bg-[#d8dde3] transition-colors text-base"
          style={{
            width: '21px',
            height: '21px',
            backgroundColor: '#f0f3f7',
            border: '1px solid #cdd5de',
          }}
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  )
}
