import {Container, Box, Typography, useMediaQuery, useTheme, Slide, Modal, keyframes} from "@mui/material";
import {Logo} from "./Logo";
import Link from 'next/link'
import {CSSProperties, useEffect, useState} from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {BookButton} from "./BookButton";
import {Heart, Moon, Star, Triangle} from "./icons";
import {useRouter} from "next/router";
import {BookingModal} from "./BookModal";

const subCat = [
    {title: 'Personal Business', link: '/services/personal-business'},
    {title: 'Service Business', link: '/services/service-business'},
    {title: 'E-Commerce Business', link: '/services/ecommerce-business'}
]

const pages = [
    {title: 'Services', link: '/services', Icon: Star},
    {title: 'Our Work', link: '/our-work', Icon: Heart},
    {title: 'Blog', link: '/blog', Icon: Moon},
    {title: 'Contact Us', link: '/contact', Icon: Triangle}
]

const MenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px">
            <path fill="currentColor" d="M28,5.5H12a1.5,1.5,0,0,1,0-3H28a1.5,1.5,0,0,1,0,3ZM29.5,16A1.5,1.5,0,0,0,28,14.5H4a1.5,1.5,0,0,0,0,3H28A1.5,1.5,0,0,0,29.5,16Zm0,12A1.5,1.5,0,0,0,28,26.5H12a1.5,1.5,0,0,0,0,3H28A1.5,1.5,0,0,0,29.5,28Z"/>
        </svg>
    )
}

const iconContainerStyle: CSSProperties = {
    height: 20,
    position: 'relative'
}

export const LargeNav = ({isFooter = false}: {isFooter?: boolean}) => {
    const theme = useTheme();
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    const {pathname} = useRouter()
    const [showDropdown, setShowDropdown] = useState(pathname.includes('services'))

    useEffect(() => {
        if(pathname.includes('services')) {
            setShowDropdown(true)
        }
    }, [pathname])

    const handleMouseOver = (title: string): void => {
        setShowDropdown(title === 'Services')
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}} component='nav'>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mr: 4}}>
                <Box>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    {pages.map(({title, link, Icon}) => (
                            <Link href={link} passHref key={title}>
                                <div style={{cursor: 'pointer', color: pathname.includes(link.replace('#', '')) ? 'white' : 'inherit'}}
                                     onMouseOver={() => handleMouseOver(title)} onMouseLeave={() => pathname.includes('services') ? {} : setShowDropdown(false)}>
                                    <div style={iconContainerStyle} >
                                        {(pathname.includes(link.replace('#', ''))) && (
                                            <Icon />
                                        )}
                                    </div>
                                    <Typography component='a' variant='subtitle1' p={2}>{title}</Typography>
                                </div>
                            </Link>
                    ))}
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', mt: 2, mb: -3, height: 28}} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => pathname.includes('services') ? {} :  setShowDropdown(false)}>
                        {!isFooter && largerThanLG && showDropdown && (subCat?.map(({title, link}) => (
                            <Link href={link} passHref key={title}>
                                <div style={{
                                    cursor: pathname.includes(link.replace('#', '')) ? 'default' : 'pointer',
                                    pointerEvents: pathname.includes(link.replace('#', '')) ? 'none' : 'auto',
                                    background: theme.palette.purple.main,
                                    height: 36,
                                    paddingTop: 5,
                                    whiteSpace: 'nowrap'
                                }}>
                                    <Typography component='a' variant='subtitle1' sx={{
                                        color: pathname.includes(link) ? theme.palette.red.main : 'inherit',
                                        p: 2
                                    }}>
                                        {title}
                                    </Typography>
                                </div>
                            </Link>
                        )))}
                    </Box>
                </Box>
            </Box>
            <Box sx={{marginTop: '-60px', minWidth: 180, width: 180, marginBottom: '-100px' }}>
                <BookSVGButton isFooter={isFooter}/>
            </Box>
        </Box>
    )
}

const modalOverlayStyle: SxProps<Theme> = { p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', bgcolor: 'secondary.main'}

const SmallNav = () => {
    const {pathname} = useRouter()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    useEffect(() => {
        setIsModalOpen(false)
    }, [pathname])
    return (
        <>
            <Box sx={{flex: 1, display: 'flex', alignItems: 'center'}}>
                <Box onClick={() => setIsModalOpen(true)} sx={{ cursor: 'pointer', width: 40, color: 'red.main', ml: 'auto' }}>
                    <MenuIcon />
                </Box>
            </Box>
            <Modal open={isModalOpen}>
                <Slide direction="up" in={isModalOpen} mountOnEnter unmountOnExit>
                    <Box sx={modalOverlayStyle}>
                        <Box sx={{ position: 'absolute', top: 20, right: 20, color: 'white', fontSize: 30, cursor: 'pointer' }} onClick={() => setIsModalOpen(false)}>X</Box>
                        <Box sx={{ width: 200}}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </Box>
                        {pages.map(({title, link}) => (
                            <Link href={link} passHref key={link}>
                                <Typography component='a' variant='body1' my={1}>{title}</Typography>
                            </Link>
                        ))}
                        <Box sx={{ my: 2}}>
                            <BookButton />
                        </Box>
                    </Box>
                </Slide>
            </Modal>
        </>
    )
}

export const Header = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box bgcolor='secondary.main' p={0} m={0} component='header'>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 4}}>
                    {!largerThanMD && <Box sx={{ flex: 1}}/>}
                    <Box sx={{flex: 2}}>
                        <Link href='/' passHref>
                            <Box  sx={{ cursor: 'pointer', minWidth: 190, width: largerThanMD ? 190 : '100%' }} mt={1}>
                                <Logo />
                            </Box>
                        </Link>
                    </Box>
                    {largerThanMD ? <LargeNav /> : <SmallNav />}
                </Box>
            </Container>
        </Box>
    )
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const styles = {
    cursor: 'pointer',
    transition: '0.4s',
    '#booksvg1, #booksvg2': {
        transformOrigin: 'center',
        animation: `6s linear infinite normal both ${spin}`,
        animationPlayState: 'paused'
    },
    '#booksvg2': {
        animationDirection: 'reverse'
    },
    '&:hover': {
        '#booksvg1, #booksvg2': {
            animationPlayState: 'running'
        }
    }
}

const BookSVGButton = ({isFooter}: {isFooter: boolean}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <Box sx={styles} onClick={() => setIsModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.723 287.416">
                    <g id="booksvg1">
                        <path d="M238.984,266.542l-16.67-11.137a14.257,14.257,0,0,0-22.077,10.173l-2.365,19.907c-1.716,14.445-21.422,17.346-27.228,4.009l-8-18.381a14.257,14.257,0,0,0-24.072-3.378l-12.752,15.469c-9.252,11.224-27.4,3.011-25.073-11.348l3.206-19.789a14.257,14.257,0,0,0-18.424-15.855l-19.091,6.119c-13.852,4.439-24.678-12.28-14.958-23.1l13.4-14.915a14.256,14.256,0,0,0-6.927-23.3L38.577,175.84c-14.053-3.754-14.121-23.672-.093-27.521l19.333-5.305a14.256,14.256,0,0,0,6.769-23.346l-13.5-14.824c-9.793-10.756.919-27.548,14.8-23.2L85.021,87.63a14.257,14.257,0,0,0,18.317-15.98L100,51.882c-2.423-14.343,15.667-22.679,25-11.518l12.857,15.382A14.256,14.256,0,0,0,161.9,52.205l7.878-18.435c5.716-13.376,25.441-10.608,27.255,3.825l2.5,19.891a14.256,14.256,0,0,0,22.145,10.022l16.594-11.25c12.04-8.162,27.137,4.83,20.861,17.952L250.479,92.3a14.256,14.256,0,0,0,13.211,20.4l20.042-.492c14.542-.358,20.218,18.735,7.844,26.38l-17.055,10.537a14.257,14.257,0,0,0,.082,24.308l17.127,10.421c12.426,7.561,6.879,26.692-7.665,26.433l-20.044-.356a14.257,14.257,0,0,0-13.072,20.493l8.773,18.026c6.366,13.079-8.643,26.174-20.738,18.093" transform="translate(-11.88 -10.653)" fill={isFooter ? '#F6EC6E' : "#27bb8e"}/>
                    </g>
                    <g id="booksvg2">
                        <path d="M161.363,284.477a19.765,19.765,0,0,1-18.24-12.034l-8-18.381a8.5,8.5,0,0,0-14.351-2.014l-12.752,15.469a20.014,20.014,0,0,1-35.2-15.931L76.024,231.8a8.5,8.5,0,0,0-10.984-9.453L45.95,228.464a20.014,20.014,0,0,1-21-32.432l13.4-14.915a8.5,8.5,0,0,0-4.13-13.89l-19.369-5.173a20.014,20.014,0,0,1-.131-38.636l19.333-5.3a8.5,8.5,0,0,0,4.035-13.918L24.589,89.37A20.014,20.014,0,0,1,45.366,56.8L64.5,62.786a8.5,8.5,0,0,0,10.919-9.527l-3.34-19.768a20.014,20.014,0,0,1,35.09-16.169L120.025,32.7a8.5,8.5,0,0,0,14.337-2.111l7.878-18.435A20.013,20.013,0,0,1,180.5,17.527L183,37.418a8.5,8.5,0,0,0,13.2,5.975L212.8,32.143a20.014,20.014,0,0,1,29.285,25.2L233.43,75.43a8.5,8.5,0,0,0,7.876,12.164l20.042-.492a20.014,20.014,0,0,1,11.011,37.034L255.3,134.673a8.5,8.5,0,0,0,.049,14.491l17.126,10.421a20.014,20.014,0,0,1-10.759,37.108l-20.044-.356a8.5,8.5,0,0,0-7.794,12.217l8.773,18.026a20.014,20.014,0,0,1-29.113,25.4l-16.67-11.137a8.5,8.5,0,0,0-13.161,6.065l-2.364,19.908a19.8,19.8,0,0,1-16.959,17.439,20.781,20.781,0,0,1-3.026.223m-34.09-47.041a20.449,20.449,0,0,1,2.836.2,19.879,19.879,0,0,1,15.569,11.831l8,18.381a8.5,8.5,0,0,0,16.233-2.39l2.365-19.907a20.014,20.014,0,0,1,30.992-14.281l16.67,11.137A8.5,8.5,0,0,0,232.3,231.618l-8.773-18.026a20.013,20.013,0,0,1,18.351-28.769l20.044.356a8.5,8.5,0,0,0,4.569-15.759L249.367,159a20.013,20.013,0,0,1-.116-34.124l17.055-10.537a8.5,8.5,0,0,0-4.676-15.727l-20.041.492a20.013,20.013,0,0,1-18.546-28.643l8.651-18.085a8.5,8.5,0,0,0-12.436-10.7l-16.594,11.25a20.013,20.013,0,0,1-31.088-14.07l-2.5-19.891a8.5,8.5,0,0,0-16.249-2.28L144.95,35.117a20.014,20.014,0,0,1-33.759,4.971L98.334,24.707a8.5,8.5,0,0,0-14.9,6.867l3.34,19.767A20.014,20.014,0,0,1,61.059,73.774L41.926,67.785A8.5,8.5,0,0,0,33.1,81.618L46.6,96.442a20.014,20.014,0,0,1-9.5,32.774l-19.333,5.3a8.5,8.5,0,0,0,.055,16.408L37.188,156.1a20.014,20.014,0,0,1,9.725,32.709l-13.4,14.915A8.5,8.5,0,0,0,42.435,217.5l19.091-6.119a20.014,20.014,0,0,1,25.865,22.259l-3.206,19.789a8.5,8.5,0,0,0,14.948,6.765l12.752-15.469a19.859,19.859,0,0,1,15.388-7.288" transform="translate(0 0)"/>
                    </g>
                    <text transform="translate(143.361 133.708)" fill={isFooter ? '#000' : "#fff"} fontSize="18" fontFamily="roc-grotesk,sans-serif">
                        <tspan x="-60.029" y="0" >BOOK A FREE</tspan>
                        <tspan x="-68.515" y="22">CONSULTATION</tspan></text>
                </svg>
            </Box>
            <BookingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </>
    )
}
