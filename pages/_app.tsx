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
                  description: "Strategy-led branding & web design for playful young businesses with immense ambitions",
                  images: [
                      {
                          url: 'https://www.luckynightstudio.co.uk/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2Flouise-and-naomi-img.21a67aa1.png?url=%2F_next%2Fstatic%2Fmedia%2Flouise-and-naomi-img.21a67aa1.png&w=1920&q=75',
                          width: 406,
                          height: 375,
                          alt: 'Louise & Naomi at Lucky Night Studio',
                          type: 'image/png',
                      }
                      ]
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
