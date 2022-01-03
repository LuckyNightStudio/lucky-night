import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {underlineStyle} from "../homepage/Section2";
import {BookButton} from "../BookButton";
import * as React from "react";
import Image from "next/image";

interface Props {
    title: string
    subtitle: string
    description: string
    price: string
    color: string
    buttonColor?: string
    children: JSX.Element
    img: any
}

export const Banner = ({title, subtitle, description, price, color, buttonColor, children, img}: Props) => {
    const theme = useTheme();
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: largerThanMD ? 'row' : 'row-reverse' }} component='section'>
                {largerThanSM && <Box sx={{ flex: 2, position: 'relative'}}>
                    <Box sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        width: largerThanMD ? '140%' : '100%',
                        transform: 'translate(0, -50%)'
                    }}>
                        <Image
                            src={img.src}
                            alt={title}
                            width={img.width}
                            height={img.height}
                        />
                    </Box>
                </Box>}
                <Box py={8} px={3} sx={{ flex: 3}}>
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
                    {children}
                    <Typography fontWeight='600' mb={4} mt={3}>
                        Package starting from £{price}
                    </Typography>
                    <BookButton color={buttonColor}/>
                </Box>
            </Box>
        </Container>
    )
}
