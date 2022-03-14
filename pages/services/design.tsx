import type { NextPage } from 'next'
import {FadeInWhenVisible} from "../../components/FadeIn";
import { NextSeo } from 'next-seo';
import * as React from "react";
import Image from "next/image";
import customImg from '../../public/img/svgimgs/Group-221-image.png'
import socialImg from '../../public/img/svgimgs/Group-220-image.jpg'
import pintImg from '../../public/img/svgimgs/Group-219-image.jpg'
import brandImg from '../../public/img/svgimgs/Group-218-image.jpg'
import {StarLinks} from "../../components/services/StarLinks";
import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import img from '../../public/img/services/Blue-frenchie-white-logo.png'
import printImg from '../../public/img/services/print-example.png'
import socialMediaImg from '../../public/img/services/social-media-example.png'
import {Sun, ArrowLeft, Pencil, Hands2} from "../../components/icons";
import {BottomSection} from "../../components/services/ServicesPagesBottomSection";
import {ServiceCard} from "../../components/ServiceCard";
import {BookButton, ButtonStyle} from "../../components/BookButton";

const links = [
    {
        text: 'BRANDING',
        img: brandImg
    },
    {
        text: 'PRINT',
        img: pintImg
    },
    {
        text: 'SOCIAL MEDIA',
        img: socialImg
    },
    {
        text: 'CUSTOM',
        img: customImg
    },
]

const Design: NextPage = () => {
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
                <StarLinks links={links}/>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box component='section' bgcolor='yellow.main' py={4}>
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
                                        alt="Branding example"
                                    />
                                </Box>
                            </Box>
                            <Box p={4} flex={5}>
                                <Typography component='h1' variant='body1' sx={{fontSize: '1.8rem', py: 1}}>
                                    BRANDING
                                </Typography>
                                <Typography variant='h6' component='p' color='primary.main' py={1}>
                                    “A brand is the set of expectations, memories, stories and relationships that, taken
                                    together, account for a consumer’s decision to choose one product or service over
                                    another.” – Seth Godin
                                </Typography>
                                <Typography py={1}>
                                    Good branding is about so much more than just the look of your businesses design
                                    assets. It’s about getting to know your ideal customer and their needs, and
                                    positioning your business as the best choice for them through design and messaging.
                                </Typography>
                                <Typography py={1}>
                                    Our branding service is steeped in strategy through deep conversations with you.
                                    You’ll receive not only gorgeous, functional visuals in the form of logos &
                                    graphics, but also a deep understanding of your target market, brand usage and
                                    strategy guides and the knowledge to push your business forward. </Typography>
                            </Box>
                        </Box>
                    </Container>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} bgcolor='yellow.main'>
                        {!smallerThanMD && (<Box sx={{flex: 2, position: 'relative'}}>
                            <Box sx={{
                                position: 'absolute',
                                top: '-40%',
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none'
                            }}>
                                <Sun color='#f69fb9'/>
                            </Box>
                        </Box>)}
                        <Box p={4} flex={6}>
                            <Typography align='center' variant='h6'>
                                The businesses we work with are colourful visionaries who understand the benefits of
                                investing in solid design strategy. They previously found the world of marketing
                                overwhelming, but thanks to our intensive brand solutions they now have a clear
                                picture of the market & their unique position within it making marketing a piece of
                                cake!
                            </Typography>
                        </Box>
                        {!smallerThanMD && <Box flex={1}>
                            <ArrowLeft/>
                        </Box>}
                    </Box>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box bgcolor='yellow.main' py={4}>
                    <Container>
                        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', flexDirection: largerThanMD ? 'row': 'column', alignItems: largerThanMD ?  'stretch' : 'center', justifyContent: 'center' }}>
                            <ServiceCard
                                title='Start Up Success'
                                description='All the basics needed to get your new business off to a strong start. Can be tailored to your needs.'
                                list={['Mini brand strategy sessions', 'Logo designs', 'Patterns and elements', 'Mini brand usage & strategy guide']}
                                color={theme.palette.purple.main}
                                price={'£1,495'}
                                handleClick={handleContactButton}
                                buttonColor='purple'
                            />
                            <ServiceCard
                                title='Business Builder'
                                description='Perfect for established businesses ready to get serious about strategy & level up. Can be tailored to your needs.'
                                list={['Brand strategy sessions', 'Logo designs', 'Patterns and elements', 'Full brand usage & strategy guide', 'Socials profile and cover images']}
                                color={theme.palette.secondary.main}
                                price={'£2,215'}
                                buttonColor='pink'
                                handleClick={handleContactButton}
                            />
                            <ServiceCard
                                title='Brand Famous'
                                description='The all-in, big mama package. Everything you need for fame & success. Can be tailored to your needs.'
                                list={['Brand strategy sessions', 'Logo designs', 'Patterns and elements', 'Full brand usage & strategy guide', 'Socials profile and cover images', 'Branded socials templates (insta, pinterest etc)', 'Website design & build']}
                                color={theme.palette.green.light}
                                price={'£5,295'}
                                buttonColor='greenLight'
                                handleClick={handleContactButton}
                            />
                        </Box>
                        <Box textAlign='center'>
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
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box component='section' bgcolor='purple.main' px={2} py={4} sx={{ maxWidth: '100%', overflow: 'hidden'}}>
                    <Container>
                        <Box sx={{ display: 'flex'}}>
                            <Box sx={{ flex: 2, p:4 }}>
                                <Typography  variant='body1' component='h2' sx={{ fontSize: '2.6rem' }}>
                                    PRINT
                                </Typography>
                                <Typography variant='h6' component='p' py={1} color='white.main' my={3}>
                                    “What the visionaries had in common was a particular love of craft and a desire to play.” – Petrula Vrontikis
                                </Typography>
                                <Typography>
                                    Print work may seem like an outdated medium, but it’s still absolutely prevalent in our day to day lives. It can be a fantastic asset for those working locally or from a physical premises, and it especially useful for those attending a lot of networking events or trade shows. Good print design ensures a consistent brand message across touchpoints.
                                </Typography>
                                <Typography mt={3}>
                                    We can help with:
                                </Typography>
                                <Box sx={{ display: 'flex', mb: 2 }}>
                                    <Box component='ul' mr={2}>
                                        <Typography component='li'>Business cards</Typography>
                                        <Typography component='li'>Promotional posters or flyers</Typography>
                                        <Typography component='li'>Vehicle livery</Typography>
                                    </Box>
                                    <Box component='ul'>
                                        <Typography component='li'>Packaging</Typography>
                                        <Typography component='li'>Print advertisements</Typography>
                                        <Typography component='li'>Much more</Typography>
                                    </Box>
                                </Box>
                                <BookButton color={'greenLight'} handleClick={handleContactButton}/>
                            </Box>
                            {!smallerThanMD && (<Box sx={{flex: 1, minHeight: '100%'}}>
                                <Box sx={{position: 'relative', height: '100%'}}>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '150%',
                                        height: '150%',
                                        pointerEvents: 'none',
                                        zIndex: 2
                                    }}>
                                        <Image
                                            src={printImg.src}
                                            height={printImg.height}
                                            width={printImg.width}
                                            alt="Print example"
                                        />
                                    </Box>
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: '-10%',
                                        left: '-20%',
                                        width: '40%',
                                        height: '40%',
                                        pointerEvents: 'none',
                                        zIndex: 2
                                    }}>
                                        <Pencil/>
                                    </Box>
                                </Box>
                            </Box>)
                            }
                        </Box>
                    </Container>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box bgcolor='greenLight.main' component='section'>
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
                                            alt="Branding example"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 2, p:4 }}>
                                <Typography  variant='body1' component='h2' sx={{ fontSize: '2.6rem' }}>
                                    SOCIAL MEDIA
                                </Typography>
                                <Typography variant='h6' component='p' py={1} color='white.main' my={3}>
                                    “Social marketing eliminates the middlemen, providing brands the unique opportunity to have direct relationships with customers.” — Bryan Weiner
                                </Typography>
                                <Typography>
                                    A well-branded and targeted social media presence is the key to a strong, rich online experience. Increase your brand’s authority and credibility among your potential buyers with a consistent approach across all digital mediums.
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ flex: 2}}>
                                    <Typography mt={3}>
                                        We can help with:
                                    </Typography>
                                    <Box component='ul' mr={2} mb={4}>
                                        <Typography component='li'>Pre-made templates</Typography>
                                        <Typography component='li'>Custom templates</Typography>
                                        <Typography component='li'>Custom graphics and animations</Typography>
                                    </Box>
                                    </Box>
                                    {!small && (
                                        <Box sx={{flex: 1, position: 'relative'}}>
                                            <Box sx={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                height: '60%',
                                                width: '60%'
                                            }}>
                                                <Hands2/>
                                            </Box>
                                        </Box>
                                    )}
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



export default Design
