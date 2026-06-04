import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', pct: 78 },
      { name: 'HTML / CSS', pct: 85 },
      { name: 'C / C++', pct: 65 },
      { name: 'python', pct: 60 },
    ]
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React.js', pct: 60 },
      { name: 'Node.js', pct: 55 },
      { name: 'Git / GitHub', pct: 72 },
    ]
  },
  {
    title: 'CS Concepts',
    skills: [
      { name: 'Data Structures', pct: 70 },
      { name: 'Algorithms', pct: 62 },
      { name: 'OOP', pct: 68 },
      { name: 'DBMS', pct: 58 },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication', pct: 75 },
      { name: 'Problem Solving', pct: 80 },
      { name: 'Consistency', pct: 85 },
      { name: 'Teamwork', pct: 78 },
    ]
  },
]

function SkillBar({ name, pct, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-tdim">{name}</span>
        <span className="text-[#00ff41]/30">{pct}%</span>
      </div>
      <div className="h-1 bg-[#00ff41]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-tgreen rounded-full shadow-[0_0_8px_rgba(0,255,65,0.4)] transition-all duration-1000 ease-out"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24" ref={ref}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#007a1f] text-sm">{'// '}</span>
          <h2 className="text-tgreen text-xl font-bold tracking-widest uppercase">Skills</h2>
          <div className="flex-1 h-px bg-[#00ff41]/15" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map(group => (
            <div key={group.title}
              className="border border-[#00ff41]/15 bg-[#0f0f0f] rounded-sm p-6 hover:border-[#00ff41]/40 hover:shadow-[0_0_20px_rgba(0,255,65,0.06)] transition-all duration-300">
              <p className="text-[#00ff41]/30 text-xs uppercase tracking-widest mb-5">
                <span className="text-tdim">{'> '}</span>{group.title}
              </p>
              {group.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}