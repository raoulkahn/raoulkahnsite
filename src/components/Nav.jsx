import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleContact = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-[#e8ecf0]/95 backdrop-blur-sm border-b border-[#cdd5de]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — full name */}
        <Link
          to="/"
          className="font-bold text-[#1e2f42] text-[15px] tracking-tight hover:text-[#3b6ea5] transition-colors"
        >
          Raoul Kahn
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-[#3b6ea5]' : 'text-[#3d4f63] hover:text-[#1e2f42]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`text-sm font-medium transition-colors ${
              isActive('/portfolio') ? 'text-[#3b6ea5]' : 'text-[#3d4f63] hover:text-[#1e2f42]'
            }`}
          >
            Portfolio
          </Link>
          <a
            href="#contact"
            onClick={handleContact}
            className="text-sm font-medium text-[#3d4f63] hover:text-[#1e2f42] transition-colors cursor-pointer"
          >
            Contact
          </a>

        </nav>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-lg hover:bg-[#cdd5de]/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className="w-5 h-0.5 bg-[#3d4f63] mb-1.5 transition-all duration-200 origin-center"
              style={menuOpen ? { transform: 'rotate(45deg) translate(2px, 8px)' } : {}}
            />
            <div
              className="w-5 h-0.5 bg-[#3d4f63] mb-1.5 transition-all duration-200"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <div
              className="w-5 h-0.5 bg-[#3d4f63] transition-all duration-200 origin-center"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(2px, -8px)' } : {}}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#cdd5de] bg-[#e8ecf0] px-6 py-5 flex flex-col gap-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium ${isActive('/') ? 'text-[#3b6ea5]' : 'text-[#3d4f63]'}`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium ${isActive('/portfolio') ? 'text-[#3b6ea5]' : 'text-[#3d4f63]'}`}
          >
            Portfolio
          </Link>
          <a
            href="#contact"
            onClick={handleContact}
            className="text-sm font-medium text-[#3d4f63] cursor-pointer"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
