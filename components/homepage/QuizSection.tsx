import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BookButton, ButtonStyle} from "../BookButton";
import Pattern from '../../public/LN pattern.png'

export const QuizSection = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box component='section' bgcolor='secondary.main' sx={{ backgroundImage: `url('${Pattern.src}')`}} px={4} py={8}>
            <Container maxWidth='md'>
                <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8}}>
                    <Typography variant='h4' textAlign='center' mb={2}>
                        Not sure which <span style={{color: theme.palette.primary.main}}>service</span> you need?
                    </Typography>
                    <Typography variant='h6' textAlign='center' mb={2}>
                        Book a free consultation to discuss your requirements and goals, & we&apos;ll advise on the best way forward for your project.
                    </Typography>
                    <Box display='flex' justifyContent='space-around' alignItems='center' flexDirection={largerThanMD ? 'row' : 'column'}>
                        <BookButton color='yellow'/>
                        <Typography variant='body1' textAlign='center' py={2}>
                            or
                        </Typography>
                        <Button variant='contained' color='secondary' sx={{...ButtonStyle, width: 270}}>
                            TAKE THE QUIZ
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
