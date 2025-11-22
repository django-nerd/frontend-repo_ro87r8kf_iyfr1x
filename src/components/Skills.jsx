import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Wrench } from 'lucide-react'

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 px-3 py-1 text-xs mr-2 mb-2">{children}</span>
)

export default function Skills({ skills }) {
  return (
    <section id="skills" className="relative bg-black text-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3 mb-4"><Code2 className="w-5 h-5 text-blue-400" /><span className="font-semibold">Languages</span></div>
            {skills.languages.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3 mb-4"><Wrench className="w-5 h-5 text-purple-400" /><span className="font-semibold">Frameworks & Tools</span></div>
            {skills.frameworks_tools.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3 mb-4"><Database className="w-5 h-5 text-emerald-400" /><span className="font-semibold">Databases</span></div>
            {skills.databases.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3 mb-4"><Cloud className="w-5 h-5 text-cyan-400" /><span className="font-semibold">Cloud & Core Concepts</span></div>
            {skills.cloud.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
            <div className="mt-3">
              {skills.core_concepts.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
