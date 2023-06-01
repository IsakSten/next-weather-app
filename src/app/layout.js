import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App',
  description: 'Created by Isak S',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
