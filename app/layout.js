import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CLAUSURA ESCUELA CANTONAL',
  description: 'Acto de clausura sexto primaria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}