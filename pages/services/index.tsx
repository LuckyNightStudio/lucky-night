import type { NextPage } from 'next'
import {WorkWithUs} from "../../components/homepage/WorkWithUs";
import {DownloadSection} from "../../components/homepage/DownloadSection";
import {FadeInWhenVisible} from "../../components/FadeIn";
import { NextSeo } from 'next-seo';
import {Intro} from "../../components/services/Intro";
import {WholeForm} from "../contact";
import {Container, Box, useMediaQuery, useTheme} from "@mui/material";
import * as React from "react";
import {Drinks, Eyes} from "../../components/icons";


const Services: NextPage = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <NextSeo
                title="Services - Lucky Night Studio"
                description="We offer branding and website service, including E-commerce sites. See our packages to find out which is right for you"
            />
            <FadeInWhenVisible>
                <Intro />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <WorkWithUs color={theme.palette.green.contrastText} bgColor='green.light' />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box sx={{ p: 4, bgcolor: 'secondary.main', m: 0}}>
                    <Container>
                        <Box sx={{ display: 'flex'}}>
                            {largerThanSM && <Box sx={{flex: 1}}>
                                <Box sx={{width: '80%'}}>
                                    <Eyes/>
                                </Box>
                            </Box>}
                            <Box sx={{ flex: 4 }}>
                                <WholeForm />
                            </Box>
                            {largerThanSM && <Box sx={{flex: 1, alignSelf: 'flex-end'}}>
                                <Box sx={{width: '80%', ml: 'auto'}}>
                                    <Drinks/>
                                </Box>
                            </Box>}
                        </Box>
                    </Container>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <DownloadSection />
            </FadeInWhenVisible>
        </>
    )
}



export default Services
