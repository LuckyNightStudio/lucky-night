import {Box, Container, Typography} from "@mui/material";
import {underlineStyle} from "../homepage/Section2";
import {theme} from "../../utils/theme";
import {BookButton} from "../BookButton";
import * as React from "react";

interface Props {
    title: string
    subtitle: string
    description: string
    price: string
    includes: string[]
    color: string
    buttonColor?: string
}

const personalBusiness = [
    'Approx 3 hours of brand strategy sessions',
    'Full logo suite to include submarks and secondary logos',
    'Brand patterns & imagery examples',
    '50 page brand guidelines and strategy document',
    'Social media templates in Adobe or Canva',
    'Business card designs ready for print'
]

export const Banner = ({includes, title, subtitle, description, price, color, buttonColor}: Props) => {
    return (
        <Container>
            <Box sx={{ display: 'flex' }} component='section'>
                <Box sx={{width: '50%'}}>img</Box>
                <Box py={8} px={3}>
                    <Typography variant='h4' component='h1'>
                        {title}
                    </Typography>
                    <Typography variant='h6' component='h3' mb={2} sx={{ display: 'inline-block' }}>
                        {subtitle}
                        <span style={{...underlineStyle, background: color}} />
                    </Typography>
                    <Typography variant='body1' mb={2}>
                        {description}
                    </Typography>
                    <Typography variant='body1' fontWeight='600'>
                        Includes
                    </Typography>
                    <ul>
                        {includes.map((text) => (
                            <Typography variant='body1' component='li' key={text}>
                                {text}
                            </Typography>
                        ))}
                    </ul>
                    <Typography fontWeight='600' mb={4} mt={3}>
                        Package starting from £{price}
                    </Typography>
                    <BookButton color={buttonColor}/>
                </Box>
            </Box>
        </Container>
    )
}
