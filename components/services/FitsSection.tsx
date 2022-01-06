import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Pattern from "../../public/luckypatternwhite.webp";
import {Drinks, Eyes, Hands2} from "../icons";
import {BookButton, ButtonStyle} from "../BookButton";
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

interface Props {
    nots: string[]
    fits: string[]
    bgColor?: string
    cardColor?: string
    buttonColor?: string
    handsIcon?: boolean
}

export const FitsSection = ({fits, nots, bgColor = 'primary.light', cardColor = 'rgba(246,159,185,1)', buttonColor ='yellow', handsIcon = true }: Props) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const backgroundSize = '22%'
    const background =`linear-gradient(to bottom, ${cardColor} ${backgroundSize}, rgba(255,255,255,1) ${backgroundSize}, rgba(255,255,255,1) 100%)`
    return (
        <Box bgcolor={bgColor} px={4} py={8} sx={{ position: 'relative', overflow: 'hidden'}}>
            <Box sx={{ backgroundImage: `url('${Pattern.src}')`, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', opacity: 0.3, zIndex: 0, backgroundAttachment: 'fixed'}} />
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
                            <BookButton color={buttonColor}/>
                        </Box>
                    </Box>
                    <Box sx={{...BoxStyle, m: largerThanMD ? 4 : '30px auto', width: largerThanMD ? '50%' : '100%', background}}>
                        <Box sx={{width: handsIcon ? 140 : 200, position: 'absolute', bottom: handsIcon ? -20 : -60, right: handsIcon ? -110 : -150 }}>
                            {handsIcon ? <Hands2 /> : <Drinks />}
                        </Box>
                        <Typography variant='h6' pb={6} textAlign='center'>
                            This package may not be for you if:
                        </Typography>
                        {nots.map((text) => {
                            const eLink = 'e-commerce service'
                            if(text.includes(eLink)) {
                               const textArr = text.split(eLink)
                                return (
                                    <Typography key={text} py={1}>
                                        {textArr[0]} <span style={{ color: theme.palette.primary.main}}><Link href='/services/ecommerce-business' passHref>{eLink}</Link></span>{textArr[1]}
                                    </Typography>
                                )
                            }
                            const webLink = 'branding & web design service'
                            if(text.includes(webLink)) {
                                const textArr = text.split(webLink)
                                return (
                                    <Typography key={text} py={1}>
                                        {textArr[0]} <span style={{ color: theme.palette.primary.main}}><Link href='/services/service-business' passHref>{webLink}</Link></span>{textArr[1]}
                                    </Typography>
                                )
                            }
                            const auditLink = 'brand & web audit'
                            if(text.includes(auditLink)) {
                                const textArr = text.split(auditLink)
                                return (
                                    <Typography key={text} py={1}>
                                        {textArr[0]} <span style={{ color: theme.palette.primary.main}}><Link href='/services/audit' passHref>{auditLink}</Link></span>{textArr[1]}
                                    </Typography>
                                )
                            }
                            return (
                                (
                                    <Typography key={text} py={1}>
                                        {text}
                                    </Typography>
                                )
                            )
                        })}
                        <Link href="/services" passHref>
                            <Button variant='contained' color={buttonColor as any} sx={{...ButtonStyle, ...ButtonBottom}}>
                                VIEW OTHER SERVICES
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
