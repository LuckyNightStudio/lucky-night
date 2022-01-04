import type { NextPage } from 'next'
import {Banner} from "../components/homepage/Banner";
import {IntroText} from "../components/homepage/IntroText";
import {Section2} from "../components/homepage/Section2";
import Services from "./services";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <IntroText />
      <Section2 />
      <Services />
    </>
  )
}



export default Home
