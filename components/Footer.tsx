import {Box, Container, Typography} from "@mui/material";
import {Logo} from "./Logo";
import {Instagram, Linkedin, Twitter} from "./icons";
import {theme} from "../utils/theme";

const styles = {
    width: 30,
    ml: 1,
    color: 'white',
    transition: 'color 0.6s',
    '&:hover': {
        color: theme.palette.red.main
    }
}

export const Footer = () => {
    return (
        <Box bgcolor='secondary.main' p={4}>
            <Container>
                <footer>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box width='100px'>
                            <Logo type='footer'/>
                        </Box>
                        <Box>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={styles}>
                                    <a href='https://twitter.com/LuckyNightStudi' target='_blank' rel="noreferrer">
                                        <Twitter/>
                                    </a>
                                </Box>
                                <Box sx={styles}>
                                    <a href='https://www.instagram.com/luckynightstudio/' target='_blank' rel="noreferrer">
                                        <Instagram/>
                                    </a>
                                </Box>
                                <Box sx={styles}>
                                    <a href='https://www.linkedin.com/company/lucky-night-studio' target='_blank' rel="noreferrer">
                                        <Linkedin/>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
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
