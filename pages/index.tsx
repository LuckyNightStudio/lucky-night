import type { NextPage } from 'next'
import {Banner} from "../components/homepage/Banner";
import {IntroText} from "../components/homepage/IntroText";
import {Section2} from "../components/homepage/Section2";
import {WorkWithUs} from "../components/homepage/WorkWithUs";
import {QuizSection} from "../components/homepage/QuizSection";
import {PreviousProjects} from "../components/homepage/PreviousProjects";
import {FinalCTA} from "../components/homepage/FinalCTA";
import {DownloadSection} from "../components/homepage/DownloadSection";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <IntroText />
      <Section2 />
      <WorkWithUs />
      <QuizSection />
      <PreviousProjects />
      <DownloadSection />
      <FinalCTA />
    </>
  )
}



export default Home
