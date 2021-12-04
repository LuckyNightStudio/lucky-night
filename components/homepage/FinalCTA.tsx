import {Box, Container, Typography} from "@mui/material";
import Pattern from "../../public/luckypattern.png";
import {BookButton} from "../BookButton";

export const FinalCTA = () => {
    return (
        <Box component='section' sx={{ backgroundImage: `url('${Pattern.src}')`}} px={4} py={8}>
            <Container maxWidth='md'>
                <Box p={5} sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 8, textAlign: 'center'}}>
                    <Typography variant='h5' mb={2}>Do you need something but not sure what yet?</Typography>
                    <Typography variant='body1' mb={4}>Book a free consultation to discuss your goals and challenges you’re facing, & we'll advise on the best way forward. We love a chat!</Typography>
                    <BookButton color='yellow'/>
                </Box>
            </Container>
        </Box>
    )
}
