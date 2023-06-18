import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import toast, { Toaster } from 'react-hot-toast';

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
            <Header />
            <div className='bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 max-w-[1920px]'>
              {children}
              <Toaster 
                position="bottom-right"
                reverseOrder={false}
                />
            </div>
            <Footer />
      </body>
    </html>
  )
}
