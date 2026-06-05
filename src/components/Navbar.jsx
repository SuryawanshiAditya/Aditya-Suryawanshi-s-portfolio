import { useState, useEffect } from 'react'

const links = ['home', 'about', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection on scroll
      const offsets = links.map(id => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => a.top < b.top ? a : b)
      setActive(closest.id)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur border-b border-[#00ff41]/20' : 'bg-[#0a0a0a]/80'}`}>
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Logo */}
        <span className="text-tgreen text-xs sm:text-sm font-bold whitespace-nowrap">
          aditya<span className="text-[#00ff41]/40">@portfolio</span>:~$
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`px-3 py-1 text-xs rounded transition-all duration-200 cursor-pointer
                ${active === link
                  ? 'text-tgreen bg-[#00ff41]/10'
                  : 'text-[#00ff41]/40 hover:text-tgreen hover:bg-[#00ff41]/5'}`}>
              ./{link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-tgreen text-lg px-2 py-1">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#00ff41]/20 px-4 py-3 grid grid-cols-3 gap-2">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`text-center px-2 py-2 text-xs rounded transition-all border
                ${active === link
                  ? 'text-tgreen bg-[#00ff41]/10 border-[#00ff41]/30'
                  : 'text-[#00ff41]/40 border-[#00ff41]/10'}`}>
              ./{link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}