import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ButtonStyle} from "../BookButton";
import * as React from "react";
import {underlineStyle} from "./Section2";
import {Eyes} from "../icons";
import Image from "next/image";
import img from '../../public/seo-guide-image.webp'
import louiseAndNaomiLaughing from "../../public/louiseAndNaomiLaughing.webp";

export const DownloadSection = ({color ='purple.main'}: {color?: string}) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box component='section' px={4} pt={10} pb={2} bgcolor={color}>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: largerThanMD ? 'row': 'column'}}>
                    <Box sx={{ flex: 1, maxWidth: 380, margin: 'auto'}}>
                        <Image
                            src={img.src}
                            alt='Seo guide image'
                            width={img.width}
                            height={img.height}
                            blurDataURL={img.blurDataURL}
                            placeholder='blur'
                        />
                    </Box>
                    <Box flex={2}>
                        <Typography variant='h5' my={4}>
                            If you insist on doing it yourself for now, you should at least have the info to <span style={{ display: 'inline-block' }}>do it <strong style={{ fontWeight: 700 }}>properly!</strong><span style={underlineStyle} /></span> Download our totally FREE <em style={{ display: 'inline-block' }}>Interactive Brand Archetype Quiz<span style={{...underlineStyle, background: theme.palette.yellow.main}} /></em>
                        </Typography>
                        <Typography variant='body1' my={4}>
                            Discover how to get more eyes on your content and more potential customers visiting your website with an improved search engine ranking. Learn what Google are really looking for in order to rank your web content, as well as simple actionable steps on how to put the tips into place. This guide is guaranteed to give you some clarity and purpose when it comes to your website and digital marketing efforts.                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <Box>
                                <a href='./docs/SEO_Checklist.pdf' target='_blank'>
                                    <Button variant='contained' sx={{...ButtonStyle, backgroundColor: 'white', color: 'black', mb: 4 }}>
                                        Download Now
                                    </Button>
                                </a>
                            </Box>
                            <Box sx={{maxWidth: 150, marginLeft: 'auto', mt: 2}}>
                                <Eyes/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
