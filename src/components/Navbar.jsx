import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/8 px-4 py-3 flex items-center justify-between shadow-[0_0_60px_-20px_rgba(99,102,241,0.5)]"
        >
          <a href="#" className="font-semibold text-slate-100 tracking-wide">DT</a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative text-sm text-slate-300 hover:text-white transition-colors group">
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="w-5 h-5" />
          </button>
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  )
}
