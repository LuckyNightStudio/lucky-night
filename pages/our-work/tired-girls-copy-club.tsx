import type { NextPage } from 'next'
import {Container, Box, Typography, useMediaQuery} from "@mui/material";
import Image from "next/image";
import image1 from "../../public/tired-girl-copy-girl/Tired-Girls-Copy-Club-logo-Gold.webp";
import image2 from "../../public/tired-girl-copy-girl/Instagram-Post-Mockup.jpg";
import image3 from "../../public/tired-girl-copy-girl/TGCC-brand-guide.jpg";
import image4 from "../../public/tired-girl-copy-girl/TGCC-poster.jpg";
import image5 from "../../public/tired-girl-copy-girl/stickers-mockup.jpg";
import image6 from "../../public/tired-girl-copy-girl/business-card-front.jpg";
import image7 from "../../public/tired-girl-copy-girl/business-card-back.jpg";
import * as React from "react";
import {underlineStyle} from "../../components/homepage/Section2";
import {theme} from "../../utils/theme";
import {BookButton} from "../../components/BookButton";
import step2 from "../../public/step2.png";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import brandImg1 from "../../public/tired-girl-copy-girl/branding-pack-1.jpg";
import brandImg2 from "../../public/tired-girl-copy-girl/branding-pack-2.jpg";
import brandImg3 from "../../public/tired-girl-copy-girl/branding-pack-3.jpg";
import brandImg4 from "../../public/tired-girl-copy-girl/branding-pack-4.jpg";
import brandImg5 from "../../public/tired-girl-copy-girl/branding-pack-5.jpg";
import brandImg6 from "../../public/tired-girl-copy-girl/branding-pack-6.jpg";


const brandImg = [brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6]

const Page: NextPage = () => {
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column' }} pt={8}>
                    <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                            <Image
                                src={image1.src}
                                alt="Boujee Bowl logo"
                                width={image1.width}
                                height={image1.height}
                                blurDataURL={image1.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                    <Box sx={{flex: 1, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                        <Box>
                            <Typography variant='h3'>Tired Girl’s Copy Club</Typography>
                            <Typography variant='h5' mb={2}>
                            <span style={{ display: 'inline-block' }}>
                                Strategy - Branding
                                <span style={{...underlineStyle, background: theme.palette.greenLight.main}}/>
                            </span>
                            </Typography>
                        </Box>
                        <Typography fontWeight={600}  mb={2}>
                            Tired Girl’s Copy Club are a team of dedicated young copywriters providing marketing services for clients and a lively online community for fellow freelancers & creative business owners. They started their journey in 2018 on a shoestring, but after hundreds of clients and a few media features decided it was time for a much-needed rebrand.                        </Typography>
                        <Typography  mb={2}>
                            Our goal working with TGCC was to create a visual brand that was versatile enough to use across print and digital for both the service based business and online community. We wanted to build something that better reflects their young, creative audience.                        </Typography>
                        <Typography  mb={2}>
                            Looking to build your own perfect brand?
                        </Typography>
                        <Box mb={6}>
                            <BookButton color='secondary'/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                            <Image
                                src={image2.src}
                                alt="Boujee Bowl logo"
                                width={image2.width}
                                height={image2.height}
                                blurDataURL={image2.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                            <Image
                                src={image3.src}
                                alt="Boujee Bowl coffee"
                                width={image3.width}
                                height={image3.height}
                                blurDataURL={image3.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row': 'column', alignItems: 'center' }} py={4}>
                    <Box sx={{flex: 1, px: 2}} >
                        <Typography fontWeight={600} my={2}>
                            TGCC felt that over the past 2 years, while their business had grown and was doing well, they had lost clarity around their direction and values. We worked on extensive strategy sessions that helped TGCC discover their perfect customer, understand their goals and values and craft a cohesive brand mission. Once we felt we had uncovered TGCC’s USPs, goals and values, we got to work crafting visuals that encompassed it all.
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
                            <Typography component='li'>Social media templates</Typography>
                            <Typography component='li'>Business card and poster/leaflet designs</Typography>
                            <Typography component='li'>Promotional stickers & assets</Typography>
                        </ul>
                    </Box>
                    <Box sx={{flex: 1, px: 2, mb: 4, alignSelf: 'center'}}>
                            <Image
                                src={image4.src}
                                alt="Boujee Bowl logo pink"
                                width={image4.width}
                                height={image4.height}
                                blurDataURL={image4.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: largerThanSM ? 'row': 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                            <Image
                                src={image5.src}
                                alt="Boujee Bowl phone mockup"
                                width={image5.width}
                                height={image5.height}
                                blurDataURL={image5.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                        <Typography fontWeight={600} mb={2}>
                            Thanks to our extensive initial brand strategy sessions, the visual branding was created and approved super quickly with barely any alterations.  Seeing the brand from the customer’s viewpoint rather than their own, and understanding the rationale behind every decision made a big difference to TGCC, and they were thrilled with the outcome of the visual branding.
                        </Typography>
                        <Typography mb={2}>
                            We spent a lot of time crafting the perfect brand usage & strategy guide for TGCC, as their business operates over so many different touchpoints and mediums. We wanted to ensure the team felt as comfortable writing event messaging as they did creating social media posts, so plenty of training and explanation in this area was essential to giving them the very best brand experience.
                        </Typography>
                        <Typography mb={2}>
                            Even though this branding was incredibly intensive, thanks to clear processes and deadlines, the whole project went smoothly and was completed (including training) within the 4 week turnaround time, meaning the team could get stuck in with their new strategy ASAP!
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: largerThanSM ? 'row' : 'column'}}>
                    <Box sx={{flex: 1, m: 2}}>
                            <Image
                                src={image6.src}
                                alt="Boujee Bowl brand guide"
                                width={image6.width}
                                height={image6.height}
                                blurDataURL={image6.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                    <Box sx={{flex: 1, m: 2}}>
                            <Image
                                src={image7.src}
                                alt="Boujee Bowl socials"
                                width={image7.width}
                                height={image7.height}
                                blurDataURL={image7.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                </Box>
                <Box sx={{ maxWidth: 'sm', margin: 'auto', my: 6 }}>
                    <Box width={50} margin='auto' pb={2}>
                            <Image
                                src={step2.src}
                                alt="Step 2"
                                width={step2.width}
                                height={step2.height}
                                blurDataURL={step2.blurDataURL}
                                placeholder='blur'
                            />
                    </Box>
                    <Typography textAlign='center'>
                        Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?
                    </Typography>
                    <Box sx={{ my: 4, textAlign: 'center'}}>
                        <BookButton color='purple' />
                    </Box>
                </Box>
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
                <Box sx={{ mx: 'auto', my: 12, maxWidth: 'sm'}}>
                    <Typography textAlign='center'>
                        Want to work with us on a custom brand &/or website design that will captivate & convert your dream audience?                    </Typography>
                    <Box sx={{ my: 4, textAlign: 'center'}}>
                        <BookButton color='yellow'/>
                    </Box>
                </Box>
            </Container>
            <DownloadSection color='green.light' />
        </>
    )
}

export default Page
