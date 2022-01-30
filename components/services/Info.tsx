import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as React from "react";
import Link from 'next/link'
import Image from "next/image";
import louiseAndNaomiLaughing from "../../public/louiseAndNaomiLaughing.webp";
import {ButtonStyle} from "../BookButton";
import {underlineStyle} from "../homepage/Section2";
import {theme} from "../../utils/theme";
import {Hearts} from "../icons";


export const Info = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box bgcolor='green.light' py={10} px={4} sx={{ overflow: 'hidden'}}>
            <Container>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: largerThanMD ? 'row': 'column-reverse'}}>
                    <Box sx={{ flex: 1}}>
                        <Typography variant='h5' component='h2' mb={4}>
                            <strong style={{ color: 'white' }}>Lucky Night Studio</strong> work on a wide variety of creative projects with <i style={{ display: 'inline-block'}}>magical young brands<span style={{...underlineStyle, backgroundColor: theme.palette.yellow.main}} /></i> with <i>immense</i> ambitions.
                        </Typography>
                        <Typography paragraph>
                            We offer a full service approach to digital design providing solutions in logo creation and branding, custom website builds, packaging and print design, SEO set up and analysis, social media templates and anything else your business requires. You won’t need to waste any more time sourcing freelancers, Lucky Night Studio can help you achieve it all.
                        </Typography>
                        <Typography paragraph>
                            We are proud to work independently from brief stage to provide digital design solutions that are effective, creative and as unique as your business – without the stress of juggling multiple freelancers. We work with you to gather all the information we need to get started so that you can get back to doing the work you’re most passionate about.
                        </Typography>
                        <Link href='/our-work' passHref>
                            <Button variant='contained' sx={{...ButtonStyle, my: 4}} color={'green' as any}>Our Work</Button>
                        </Link>
                    </Box>
                    <Box sx={{ flex: 1, pl: largerThanMD ? 5 : 0, height: 'max-content'}}>
                        <Box sx={{ width: largerThanMD ? '130%' : '100%', position: 'relative', mx: 'auto', mb: largerThanMD ? 0: 8 }}>
                            <Box sx={{ width: '30%', position: 'absolute', bottom: '-20px', left: 30, zIndex: 2 }}>
                                <Hearts />
                            </Box>
                            <Image
                                src={louiseAndNaomiLaughing.src}
                                alt="Picture of Louise and Naomi"
                                width={louiseAndNaomiLaughing.width}
                                height={louiseAndNaomiLaughing.height}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
