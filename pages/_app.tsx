import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const BreakpointProvider = dynamic(() => import('../providers/BreakpointProvider'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  )
}

export default MyApp
