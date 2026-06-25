'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/', label: 'home' },
    { href: '/program', label: 'program' },
    { href: '/apply', label: 'apply' },
  ]
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/30">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#000000] font-light tracking-[-0.02em] text-lg">intris</Link>
        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-[#000000] hover:opacity-60 transition-opacity">{l.label}</Link>
          ))}
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-[#000000]" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="text-sm">{open ? 'close' : 'menu'}</span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/50 backdrop-blur-md border-t border-white/30 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#000000]">{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
