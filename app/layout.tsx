import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300'] })

export const metadata: Metadata = {
  title: 'Intris',
  description: 'Pre-seed incubator at Penn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div
          className="min-h-screen gradient-bg"
        >
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
