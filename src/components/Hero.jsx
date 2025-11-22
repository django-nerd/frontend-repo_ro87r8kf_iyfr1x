import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ name, role }) {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#05060A] text-white">
      {/* Background gradient and grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 3D Spline Web Component */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <spline-viewer url="https://prod.spline.design/F4-SeTwD1AVaF87P/scene.splinecode"></spline-viewer>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur hover:bg-white/10 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-4 text-lg sm:text-2xl text-slate-300 max-w-2xl"
        >
          {role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 px-6 py-3 text-sm font-semibold">
            <span className="relative z-10">Explore Projects</span>
            <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a href="#contact" className="group relative rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
            <span>Contact</span>
          </a>
        </motion.div>

        {/* Floating cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Frontend", "Backend", "Cloud"].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, rotate: i === 1 ? 0.2 : -0.2 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="text-sm text-slate-300">Focus</div>
              <div className="mt-1 text-xl font-semibold">{tag}</div>
              <div className="mt-3 text-sm text-slate-400">Building delightful, performant experiences.</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060A] to-transparent" />
    </section>
  )
}
