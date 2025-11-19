
import './globals.css'
import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel'
})

export const metadata: Metadata = {
  title: 'DUX TOLEDO - Casa Rural en Toledo | Alojamiento de Lujo con Piscina',
  description: 'Casa rural de lujo DUX TOLEDO en Olías del Rey, Toledo. Piscina privada vallada, 6 habitaciones con nombres romanos, totalmente equipada. A 12 minutos del centro histórico de Toledo.',
  keywords: 'DUX TOLEDO, casa rural Toledo, casa rural con piscina, alojamiento Toledo, turismo rural Toledo, casa rural lujo Toledo, Olías del Rey, vacaciones Toledo',
  authors: [{ name: 'DUX TOLEDO' }],
  openGraph: {
    title: 'DUX TOLEDO - Casa Rural de Lujo en Toledo',
    description: 'Casa rural de lujo con piscina privada, 6 habitaciones temáticas romanas y todas las comodidades. A 12 minutos del centro histórico de Toledo.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'DUX TOLEDO'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${cinzel.className} ${cinzel.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
