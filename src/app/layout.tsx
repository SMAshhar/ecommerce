import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Providers from '@/components/product/Providor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pink Lotus',
  description: 'A website for charming fellow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Header />
            <div className='bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 max-w-[1920px]'>
              {children}
            </div>
            <Footer />
        </Providers>
      </body>
    </html>
  )
}
