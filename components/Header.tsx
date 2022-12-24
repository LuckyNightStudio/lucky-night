import {Container, Box, Typography, useMediaQuery, useTheme, Button} from "@mui/material";
import {Logo} from "./Logo";
import Link from 'next/link'
import { ButtonStyle} from "./BookButton";
import {useRouter} from "next/router";
import * as React from "react";
import {Socials} from "./Social";

export const Header = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const {pathname} = useRouter()
    const borderBottom = pathname === '/' ? 'none' : 'solid 2px #fff'
    const logoColor = pathname === '/' ? theme.palette.secondary.main : '#fff'
    const bgcolor = pathname === '/' ? '#FEF6F8' : pathname === '/freebies' ? '#F69FB9' : '#D4C0F2'
    return (
        <Box p={0} m={0} component='header' sx={{ borderBottom: borderBottom}} bgcolor={bgcolor}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 4, flexWrap: 'wrap'}}>
                    {largerThanMD && (<Box sx={{flex: 1}}>
                        <Socials/>
                    </Box>)}
                    <Box  sx={{ flex: 1 }}>
                        <Link href='/' passHref>
                            <Box sx={{ cursor: 'pointer', minWidth: 190, width: largerThanMD ? 190 : '100%', m: largerThanMD ? 'auto' : 0, mb: largerThanMD ? 0: 4, maxWidth: 250 }} mt={1}>
                                <Logo  color={logoColor}/>
                            </Box>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end', pl: 3 }}>
                        <Box>
                            <Link href={'/freebies'} passHref>
                                <Typography component='a' variant='subtitle1' p={2}
                                            fontWeight={500}
                                    sx={{ transition: '0.4s', '&:hover': {color: `${theme.palette.red.main} !important`} }}
                                >
                                    FREEBIES
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ minWidth: 201}}>
                            <Link href="/work-with-us" passHref>
                                <Button color={'greenLight' as any} variant='contained' sx={{...ButtonStyle, color: '#000', ml: 3}}>
                                    WORK WITH US
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
