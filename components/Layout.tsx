import {theme} from "../utils/theme";
import {Box, ThemeProvider} from '@mui/material'
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";
import Confetti from "react-confetti";
import {useWindowSize} from '@react-hook/window-size'
import {useContext} from "react";
import {ConfettiContext} from "./context/ConfettiContext";

export const Layout = ({ children }: {children: JSX.Element}) => {
    const [width, height] = useWindowSize()
    const {showConfetti} = useContext(ConfettiContext)
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Lucky Night Studio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Strategy-led branding & web design for playful young businesses with immense ambitions" />
                <meta name="p:domain_verify" content="701955f314f687328349d8e2b6719dcf"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/kbe1tld.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            {
                (width > 0 && height > 0) && (
                    <Box sx={{position: 'sticky', top: 0, left: 0, zIndex: 1500 }} className='confetti'>
                        <Confetti width={width} height={height} numberOfPieces={showConfetti ? 600 : 0} />
                    </Box>
                )
            }
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    )
}
