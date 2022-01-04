import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BookButton} from "../BookButton";
import {CSSProperties} from "react";
import * as React from "react";
import Image from 'next/image'
import louiseAndNaomi from '../../public/louiseAndNaomi.webp'
import {Sun, Hearts, Eyes} from "../icons";

const highLightWordStyle: CSSProperties = {
    content: '',
    position: 'absolute',
    top: '10%',
    left: 0,
    height: '90%',
    width: '100%',
    background: 'white',
    zIndex: -1,
    transform: 'rotate(-3deg)'
}

const dividerStyle: CSSProperties = {
    background: 'white',
    width: 5,
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 20
}

const smallDividerStyle: CSSProperties = {
    background: 'white',
    width:'60%',
    height: 5,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    borderRadius: 20,
    transform: 'translateX(-50%)'
}

export const Banner = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
        <Box bgcolor='secondary.main' px={4} pt={2}>
            <Container>
                <Box sx={{display: 'flex' }}>
                    {largerThanMD && (
                        <Box flex={1} pr={6} sx={{marginBottom: '-5px', alignSelf: 'flex-end', position: 'relative'}}>
                            <Box sx={{width: '50%', position: 'absolute', top: -40, right: 20}}>
                                <Sun/>
                            </Box>
                            <Image
                                src={louiseAndNaomi.src}
                                alt="Picture of Louise and Naomi"
                                width={louiseAndNaomi.width}
                                height={louiseAndNaomi.height}
                                blurDataURL={louiseAndNaomi.blurDataURL}
                                placeholder='blur'
                            />
                            <Box sx={{width: '50%', position: 'absolute', bottom: -25, left: -50}}>
                                <Hearts/>
                            </Box>
                        </Box>
                    )}
                    <Box flex={2} alignSelf='center' my={4}>
                        <Typography variant="h3" component="h1">
                            Strategy-led <span style={{color: theme.palette.red.main }}>branding & web design</span> <span style={{position: 'relative', zIndex: 3}}>for playful
                            young businesses with </span><span style={{position: 'relative', zIndex: 1}}>immense<span style={highLightWordStyle}/></span> ambitions
                        </Typography>
                        <Typography variant='body1' py={4}>
                            Feel like you spend most of your time on ineffective marketing? Lucky Night Studio
                            strategically creates delightful brands & websites that captivate & convert your dream
                            audience so that you can get back to the work you’re most passionate about.
                        </Typography>
                        <BookButton color='yellow'/>
                    </Box>
                </Box>
            </Container>
        </Box>
            <Box bgcolor='purple.main' p={4}>
                <Container>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', position: 'relative', flexDirection: largerThanMD ? 'row': 'column'}}>
                        <Box sx={{width: 120, position: 'absolute', top: largerThanMD ? -80 : -60, right: largerThanMD ? 0 : -40 }}>
                            <Eyes />
                        </Box>
                        <Box px={1} py={2} flex={1} position='relative'>
                            <Typography variant='h6' align='center'>
                                NAIL YOUR BRAND <br/>MESSAGING
                            </Typography>
                            <Box sx={largerThanMD ? dividerStyle : smallDividerStyle} />
                        </Box>
                        <Box px={1} py={2} flex={1} position='relative'>
                            <Typography variant='h6' align='center'>
                                CAPTIVATE & CONVERT<br/>YOUR DREAM AUDIENCE
                            </Typography>
                            <Box sx={largerThanMD ? dividerStyle : smallDividerStyle} />
                        </Box>
                        <Box px={1} py={2} flex={1} position='relative'>
                            <Typography variant='h6' align='center'>
                                BANISH MARKETING<br/>OVERWHELM
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
