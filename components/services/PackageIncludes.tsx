import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Sun} from "../icons";
import {underlineStyle} from "../homepage/Section2";
import {BookButton} from "../BookButton";
import * as React from "react";
import {theme} from "../../utils/theme";

const brand = [
    'Logo',
    'Secondary logo',
    'Sub mark(s)',
    'Brand patterns',
    'Brand assets (illustrations, shapes etc)',
    'Business card designs',
    'Brand colour scheme and typefaces',
    'Social media templates in Canva or Adobe (your choice)',
    'Examples of stock imagery and photography'
]
const web = [
    'Branding that shines through on every page',
    'Fully responsive, mobile-first design',
    'Considered, well-designed user experience and journey',
    'Integrated contact forms and email signups',
    'Full hosting set up',
    'Complete SEO optimisation to guarantee speed and ranking success'
]

const shop = [
    'Beautifully designed, secure and easily manageable online shop features through Shopify',
    'Branding that shines through on every page',
    'Fully responsive, mobile-first design',
    'Integrated contact forms and email signups',
    'Full hosting set up',
    'Complete SEO optimisation to guarantee speed and ranking success'
]

interface Props {
    color: string
    webdesign?: boolean
    ecommerce?: boolean
    price?: string
}

export const PackageIncludes = ({webdesign = false, ecommerce = false, color, price = '2,295'}: Props) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    const underline = {...underlineStyle, background: color}


    const Web = () => (
        <Box flex={1} p={2}>
            <Typography variant='h6' mb={3}>
                Website <span style={{display: 'inline-block'}}>Design <span style={underline} /></span>
            </Typography>
            <Typography paragraph mb={3}>
                Work with Louise to gather impactful web content so she can create you a custom designed 5-8 page website focussed on driving conversions.
            </Typography>
            <Typography paragraph >
                Your site will include everything necessary for you to run a successful service-based business including:
            </Typography>
            <ul>
                {web.map((text) => (
                    <Typography key={text} component='li'>
                        {text}
                    </Typography>
                ))}
            </ul>
        </Box>
    )
    const Ecommerce = () => (
        <Box flex={1} p={2}>
            <Typography variant='h6' mb={3}>
                E-Commerce <span style={{display: 'inline-block'}}>Design <span style={underline} /></span>
            </Typography>
            <Typography paragraph >
                Your site will include everything necessary for you to run a successful e-commerce business including:
            </Typography>
            <ul>
                {shop.map((text) => (
                    <Typography key={text} component='li'>
                        {text}
                    </Typography>
                ))}
            </ul>
        </Box>
    )



    const multipleColumns = web ? largerThanLG : largerThanMD
    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={{position: 'absolute', top: 300, left: multipleColumns ? -200 : -215, width: 270 }}>
                <Sun />
            </Box>
            <Container>
                <Box px={4} py={8} component='section'>
                    <Typography variant='h4' textAlign='center' mb={5}>
                        This package includes
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between',  flexDirection: multipleColumns ? 'row': 'column'}}>
                        <Box flex={1} p={2}>
                            <Typography variant='h6' mb={3}>
                                Brand <span style={{display: 'inline-block'}}>Strategy <span style={underline} /></span>
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
                                Visual <span style={{display: 'inline-block'}}>Branding <span style={underline} /></span>
                            </Typography>
                            <Typography paragraph>
                                As well as your Brand Strategy Guide, you’ll also receive a full suite of visual brand assets. This will include:
                            </Typography>
                            <ul>
                                {brand.map((text) => (
                                    <Typography key={text} component='li'>
                                        {text}
                                    </Typography>
                                ))}
                            </ul>
                        </Box>
                        {webdesign && <Web />}
                        {ecommerce && <Ecommerce />}
                    </Box>
                    <Typography mt={8} mb={5} variant='h5' textAlign='center'>
                        Package starting at £{price}
                    </Typography>
                    <Box textAlign='center' mb={4}>
                        <BookButton color='purple' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
