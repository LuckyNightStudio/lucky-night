import {Container, Typography, Box, Button, useTheme, useMediaQuery} from "@mui/material";
import step1 from "../../public/step1.png";
import step3 from "../../public/step3.png";
import step2 from "../../public/step2.png";
import Image from "next/image";
import * as React from "react";
import {ButtonStyle} from "../BookButton";
import Link from "next/link";

export const WorkWithUs = () => {
    const theme = useTheme();
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box p={largerThanMD ? 4 : 1} mb={4}>
            <Container>
                <Typography variant='h4' component='h2' my={8} textAlign='center'>
                    How you can <span style={{ color: theme.palette.purple.main }}>work with us</span>
                </Typography>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Image
                                src={step1.src}
                                alt="Step 1"
                                width={step1.width}
                                height={step1.height}
                            />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 1: Book A Discovery Call</Typography>
                        <Typography variant='body1'>Get to grips with which service is right for you and we’ll make sure we’re a perfect fit so your project runs smoothly throughout</Typography>
                    </Box>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Image
                                src={step2.src}
                                alt="Step 2"
                                width={step2.width}
                                height={step2.height}
                            />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 2: Get Booked In</Typography>
                        <Typography variant='body1'>We’ll discuss the right time to get started and from there you’ll have a  target completion date & payment schedule for effortless planning</Typography>
                    </Box>
                    <Box textAlign='center' p={4} flex={1} sx={{minWidth: '300px'}}>
                        <Box width={60} margin='auto' pb={2}>
                            <Image
                                src={step3.src}
                                alt="Step 3"
                                width={step3.width}
                                height={step3.height}
                            />
                        </Box>
                        <Typography variant='body1' fontWeight='500'>Step 3: Get Started</Typography>
                        <Typography variant='body1'>We’ll learn everything about your business and then create exciting branding & web design that will captivate & convert your audience</Typography>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' my={6} alignItems='center' flexDirection={largerThanLG ? 'row': 'column'}>
                    {services.map((service, i) => (
                        <ServiceCard {...service} key={i} index={i}/>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

const links = ['./services/personal-business', '', '']

const services = [
    {
        flex: 5,
        main: true,
        title: 'Personal Business',
        title1: 'Branding & Strategy',
        description: 'Full brand strategy and visual design experience to give you all the tools to grow your business in your ideal market.',
        wants: [
            'To discover your dream customer',
            'Clarity on brand values & messaging',
            'Beautiful & strategic visual branding',
            'To skip the online presence'
        ],
        nots: [
            'Need a  website (check out Service Business instead)',
            'Don’t want to collaborate & share your unique story with us',
            'Aren’t ready to invest in building the business of your dreams'
        ]
    },
    {
        flex: 6,
        main: false,
        title: 'Service Business',
        title1: 'Branding & Web Design',
        description: 'Full brand strategy, visual design and custom, conversion-focussed  website creation to cement you as a trustworthy, exciting key player among your dream audience',
        wants: [
            'Strategic visual branding and a custom, conversion focussed website',
            'To convert your dream customer to buyer',
            'To showcase your unique story and values',
            'Growth through increased brand authority'
        ],
        nots: [
            'Plan to use your site to sell products (check E-commerce Business instead)',
            'Can’t commit to the collaborative 6-week turnaround time',
            'Aren’t ready to invest in building the business of your dreams'
        ]
    },
    {
        main: true,
        flex: 5,
        title: 'E-commerce Business',
        title1: 'Branding & Web Design',
        description: 'Full brand strategy, visual design and custom, conversion-focussed  e-commerce site creation using Shopify.',
        wants: [
            'To sell to your dream customer online',
            'Clarity on brand values & messaging',
            'Fully custom website & online shop',
            'To increase brand trust and loyalty'
        ],
        nots: [
            'Don’t want to sell products online',
            'Can’t commit to the collaborative 8-week turnaround time',
            'Aren’t ready to invest in building the business of your dreams'
        ]
    }
]

interface ServiceProp {
    title: string
    title1: string
    description: string
    wants: string[]
    nots: string[],
    main: boolean,
    flex: number
    index: number
}

const ServiceCard = ({title, description, nots, title1, wants, main, flex, index }: ServiceProp) => {
    const bg = main ? 'linear-gradient(to bottom, rgba(212,192,242,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)' : 'linear-gradient(to bottom, rgba(246,159,185,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%)'
    const theme = useTheme();
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <Box component='section'
             sx={{
                 border: 'solid 4px',
                 borderRadius: 12,
                 mx: largerThanLG ? 2 : 0,
                 my: 3,
                 flex,
                 background: bg,
                 maxWidth: '600px'
             }}>
            <Box p={4} sx={{ borderRadius: '100px 100px 0 0'}} bgcolor={main ? 'purple.main' : 'secondary.main'}>
                <Typography variant='h6' component='h3' textAlign='center'>
                    <span style={{fontWeight: 700 }}>{title} </span> <br/> {title1}
                </Typography>
                <Typography variant='body1' fontWeight={500} my={3} textAlign='center'>
                    {description}
                </Typography>
            </Box>
            <Box px={4} pb={4}>
                <Box textAlign='center'>
                    <Button variant='contained' sx={{...ButtonStyle, backgroundColor: 'white', color: 'black', marginTop: -2.5 }}>
                        BOOK A DISCOVERY CALL
                    </Button>
                </Box>
                <Typography variant='h6' component='p' mt={4} textAlign={largerThanLG ? 'left' : 'center'}>
                    Perfect if you want:
                </Typography>
                {wants.map((text) => (
                    <Typography variant='body1' key={text}  textAlign={largerThanLG ? 'left' : 'center'}>
                        {text}
                    </Typography>
                ))}
                <Typography variant='h6' component='p' mt={4}  textAlign={largerThanLG ? 'left' : 'center'}>
                    Not for you if you:
                </Typography>
                {nots.map((text) => (
                    <Typography variant='body1' key={text}  textAlign={largerThanLG ? 'left' : 'center'}>
                        {text}
                    </Typography>
                ))}
                <Box textAlign='center'>
                    <Link href={links[index]} passHref>
                        <Button variant='contained' color={main ? 'greenLight' as any : 'yellow' as any} sx={{...ButtonStyle, marginBottom: -8, marginTop: 2 }}>
                            FULL DETAILS
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
