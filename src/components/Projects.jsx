import React from 'react'
import { motion } from 'framer-motion'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative bg-slate-950 text-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-slate-400 text-sm">Selected builds and experiments</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20, rotateX: -5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-black p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />

              <h3 className="relative z-10 text-xl font-semibold">{p.title}</h3>
              <div className="relative z-10 mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span key={i} className="rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 px-2 py-0.5 text-xs">{t}</span>
                ))}
              </div>

              <ul className="relative z-10 mt-4 space-y-2 text-slate-300">
                {p.highlights.map((h, i) => (
                  <li key={i} className="text-sm leading-relaxed">• {h}</li>
                ))}
              </ul>

              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
