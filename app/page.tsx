import Link from 'next/link'
import Image from 'next/image'
import IntrisWordmark from '@/components/IntrisWordmark'

const partners = [
  { file: 'elevenlabs.png',       alt: 'ElevenLabs',               href: 'https://elevenlabs.io',           blend: true  },
  { file: 'eniac.png',            alt: 'Eniac Ventures',           href: 'https://eniac.vc',                blend: true  },
  { file: 'index.png',            alt: 'Index Ventures',           href: 'https://indexventures.com',       blend: true  },
  { file: 'm13.png',              alt: 'M13',                      href: 'https://m13.co',                  blend: true  },
  { file: 'nea.png',              alt: 'NEA',                      href: 'https://nea.com',                 blend: true  },
  { file: 'pareto.png',           alt: 'Pareto',                   href: 'https://www.pareto20.com/',       blend: false },
  { file: 'ribbit.png',           alt: 'Ribbit Capital',           href: 'https://ribbitcap.com',           blend: false },
  { file: 'susa.png',             alt: 'Susa Ventures',            href: 'https://susaventures.com',        blend: true  },
  { file: 'zfellows.png',         alt: 'Z Fellows',                href: 'https://zfellows.com',            blend: false },
]

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-light tracking-[-0.02em] text-[#000000] leading-none">
          <IntrisWordmark />
        </h1>
      </div>

      {/* Partners */}
      <div className="pb-16 pt-8 text-center">
        <p className="text-sm text-[#000000]/50 mb-8">partners</p>

        <div
          className="overflow-hidden max-w-4xl mx-auto mb-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-10 px-5 shrink-0" aria-hidden={set === 1 ? true : undefined}>
                {partners.map(({ file, alt, href, blend }) => (
                  <a
                    key={file}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center shrink-0"
                  >
                    <Image
                      src={`/logos/${file}`}
                      alt={alt}
                      width={0}
                      height={0}
                      sizes="200px"
                      className="h-8 md:h-10 w-auto"
                      style={blend ? { mixBlendMode: 'multiply' } : undefined}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <a href="mailto:info@intris.com" className="text-sm text-[#000000]/50 hover:text-[#000000] transition-opacity inline-block">
          info@intris.com
        </a>
      </div>
    </main>
  )
}
