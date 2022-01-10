import type { NextPage } from 'next'
import Link from 'next/link'
import {Container, Typography, Box, useTheme, useMediaQuery} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import puppaFresh from  "../../public/puppa-fresh/home.webp";
import boujeeBowl from "../../public/boujee-bowl/bb-laptop-man.webp";
import tiredGirlsCopyClub from "../../public/tired-girl-copy-girl/Tired-Girls-Copy-Club-logo-Gold.webp";
import Image from "next/image";
import * as React from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {FadeInWhenVisible} from "../../components/FadeIn";
import {NextSeo} from "next-seo";

const work = [
    {
        image: puppaFresh,
        alt: 'Puppa fresh',
        link: '/our-work/puppa-fresh',
        title: 'Puppa Fresh',
        sub: 'Strategy - Branding - Web Design',
        color: 'primary.main'
    },
    {
        image: boujeeBowl,
        alt: 'Boujee Bowl',
        link: '/our-work/boujee-bowl',
        title: 'Boujee Bowl',
        sub: 'Strategy - Branding - Web Design',
        color: 'secondary.main'
    },
    {
        image: tiredGirlsCopyClub,
        alt: 'Tired Girls Copy Club',
        link: '/our-work/tired-girls-copy-club',
        title: 'Tired Girls Copy Club',
        sub: 'Strategy - Branding - Web Design',
        color: 'purple.main'
    }
]

const style: SxProps<Theme> = {
    cursor: 'pointer',
    position: 'relative',
    'img': {
        transition: '0.4s'
    },
    '&:hover .overlay': {
        opacity: 1
    },
    '&:hover img': {
        opacity: 0.3
    }
}

const overlayStyle: SxProps<Theme> = {
    transition: '0.4s',
    position: 'absolute',
    opacity: 0,
    top:'50% ',
    left: 0,
    width: '100%',
    height: 'max-content',
    transform: 'translate(0%, -50%)',
    px: 2,
    py: 4,
    textAlign: 'center'
}

export const OurWorkGrid = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <FadeInWhenVisible>
            <Masonry columns={largerThanSM ? 2 : 1} spacing={3}>
                {work.map(({image, alt, link, title, sub, color}, index) => (
                    <Box key={index} sx={style}>
                        <Link href={link} passHref>
                            <Box bgcolor={color} p={0} height={'calc(100% - 6px)'}>
                                <Image
                                    src={image.src}
                                    alt={alt}
                                    width={image.width}
                                    height={image.height}
                                    blurDataURL={image.blurDataURL}
                                    placeholder='blur'

                                />
                                <Box
                                    className='overlay'
                                    sx={overlayStyle}>
                                    <Typography variant='h4'>{title}</Typography>
                                    <Typography>{sub}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Masonry>
        </FadeInWhenVisible>
    )
}

const OurWork: NextPage = () => {
    return (
        <Container>
            <NextSeo
                title="Previous work - Lucky Night Studio"
                description="Some example of our previous work, providing full brand strategy and visual design experience to give you all the tools to grow your business in your ideal market."
            />
            <Box p={4} my={6}>
                <Typography variant='h3' textAlign='center'>Some of our previous projects</Typography>
            </Box>
            <OurWorkGrid />
        </Container>
    )
}

export default OurWork
