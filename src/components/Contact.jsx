import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react'

export default function Contact({ contact }) {
  const items = [
    { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phone ? `tel:${contact.phone}` : undefined },
    { icon: Mail, label: 'Email', value: contact.email, href: contact.email ? `mailto:${contact.email}` : undefined },
    { icon: Linkedin, label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin || undefined },
    { icon: Github, label: 'GitHub', value: contact.github, href: contact.github || undefined },
    { icon: Globe, label: 'Portfolio', value: contact.portfolio, href: contact.portfolio || undefined },
  ]

  return (
    <section id="contact" className="relative bg-black text-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noreferrer noopener' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 hover:border-slate-700 hover:bg-slate-900/60 transition-colors"
            >
              <item.icon className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="font-medium break-all">{item.value || '—'}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
