import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ButtonStyle} from "../BookButton";
import * as React from "react";
import {underlineStyle} from "./Section2";

export const DownloadSection = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box component='section' px={4} py={10} bgcolor='purple.main'>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: largerThanMD ? 'row': 'column'}}>
                    <Box flex={1}>img</Box>
                    <Box flex={2}>
                        <Typography variant='h5' my={4}>
                            If you insist on doing it yourself for now, you should at least have the info to <span style={{ display: 'inline-block' }}>do it <strong style={{ fontWeight: 700 }}>properly!</strong><span style={underlineStyle} /></span> Download our totally FREE <em style={{ display: 'inline-block' }}>Interactive Brand Archetype Quiz<span style={{...underlineStyle, background: theme.palette.yellow.main}} /></em>
                        </Typography>
                        <Typography variant='body1' my={4}>
                            Discover the core essence of your brand’s personality so that you can learn how to show up and serve your customers in the most authentic way possible. Should humour be part of your marketing strategy? Maybe you could learn to break the rules sometimes? No matter the result you get, this quiz is guaranteed to give you some clarity and purpose when it comes to your messaging and marketing efforts.
                        </Typography>
                        <Button variant='contained' sx={{...ButtonStyle, backgroundColor: 'white', color: 'black' }}>
                            Download Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
