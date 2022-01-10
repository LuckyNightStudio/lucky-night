import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "../components/Layout";
import {ConfettiContextProvider} from "../components/context/ConfettiContext";
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <DefaultSeo
              openGraph={{
                  type: 'website',
                  locale: 'en_GB',
                  url: 'https://www.luckynightstudio.co.uk/',
                  site_name: 'Lucky Night Studio',
              }}
              twitter={{
                  handle: '@LuckyNightStudi',
                  site: '@LuckyNightStudi',
                  cardType: 'summary_large_image'
              }}
          />
          <ConfettiContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </ConfettiContextProvider>
      </>
  )
}

export default MyApp
