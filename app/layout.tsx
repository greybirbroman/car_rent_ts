import './globals.css'
import { Navbar, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Rental App | Roman Fedorov',
  description: 'Discover Next.js & TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
