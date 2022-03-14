import {FadeInWhenVisible} from "../FadeIn";
import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Pattern from "../../public/pink-pattern.webp";
import {BookButton} from "../BookButton";
import {Drinks, Eyes} from "../icons";
import {WholeForm} from "../../pages/contact";
import {DownloadSection} from "../homepage/DownloadSection";
import * as React from "react";

export const BottomSection = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'))

    const handleContactButton = () => {
        document.getElementById('servicesContact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id="CUSTOM_DEVELOPMENT">
            <FadeInWhenVisible>
                <Box component='section' bgcolor='pink.main' sx={{ backgroundImage: `url('${Pattern.src}')`, backgroundAttachment: 'fixed' }} px={4} py={8} id="CUSTOM">
                    <Container maxWidth='md'>
                        <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8}}>
                            <Typography variant='h4' textAlign='center' mb={2}>
                                Looking for <span style={{color: theme.palette.primary.main}}>something</span> bespoke?
                            </Typography>
                            <Typography variant='h6' textAlign='center' mb={2}>
                                Get in touch to discuss your requirements and goals, & we&apos;ll advise on the best way forward for your project.
                            </Typography>
                            <Box textAlign='center' mt={4}>
                                <BookButton color='yellow' styles={{ minWidth: '50%' }} handleClick={handleContactButton}/>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <Box sx={{ p: 8 , m: 0}} id='servicesContact'>
                    <Container>
                        <Box sx={{ display: 'flex'}}>
                            {largerThanSM && <Box sx={{flex: 1}}>
                                <Box sx={{width: '80%'}}>
                                    <Eyes flip/>
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
            <DownloadSection />
        </div>
    )
}
