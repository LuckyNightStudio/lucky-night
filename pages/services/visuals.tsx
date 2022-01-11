import type { NextPage } from 'next'
import * as React from "react";
import {Banner} from "../../components/services/Banner";
import {FitsSection} from "../../components/services/FitsSection";
import {PackageIncludes} from "../../components/services/PackageIncludes";
import {AdditionalExtras} from "../../components/services/AdditionalExtra";
import {Plan} from "../../components/services/Plan";
import {FinalCTA} from "../../components/homepage/FinalCTA";
import {theme} from "../../utils/theme";
import {Typography} from "@mui/material";
import img from '../../public/personal-product-image.webp'
import {NextSeo} from "next-seo";

const includes = [
    'Approx 3 hours of brand strategy sessions',
    'Full logo suite to include submarks and secondary logos',
    'Brand patterns & imagery examples',
    '50 page brand guidelines and strategy document',
    'Social media templates in Adobe or Canva',
    'Business card designs ready for print'
]

const fits = [
    'You want to build your following of dream customers for your IRL store or workplace',
    'You want to get crystal  clear on your brand values & messaging so you can share content that makes an impact',
    'You want beautiful, colourful visuals that encompass the goals of your customer and your own vision',
    'You’re not interested in a conversion-focussed online presence'
]

const nots = [
    'You want a website (check out our branding & web design service)',
    'You’re not ready to collaborate and share your unique vision & story',
    'You’re not ready to invest in building your dream business, (check out our brand & web audit)',
    'You can’t commit to the 4-week project turnaround time'
]


const steps = [
    {
        title: 'Scheduling',
        subtitle: 'Before Project Start',
        description: 'We’ll set a start and target end date for your project. You’ll pay a 35% deposit and get a welcome pack full of info and reference questionnaires.'
    },
    {
        title: 'Strategy',
        subtitle: 'Week 1',
        description: 'You’ll work with Naomi on several hours of brand strategy calls where you’ll dig deep into your goals, customer base and visual style.'
    },
    {
        title: 'Visuals',
        subtitle: 'Weeks 2 - 4',
        description: 'From the strategy sessions, you’ll sign off keywords and moodboards that Naomi will turn into gorgeous full-scale visual branding.'
    },
    {
        title: 'Sign Off',
        subtitle: 'End of Project',
        description: 'Your branding is signed off, and we’ve made sure you’re happy with your documents. It’s time for project sign off and any final balance payments.'
    }
]

const Service: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Visuals - Lucky Night Studio"
                description="Full brand strategy and visual design experience to give you all the tools to grow your business in your ideal market."
            />
            <Banner
                title='Visuals'
                subtitle='Branding & Strategy'
                description='Full brand strategy and visual design experience to give you all the tools to grow your business in your ideal market.'
                price='2,295'
                color={theme.palette.yellow.main}
                img={img}
            >
                <ul>
                    {includes.map((text) => (
                        <Typography variant='body1' component='li' key={text}>
                            {text}
                        </Typography>
                    ))}
                </ul>
            </Banner>
            <FitsSection fits={fits} nots={nots}/>
            <PackageIncludes color={theme.palette.secondary.main}/>
            <AdditionalExtras />
            <Plan steps={steps}/>
            <FinalCTA />
        </>
    )
}

export default Service
