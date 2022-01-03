import type { NextPage } from 'next'
import * as React from "react";
import {Banner} from "../../components/services/Banner";
import {FitsSection} from "../../components/services/FitsSection";
import {PackageIncludes} from "../../components/services/PackageIncludes";
import {AdditionalExtras} from "../../components/services/AdditionalExtra";
import {Plan} from "../../components/services/Plan";
import {FinalCTA} from "../../components/homepage/FinalCTA";
import {theme} from "../../utils/theme";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import img from '../../public/service-product-image.webp'

const includes = [
    'Approx 3 hours of brand strategy sessions',
    'Full logo suite to include submarks and secondary logos',
    'Brand patterns & imagery examples',
    '50 page brand guidelines and strategy document',
    'Social media templates in Adobe or Canva',
    'Business card designs ready for print'
]

const includes2 = [
    'Fully responsive, mobile-first design',
    'Considered, well-designed user experience and journey',
    'Integrated contact forms and email signups',
    'Full hosting set up',
    'Complete SEO optimisation to guarantee speed and ranking success'
]

const fits = [
    'You want to reach your following of dream customers across physical & digital touchpoints',
    'You want to convert dream buyers with your unique values and story',
    'You want a fully custom, conversion-focussed  web experience alongside your stunning visual assets',
    'You’re ready to increase brand trust and loyalty, share your unique story and see real growth'
]

const nots = [
    'You’ll be using your website to sell (check out our e-commerce service)',
    'You’re not ready to collaborate and share your inspiring vision & story',
    'You’re not ready to invest in building your dream business  (check out our brand & web audit)',
    'You can’t commit to our 6 week project turnaround time'
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
        description: 'From the strategy sessions, you’ll sign off keywords and moodboards that Naomi will turn into gorgeous full-scale visual branding. Work begins on designing your website using brand guidelines.'
    },
    {
        title: 'Website Build',
        subtitle: 'Weeks 4 - 5',
        description: 'While your brand guidelines and strategy guides are finished off, your new website will be being built - ready for all your amazing content.'
    },
    {
        title: 'Website Presentation',
        subtitle: 'Weeks 5 - 6',
        description: 'Your website will be signed off by you after any amends. We will then go through testing and organising the SEO.',
    },
    {
        title: 'Sign Off',
        subtitle: 'End of Project',
        description: 'Your branding is signed off, and we’ve made sure you’re happy with your new site and any documents. It’s time for project sign off and any final balance payments.'
    }
]

const Service: NextPage = () => {
    return (
        <>
            <Banner
                title='Service Business'
                subtitle='Branding, Strategy and Website Design & Build'
                description='Full brand strategy, visual design and custom, conversion-focussed  website creation. This service will cement you as a trustworthy, exciting key player among your dream audience and have them desperate to work with you!'
                price='4,395'
                color={theme.palette.greenLight.main}
                buttonColor='purple'
                img={img}
            >
                <ul>
                    <li>
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary sx={{ padding: 0, minHeight: '50px !important'}}>
                                <Typography variant='body1'>
                                    Everything Brand & Strategy from the <span style={{color: theme.palette.primary.main}}> Personal Business Package</span><span style={{ marginLeft: 10, fontWeight: 600 }}>v</span>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {includes.map((text) => (
                                        <Typography variant='body1' component='li' key={text}>
                                            {text}
                                        </Typography>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </li>
                    <Typography variant='body1' component='li'>
                        Custom website design & build including:
                    </Typography>
                    <ul>
                        {includes2.map((text) => (
                            <Typography variant='body1' component='li' key={text}>
                                {text}
                            </Typography>
                        ))}
                    </ul>
                </ul>
            </Banner>
            <FitsSection fits={fits} nots={nots} bgColor='secondary.main' cardColor='rgba(246,236,110,1)' buttonColor='primary' handsIcon={false}/>
            <PackageIncludes webdesign={true} color={theme.palette.yellow.main} price='4,395'/>
            <AdditionalExtras />
            <Plan steps={steps}/>
            <FinalCTA />
        </>
    )
}

export default Service
