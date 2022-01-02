import {Box, Container, Typography} from "@mui/material";
import {theme} from "../../utils/theme";
import {OurWorkGrid} from "../../pages/our-work";

export const PreviousProjects = () => {
    return (
        <Container>
            <Box p={4} component='section' mt={6}>
                <Typography variant='h4' textAlign='center'>
                    Check out some of our <strong style={{ color: theme.palette.secondary.main}}>previous projects</strong>
                </Typography>
                <Box my={6} mx='auto' maxWidth='md'>
                    <OurWorkGrid />
                </Box>
            </Box>
        </Container>
    )
}
