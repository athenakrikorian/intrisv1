import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-light tracking-[-0.02em] text-[#000000] leading-none mb-12">
          intris
        </h1>
        <Link
          href="/apply"
          className="bg-[#000000] text-white/90 px-10 py-3.5 rounded-full text-sm hover:opacity-80 transition-opacity"
        >
          apply now
        </Link>
      </div>

      {/* Backed By */}
      <div className="pb-16 pt-8 px-6 text-center">
        <p className="text-sm text-[#000000]/50 mb-6">backed by</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-28 h-12 rounded-xl bg-white/40 backdrop-blur-sm animate-pulse-gentle"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
        <a href="mailto:info@intris.com" className="text-sm text-[#000000]/50 hover:text-[#000000] transition-opacity mt-8 inline-block">
          info@intris.com
        </a>
      </div>
    </main>
  )
}
