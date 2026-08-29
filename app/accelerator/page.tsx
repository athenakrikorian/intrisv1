import type { Metadata } from 'next'
import Link from 'next/link'
import IntrisWordmark from '@/components/IntrisWordmark'

export const metadata: Metadata = {
  title: 'Accelerator — Intris',
  description: 'Intris is a student-run accelerator at Penn backing founding teams with $10K grants, no equity taken.',
}

export default function Accelerator() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-6 pt-16 pb-24">
      <Link
        href="/"
        className="text-[3rem] sm:text-[4rem] font-light tracking-[-0.02em] text-[#000000] leading-none mb-20 hover:opacity-70 transition-opacity"
      >
        <IntrisWordmark />
      </Link>

      <div className="max-w-xl w-full space-y-8 text-base leading-relaxed text-[#000000]/80">
        <p>
          intris is a student-run accelerator at Penn. We back Penn
          founding teams each year with $10K grants, no equity taken, plus
          a semester of dinners, office hours, and introductions to
          investors who actually write checks.
        </p>
        <p>
          Scouting runs through the fall. The cohort is selected in
          December.
        </p>
        <p>
          Building something? Reach out at{' '}
          <a
            href="mailto:info@intris.com"
            className="text-[#000000]/50 hover:text-[#000000] transition-opacity"
          >
            info@intris.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
