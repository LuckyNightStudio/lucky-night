import type { NextPage } from 'next'
import Link from 'next/link'
import {Container, Typography, Box} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import puppaFresh from  "../../public/puppa-fresh/home.jpg";
import boujeeBowl from "../../public/boujee-bowl/bb-laptop-man.jpg";
import tiredGirlsCopyClub from "../../public/tired-girl-copy-girl/Tired-Girls-Copy-Club-logo-Gold.jpg";
import Image from "next/image";
import * as React from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

const work = [
    {
        image: puppaFresh,
        alt: 'Puppa fresh',
        link: '/our-work/puppa-fresh',
        title: 'Puppa Fresh',
        sub: 'Strategy - Branding - Web Design'
    },
    {
        image: boujeeBowl,
        alt: 'Boujee Bowl',
        link: '/our-work/boujee-bowl',
        title: 'Boujee Bowl',
        sub: 'Strategy - Branding - Web Design'
    },
    {
        image: tiredGirlsCopyClub,
        alt: 'Tired Girls Copy Club',
        link: '/our-work/tired-girls-copy-club',
        title: 'Tired Girls Copy Club',
        sub: 'Strategy - Branding - Web Design'
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
        opacity: 0.7
    }
}

const overlayStyle: SxProps<Theme> = {
    transition: '0.4s',
    backgroundColor: 'rgba(39, 187, 142, 0.7)',
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

export const OurWorkGrid = () => (
    <Masonry columns={2} spacing={3}>
        {work.map(({image, alt, link, title, sub}, index) => (
            <Box key={index} sx={style}>
                <Link href={link} passHref>
                    <div>
                        <Image
                            src={image.src}
                            alt={alt}
                            width={image.width}
                            height={image.height}
                        />
                        <Box
                            className='overlay'
                            sx={overlayStyle}>
                            <Typography variant='h4'>{title}</Typography>
                            <Typography>{sub}</Typography>
                        </Box>
                    </div>
                </Link>
            </Box>
        ))}
    </Masonry>
)

const OurWork: NextPage = () => {
    return (
        <Container>
            <Box p={4} my={6}>
                <Typography variant='h3' textAlign='center'>Some of our previous projects</Typography>
            </Box>
            <OurWorkGrid />
        </Container>
    )
}

export default OurWork
