import type { NextPage } from 'next'
import {FadeInWhenVisible} from "../../components/FadeIn";
import { NextSeo } from 'next-seo';
import * as React from "react";
import Image from "next/image";
import customImg from '../../public/img/svgimgs/218-image.png'
import themeImg from '../../public/img/svgimgs/219-image.jpg'
import cmsImg from '../../public/img/svgimgs/220-image.png'
import devImg from '../../public/img/svgimgs/221-image.jpg'
import {StarLinks} from "../../components/services/StarLinks";
import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import img from '../../public/img/services/custom-website.png'
import printImg from '../../public/img/services/print-example.png'
import socialMediaImg from '../../public/img/services/social-media-example.png'
import { ArrowLeft, Hearts} from "../../components/icons";
import {BottomSection} from "../../components/services/ServicesPagesBottomSection";
import {ServiceCard} from "../../components/ServiceCard";
import {BookButton, ButtonStyle} from "../../components/BookButton";

const links = [
    {
        text: 'CUSTOM </br>WEBSITES',
        img: customImg
    },
    {
        text: 'CUSTOM </br>THEMES',
        img: themeImg
    },
    {
        text: 'CONTENT </br>MANAGEMENT',
        img: cmsImg
    },
    {
        text: 'CUSTOM </br>DEVELOPMENT',
        img: devImg
    },
]

const Website: NextPage = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const smallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const handleContactButton = () => {
        document.getElementById('servicesContact')?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <NextSeo
                title="Design Services - Lucky Night Studio"
                description="Branding & logo creation, Design for print, Social media templates, Custom graphics"
            />
            <FadeInWhenVisible>
                <Box mb={5}>
                    <StarLinks links={links} text={'Websites & Development'} color={theme.palette.greenLight.main}/>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <>
                    <Box component='section' bgcolor='greenLight.main' py={4} id="CUSTOM_WEBSITES">
                        <Container>
                            <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: small ? 'column': 'row'}}>
                                <Box sx={{flex: 2, position: 'relative'}}>
                                    <Box sx={{
                                        position: small ? 'relative' : 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: small ? '90%' : '160%',
                                        height: small ? '90%' : '160%',
                                        pointerEvents: 'none',
                                        zIndex: 2,
                                        mx: 'auto',
                                        mb: 4
                                    }}>
                                        <Image
                                            src={img.src}
                                            height={img.height}
                                            width={img.width}
                                            alt="Custom Website example"
                                        />
                                    </Box>
                                </Box>
                                <Box p={4} flex={5}>
                                    <Typography component='h1' variant='body1' sx={{fontSize: '2.6rem', py: 1}}>
                                        CUSTOM WEBSITES
                                    </Typography>
                                    <Typography variant='h6' component='p' color='white.main' py={1}>
                                        “Design is not just what it looks like and feels like. Design is how it works.” - Steve Jobs
                                    </Typography>
                                    <Typography py={1}>
                                        Custom built websites are the perfect fit for the vast majority of small businesses. They allow you to take back hours of precious time each week that would usually be spent editing and updating, so that you can focus on the work you’re most passionate about.
                                    </Typography>
                                    <Typography py={1}>
                                        Custom built sites perform better on search engines and mobile devices and can be fully customised to your unique requirements. All while taking the time pressure off of you so you can manage the million other things on your to-do list.
                                    </Typography>
                                    <Typography py={1}>
                                        We offer a full scale web design service, from design through to development and can even manage hosting and email set up.
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} bgcolor='greenLight.main'>
                            {!smallerThanMD && (<Box sx={{flex: 2, position: 'relative'}}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '-10%',
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none'
                                }}>
                                    <Hearts />
                                </Box>
                            </Box>)}
                            <Box p={4} flex={6}>
                                <Typography align='center' variant='h6'>
                                    The businesses we work with are colourful visionaries who understand the necessity of a strong online presence. They previously found their DIY site stressful, but thanks to our managed-for-you website solutions they now have a online presence that ranks highly on search engines, converts buyers & looks incredible.
                                </Typography>
                            </Box>
                            {!smallerThanMD && <Box flex={1}>
                                <ArrowLeft/>
                            </Box>}
                        </Box>
                    </Box>
                    <Box bgcolor='greenLight.main' py={4}>
                    <Container>
                        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', flexDirection: largerThanMD ? 'row': 'column', alignItems: largerThanMD ?  'stretch' : 'center', justifyContent: 'center' }}>
                            <ServiceCard
                                title='Solopreneur'
                                description='A single page site containing all the basics your biz needs to showcase. Fully custom built and SEO optimised.'
                                list={['Design & planning sessions', 'Prototype sign off', 'Content & SEO optimisation', 'Mobile-first responsive design', 'Single page custom build', 'Hosting from <strong>£10pm</strong>']}
                                color={theme.palette.purple.main}
                                price={'£1,995'}
                                handleClick={handleContactButton}
                                buttonColor='purple'
                            />
                            <ServiceCard
                                title='Boss Level'
                                description='Perfect for established businesses ready to get serious about their online presence & level up.'
                                list={['Design & planning sessions', 'Prototype sign off', 'Content & SEO optimisation', 'Mobile-first responsive design', 'Up to 8 page custom build', 'Hosting from <strong>£10pm</strong>']}
                                color={theme.palette.secondary.main}
                                price={'£3,295'}
                                buttonColor='pink'
                                handleClick={handleContactButton}
                            />
                            <ServiceCard
                                title='Confident Commerce'
                                description='A banging online presence with all the bells & whistles including e-commerce set up for seamless selling.'
                                list={['Design & planning sessions', 'Prototype sign off', 'Prototype sign off', 'Mobile-first responsive design', 'Up to 8 page custom build', 'Online shop set up', 'Hosting from <strong>£10pm</strong>']}
                                color={theme.palette.yellow.main}
                                price={'£5,295'}
                                buttonColor='yellow'
                                handleClick={handleContactButton}
                            />
                        </Box>
                        <Box textAlign='center' mb={4}>
                            <Typography align='center' variant='h6' mb={2}>
                                Looking for something custom or bespoke?
                            </Typography>
                            <Button variant='contained'
                                    color={'white' as any}
                                    sx={{...ButtonStyle}}
                                    onClick={handleContactButton}>
                                GET IN TOUCH
                            </Button>
                        </Box>
                    </Container>
                </Box>
                </>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box component='section' bgcolor='secondary.main' px={2} py={5} sx={{ maxWidth: '100%', overflow: 'hidden' }} id='CUSTOM_THEMES'>
                    <Container>
                        <Box sx={{ display: 'flex'}}>
                            <Box sx={{ flex: 2, p:4 }}>
                                <Typography  variant='body1' component='h2' sx={{ fontSize: '2.6rem' }}>
                                    CUSTOM THEMES
                                </Typography>
                                <Typography variant='h6' component='p' py={1} color='white.main' my={3}>
                                    “I strive for two things in design: simplicity and clarity. Great design is born of those two things.” Lindon Leader
                                </Typography>
                                <Typography mb={4}>
                                    Many small business owners don’t yet have the funds or the time for a custom design project, but that doesn’t mean they shouldn’t have a gorgeous and functional site. Our custom designed themes for Squarespace and Shopify are the ideal solution for busy business owners who want the control of DIY with the look and functionality of a custom designed site.
                                </Typography>
                                <BookButton color={'greenLight'} handleClick={handleContactButton}/>
                            </Box>
                            {!smallerThanMD && (<Box sx={{flex: 1, minHeight: '100%'}}>
                                <Box sx={{position: 'relative', height: '100%'}}>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '130%',
                                        height: '100%',
                                        pointerEvents: 'none',
                                        zIndex: 2
                                    }}>
                                        <Image
                                            src={printImg.src}
                                            height={printImg.height}
                                            width={printImg.width}
                                            alt="Custom Website example"
                                        />
                                    </Box>
                                </Box>
                            </Box>)
                            }
                        </Box>
                    </Container>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box bgcolor='yellow.main' component='section' py={5} id='CONTENT_MANAGEMENT'>
                    <Container>
                        <Box sx={{ display: 'flex', flexDirection: small ? 'column': 'row'}}>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{flex: 2, position: 'relative'}}>
                                    <Box sx={{
                                        position: small ? 'relative' : 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: small ? '90%' :'160%',
                                        height: small ? '90%' :'160%',
                                        pointerEvents: 'none',
                                        m: 'auto',
                                        zIndex: 2
                                    }}>
                                        <Image
                                            src={socialMediaImg.src}
                                            height={socialMediaImg.height}
                                            width={socialMediaImg.width}
                                            alt="Custom Themes example"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 2, p:4, my: 4 }}>
                                <Typography  variant='body1' component='h2' sx={{ fontSize: '2.6rem' }}>
                                    CONTENT MANAGEMENT
                                </Typography>
                                <Typography variant='h6' component='p' py={1} my={3}>
                                    “Content precedes design. Design in the absence of content is not design, it’s decoration.” - Jeffrey Zeldman                                </Typography>
                                <Typography>
                                    Need help optimising your content for converting more site visitors? Maybe you’d like a custom built site with the option to edit your own content?
                                </Typography>
                                <Box sx={{ flex: 2}}>
                                    <Typography mt={3}>
                                        We can help with:
                                    </Typography>
                                    <Box component='ul' mr={2} mb={4}>
                                        <Typography component='li'>Custom CMS so you can edit your own site (without the bulk of Squarespace)
                                        </Typography>
                                        <Typography component='li'>Optimising website content
                                        </Typography>
                                        <Typography component='li'>Digital product creation (lead gen PDFs, email campaigns etc)
                                        </Typography>
                                        <Typography component='li'>Online shop management
                                        </Typography>
                                    </Box>
                                </Box>
                                <BookButton handleClick={handleContactButton}/>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </FadeInWhenVisible>
            <BottomSection />
        </>
    );
}



export default Website
