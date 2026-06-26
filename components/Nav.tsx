'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '/program', label: 'program' },
    { href: '/apply', label: 'apply' },
  ]
  return (
    <nav className="sticky top-0 z-50">
      <div className="w-full px-4 h-16 flex items-center justify-between">
        <Link href="/" aria-label="intris home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="28" x2="26" y2="6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="16,4 26,6 24,16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </Link>
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
