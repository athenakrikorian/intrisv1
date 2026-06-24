import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <h1 className="text-[7rem] sm:text-[10rem] md:text-[13rem] font-extralight tracking-[0.05em] text-[#0A0A0A] leading-none mb-12">
          Intris
        </h1>
        <Link
          href="/apply"
          className="bg-[#0A0A0A] text-white/90 px-10 py-3.5 rounded-full text-xs tracking-widest uppercase hover:bg-[#2A2A2A] transition-colors"
        >
          Apply Now
        </Link>
      </div>

      {/* Backed By */}
      <div className="pb-16 pt-8 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-[#2A2A2A]/50 mb-6">Backed By</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-28 h-12 rounded-xl bg-white/40 backdrop-blur-sm animate-pulse-gentle"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
