import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import {underlineStyle} from "../homepage/Section2";
import {sunStyles} from "../icons";
import * as React from "react";
import {theme} from "../../utils/theme";

const styles = {
    p: 4, flex: 1, maxWidth: 220, minWidth: 180,
    cursor: 'pointer',
    'svg': {
        transition: '0.5s',
    },
    '&:hover svg': {
        transform: 'translateY(-15px)'
    }
}


const SVGImage = ( { imgLink }: {imgLink: any}) => (
    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 237.408 237.982" width="100%" height="100%">
        <defs>
            <pattern id={imgLink.src} preserveAspectRatio="xMidYMid slice" width="1" height="1" viewBox="0 0 1772 1772">
                <image preserveAspectRatio="xMidYMid slice" width={imgLink.width} height={imgLink.height} xlinkHref={imgLink.src}/>
            </pattern>
        </defs>
        <g>
            <path d="M202.7,225.017l-13.8-9.221a11.8,11.8,0,0,0-18.28,8.423L168.656,240.7c-1.421,11.96-17.738,14.363-22.545,3.32l-6.626-15.22a11.8,11.8,0,0,0-19.931-2.8l-10.559,12.809c-7.661,9.293-22.687,2.493-20.761-9.4l2.654-16.386A11.8,11.8,0,0,0,75.632,199.9L59.825,204.97c-11.469,3.676-20.433-10.168-12.385-19.129l11.091-12.35A11.8,11.8,0,0,0,52.8,154.2l-16.037-4.284c-11.636-3.108-11.693-19.6-.077-22.788l16.008-4.393a11.8,11.8,0,0,0,5.6-19.33L47.118,91.13c-8.109-8.906.761-22.81,12.255-19.212l15.841,4.959A11.8,11.8,0,0,0,90.38,63.645L87.615,47.277C85.609,35.4,100.587,28.5,108.311,37.74l10.646,12.736a11.8,11.8,0,0,0,19.912-2.932l6.523-15.265c4.733-11.075,21.065-8.784,22.567,3.167l2.07,16.47a11.8,11.8,0,0,0,18.336,8.3L202.1,50.9c9.969-6.758,22.47,4,17.273,14.865L212.214,80.74a11.8,11.8,0,0,0,10.939,16.894l16.594-.408c12.041-.3,16.741,15.513,6.495,21.843l-14.122,8.725a11.8,11.8,0,0,0,.068,20.127l14.181,8.629c10.289,6.261,5.7,22.1-6.346,21.886l-16.6-.3A11.8,11.8,0,0,0,212.6,195.11l7.264,14.926c5.271,10.83-7.156,21.672-17.171,14.981" transform="translate(-14.652 -13.139)"  className="imgStar" fill={`url(#${imgLink.src})`} />
            <path id='sunPath2' d="M133.609,235.549a16.366,16.366,0,0,1-15.1-9.964l-6.626-15.22A7.037,7.037,0,0,0,100,208.7L89.439,221.506a16.571,16.571,0,0,1-29.145-13.191l2.654-16.386a7.037,7.037,0,0,0-9.095-7.827l-15.807,5.067a16.572,16.572,0,0,1-17.387-26.854l11.092-12.35a7.038,7.038,0,0,0-3.419-11.5l-16.037-4.284a16.572,16.572,0,0,1-.109-31.991L28.194,97.8a7.037,7.037,0,0,0,3.341-11.524L20.36,74a16.571,16.571,0,0,1,17.2-26.971l15.842,4.959A7.037,7.037,0,0,0,62.447,44.1L59.681,27.731A16.571,16.571,0,0,1,88.736,14.343L99.381,27.079a7.037,7.037,0,0,0,11.871-1.748l6.523-15.264a16.571,16.571,0,0,1,31.68,4.445l2.07,16.47a7.038,7.038,0,0,0,10.932,4.947l13.74-9.315a16.571,16.571,0,0,1,24.248,20.867l-7.163,14.975A7.037,7.037,0,0,0,199.8,72.528l16.594-.408a16.571,16.571,0,0,1,9.117,30.664l-14.121,8.725a7.037,7.037,0,0,0,.041,12l14.18,8.629a16.571,16.571,0,0,1-8.908,30.725l-16.6-.3a7.037,7.037,0,0,0-6.453,10.116l7.264,14.926a16.571,16.571,0,0,1-24.106,21.032l-13.8-9.221a7.037,7.037,0,0,0-10.9,5.022l-1.958,16.484a16.4,16.4,0,0,1-14.042,14.44,17.2,17.2,0,0,1-2.506.184M105.383,196.6a16.932,16.932,0,0,1,2.348.164,16.46,16.46,0,0,1,12.891,9.8l6.626,15.22a7.037,7.037,0,0,0,13.441-1.979l1.958-16.483a16.572,16.572,0,0,1,25.661-11.825l13.8,9.221a7.037,7.037,0,0,0,10.237-8.932l-7.264-14.926a16.571,16.571,0,0,1,15.195-23.821l16.6.3a7.037,7.037,0,0,0,3.783-13.048l-14.18-8.628a16.571,16.571,0,0,1-.1-28.255L220.5,94.674a7.037,7.037,0,0,0-3.872-13.022l-16.594.408a16.571,16.571,0,0,1-15.357-23.717l7.163-14.975a7.037,7.037,0,0,0-10.3-8.862l-13.74,9.315a16.571,16.571,0,0,1-25.741-11.65L140,15.7a7.037,7.037,0,0,0-13.454-1.888l-6.523,15.264a16.571,16.571,0,0,1-27.953,4.116L81.421,20.457a7.037,7.037,0,0,0-12.339,5.686L71.848,42.51A16.572,16.572,0,0,1,50.557,61.086L34.715,56.126A7.037,7.037,0,0,0,27.409,67.58L38.585,79.854a16.572,16.572,0,0,1-7.868,27.137l-16.008,4.392a7.037,7.037,0,0,0,.046,13.586l16.037,4.284a16.571,16.571,0,0,1,8.052,27.083l-11.092,12.35a7.037,7.037,0,0,0,7.384,11.4l15.807-5.066a16.572,16.572,0,0,1,21.416,18.43L69.706,209.84a7.037,7.037,0,0,0,12.377,5.6l10.558-12.809a16.443,16.443,0,0,1,12.741-6.034" transform="translate(0 0)"/>
        </g>
    </svg>
)

interface Props {
    links: { text: string, img: any }[],
    text?: string
    color?: string
}

export const StarLinks = ({links, text = 'Digital Design', color}: Props) => {
    const theme = useTheme();
    const handleContactButton = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <Box>
            <Container>
                <Box textAlign='center' mx={2} mt={2}>
                    <Typography style={{ display: 'inline-block'}} variant='h3' component='h1' m={4}>
                        {text}
                        <span style={{...underlineStyle, background: color ?? theme.palette.yellowDarker.main}} />
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {links.map(({img, text}, i) => (
                            <Box sx={styles} key={i} onClick={() => handleContactButton(text.replace('</br>', '').replace(' ', '_'))}>
                                <Box sx={sunStyles} mb={2}>
                                    <SVGImage imgLink={img} />
                                </Box>
                                <Typography component="h4" dangerouslySetInnerHTML={{__html: text}} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
