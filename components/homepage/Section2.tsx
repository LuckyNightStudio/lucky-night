import {Box, Button, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BookButton, ButtonStyle} from "../BookButton";
import placeholder from '../../public/placeholder1.png'
import Image from "next/image";
import * as React from "react";
import {Sun, GreenSun} from "../icons";
import {theme} from "../../utils/theme";

export const underlineStyle = { width: '100%', height: 10, marginTop: '-10px', display: 'block', background: 'white '}

export const Section2 = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box bgcolor='green.light'>
            <Container sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', bottom: 20, left: -230, width: 200}}>
                    <Sun />
                </Box>
                <Box display='flex' alignItems='center' flexDirection={largerThanMD ? 'row': 'column'} >
                    <Box flex={1} p={4}>
                        <Box sx={{ width: largerThanMD ? '120%' : '80%', marginLeft: largerThanMD ? '-30%' : '10%', position: 'relative' }}>
                            <Box sx={{width: 130, position: 'absolute', top: largerThanMD ? 0 : -20, right: 5 }}>
                                <GreenSun />
                            </Box>
                            <Image
                                src={placeholder.src}
                                alt="Picture of Louise and Naomi"
                                width={placeholder.width}
                                height={placeholder.height}
                            />
                        </Box>
                        <Typography variant="h6" component="p" width='max-content' mb={3} mt={2}>
                            Our focus is on:
                            <span style={underlineStyle} />
                        </Typography>
                        <Typography variant='body1' pb={1}>
                            Understanding who your ideal customer really is and how/where to market to them
                        </Typography>
                        <Typography variant='body1' pb={1}>
                            Creating a brand that positions itself correctly and builds intense connections with those customers
                        </Typography>
                        <Typography variant='body1' pb={1}>
                            Designing fully custom digital experiences that focus on delighting and converting these customers again and again
                        </Typography>
                    </Box>
                    <Box flex={1} p={4}>
                        <Typography variant='h6' pb={3} mt={2}>
                            There are so many <span style={{ display: 'inline-block' }}>magical young brands <span style={{...underlineStyle, background: theme.palette.yellow.main}} /></span> out there deserving of wild success, it breaks our hearts to see so many <span style={{ display: 'inline-block' }}>fail to connect<span style={underlineStyle} /></span> with their audience
                        </Typography>
                        <Typography variant='body1' pb={2} paragraph>
                            Hiyeee, we’re Louise, a developer and software engineer; and Naomi, a visual designer and branding obsessive. We founded Lucky Night Studio because we believe that our combined 20 years’ experience in our respective fields mixed with your passion and drive is the perfect recipe to get your business booming. We’ll get to know everything about you and your goals, struggles and processes so that we can build you a plan and create the assets to make them a reality.
                        </Typography>
                        <Button variant='contained' sx={ButtonStyle}>
                            Our Work
                        </Button>
                        <Typography variant='body1' pb={2} pt={3} paragraph fontWeight={600}>
                            You’re rightly very picky about who you choose to work with, and so are we. That’s why we offer a totally free, zero-obligation consultation call prior to booking so that we can ensure that we’re the very best fit for your project.
                        </Typography>
                        <BookButton color='secondary'/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
