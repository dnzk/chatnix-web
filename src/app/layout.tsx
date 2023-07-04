import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatnix',
  description: 'Chat App powered by Elixir and Phoenix',
}

const bodyStyles = `relative ${inter.className}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodyStyles}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
