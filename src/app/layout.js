import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Free APIs Catalog',
  description: 'A comprehensive catalog of free APIs for developers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
