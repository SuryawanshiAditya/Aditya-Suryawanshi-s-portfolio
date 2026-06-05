import { useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'Portfolio',
    desc: 'Personal developer portfolio.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/SuryawanshiAditya/Aditya-Suryawanshi-s-portfolio',
    live: 'https://aditya-suryawanshi-s-portfolio.vercel.app/',
    status: 'live'
  },
  {
    num: '02',
    name: 'Echosign--phaseone',
    desc: 'EchoSign Phase One: Developed a text and voice-to-sign translation module using WLASL and ASL alphabet datasets. The system converts input into corresponding sign videos or animated gestures, enabling basic communication between deaf and hearing individuals through visual sign representation.',
    stack: ['Python'],
    github: 'https://github.com/SuryawanshiAditya/Echosign---phaseOne',
    status: 'in progress'
  },
  {
    num: '03',
    name: 'TimeLineup',
    desc: 'A fun Application to make the process of checking and maintaining a time table easier for both teachers and students.',
    stack: ['JavaScript', 'Html','CSS'],
    github: 'https://github.com/SuryawanshiAditya/TimeLineup',
    live: 'https://thesudoersclub.github.io/projects/timelineup',
    status: 'live'
  },
  {
    num: '04',
    name: 'LocalServer-GUI',
    desc: 'LocalServer-GUI is a desktop application that provides a graphical interface for managing and monitoring a local server, eliminating the need for complex command-line operations.It simplifies server control, configuration, and status tracking through an intuitive GUI, making local development and testing more efficient.',
    stack: ['Html', 'JavaScript','CSS'],
    github: 'https://github.com/SuryawanshiAditya/LocalServer-GUI',
    status: 'Completed'
  },
  {
    num: '05',
    name: 'Foundit_Main',
    desc: 'Foundit_main is a job portal web application that connects job seekers with employers through a simple and responsive interface.It enables users to browse jobs, manage profiles, and apply for opportunities efficiently.',
    stack: ['JavaScript', 'Html','CSS'],
    github: 'https://github.com/SuryawanshiAditya/Foundit_main',
    live: null,
    status: 'Completed'
  },
]

const statusColors = {
  'live': 'text-tgreen border-tgreen/40 bg-tgreen/10',
  'in progress': 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
  'planned': 'text-[#00ff41]/30 border-[#00ff41]/20 bg-[#00ff41]/5',
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#007a1f] text-sm">{'// '}</span>
          <h2 className="text-tgreen text-xl font-bold tracking-widest uppercase">Projects</h2>
          <div className="flex-1 h-px bg-[#00ff41]/15" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`border bg-[#0f0f0f] rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 cursor-default
                ${hovered === i
                  ? 'border-[#00ff41]/50 shadow-[0_8px_30px_rgba(0,255,65,0.08)] -translate-y-1'
                  : 'border-[#00ff41]/15'
                }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-[#007a1f] text-xs">{p.num} / project</span>
                <span className={`text-xs border px-2 py-0.5 rounded-sm ${statusColors[p.status]}`}>
                  {p.status}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-tgreen font-bold text-lg">{p.name}</h3>

              {/* Desc */}
              <p className="text-[#00ff41]/40 text-xs leading-relaxed flex-1">{p.desc}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="text-xs text-tdim border border-[#00ff41]/15 px-2 py-0.5 rounded-sm">
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(p.github || p.live) && (
                <div className="flex gap-3 pt-1 border-t border-[#00ff41]/10">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="text-xs text-[#00ff41]/40 hover:text-tgreen transition-colors">
                      [ github ↗ ]
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-xs text-[#00ff41]/40 hover:text-tgreen transition-colors">
                      [ live demo ↗ ]
                    </a>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}