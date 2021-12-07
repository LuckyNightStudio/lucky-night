import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Sun} from "../icons";
import {underlineStyle} from "../homepage/Section2";
import {BookButton} from "../BookButton";
import * as React from "react";

export const PackageIncludes = ({included}: {included: string[]}) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={{position: 'absolute', top: 300, left: largerThanMD ? -200 : -215, width: 270 }}>
                <Sun />
            </Box>
            <Container>
                <Box px={4} py={8} component='section'>
                    <Typography variant='h4' textAlign='center' mb={5}>
                        This package includes
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between',  flexDirection: largerThanMD ? 'row': 'column'}}>
                        <Box flex={1} p={2}>
                            <Typography variant='h6' mb={3}>
                                Brand <span style={{display: 'inline-block'}}>Strategy <span style={{...underlineStyle, background: theme.palette.secondary.main}} /></span>
                            </Typography>
                            <Typography paragraph mb={3}>
                                Work directly with Naomi on her tailor-made Brand Strategy Questionnaire. This process usually takes around 3 hours and can be done over 1 or 2 sessions. Naomi will get to know everything about you and your business so she can understand your values, goals and wider vision.
                            </Typography>
                            <Typography paragraph mb={3}>
                                Receive a 50(ish) page Brand Strategy document that outlines your business’ USP, values, brand archetype and voice, ideal customers and more.
                            </Typography>
                            <Typography paragraph mb={3}>
                                Understand how best to market your business to make the most impact with your dream customer base.
                            </Typography>
                        </Box>
                        <Box flex={1} p={2}>
                            <Typography variant='h6' mb={3}>
                                Visual <span style={{display: 'inline-block'}}>Branding <span style={{...underlineStyle, background: theme.palette.secondary.main}} /></span>
                            </Typography>
                            <Typography paragraph mb={3}>
                                As well as your Brand Strategy Guide, you’ll also receive a full suite of visual brand assets. This will include:
                            </Typography>
                            <ul>
                                {included.map((text) => (
                                    <Typography key={text} component='li'>
                                        {text}
                                    </Typography>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                    <Typography mt={8} mb={5} variant='h5' textAlign='center'>
                        Package starting at £2,295
                    </Typography>
                    <Box textAlign='center' mb={4}>
                        <BookButton color='purple' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
