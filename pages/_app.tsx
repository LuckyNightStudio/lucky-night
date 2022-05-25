import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "../components/Layout";
import {ConfettiContextProvider} from "../components/context/ConfettiContext";
import {DefaultSeo, LocalBusinessJsonLd, LogoJsonLd} from 'next-seo';

const url = 'https://www.luckynightstudio.co.uk'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <DefaultSeo
              openGraph={{
                  type: 'website',
                  locale: 'en_GB',
                  url: url,
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
          <LogoJsonLd
              logo='https://www.luckynightstudio.co.uk/img/logo.jpg'
              url={url}
          />
          <LocalBusinessJsonLd
              type="Digital Design Agency"
              id={url}
              name="Lucky Night Studio"
              description="Strategy-led branding & web design for playful young businesses with immense ambitions"
              url={url}
              priceRange={'$$'}
              images={[
                  'https://www.luckynightstudio.co.uk/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2Flouise-and-naomi-img.21a67aa1.png?url=%2F_next%2Fstatic%2Fmedia%2Flouise-and-naomi-img.21a67aa1.png&w=1920&q=75'
              ]}
              review={[
                  {
                      author: 'Becks Roberts',
                      datePublished: '2021-06-10',
                      name: 'Fantastic Company',
                      reviewBody: "I'm not sure that anything that I write will actually be able to express how utterly amazing Naomi and Louise are at their jobs!\n" +
                          "I got in touch with them for a website overhaul, after some amazing zoom chats they came back to me with their proposal which was magnificent. They worked so fast and communicated every step of the way. Our new website is the stuff of dreams and I can't thank these two enough!\n" +
                          "\n" +
                          "They were on hand for support after the site was finished, never too busy to help and although some of my questions were stupid ones, they never made me feel like they were!\n" +
                          "\n" +
                          "If you are in need of any design and web work, please, please go to these gals, they are fab and you won't regret it!",
                      reviewRating: {
                          ratingValue: '5',
                      },
                  },
              ]}
              makesOffer={[
                  {
                      priceSpecification: {
                          type: 'UnitPriceSpecification',
                          priceCurrency: 'GBP',
                          price: '1495-5295',
                      },
                      itemOffered: {
                          name: 'Branding Services',
                          description:
                              'The businesses we work with are colourful visionaries who understand the benefits of investing in solid design strategy. They previously found the world of marketing overwhelming, but thanks to our intensive brand solutions they now have a clear picture of the market & their unique position within it making marketing a piece of cake!',
                      },
                  },
                  {
                      priceSpecification: {
                          type: 'UnitPriceSpecification',
                          priceCurrency: 'GBP',
                          price: '1995-5295',
                      },
                      itemOffered: {
                          name: 'Custom Website',
                          description:
                          'Custom built websites are the perfect fit for the vast majority of small businesses. They allow you to take back hours of precious time each week that would usually be spent editing and updating, so that you can focus on the work you’re most passionate about.'
                      },
                  },
              ]}
              areaServed={[
                  {
                      geoMidpoint: {
                          latitude: '50.4619',
                          longitude: '3.5253',
                      },
                      geoRadius: '100000000',
                  },
              ]}
              address={{
                  streetAddress: 'Sherwell Valley Rd',
                  addressLocality: 'Torquay',
                  addressCountry: 'UK',
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
