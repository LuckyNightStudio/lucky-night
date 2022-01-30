import type { NextPage } from 'next'
import {Banner} from "../components/homepage/Banner";
import {IntroText} from "../components/homepage/IntroText";
import {Section2} from "../components/homepage/Section2";
import {NextSeo} from "next-seo";
import {DesignContent} from "../components/homepage/DesignContent";
import {FadeInWhenVisible} from "../components/FadeIn";
import {WorkWithUs} from "../components/homepage/WorkWithUs";
import {QuizSection} from "../components/homepage/QuizSection";
import {PreviousProjects} from "../components/homepage/PreviousProjects";
import {DownloadSection} from "../components/homepage/DownloadSection";
import {FinalCTA} from "../components/homepage/FinalCTA";

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
      <DesignContent />
        <FadeInWhenVisible>
            <WorkWithUs />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
            <QuizSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
            <PreviousProjects />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
            <DownloadSection />
        </FadeInWhenVisible>
        <FinalCTA />
    </>
  )
}



export default Home
