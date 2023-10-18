import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'De Rutas',
  description: 'De Rutas app for training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
