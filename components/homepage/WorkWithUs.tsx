import {Container, Typography, Box, Button, useTheme, useMediaQuery} from "@mui/material";
import * as React from "react";
import {ButtonStyle} from "../BookButton";
import Link from "next/link";
import {useState} from "react";
import {BookingModal} from "../BookModal";
import {Hands3, Hands1, Hands2} from "../icons";

export const WorkWithUs = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box p={largerThanMD ? 4 : 1} mb={4} bgcolor='purple.main'>
            <Container>
                <Typography variant='h4' component='h2' my={8} textAlign='center'>
                    How you can <span style={{ color: theme.palette.white.main }}>work with us</span>
                </Typography>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Hands1 />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 1: Get In Touch</Typography>
                        <Typography variant='body1'>Tell us about your requirements and needs and we can work out how we can help you</Typography>
                    </Box>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Hands2 />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 2: Get Booked In</Typography>
                        <Typography variant='body1'>We’ll discuss the right time to get started and from there you’ll have a target completion date & payment schedule for effortless planning</Typography>
                    </Box>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Hands3 />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 3: Get Started</Typography>
                        <Typography variant='body1'>We’ll learn everything about your business and then create exciting branding & web design that will captivate & convert your audience</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

