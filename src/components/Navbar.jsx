import { useState , useEffect } from 'react'
const links = [ 'home' , 'about','skills','projects','education','contact']

export default function Navbar(){
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {
        const onScroll = () => setScrolled(window.scrollY >20)
        window.addEventListener('scroll', onScroll)
        return ()=> window.removeEventListener('scroll',onScroll)
    }, [])
    
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
        setActive(id)
    }

    return(
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur border-b border-[#00ff41]/20' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
        <span className="text-[#00ff41]/40 text-sm hidden md:block">aditya@portfolio:~$</span>
        <div className="flex gap-1">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-3 py-1 text-xs rounded transition-all duration-200 cursor-pointer
                ${active === link
                  ? 'text-tgreen bg-[#00ff41]/10'
                  : 'text-[#00ff41]/40 hover:text-tgreen hover:bg-[#00ff41]/5'
                }`}
            >
              ./{link}
            </button>
          ))}
        </div>
        <span className="ml-auto w-2 h-4 bg-tgreen animate-pulse" />
      </div>
    </nav>
  )
}