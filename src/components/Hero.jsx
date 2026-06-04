import { useEffect, useState } from 'react'

const roles = [
  'AI Engineering Student',
  'Full Stack Developer',
  'DSA Enthusiast',
  'Motorsport Lover',
]

function useTypingEffect(words) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80)
      setDisplay(current.slice(0, charIndex))
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 45)
      setDisplay(current.slice(0, charIndex))
    } else {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(roles)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className={`w-full max-w-3xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Terminal Window */}
        <div className="border border-[#00ff41]/20 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.05)]">

          {/* Title Bar */}
          <div className="bg-[#141414] border-b border-[#00ff41]/20 px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto text-[#00ff41]/30 text-xs">bash — aditya@portfolio:~</span>
          </div>

          {/* Body */}
          <div className="bg-[#0f0f0f] p-8 md:p-12">

            <div className="flex items-center gap-3 text-sm text-[#00ff41]/50 mb-6">
              <span className="text-tdim">aditya<span className="text-[#00ff41]/30">@portfolio</span>:~$</span>
              <span className="text-tdim">whoami</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-tgreen leading-tight mb-2 drop-shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              Aditya Jitendra Suryawanshi
            </h1>

            <div className="flex items-center gap-2 text-tdim text-lg mb-6 h-8">
              <span className="text-[#00ff41]/40">{'>'}</span>
              <span>{typed}</span>
              <span className="w-2 h-5 bg-tgreen animate-pulse" />
            </div>

            <p className="text-[#00ff41]/50 text-sm leading-relaxed max-w-xl mb-8">
              B.Tech AI Engineering student at Raisoni College of Engineering, 
              passionate about web development, AI, and creating meaningful digital experiences. 
              I enjoy solving complex problems, building innovative projects, and staying inspired by the precision and speed of motorsports.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Web Dev', 'DSA in JS', 'Full Stack', 'AI Engineering', 'Motorsports'].map(tag => (
                <span key={tag} className="text-xs border border-[#00ff41]/20 bg-[#00ff41]/5 text-[#00ff41]/60 px-3 py-1 rounded-sm hover:border-[#00ff41]/50 hover:text-tgreen transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="border border-[#00ff41]/50 bg-[#00ff41]/10 text-tgreen px-5 py-2 text-sm rounded-sm hover:bg-[#00ff41]/20 hover:shadow-[0_0_16px_rgba(0,255,65,0.2)] transition-all cursor-pointer">
                [ view projects ]
              </a>
              <a href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="border border-[#00ff41]/30 text-[#00ff41]/60 px-5 py-2 text-sm rounded-sm hover:border-[#00ff41]/50 hover:text-tgreen transition-all cursor-pointer">
                [ get in touch ]
              </a>
              <a href="/resume.pdf" download="Aditya_Suryawanshi_Resume.pdf" target="_blank"
                className="border border-[#00ff41]/30 text-[#00ff41]/60 px-5 py-2 text-sm rounded-sm hover:border-[#00ff41]/50 hover:text-tgreen transition-all cursor-pointer">
                [ download resume ]
              </a>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8 text-[#00ff41]/25 text-xs animate-bounce">
          scroll down ↓
        </div>

      </div>
    </section>
  )
}