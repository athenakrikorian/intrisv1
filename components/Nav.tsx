'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/program', label: 'Program' },
    { href: '/apply', label: 'Apply' },
  ]
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/30">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#000000] font-light tracking-[0.3em] text-lg uppercase">Intris</Link>
        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-xs tracking-widest uppercase text-[#000000] hover:text-[#000000] transition-colors">{l.label}</Link>
          ))}
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-[#000000]" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="text-xs tracking-widest uppercase">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/50 backdrop-blur-md border-t border-white/30 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xs tracking-widest uppercase text-[#000000]">{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
