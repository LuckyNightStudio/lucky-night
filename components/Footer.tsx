import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Logo} from "./Logo";
import {Instagram, Linkedin, Twitter} from "./icons";
import {theme} from "../utils/theme";
import {LargeNav} from "./Header";
import {Socials} from "./Social";

export const Footer = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box bgcolor='secondary.main' p={4}>
            <Container>
                <footer>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6}}>
                        <Socials includeLogo={true} />
                        {largerThanMD && <Box>
                            <LargeNav isFooter={true}/>
                        </Box>}
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: 2}}>
                        <Typography variant='caption'>
                            Lucky Night Studio © {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </footer>
            </Container>
        </Box>
    );
}
