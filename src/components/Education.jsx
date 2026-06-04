const education = [
  {
    degree: 'B.Tech — Artificial Intelligence Engineering',
    college: 'G H Raisoni College of Engineering, Nagpur',
    year: '2024 – 2027 (Current)',
  },
  {
    degree: 'Diploma',
    college: ' MVPS`s Rajarshi Shahu Maharaj Polytechnic , Nashik',
    year: 'Completed 2024',
  },
]

const courses = [
  { name: 'Full Stack Web Development', provider: 'Udemy', status: 'In Progress' },
  { name: 'DSA in JavaScript', provider: 'Self Learning', status: 'Ongoing' },
  { name: 'English Communication', provider: 'Self Learning', status: 'Ongoing' },
]

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#007a1f] text-sm">{'// '}</span>
          <h2 className="text-tgreen text-xl font-bold tracking-widest uppercase">Education</h2>
          <div className="flex-1 h-px bg-[#00ff41]/15" />
        </div>

        {/* Degree Cards */}
        <div className="space-y-4 mb-12">
          {education.map((edu, i) => (
            <div key={i}
              className="border-l-2 border-tgreen border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm rounded-l-none p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.06)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-tgreen font-bold text-base">{edu.degree}</h3>
                <span className="text-xs text-[#00ff41]/30 border border-[#00ff41]/15 px-2 py-0.5 rounded-sm w-fit">
                  {edu.grade}
                </span>
              </div>
              <p className="text-tdim text-sm mb-1">{edu.college}</p>
              <p className="text-[#00ff41]/30 text-xs">{edu.year}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-5">
            <span className="text-[#007a1f]"># </span>certifications & courses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {courses.map((c, i) => (
              <div key={i}
                className="border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm p-5 hover:border-[#00ff41]/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.06)] transition-all duration-300">
                <h4 className="text-tgreen font-bold text-sm mb-2">{c.name}</h4>
                <p className="text-[#00ff41]/30 text-xs mb-3">{c.provider}</p>
                <span className={`text-xs border px-2 py-0.5 rounded-sm
                  ${c.status === 'In Progress' || c.status === 'Ongoing'
                    ? 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5'
                    : 'text-tgreen border-tgreen/30 bg-tgreen/5'
                  }`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}