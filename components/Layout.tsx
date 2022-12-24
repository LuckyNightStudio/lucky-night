import {theme} from "../utils/theme";
import {Box, ThemeProvider} from '@mui/material'
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useRouter} from "next/router";


export const Layout = ({ children }: {children: JSX.Element}) => {
    const {pathname} = useRouter()
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Lucky Night Studio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Providers of Squarespace templates & digital assets" />
                <meta name="p:domain_verify" content="701955f314f687328349d8e2b6719dcf"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/kbe1tld.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            <Box p={0} m={0}>
                <Header />
                <main>{children}</main>
            </Box>
            {pathname !== '/' && <Footer/>}
        </ThemeProvider>
    )
}
