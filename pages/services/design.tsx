import type { NextPage } from 'next'
import {FadeInWhenVisible} from "../../components/FadeIn";
import { NextSeo } from 'next-seo';
import * as React from "react";
import customImg from '../../public/img/svgimgs/Group-221-image.png'
import socialImg from '../../public/img/svgimgs/Group-220-image.jpg'
import pintImg from '../../public/img/svgimgs/Group-219-image.jpg'
import brandImg from '../../public/img/svgimgs/Group-218-image.jpg'
import {StarLinks} from "../../components/services/StarLinks";
import {Box, Container, Typography} from "@mui/material";

const links = [
    {
        text: 'BRANDING',
        img: brandImg.src
    },
    {
        text: 'PRINT',
        img: pintImg.src
    },
    {
        text: 'SOCIAL MEDIA',
        img: socialImg.src
    },
    {
        text: 'CUSTOM',
        img: customImg.src
    },
]

const Design: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Design Services - Lucky Night Studio"
                description="Branding & logo creation, Design for print, Social media templates, Custom graphics"
            />
            <FadeInWhenVisible>
                <StarLinks links={links} />
            </FadeInWhenVisible>
            <Box component='section' bgcolor='yellow.main'>
                <Container>
                    <Box p={4}>
                        <Typography component='h1' variant='h4'>
                            BRANDING
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}



export default Design
