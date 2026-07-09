import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { Analytics } from '@vercel/analytics/next'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300'] })

export const metadata: Metadata = {
  title: 'Intris',
  description: 'Pre-seed incubator at Penn',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
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
          <Analytics />
        </div>
      </body>
    </html>
  )
}
