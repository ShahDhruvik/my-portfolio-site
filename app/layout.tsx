import '../styles/globals.css'
import Header from '../components/header'
import Footer from 'components/footer'
import About from 'components/about'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <About />
        <Footer />
      </body>
    </html>
  )
}
