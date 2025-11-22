import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState(null)

  useEffect(() => {
    const fetchAll = async () => {
      const [pRes, prjRes, skRes] = await Promise.all([
        fetch('/data/profile.json'),
        fetch('/data/projects.json'),
        fetch('/data/technical_skills.json')
      ])
      const [p, prj, sk] = await Promise.all([pRes.json(), prjRes.json(), skRes.json()])
      setProfile(p)
      setProjects(prj)
      setSkills(sk)
    }
    fetchAll()
  }, [])

  if (!profile || !skills) {
    return (
      <div className="min-h-screen bg-black text-slate-300 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.15),transparent)]" />
        <div className="absolute -inset-[20%] opacity-[0.03] [background:conic-gradient(from_90deg_at_50%_50%,#fff_0deg,transparent_60deg)] animate-[spin_20s_linear_infinite]" />
        <div className="relative animate-pulse">Loading portfolio…</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#05060A] text-white overflow-x-hidden">
      {/* Ambient gradients and animated glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/10 to-rose-500/20 blur-3xl" />
        <div className="absolute bottom-[-20rem] -left-40 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero name={profile.name} role={profile.role} />
      <About summary={profile.summary} achievements={profile.achievements} education={profile.education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={profile.contact} />

      <footer className="border-t border-white/10 bg-black/60 backdrop-blur py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} {profile.name} — Crafted with motion, code, and 3D.
      </footer>
    </div>
  )
}

export default App
