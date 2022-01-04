import type { NextPage } from 'next'
import {Container, Box, Typography, useMediaQuery} from "@mui/material";
import image1 from "../../public/boujee-bowl/BB-full-logo.jpg";
import image2 from "../../public/boujee-bowl/boujee-bowl-logo-mockup-2.jpg";
import image3 from "../../public/boujee-bowl/coffee-mockup.jpg";
import image4 from "../../public/boujee-bowl/pink-bb-logo-mockup.jpg";
import image5 from "../../public/boujee-bowl/Boujee-Bowl-web-mockup.jpg";
import image6 from "../../public/boujee-bowl/Boujee-bowl-brand-guide.jpg";
import image7 from "../../public/boujee-bowl/socials-group.jpg";
import image8 from "../../public/boujee-bowl/bb-laptop-man.webp";
import image9 from "../../public/boujee-bowl/Boujee-Bowl-web-design.jpg";
import Image from "next/image";
import * as React from "react";
import {underlineStyle} from "../../components/homepage/Section2";
import {theme} from "../../utils/theme";
import {BookButton} from "../../components/BookButton";
import step2 from "../../public/step2.png";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import brandImg1 from "../../public/boujee-bowl/Boujee-bowl-branding-1.jpg";
import brandImg2 from "../../public/boujee-bowl/Boujee-bowl-branding-2.jpg";
import brandImg3 from "../../public/boujee-bowl/Boujee-bowl-branding-3.jpg";
import brandImg4 from "../../public/boujee-bowl/Boujee-bowl-branding-4.jpg";
import brandImg5 from "../../public/boujee-bowl/Boujee-bowl-branding-5.jpg";
import brandImg6 from "../../public/boujee-bowl/Boujee-bowl-branding-6.jpg";
import {FadeInWhenVisible} from "../../components/FadeIn";


const brandImg = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6]

// const siteLink = 'https://puppa-fresh.netlify.app/'

const Page: NextPage = () => {
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Container>
                <FadeInWhenVisible>
                <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column' }} pt={8}>
                    <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image1.src}
                                alt="Boujee Bowl logo"
                                width={image1.width}
                                height={image1.height}
                                blurDataURL={image1.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                    <Box sx={{flex: 1, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                        <Box>
                            <Typography variant='h3'>Boujee Bowl</Typography>
                            <Typography variant='h5' mb={2}>
                            <span style={{ display: 'inline-block' }}>
                                Strategy - Branding - Web Design
                                <span style={{...underlineStyle, background: theme.palette.greenLight.main}}/>
                            </span>
                            </Typography>
                        </Box>
                        <Typography fontWeight={600}  mb={2}>
                            Boujee Bowl are a brand new plant-based street food restaurant and bar with a huge passion, social justice and activism and a banging party atmosphere. It was clear to us as soon as we began work with the team that our values aligned in a way that made this project an absolute joy to work on.
                        </Typography>
                        <Typography  mb={2}>
                            Their main focus for the project was on building a brand that was desirable and cool that people would be able to enjoy, all while contributing to great sustainable causes and community projects. All the activism and positive progress, none of the guilt, blame or bad vibes. All are welcome at Boujee Bowl!
                        </Typography>
                        <Typography  mb={2}>
                            Looking to build your own perfect brand?
                        </Typography>
                        <Box mb={6}>
                            <BookButton color='yellow'/>
                        </Box>
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image2.src}
                                alt="Boujee Bowl logo"
                                width={image2.width}
                                height={image2.height}
                                blurDataURL={image2.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image3.src}
                                alt="Boujee Bowl coffee"
                                width={image3.width}
                                height={image3.height}
                                blurDataURL={image3.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column', alignItems: 'center' }} py={4}>
                    <Box sx={{flex: 1, px: 2}} >
                        <Typography fontWeight={600} my={2}>
                            We started work with Boujee Bowl on Brand Strategy sessions to get to know them as a business so we could discover and build upon their values and hone in on their core target market. Once we had clarity on who they were and what they wanted to accomplish with this work, we made a start on their visual branding.
                        </Typography>
                        <Typography  mb={2}>
                            This included
                        </Typography>
                        <ul>
                            <Typography component='li'>Main logo in full suite of colours and orientations</Typography>
                            <Typography component='li'>Secondary logos in range of brand colours</Typography>
                            <Typography component='li'>Logo badges and icons</Typography>
                            <Typography component='li'>3 different brand patterns</Typography>
                            <Typography component='li'>Brand colour palette and typeface selection</Typography>
                            <Typography component='li'>Brand & Strategy guide showing how to use assets appropriately & create new branded content that sells to the right audience</Typography>
                            <Typography component='li'>Packaging design for coffee and travel cups</Typography>
                            <Typography component='li'>Social media templates</Typography>
                            <Typography component='li'>Shopfront and promotional signage</Typography>
                        </ul>
                    </Box>
                    <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image4.src}
                                alt="Boujee Bowl logo pink"
                                width={image4.width}
                                height={image4.height}
                                blurDataURL={image4.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: largerThanSM ? 'row': 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image5.src}
                                alt="Boujee Bowl phone mockup"
                                width={image5.width}
                                height={image5.height}
                                blurDataURL={image5.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                        <Typography fontWeight={600} mb={2}>
                            Once we got the ok on the visual branding (with only a couple of small wording tweaks thanks to our rigorous initial brand strategy sessions) we got to work on designing and building their custom single page website.
                        </Typography>
                        <Typography mb={2}>
                            Boujee Bowl’s website was to be used mainly as a promotional piece where viewers could peruse sample menus, take a look at upcoming events and book tables. We decided on a single-page site that utilises anchors rather than separate pages so that content could be focussed on quality rather than quantity. We also set up Boujee Bowl with a custom CMS (content management system) so that they could easily update menus and event info without a difficult back-end system or constant input from us.
                        </Typography>
                        <Typography mb={2}>
                            SEO was set up strong using keywords, image optimisation and solid page mark-up (particularly important for single page sites). The team had training on content creation and were keen to write frequent blogs and new event listings which will set them up for high page authority in no time!                        </Typography>
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image6.src}
                                alt="Boujee Bowl brand guide"
                                width={image6.width}
                                height={image6.height}
                                blurDataURL={image6.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image7.src}
                                alt="Boujee Bowl socials"
                                width={image7.width}
                                height={image7.height}
                                blurDataURL={image7.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{ maxWidth: 'sm', margin: 'auto', my: 6 }}>
                    <Box width={50} margin='auto' pb={2}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={step2.src}
                                alt="Step 2"
                                width={step2.width}
                                height={step2.height}
                                blurDataURL={step2.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                    </Box>
                    <Typography textAlign='center'>
                        Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?
                    </Typography>
                    <Box sx={{ my: 4, textAlign: 'center'}}>
                        <BookButton />
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box m={4}>
                    {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                        <Image
                            src={image8.src}
                            alt="Boujee Bowl laptop mockup"
                            width={image8.width}
                            height={image8.height}
                            blurDataURL={image8.blurDataURL}
                            placeholder='blur'
                        />
                    {/*</a>*/}
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{my: 4, maxWidth: 800, mx: 'auto' }}>
                        {/*<a href={siteLink} target='_blank' rel="noreferrer">*/}
                            <Image
                                src={image9.src}
                                alt="Boujee Bowl web design"
                                width={image9.width}
                                height={image9.height}
                                blurDataURL={image9.blurDataURL}
                                placeholder='blur'
                            />
                        {/*</a>*/}
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{ maxWidth: 'sm', margin: 'auto', my: 8 }}>
                    <Typography textAlign='center'>
                        Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?
                    </Typography>
                    <Box sx={{ my: 4, textAlign: 'center'}}>
                        <BookButton />
                    </Box>
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{display: 'flex', flexWrap: 'wrap', my: 8}}>
                    {brandImg.map((imgRef, index) => (
                        <Box key={index} sx={{ width: largerThanSM ? '50%' : '90%', m: 'auto'}}>
                            <Image
                                src={imgRef.src}
                                alt={`branding image ${index}`}
                                width={imgRef.width}
                                height={imgRef.height}
                                blurDataURL={imgRef.blurDataURL}
                                placeholder='blur'
                            />
                        </Box>
                    ))}
                </Box>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <Box sx={{ mx: 'auto', my: 12, maxWidth: 'md'}}>
                    <Typography textAlign='center'>
                        Ready to leave ineffective marketing behind? Work with us to create a delightful brand & website to captivate and convert your dream audience. Get back to the work you’re most passionate about!
                    </Typography>
                    <Box sx={{ my: 4, textAlign: 'center'}}>
                        <BookButton color='yellow'/>
                    </Box>
                </Box>
                </FadeInWhenVisible>
            </Container>
            <DownloadSection color='green.light' />
        </>
    )
}

export default Page
