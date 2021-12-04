import {Box, Container, Typography} from "@mui/material";
import {theme} from "../../utils/theme";

export const PreviousProjects = () => {
    return (
        <Container>
            <Box p={4}  component='section'>
                <Typography variant='h4' textAlign='center'>
                    Check out some of our <strong style={{ color: theme.palette.secondary.main}}>previous projects</strong>
                </Typography>
            </Box>
        </Container>
    )
}
