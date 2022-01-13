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
import img from '../../public/e-commerce-product-image.webp'
import {NextSeo} from "next-seo";


const includes = [
    'Approx 3 hours of brand strategy sessions',
    'Full logo suite to include submarks and secondary logos',
    'Brand patterns & imagery examples',
    '50 page brand guidelines and strategy document',
    'Social media templates in Adobe or Canva',
    'Business card designs ready for print',
    'Considered, well-designed user experience and journey',
    'Integrated contact forms and email signups',
    'Full hosting set up',
]

const includes2 = [
    'Unique, custom theme for your Shopify site',
    'Beautifully designed and easily manageable online shop features ',
    'Fully responsive, mobile-first design',
    'Reliability and security of financial info via Shopify platform',
    'Complete SEO optimisation to guarantee speed and ranking success'
]

const fits = [
    'You want to sell and manage physical inventory and payments (POS) through your website',
    'You want to showcase your unique values and story to stand out from the competition',
    'You want a fully custom web and shop experience alongside your stunning visual assets',
    'You’re ready to increase brand trust and loyalty, share your unique story and see real growth'
]

const nots = [
    'You’re not interested in selling products or building a loyal customer base through your website',
    'You can’t commit to our 8 week project turnaround time',
    'You’re not ready to collaborate and share your amazing vision & story',
    'You’re not ready to invest in building your dream business (check out our brand & web audit)\n'
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
        title: 'E-commerce Site Build',
        subtitle: 'Weeks 4 - 5',
        description: 'While your brand and strategy guides are finished off, your new website and shop functionality will be being built - ready for populating with all your amazing content and products.'
    },
    {
        title: 'E-commerce Site',
        subtitle: 'Weeks 5 - 6',
        description: 'Your new e-commerce site will be signed off by you after any amends. We will then go through testing and organising the SEO.',
    },
    {
        title: 'Sign Off',
        subtitle: 'End of Project',
        description: 'Your branding is signed off, and we’ve made sure you’re happy with your new site, online shop and any documents. It’s time for project sign off and any final balance payments..'
    }
]

const Service: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Visuals & Commerce - Lucky Night Studio"
                description="Branding, Strategy and Website Design & Build with Shop"
            />
            <Banner
                title='Visuals & Commerce'
                subtitle='Branding, Strategy and Website Design & Build with Shop'
                description='Branding, Strategy and Website Design & Build with Shop'
                price='6,195'
                color={theme.palette.purple.main}
                buttonColor='secondary'
                img={img}
            >
                <ul>
                    <li>
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary sx={{ padding: 0, minHeight: '50px !important'}}>
                                <Typography variant='body1'>
                                    Everything Brand & Strategy from the <span style={{color: theme.palette.primary.main}}> Visuals & Web Package</span><span style={{ marginLeft: 10, fontWeight: 600 }}>v</span>
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
            <FitsSection fits={fits} nots={nots} bgColor='yellow.main' cardColor='rgba(212,192,242,1)' buttonColor='blue' handsIcon={false}/>
            <PackageIncludes ecommerce={true} color={theme.palette.secondary.main} price='6,195'/>
            <AdditionalExtras />
            <Plan steps={steps}/>
            <FinalCTA />
        </>
    )
}

export default Service
