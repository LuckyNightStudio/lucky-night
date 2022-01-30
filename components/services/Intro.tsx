import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {underlineStyle} from "../homepage/Section2";
import * as React from "react";
import {Laptop, Pencil, YumComputerUpright} from "../icons";
import {BookButton} from "../BookButton";

export const Intro = () => {
    const theme = useTheme()
    return (
        <Box>
            <Container>
                <Box textAlign='center' mx={2} my={4}>
                    <Typography style={{ display: 'inline-block'}} variant='h3' component='h1' m={4}>
                        Full Scale Digital Design Agency
                        <span style={{...underlineStyle, background: theme.palette.purple.main}} />
                    </Typography>
                    <Typography>
                        Branding, websites, themes, custom graphics, design for print.
                    </Typography>
                    <Typography>
                        Anything you need to build the business of your dreams, we can help.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Service
                        title='DESIGN'
                        list={['Branding & logo creation', 'Design for print', 'Social media templates', 'Custom graphics']}
                        icon={<Pencil />}
                        iconSize='60px'
                    />
                    <Service
                        title='DEVELOPMENT'
                        list={['Custom websites', 'Squarespace themes', 'Content management systems', 'Custom development']}
                        icon={<Laptop />}
                        iconSize='80px'
                    />
                    <Service
                        title='DIGITAL'
                        list={['SEO & analytics', 'Video & audio editing', 'Apps & digital products', 'Ad & PR creative']}
                        icon={<YumComputerUpright />}
                        iconSize='75px'
                    />
                </Box>
                <Box sx={{ mt: 4, mb: 8, textAlign: 'center'}}>
                    <BookButton color='secondary'/>
                </Box>
            </Container>
        </Box>
    )
}

interface Props {
    title: string
    list: string[]
    icon: JSX.Element
    iconSize: string
}
const Service = ({title, list, icon, iconSize}: Props) => {
    return (
        <Box sx={{ textAlign: 'center', p: 4, flex: 1, minWidth: 280 }}>
            <Box sx={{ width: iconSize, mx: 'auto', my: 2 }}>
                {icon}
            </Box>
            <Typography fontSize='1.4rem' letterSpacing={'0.1rem'}>{title}</Typography>
            {list.map((text) => (
                <Typography key={text} my={1}>{text}</Typography>
            ))}
        </Box>
    )
}
