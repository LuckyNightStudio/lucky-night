import {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Box, Button, Container, Typography} from "@mui/material";
import {BookButton, ButtonStyle} from "../components/BookButton";
import Link from "next/link";
import * as React from "react";
import louiseAndNaomi from "../public/louiseAndNaomi.webp";
import Image from "next/image";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

const ButtonStyles: SxProps<Theme> = {...ButtonStyle, width: '100%', mx: 'auto', my: 1, p: 2, textAlign: 'center'}

const Page: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Quick Links for Lucky Night Studio"
                description="Strategy-led branding & web design for playful young businesses with immense ambitions"
            />
            <Container>
                <Box maxWidth='sm' py={2} px={2} mx='auto' my={5}>
                    <Box >
                        <BookButton color='purple' styles={{width: '100%', mx: 'auto', my: 1, p: 2}}/>
                        <a href='https://luckynightstudio.eo.page/9285q' target='_blank' rel="noreferrer">
                            <Button variant='contained' sx={ButtonStyles} color='secondary'>
                                Free Web Conversions Guide
                            </Button>
                        </a>

                        <a href='https://mailchi.mp/f2ca6a15298b/freeseochecklist-luckynightstudio' target='_blank' rel="noreferrer">
                            <Button variant='contained' sx={ButtonStyles} color={'yellow' as any}>
                                Free SEO Checklist
                            </Button>
                        </a>

                        <Link href='/blog' passHref>
                            <Button variant='contained' sx={ButtonStyles} color={'greenLight' as any}>
                                Check out our Blog
                            </Button>
                        </Link>

                        <Link href='/our-work' passHref>
                            <Button variant='contained' sx={ButtonStyles} color='secondary'>
                                View our Portfolio
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ maxWidth: 300, mx: 'auto', my: 6 }}>
                        <Link href='/' passHref>
                            <Image
                                src={louiseAndNaomi.src}
                                alt="Picture of Louise and Naomi"
                                width={louiseAndNaomi.width}
                                height={louiseAndNaomi.height}
                            />
                        </Link>
                    </Box>
                    <Typography mb={2} >
                        <strong>Lucky Night Studio</strong> takes visionary young businesses from overwhelm to laser-focus! Our thoughtful brand identity and web design solutions deeply understand your dream customer base and convert them into a paying reality.
                    </Typography>
                    <Typography mb={4}>
                        <strong>No tricks, no jargon, no bullshit.</strong> Just expert, strategy-led brand identity and websites that build deep emotional connections & convert the right buyers while simplifying your marketing efforts.
                    </Typography>

                    <Link href='/services' passHref>
                        <Button variant='contained' sx={ButtonStyles} color='secondary'>
                            How to work with us
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    )
}



export default Page
