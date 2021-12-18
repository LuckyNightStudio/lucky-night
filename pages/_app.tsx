import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "../components/Layout";
import {ConfettiContextProvider} from "../components/context/ConfettiContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ConfettiContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ConfettiContextProvider>
  )
}

export default MyApp
