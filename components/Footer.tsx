import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import Script from 'next/script'
import {Socials} from "./Social";
import Link from "next/link";
import {ButtonStyle} from "./BookButton";
import * as React from "react";
import {Logo} from "./Logo";

export const Footer = () => {
    const theme = useTheme();
    return (
        <Box py={4} bgcolor={'#000'} color='#fff'>
                <footer>
                    <Typography  fontWeight={600} color={theme.palette.secondary.main} mb={5} textAlign={'center'}>
                        CONNECT WITH US DIGITALLY
                    </Typography>
                    <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
                    <div className="elfsight-app-29ade5b2-2b40-477b-aad5-4a8a399cb649"></div>
                    <Box py={10}>
                        <Container>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap'}}>
                                <Box sx={{ flex: 1, my: 1 }}>
                                    <Box sx={{ width: 100}}>
                                        <Logo type='footer'/>
                                    </Box>
                                </Box>
                                <Box sx={{ flex: 1, m: 'auto', my: 1, px: 2  }}>
                                    <Socials start={false} />
                                </Box>
                                <Box sx={{ flex: 1, textAlign: 'right', my: 1 }}>
                                    <Box sx={{ minWidth: 201 }}>
                                        <Link href="/work-with-us" passHref>
                                            <Button color={'greenLight' as any} variant='contained' sx={{...ButtonStyle, color: '#000', ml: 3}}>
                                                WORK WITH US
                                            </Button>
                                        </Link>
                                    </Box>
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
