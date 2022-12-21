import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Script from 'next/script'
import {LargeNav} from "./Header";
import {Socials} from "./Social";
import Link from "next/link";
import {ButtonStyle} from "./BookButton";
import * as React from "react";
import {Logo} from "./Logo";

export const Footer = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ backgroundColor: '#000', color: '#fff'}} py={4}>
                <footer>
                    <Typography  fontWeight={600} color={theme.palette.secondary.main} mb={5} textAlign={'center'}>
                        CONNECT WITH US DIGITALLY
                    </Typography>
                    <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
                    <div className="elfsight-app-29ade5b2-2b40-477b-aad5-4a8a399cb649"></div>
                    <Box py={10}>
                        <Container>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6}}>
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ width: 100}}>
                                        <Logo type='footer'/>
                                    </Box>
                                </Box>
                                <Box sx={{ flex: 1, m: 'auto' }}>
                                    <Socials start={false} />
                                </Box>
                                <Box sx={{ flex: 1, textAlign: 'right'}}>
                                    <Link href="/work-with-us" passHref>
                                        <Button color={'greenLight'} variant='contained' sx={{...ButtonStyle, color: '#000', ml: 3}}>
                                            WORK WITH US
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'center', mt: 2}}>
                                <Typography variant='caption'>
                                    Lucky Night Studio © {new Date().getFullYear()}
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </footer>
        </Box>
    );
}
