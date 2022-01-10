import type { NextPage } from 'next'
import {WorkWithUs} from "../../components/homepage/WorkWithUs";
import {QuizSection} from "../../components/homepage/QuizSection";
import {PreviousProjects} from "../../components/homepage/PreviousProjects";
import {FinalCTA} from "../../components/homepage/FinalCTA";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import {FadeInWhenVisible} from "../../components/FadeIn";
import { NextSeo } from 'next-seo';

const Services: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Services - Lucky Night Studio"
                description="We offer branding and website service, including E-commerce sites. See our packages to find out which is right for you"
                canonical='https://www.luckynightstudio.co.uk/'
            />
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



export default Services
