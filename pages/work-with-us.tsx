import {NextPage} from "next";
import {Box, Container, Typography, useMediaQuery, useTheme, Button, TextField, Checkbox, FormGroup, FormControlLabel} from "@mui/material";
import Image from "next/image";
import bannerImg from '../public/work/workWithUsBanner.png'
import img from '../public/work/workWithUs.png'
import { ButtonStyle } from "../components/BookButton";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import {ConfettiContext} from "../components/context/ConfettiContext";
import {Eyes} from "../components/icons";


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

const Form = () => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        (
            <Box sx={{ position: 'relative'}}>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action='/work-with-us?success'>
                    <input type="hidden" name="form-name" value="contact" />
                    <Box sx={{ display: 'flex', flexDirection: largerThanSM ? 'row' : 'column', flexWrap: 'wrap' }}>
                        <Input label="NAME" variant="outlined" name='name' sx={{ flex: 1, flexBasis: '48%', input: { background: 'white', overflow: 'hidden'} }} required  />
                        <Input label="EMAIL" variant="outlined" type='email' name='email' sx={{ flex: 1, flexBasis: '48%' }} required/>
                        <Input label="BUSINESS NAME" variant="outlined" name='businessName' sx={{ flex: 1, flexBasis: '48%' }} />
                        <Input label="INSTA HANDLE" variant="outlined" name='insta' sx={{ flex: 1, flexBasis: '48%' }} />
                    </Box>
                    <Input label="MESSAGE" variant="outlined" multiline  name='message' rows={4} fullWidth required sx={{ position: 'relative', zIndex: 4 }}/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="ADD ME TO THE MAILING LIST" name='MailingList' />
                    </FormGroup>
                    {largerThanSM && (<Box sx={{position: 'absolute', bottom: -20, right: -50, width: 200}}>
                        <Eyes/>
                    </Box>)}
                    <Button variant='contained' type='submit' color={'purple' as 'primary'} sx={{...ButtonStyle, mx: 2}}>
                        Submit
                    </Button>
                </form>
            </Box>
        )
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

const WorkWithUs: NextPage = () => {
    const {asPath} = useRouter()
    const theme = useTheme();
    const largerThanMG = useMediaQuery(theme.breakpoints.up('md'));

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
        <Box>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 5, flexDirection: largerThanMG ? 'row': 'column' }}>
                    <Box p={4} sx={{ flex: 4, mr: 2, textAlign: largerThanMG ? 'left' : 'center' }}>
                        <Typography variant={'h3'} component={'h1'} sx={{ color: '#fff'}} className={'purple'}>
                            Your <mark>fave</mark> website experts & digital cheerleaders
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 2, mt: 'auto', transform: 'translateY(30px) scale(1.1)', p: 2, maxWidth: 400}}>
                        <Image
                            src={bannerImg.src}
                            alt={'freebies'}
                            height={bannerImg.height}
                            width={bannerImg.width}
                        />
                    </Box>
                </Box>
            </Container>
            <Box bgcolor={'white.main'}>
                    <Box sx={{ display: 'flex', pt: 8 }}>
                        {largerThanMG && (<Box sx={{flex: 3, mb: '-6px', mt: 'auto'}}>
                            <Image
                                src={img.src}
                                alt={'Work with us'}
                                height={img.height}
                                width={img.width}
                            />
                        </Box>)}
                        <Box sx={{ flex: 4, px: largerThanMG ? 10: 4, py: largerThanMG ? 5: 2 }}>
                            <Typography variant={'h5'} mb={2}>
                                Bold & results-driven websites for online businesses with a little extra ‘je ne sais quoi’
                            </Typography>
                            <Typography mb={2} fontWeight={600}>
                                DIY not your bag? Whether you want a quick and dirty Squarespace site or a built-from-the-ground-up masterpiece, we’ve got the skills and experience.                            </Typography>
                            <Typography mb={2}>
                                We’re working on honing our core services right now. Until then, fill in the form for a chat about availability & prices.
                            </Typography>
                            {asPath.includes('success') ? <SuccessMessage /> : <Form/>}
                        </Box>
                    </Box>
            </Box>
            <Box sx={{ backgroundColor: '#FEF6F8'}}>
                <Container>
                    <Box sx={{ px: largerThanMG ? 8 : 2, py: largerThanMG ? 12 : 4, textAlign: 'center'}}>
                        <Typography variant={'h4'} component={'h1'} mb={1}>Testimonials</Typography>
                        <Typography fontWeight={600} color={theme.palette.secondary.main} mb={5}>
                            YOU’RE IN SAFE HANDS, WE’VE DONE THIS BEFORE
                        </Typography>
                        <Typography>
                            I’m not sure that anything that I write will actually be able to express how utterly amazing Naomi and Louise are at their jobs! I got in touch with them for a website overhaul, after some amazing zoom chats they came back to me with their proposal which was magnificent. They worked so fast and communicated every step of the way. Our new website is the stuff of dreams and I can’t thank these two enough!
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default WorkWithUs