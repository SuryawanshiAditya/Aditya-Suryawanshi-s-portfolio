const cards = [
  {
    title: 'currently learning',
    items: ['→ DSA (JavaScript)', '→ Full Stack Dev (Udemy)', '→ React.js & Node.js', '→ English Communication']
  },
  {
    title: 'current status',
    items: ['📍 Pune, Maharashtra', '🎓 B.Tech — Final Year', '💼 Open for Internships', '⚡ Building in public']
  }
]

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#007a1f] text-sm">{'// '}</span>
          <h2 className="text-tgreen text-xl font-bold tracking-widest uppercase">About</h2>
          <div className="flex-1 h-px bg-[#00ff41]/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Bio Card - full width */}
          <div className="md:col-span-2 border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm p-6 hover:border-[#00ff41]/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.06)] transition-all duration-300">
            <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-4">
              <span className="text-[#007a1f]"># </span>profile.json
            </p>
            <p className="text-tdim text-sm leading-loose">
              Hey, I'm{' '}
              <span className="text-tgreen font-semibold">Aditya Suryawanshi</span>
              {' '}— a passionate{' '}
              <span className="text-tgreen">Artificial Intelligence Engineering</span>
              {' '}student at Raisoni College of Engineering, Pune.
              I'm driven by two worlds that connect deeper than most think:{' '}
              <span className="text-tgreen">software engineering</span>
              {' '}and{' '}
              <span className="text-tgreen">motorsports</span>.
              I'm sharpening my skills in{' '}
              <span className="text-tgreen">full stack web development</span>
              {' '}and{' '}
              <span className="text-tgreen">DSA in JavaScript</span>
              {' '}while keeping academics strong for campus placements.
              I also invest time in{' '}
              <span className="text-tgreen">English communication</span>
              {' '}— because great engineers don't just write good code, they communicate ideas clearly.
            </p>
          </div>

          {/* Info Cards */}
          {cards.map(card => (
            <div key={card.title}
              className="border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm p-6 hover:border-[#00ff41]/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.06)] transition-all duration-300">
              <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-4">
                <span className="text-[#007a1f]"># </span>{card.title}
              </p>
              <ul className="space-y-2">
                {card.items.map(item => (
                  <li key={item} className="text-tdim text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}