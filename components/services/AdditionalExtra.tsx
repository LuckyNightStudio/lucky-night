import {Box, Container, Typography} from "@mui/material";
import {BookButton} from "../BookButton";
import * as React from "react";

export const AdditionalExtras = () => {
    return (
        <Box bgcolor='secondary.main'>
            <Container maxWidth='md'>
                <Box sx={{ textAlign: 'center', px: 4, py: 8}} component='section'>
                    <Typography variant='h4' mb={6}>
                        Additional extras available
                    </Typography>
                    <Typography mb={6}>
                        Need print assets like menus or flyers? Discuss this with us during your consultation, we’ll be happy to help with anything you need.
                    </Typography>
                    <BookButton color='yellowDarker' />
                </Box>
            </Container>
        </Box>
    )
}
