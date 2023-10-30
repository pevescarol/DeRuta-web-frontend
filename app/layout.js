import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'De Ruta APP',
  description: 'De Rutas app for training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
