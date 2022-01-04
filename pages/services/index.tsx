import type { NextPage } from 'next'
import {WorkWithUs} from "../../components/homepage/WorkWithUs";
import {QuizSection} from "../../components/homepage/QuizSection";
import {PreviousProjects} from "../../components/homepage/PreviousProjects";
import {FinalCTA} from "../../components/homepage/FinalCTA";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import {FadeInWhenVisible} from "../../components/FadeIn";

const Services: NextPage = () => {
    return (
        <>
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
