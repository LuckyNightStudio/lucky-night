import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Pattern from "../../public/luckypatternwhite.png";
import {Eyes} from "../icons";
import {BookButton, ButtonStyle} from "../BookButton";
import Image from "next/image";
import step2 from "../../public/step2.png";
import Link from "next/link";
import * as React from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

const BoxStyle: SxProps<Theme> = {
    border: 'solid 4px',
    borderRadius: 12,
    p: 4,
    pb: 7,
    position: 'relative',
}

const ButtonBottom: SxProps<Theme> = {
    position: 'absolute',
    bottom: -22,
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: 'max-content'
}

export const FitsSection = ({fits, nots}: {nots: string[], fits: string[]}) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const background = largerThanMD ? 'linear-gradient(to bottom, rgba(246,159,185,1) 130px, rgba(255,255,255,1) 130px, rgba(255,255,255,1) 100%)' : 'linear-gradient(to bottom, rgba(246,159,185,1) 100px, rgba(255,255,255,1) 100px, rgba(255,255,255,1) 100%)'
    return (
        <Box bgcolor='primary.light' px={4} py={8} sx={{ position: 'relative'}}>
            <Box sx={{ backgroundImage: `url('${Pattern.src}')`, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', opacity: 0.3, zIndex: 0}} />
            <Container maxWidth='md'>
                <Box sx={{ display: 'flex', zIndex: 1, position: 'relative', flexDirection: largerThanMD ? 'row': 'column' }} component='section'>
                    <Box sx={{...BoxStyle, m: largerThanMD ? 4 : '30px auto', width: largerThanMD ? '50%' : '100%', background}}>
                        <Box sx={{width: 160, position: 'absolute', top: -65, left: -90, transform: 'scaleX(-1)' }}>
                            <Eyes />
                        </Box>
                        <Typography variant='h6' pb={6} textAlign='center'>
                            This package is a perfect fit for you if:
                        </Typography>
                        {fits.map((text) => (
                            <Typography key={text} py={1}>
                                {text}
                            </Typography>
                        ))}
                        <Box sx={ButtonBottom} textAlign='center'>
                            <BookButton color='yellow'/>
                        </Box>
                    </Box>
                    <Box sx={{...BoxStyle, m: largerThanMD ? 4 : '30px auto', width: largerThanMD ? '50%' : '100%', background}}>
                        <Box sx={{width: 140, position: 'absolute', bottom: -20, right: -110 }}>
                            <Image
                                src={step2.src}
                                alt="Step 2"
                                width={step2.width}
                                height={step2.height}
                            />
                        </Box>
                        <Typography variant='h6' pb={6} textAlign='center'>
                            This package may not be for you if:
                        </Typography>
                        {nots.map((text) => (
                            <Typography key={text} py={1}>
                                {text}
                            </Typography>
                        ))}
                        <Link href="/#services" passHref>
                            <Button variant='contained' color={'yellow' as any} sx={{...ButtonStyle, ...ButtonBottom}}>
                                VIEW OTHER SERVICES
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
