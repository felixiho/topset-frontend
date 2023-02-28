import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Modal from 'react-modal'
import { Montserrat } from 'next/font/google'

const monteserrat = Montserrat({ subsets: ['latin'] })
Modal.setAppElement("#main")

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${monteserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
