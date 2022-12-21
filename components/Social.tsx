import {Box, useMediaQuery, useTheme} from "@mui/material";
import {Logo} from "./Logo";
import {Instagram, Linkedin, Twitter} from "./icons";
import {theme} from "../utils/theme";

const styles = {
    width: 25,
    ml: 1,
    color: 'white',
    transition: 'color 0.6s',
    '&:hover': {
        color: theme.palette.red.main
    }
}

export const Socials = ({includeLogo = false}: {includeLogo: boolean}) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: largerThanMD ? 'flex-start' : 'flex-end', flex: 1}}>
            {includeLogo && <Box width='100px' mr={largerThanMD ? 4 : 'auto'}>
                <Logo type='footer'/>
            </Box>}
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
    )
}