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
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 px-4 py-3 flex items-center justify-between">
          <motion.a initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} href="#" className="font-semibold text-slate-100">DT</motion.a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-3 py-2 text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
