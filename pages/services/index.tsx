import type { NextPage } from 'next'
import {WorkWithUs} from "../../components/homepage/WorkWithUs";
import {QuizSection} from "../../components/homepage/QuizSection";
import {PreviousProjects} from "../../components/homepage/PreviousProjects";
import {FinalCTA} from "../../components/homepage/FinalCTA";
import {DownloadSection} from "../../components/homepage/DownloadSection";

const Home: NextPage = () => {
    return (
        <>
            <WorkWithUs />
            <QuizSection />
            <PreviousProjects />
            <DownloadSection />
            <FinalCTA />
        </>
    )
}



export default Home
