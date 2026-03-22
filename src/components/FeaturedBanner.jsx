import { useState, useEffect } from 'react'

const STORAGE_KEY = 'featured-banner-dismissed'

export default function FeaturedBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

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
            Lyst Mode: AI-Built iOS App
          </h3>
          <p className="text-[#3d4f63] text-sm leading-relaxed">
            Privacy-first to-do app shipped to the App Store in a weekend — zero lines written manually.
          </p>
          <a
            href="https://lystmode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#3b6ea5] text-sm font-semibold mt-2 hover:text-[#5b8fc7] transition-colors"
          >
            lystmode.com <span>↗</span>
          </a>
        </div>

        {/* Gradient thumbnail */}
        <div
          className="flex-shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #ec4899 65%, #f97316 100%)',
          }}
        />

        {/* Dismiss button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-[#8898aa] hover:text-[#3d4f63] hover:bg-[#e8ecf0] transition-colors text-sm"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  )
}
