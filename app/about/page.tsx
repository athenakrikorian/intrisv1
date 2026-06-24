export default function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] py-20 px-6">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="bg-white/50 backdrop-blur-md rounded-2xl border border-white/40 p-10 md:p-16">
          <h1 className="text-3xl font-light tracking-widest text-[#0A0A0A] mb-12">About</h1>

          <p className="text-[#2A2A2A] text-base md:text-lg leading-relaxed mb-6">
            Intris finds and funds the best Penn founders before anyone else does. Five teams per semester. No equity taken.
          </p>

          {/* Advisory Board */}
          <div className="mt-14 mb-14">
            <p className="text-xs tracking-widest uppercase text-[#2A2A2A]/50 mb-8">Advisory Board</p>
            <div className="flex flex-col gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div
                    className="w-40 h-5 rounded bg-white/40 animate-pulse-gentle"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                  <div
                    className="w-24 h-3.5 rounded bg-white/30 animate-pulse-gentle"
                    style={{ animationDelay: `${i * 0.3 + 0.15}s` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-white/40">
            <a
              href="mailto:info@intris.com"
              className="text-xs tracking-widest uppercase text-[#2A2A2A]/70 hover:text-[#0A0A0A] transition-colors"
            >
              info@intris.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
