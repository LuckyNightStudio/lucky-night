import type { NextPage } from 'next'
import {Banner} from "../components/homepage/Banner";
import {IntroText} from "../components/homepage/IntroText";
import {Section2} from "../components/homepage/Section2";
import Services from "./services";
import {NextSeo} from "next-seo";

const Home: NextPage = () => {
  return (
    <>
        <NextSeo
            title="Lucky Night Studio"
            description="Strategy-led branding & web design for playful young businesses with immense ambitions"
        />
      <Banner />
      <IntroText />
      <Section2 />
      <Services />
    </>
  )
}



export default Home
