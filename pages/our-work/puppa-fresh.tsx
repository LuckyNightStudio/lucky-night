import type { NextPage } from 'next'
import {Container, Box, Typography, useMediaQuery} from "@mui/material";
import image1 from "../../public/puppa-fresh/puppa-fresh-logo.jpg";
import image2 from "../../public/puppa-fresh/brand-guide-mockup.jpg";
import image3 from "../../public/puppa-fresh/paper-bag.jpg";
import image4 from "../../public/puppa-fresh/shampoo-bottle.jpg";
import image5 from "../../public/puppa-fresh/desktop-site-mockup.jpg";
import image6 from "../../public/puppa-fresh/web-pages-mockup.jpg";
import image7 from "../../public/puppa-fresh/quote.jpg";
import image8 from "../../public/puppa-fresh/logo.jpg";
import image9 from "../../public/puppa-fresh/home.webp";
import image10 from "../../public/puppa-fresh/services.jpg";
import image11 from "../../public/puppa-fresh/book-an-appointment.jpg";
import brandImg1 from "../../public/puppa-fresh/puppa-fresh-brand-1.jpg";
import brandImg2 from "../../public/puppa-fresh/puppa-fresh-brand-2.jpg";
import brandImg3 from "../../public/puppa-fresh/puppa-fresh-brand-3.jpg";
import brandImg4 from "../../public/puppa-fresh/puppa-fresh-brand-4.jpg";
import brandImg5 from "../../public/puppa-fresh/puppa-fresh-brand-5.jpg";
import brandImg6 from "../../public/puppa-fresh/puppa-fresh-brand-6.jpg";
import brandImg7 from "../../public/puppa-fresh/puppa-fresh-brand-7.jpg";
import brandImg8 from "../../public/puppa-fresh/puppa-fresh-brand-8.jpg";
import brandImg9 from "../../public/puppa-fresh/puppa-fresh-brand-9.jpg";
import brandImg10 from "../../public/puppa-fresh/puppa-fresh-brand-10.jpg";
import brandImg11 from "../../public/puppa-fresh/puppa-fresh-brand-11.jpg";
import brandImg12 from "../../public/puppa-fresh/puppa-fresh-brand-12.jpg";
import brandImg13 from "../../public/puppa-fresh/puppa-fresh-brand-13.jpg";
import brandImg14 from "../../public/puppa-fresh/puppa-fresh-brand-14.jpg";
import brandImg15 from "../../public/puppa-fresh/puppa-fresh-brand-15.jpg";
import brandImg16 from "../../public/puppa-fresh/puppa-fresh-brand-16.jpg";
import Masonry from '@mui/lab/Masonry';
import Image from "next/image";
import * as React from "react";
import {underlineStyle} from "../../components/homepage/Section2";
import {theme} from "../../utils/theme";
import {BookButton} from "../../components/BookButton";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import {FadeInWhenVisible} from "../../components/FadeIn";
import {Hands2} from "../../components/icons";
import {NextSeo} from "next-seo";

const siteLink = 'https://puppa-fresh.netlify.app/'

const brandImg = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6, brandImg7, brandImg8, brandImg9, brandImg10, brandImg11, brandImg12, brandImg13, brandImg14, brandImg15, brandImg16]

const PuppaFresh: NextPage = () => {
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <NextSeo
                title="Previous work - Puppa Fresh"
                description="An example of previous work with Puppa fresh for Strategy, Branding and Web Design"
            />
        <Container>
            <FadeInWhenVisible>
            <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column' }} pt={8}>
                <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image1.src}
                            alt="Puppa fresh logo"
                            width={image1.width}
                            height={image1.height}
                            blurDataURL={image1.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
                <Box sx={{flex: 1, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                    <Box>
                        <Typography variant='h3'>Puppa Fresh</Typography>
                        <Typography variant='h5' mb={2}>
                            <span style={{ display: 'inline-block' }}>
                                Strategy - Branding - Web Design
                                <span style={{...underlineStyle, background: theme.palette.greenLight.main}}/>
                            </span>
                        </Typography>
                    </Box>
                    <Typography fontWeight={600}  mb={2}>
                        Puppa Fresh is moving on up. From homegrown mobile dog groomer to bricks & mortar with a lifestyle presence, the team appreciate the importance of their positioning in the market.
                    </Typography>
                    <Typography  mb={2}>
                        With the new look and brand presence tied into the upmarket new location, the goal of the brand & web design process was to position Puppa Fresh as a high-end must-visit for the most devoted dog mamas.
                    </Typography>
                    <Typography  mb={2}>
                        Looking to strengthen your position in the market with custom brand & website design?
                    </Typography>
                    <Box mb={6}>
                        <BookButton color='secondary'/>
                    </Box>
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                <Box sx={{flex: 1, m: 2}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image2.src}
                            alt="Puppa fresh brand guide mockup"
                            width={image2.width}
                            height={image2.height}
                            blurDataURL={image2.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
                <Box sx={{flex: 1, m: 2}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image3.src}
                            alt="Puppa fresh Brown Bag"
                            width={image3.width}
                            height={image3.height}
                            blurDataURL={image3.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column', alignItems: 'center' }} py={4}>
                    <Box sx={{flex: 1, px: 2}} >
                        <Typography fontWeight={600} my={2}>
                            We worked with Puppa Fresh on Brand Strategy sessions to understand all about their values and goals, and ensure all visuals and messaging were targeted at their dream customer. Once we had clear, defined customer personas we started work on their visual branding.
                        </Typography>
                        <Typography  mb={2}>
                            This included
                        </Typography>
                        <ul>
                            <Typography component='li'>Main logo in full suite of colours</Typography>
                            <Typography component='li'>2 secondary logos in range of brand colours</Typography>
                            <Typography component='li'>Badges and icons</Typography>
                            <Typography component='li'>3 different brand patterns</Typography>
                            <Typography component='li'>Brand & Strategy guide showing how to use assets appropriately & create new branded content that sells to the right audience</Typography>
                            <Typography component='li'>Packaging design for dog grooming products</Typography>
                            <Typography component='li'>Social media templates</Typography>
                            <Typography component='li'>Shopfront and promotional signage</Typography>
                        </ul>
                    </Box>
                    <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                        <a href={siteLink} target='_blank' rel="noreferrer">
                            <Image
                                src={image4.src}
                                alt="Puppa fresh on shampoo"
                                width={image4.width}
                                height={image4.height}
                                blurDataURL={image4.blurDataURL}
                                placeholder='blur'
                            />
                        </a>
                    </Box>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: largerThanSM ? 'row': 'column'}}>
                <Box sx={{flex: 1, m: 2}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image5.src}
                            alt="Puppa fresh website"
                            width={image5.width}
                            height={image5.height}
                            blurDataURL={image5.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
                <Box sx={{flex: 1, m: 2}}>
                    <Typography fontWeight={600} mb={2}>
                        Once visual branding was signed off (with no amendments thanks to our rigorous initial brand strategy sessions) we got to work on creating their custom website - no bulky template sites here.
                    </Typography>
                    <Typography mb={2}>
                        Puppa Fresh’s key goal of their online presence was to encourage people to book appointments, so we had to ensure the booking process was easy to find and simple to complete. We placed plenty of clear calls to action and created a custom pop up booking modal that ensured users never lost their place on the site and could come and go as they needed to. The modal allowed bookings to be completed in under 4 clicks, ensuring a smooth and welcoming process that would encourage online bookings.
                    </Typography>
                    <Typography mb={2}>
                        We worked hard on SEO and trained them in beneficial content creation that would boost their rankings and site authority. We laid the foundations for a front-page site with image optimisation, well-researched keywords and descriptions and page markup, and we know with consistent content creation and growth in popularity, Puppa Fresh’s ranking will continue to improve.
                    </Typography>
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                <Box sx={{flex: 1, m: 2}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image6.src}
                            alt="Puppa fresh website mockup"
                            width={image6.width}
                            height={image6.height}
                            blurDataURL={image6.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
                <Box sx={{flex: 1, m: 2}}>
                    <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image7.src}
                            alt="Puppa fresh Quote"
                            width={image7.width}
                            height={image7.height}
                            blurDataURL={image7.blurDataURL}
                            placeholder='blur'
                        />
                    </a>
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{ maxWidth: 'sm', margin: 'auto', my: 6 }}>
                <Box width={50} margin='auto' pb={2}>
                    <Hands2 />
                </Box>
                <Typography textAlign='center'>
                    Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?
                </Typography>
                <Box sx={{ my: 4, textAlign: 'center'}}>
                    <BookButton color='secondary' />
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box m={4}>
                <a href={siteLink} target='_blank' rel="noreferrer">
                    <Image
                        src={image8.src}
                        alt="Puppa Fresh logo"
                        width={image8.width}
                        height={image8.height}
                        blurDataURL={image8.blurDataURL}
                        placeholder='blur'
                    />
                </a>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box m={2}>
                <Masonry columns={largerThanSM ? 2 : 1} spacing={2}>
                    <Box sx={{ width: '50%'}}>
                        <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image9.src}
                            alt="Puppa Fresh website mockup"
                            width={image9.width}
                            height={image9.height}
                            blurDataURL={image9.blurDataURL}
                            placeholder='blur'
                        />
                        </a>
                    </Box>
                    <Box sx={{ width: '50%'}}>
                        <a href={siteLink} target='_blank' rel="noreferrer">
                        <Image
                            src={image10.src}
                            alt="Puppa Fresh website mockup2"
                            width={image10.width}
                            height={image10.height}
                            blurDataURL={image10.blurDataURL}
                            placeholder='blur'
                        />
                        </a>
                    </Box>
                    <Box sx={{ width: '50%'}}>
                        <Image
                            src={image11.src}
                            alt="Puppa Fresh website mockup3"
                            width={image11.width}
                            height={image11.height}
                            blurDataURL={image11.blurDataURL}
                            placeholder='blur'
                        />
                    </Box>
                </Masonry>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <Box sx={{ maxWidth: 'sm', margin: 'auto', my: 8 }}>
                <Typography textAlign='center'>
                    Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?
                </Typography>
                <Box sx={{ my: 4, textAlign: 'center'}}>
                    <BookButton color='secondary' />
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

export default PuppaFresh
