import type { NextPage } from 'next'
import {Container, Box, Typography, TextField, styled, Button, useTheme, useMediaQuery} from "@mui/material";
import {underlineStyle} from "../components/homepage/Section2";
import * as React from "react";
import {BookButton, ButtonStyle} from "../components/BookButton";
import {Pencil} from "../components/icons";
import Image from 'next/image'
import {useRouter} from "next/router";
import image2 from "../public/insta/255527567_60676265w7438425_502380147576019928_n.jpg";
import image1 from "../public/insta/257398611_290550352811259_2240237154052651417_n.jpg";
import image4 from "../public/insta/257842264_1017110856544216_1831152685212589293_n.jpg";
import image3 from "../public/insta/261265494_950049152261409_227492296801417435_n.jpg";
import image5 from "../public/insta/262400205_9276323459627072_2187892821914597133_n.jpg";
import image6 from "../public/insta/259147053_1244781899349668_5266051204009672799_n.jpg";
import Pattern from "../public/pattern-green.webp";
import {PreviousProjects} from "../components/homepage/PreviousProjects";
import {DownloadSection} from "../components/homepage/DownloadSection";
import img from '../public/louise-and-naomi-img.png'
import {useContext, useEffect} from "react";
import {ConfettiContext} from "../components/context/ConfettiContext";
import {FadeInWhenVisible} from "../components/FadeIn";
import {NextSeo} from "next-seo";

const Input = styled(TextField)({
    margin: '10px 4px',
    '.Mui-focused': {
        color: 'black !important',
    },
    '& .MuiOutlinedInput-root': {
        background: 'white',
        borderRadius: 38,
        '& fieldset': {
            border: 'solid 4px',
            borderRadius: 38
        },
        '& input': {
            borderRadius: 38
        },
    },
    '& .MuiInputLabel-root, & .MuiOutlinedInput-notchedOutline': {
        paddingLeft: 20
    },
    '& .MuiOutlinedInput-input' : {
        paddingLeft: 20,
        paddingRight: 20
    }
});

const images = [image1, image2, image3, image4, image5, image6]

const Form = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        (
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action='/contact?success'>
                <input type="hidden" name="form-name" value="contact" />
                <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row' : 'column', flexWrap: 'wrap' }}>
                    <Input label="NAME" variant="outlined" name='name' sx={{ flex: 1, flexBasis: '48%', input: { background: 'white', overflow: 'hidden'} }} required  />
                    <Input label="EMAIL" variant="outlined" type='email' name='email' sx={{ flex: 1, flexBasis: '48%' }} required/>
                    <Input label="BUSINESS NAME" variant="outlined" name='businessName' sx={{ flex: 1, flexBasis: '48%' }} />
                    <Input label="INSTA HANDLE" variant="outlined" name='insta' sx={{ flex: 1, flexBasis: '48%' }} />
                    <Input label="APPROX BUDGET" variant="outlined" name='budget' sx={{ flex: 1, flexBasis: '48%' }} />
                    <Input label="APPROX TIMESCALE" variant="outlined" name='timescale' sx={{ flex: 1, flexBasis: '48%' }} required />
                </Box>
                <Input label="TELL US ABOUT YOUR PROJECT*" variant="outlined" multiline  name='message' rows={4} fullWidth/>
                <Button variant='contained' type='submit' color={'purple' as 'primary'} sx={{...ButtonStyle, mx: 2}}>
                    Submit
                </Button>
            </form>
        )
    )
}

export const WholeForm = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
    const {asPath} = useRouter()
    const {setShowConfetti} = useContext(ConfettiContext)

    useEffect(() => {
        if(asPath.includes('success')) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 60 * 60)
        }
        return () => {
            setShowConfetti(false)
        }
    }, [asPath, setShowConfetti])

    return (
        <>
            <Typography variant='h4' component='h1' mx={2} style={{ display: 'inline-block', width: 'max-content', maxWidth: 'max-content' }}>
                Enquire Now
                {largerThanSM && <span style={{...underlineStyle, background: theme.palette.purple.main}}/>}
            </Typography>
            <Typography mx={2} mb={2}>
                Tell us about your project & we’ll be in touch
            </Typography>
            {asPath.includes('success') ? <SuccessMessage /> : <Form/>}
        </>
    )
}

const SuccessMessage = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        (
            <Box sx={{ my: 8, minHeight: largerThanMD ? 265 : 'unset' }}>
                <Typography textAlign='center'>
                    Thanks for getting in contact, we will be in touch soon.
                </Typography>
            </Box>
        )
    )
}

const Contact: NextPage = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    const instaImages = largerThanSM ? images.slice(0, 6) : images.slice(0, 3)

    return (
        <>
            <Container component='section'>
                <NextSeo
                    title="Contact us at Lucky Night Studio"
                    description="Get in touch to book a free consultation to improve your Brand or Website"
                />
                <FadeInWhenVisible>
                <Box sx={{ display: 'flex', p: 4, my: 6, flexDirection: largerThanMD ? 'row' : 'row-reverse'}}>
                    {largerThanMD && <Box sx={{ flex: 2, position: 'relative', m: 2}}>
                        <Box sx={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            width: '140%',
                            transform: 'translate(0, -50%)'
                        }}>
                            <Image
                                src={img.src}
                                alt='Louise And Naomi Picture'
                                width={img.width}
                                height={img.height}
                                blurDataURL={img.blurDataURL}
                                placeholder='blur'
                            />
                        </Box>
                    </Box>}
                    <Box  sx={{ flex: 3, maxWidth: '100%'}}>
                        <WholeForm />
                    </Box>
                </Box>
                </FadeInWhenVisible>
            </Container>
            <FadeInWhenVisible>
            <Box component='section'>
                <Typography textAlign='center' variant='h4' mt={10} mb={3}>
                    <a href="https://www.instagram.com/luckynightstudio/" target="_blank" rel="noreferrer">
                        Join us on <span style={{ color: theme.palette.secondary.main}}>Instagram</span>
                    </a>
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    {instaImages.map((img, i) => (
                        <Box key={i} sx={{ flex: 1 }}>
                            <a href="https://www.instagram.com/luckynightstudio/" target="_blank" rel="noreferrer">
                                <Image
                                    src={img.src}
                                    alt="Picture of Louise and Naomi"
                                    width={img.width}
                                    height={img.height}
                                    blurDataURL={img.blurDataURL}
                                    placeholder='blur'
                                />
                            </a>
                        </Box>
                    ))}
                </Box>
            </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <SignUp />
            </FadeInWhenVisible>
            <PreviousProjects />
            <DownloadSection color='green.light' />
        </>
    )
}

const SignUp = () => {
    const theme = useTheme();
    return (
        <Box component='section' bgcolor='secondary.main' sx={{ backgroundImage: `url('${Pattern.src}')`, backgroundSize: '300px 300px', backgroundAttachment: 'fixed'}} px={4} py={8}>
            <Container maxWidth='md'>
                <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8}}>
                    <Typography variant='h4' textAlign='center' mb={2}>
                        Want to <span style={{color: theme.palette.primary.main}}>stay</span> up to date?
                    </Typography>
                    <Typography variant='h6' textAlign='center' mb={2}>
                        Sign up to our mailing list! There will be hints, tips and resources on brand & web design as well as info on what we’re working on.                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 4}}>
                        <a href="https://mailchi.mp/fb542ba7c412/subscribe" target="_blank" rel="noreferrer">
                            <Button variant='contained' color={'yellow' as 'primary'} sx={{...ButtonStyle, width: 270}}>
                                SIGN UP TO OUR LIST
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
