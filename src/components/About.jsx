import React from 'react'
import { motion } from 'framer-motion'

export default function About({ summary, achievements, education }) {
  return (
    <section id="about" className="relative bg-slate-950 text-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <ul className="space-y-3 text-slate-300">
              {summary.map((s, idx) => (
                <li key={idx} className="leading-relaxed">• {s}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-10 mb-4">Programming Achievements</h3>
            <ul className="space-y-2 text-slate-300">
              {achievements.map((a, idx) => (
                <li key={idx}>• {a}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <p className="text-slate-200 font-medium">{education.institution} — {education.degree} (Expected {education.expected_graduation})</p>
            <p className="text-slate-400 mt-3">Relevant coursework:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {education.coursework.map((c, idx) => (
                <span key={idx} className="rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-300">{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
