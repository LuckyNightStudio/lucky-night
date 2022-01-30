import {Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import {BookButton, ButtonStyle} from "../BookButton";
import Pattern from '../../public/pattern-green.webp'
import Link from "next/link";

export const QuizSection = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'))


    return (
        <Box component='section' bgcolor='green.light' sx={{ backgroundImage: `url('${Pattern.src}')`, backgroundSize: '300px 300px', backgroundAttachment: 'fixed', mt: '-32px'}} px={4} py={8}>
            <Container maxWidth='md'>
                <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8}}>
                    <Typography variant='h4' textAlign='center' mb={2}>
                        Not sure which <span style={{color: theme.palette.primary.main}}>service</span> you need?
                    </Typography>
                    <Typography variant='h6' textAlign='center' mb={2}>
                        Get in touch to discuss your requirements and goals, & we&apos;ll advise on the best way forward for your project.
                    </Typography>
                    <Box display='flex' justifyContent='center' alignItems='center' flexDirection={largerThanMD ? 'row' : 'column'}>
                        <BookButton color='yellow'/>
                        <Typography variant='body1' textAlign='center' py={2} px={8}>
                            or
                        </Typography>
                        <Link href='/services' passHref>
                        <Button variant='contained' color='secondary' sx={ButtonStyle}>
                            See our services
                        </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
