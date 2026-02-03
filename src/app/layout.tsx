import type { Metadata } from 'next'
import { Inter, Montserrat, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Baseaim | Prepare for Your Strategy Call',
  description:
    'Watch this short video before your strategy call with Baseaim to get the most out of our time together.',
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${dmSerif.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
