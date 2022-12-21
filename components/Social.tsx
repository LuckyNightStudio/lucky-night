import {Box } from "@mui/material";
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

export const Socials = ({start = true}: {start?: boolean}) => {
    return (
        <Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: start ? 'flex-start' : 'center', flex: 1 }}>
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