import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="w-full px-4 h-16 flex items-center justify-between">
        <Link href="/" aria-label="intris home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="28" x2="26" y2="6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="16,4 26,6 24,16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </Link>
        <div className="flex gap-6">
          <Link href="/accelerator" className="text-sm text-[#000000] hover:opacity-60 transition-opacity">
            accelerator
          </Link>
          <Link href="https://intris.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#000000] hover:opacity-60 transition-opacity">
            substack
          </Link>
        </div>
      </div>
    </nav>
  )
}
