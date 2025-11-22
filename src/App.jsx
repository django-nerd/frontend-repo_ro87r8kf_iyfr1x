import React from 'react'
import { useEffect, useState } from 'react'
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
      <div className="min-h-screen bg-black text-slate-300 flex items-center justify-center">
        <div className="animate-pulse">Loading portfolio…</div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero name={profile.name} role={profile.role} />
      <About summary={profile.summary} achievements={profile.achievements} education={profile.education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={profile.contact} />

      <footer className="border-t border-slate-800 bg-black py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {profile.name}. Built with love, code and 3D vibes.
      </footer>
    </div>
  )
}

export default App
