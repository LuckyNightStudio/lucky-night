import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Logo} from "./Logo";
import {Instagram, Linkedin, Twitter} from "./icons";
import {theme} from "../utils/theme";
import {LargeNav} from "./Header";

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
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box bgcolor='secondary.main' p={4}>
            <Container>
                <footer>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6}}>
                        <Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: largerThanMD ? 'flex-start' : 'flex-end', flex: 1}}>
                            <Box width='100px' mr={largerThanMD ? 4 : 'auto'}>
                                <Logo type='footer'/>
                            </Box>
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
