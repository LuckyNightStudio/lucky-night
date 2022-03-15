import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as React from "react";
import {underlineStyle} from "./Section2";
import {Eyes, Laptop, Pencil, YumComputerUpright} from "../icons";
import {BookButton} from "../BookButton";
import {ServiceCard} from "../ServiceCard";

export const DesignContent = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box p={4} component='section'>
            <Container>
                <Box textAlign='center' mb={4}>
                    <Typography style={{ display: 'inline-block'}} variant='h3' m={4}>
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
                <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', flexDirection: largerThanMD ? 'row': 'column', alignItems: largerThanMD ?  'stretch' : 'center' }}>
                    <ServiceCard
                        title='Design'
                        description='Bring your brand to life with print and digital designs that captivate your ideal audience & show off your expertise.'
                        list={['Branding & logo creation', 'Brochure & leaflet design', 'Marketing collateral', 'Social media templates', 'Custom graphics']}
                        color={theme.palette.purple.main}
                        icon={<Pencil />}
                        iconSize={50}
                    />
                    <ServiceCard
                        title='Development'
                        description='Increase sales & engagement with bespoke development solutions across a wide range of digital touchpoints.'
                        list={['Custom websites', 'Squarespace themes', 'Domains & hosting', 'Content management systems', 'Custom development']}
                        color={theme.palette.secondary.main}
                        icon={<Laptop />}
                        iconSize={70}
                    />
                    <ServiceCard
                        title='Digital'
                        description='Ensure your digital products are converting as well as possible with our bespoke creative marketing solutions.'
                        list={['SEO & analytics', 'Video & audio editing', 'Apps & digital products', 'Ad & PR creative', 'Social media assets']}
                        color={theme.palette.yellow.main}
                        icon={<YumComputerUpright />}
                        iconSize={60}
                    />
                </Box>
                <Box sx={{ display: 'flex', m: 'auto', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                    <Box sx={{ flex: 1}} />
                    <Box sx={{ flex: 1, textAlign: 'center'}} >
                        <BookButton />
                    </Box>
                    <Box sx={{ flex: 1}}>
                        <Box sx={{ width: '60%', ml: 'auto'}}>
                            <Eyes />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
