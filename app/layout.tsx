import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

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
      <body className={cormorant.className}>
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
