import { useState } from 'react'
import axios from 'axios'

const contactLinks = [
  { label: 'email', value: 'suryawanshiadityaj@gmail.com', href: 'mailto:suryawanshiadityaj@gmail.com', icon: '✉' },
  { label: 'github', value: 'github.com/SuryawanshiAditya', href: 'https://github.com/SuryawanshiAditya', icon: '⌥' },
  { label: 'linkedin', value: 'linkedin.com/in/Aditya Suryawanshi', href: 'https://www.linkedin.com/in/aditya-suryawanshi-ai2005/', icon: '↗' },
  { label: 'location', value: 'Pune, Maharashtra', href: null, icon: '📍' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    setStatus('error')
    setTimeout(() => setStatus('idle'), 3000)
    return
  }

  setStatus('loading')
  try {
    const res = await fetch('https://formspree.io/f/xqeoeywr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  } catch (err) {
    setStatus('error')
    setTimeout(() => setStatus('idle'), 3000)
  }
}

  const btnText = {
    idle: '[ send message ]',
    loading: '[ sending... ]',
    success: '[ message sent ✓ ]',
    error: '[ fill all fields ]',
  }

  const btnColor = {
    idle: 'border-[#00ff41]/50 bg-[#00ff41]/10 text-tgreen hover:bg-[#00ff41]/20',
    loading: 'border-[#00ff41]/30 text-[#00ff41]/40 cursor-not-allowed',
    success: 'border-tgreen bg-tgreen/20 text-tgreen',
    error: 'border-red-500/50 bg-red-500/10 text-red-400',
  }

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#007a1f] text-sm">{'// '}</span>
          <h2 className="text-tgreen text-xl font-bold tracking-widest uppercase">Contact</h2>
          <div className="flex-1 h-px bg-[#00ff41]/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — info */}
          <div className="flex flex-col gap-4">
            <p className="text-tdim text-sm leading-relaxed mb-2">
              Open to internships, collaborations, and interesting projects.
              Drop a message and I'll get back to you.
            </p>

            {contactLinks.map(link => (
              link.href
                ? <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm px-5 py-4 hover:border-[#00ff41]/40 hover:shadow-[0_0_16px_rgba(0,255,65,0.06)] transition-all duration-300 group">
                    <span className="text-tgreen text-lg">{link.icon}</span>
                    <div>
                      <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-0.5">{link.label}</p>
                      <p className="text-tdim text-sm group-hover:text-tgreen transition-colors">{link.value}</p>
                    </div>
                  </a>
                : <div key={link.label}
                    className="flex items-center gap-4 border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm px-5 py-4">
                    <span className="text-tgreen text-lg">{link.icon}</span>
                    <div>
                      <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-0.5">{link.label}</p>
                      <p className="text-tdim text-sm">{link.value}</p>
                    </div>
                  </div>
            ))}
          </div>

          {/* Right — form */}
          <div className="border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm p-6 flex flex-col gap-5">

            <div>
              <label className="block text-[#00ff41]/30 text-xs uppercase tracking-widest mb-2">
                <span className="text-[#007a1f]">$ </span>name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your_name"
                className="w-full bg-tbg border border-[#00ff41]/15 rounded-sm px-4 py-2.5 text-tgreen text-sm outline-none focus:border-tdim focus:shadow-[0_0_12px_rgba(0,255,65,0.1)] transition-all placeholder:text-[#007a1f]"
              />
            </div>

            <div>
              <label className="block text-[#00ff41]/30 text-xs uppercase tracking-widest mb-2">
                <span className="text-[#007a1f]">$ </span>email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-tbg border border-[#00ff41]/15 rounded-sm px-4 py-2.5 text-tgreen text-sm outline-none focus:border-tdim focus:shadow-[0_0_12px_rgba(0,255,65,0.1)] transition-all placeholder:text-[#007a1f]"
              />
            </div>

            <div>
              <label className="block text-[#00ff41]/30 text-xs uppercase tracking-widest mb-2">
                <span className="text-[#007a1f]">$ </span>message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="// write your message here..."
                rows={5}
                className="w-full bg-tbg border border-[#00ff41]/15 rounded-sm px-4 py-2.5 text-tgreen text-sm outline-none focus:border-tdim focus:shadow-[0_0_12px_rgba(0,255,65,0.1)] transition-all placeholder:text-[#007a1f] resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className={`w-full border rounded-sm py-3 text-sm font-mono transition-all duration-300 ${btnColor[status]}`}>
              {btnText[status]}
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}