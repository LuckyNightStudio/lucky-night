import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as React from "react";
import {Eyes, Laptop, OkHands, Pencil, Swatches, YumComputer} from "../icons";

const iconColors: string[] = ['#fecd2f', '#F69FB9', '#9ED8BF', '#D4C0F2', '#fecd2f', '#F69FB9']

const Icon = ({index}: {index: number}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.552 101.292">
            <g transform="translate(-536.224 -3991.214)">
                <g transform="translate(536.224 3991.214)">
                    <g>
                        <path d="M107.039,105.213l-5.88-4.694a3.074,3.074,0,0,0-4.948,2.922l1.272,7.416a3.074,3.074,0,0,1-5.686,2.067l-3.787-6.5a3.074,3.074,0,0,0-5.67.938l-1.492,7.375a3.074,3.074,0,0,1-6.049-.127l-1.183-7.43A3.074,3.074,0,0,0,67.991,106l-4.055,6.337a3.074,3.074,0,0,1-5.6-2.3l1.581-7.356A3.074,3.074,0,0,0,55.1,99.556L49.03,104a3.074,3.074,0,0,1-4.385-4.169l4.132-6.288a3.074,3.074,0,0,0-3.366-4.657l-7.266,1.952a3.074,3.074,0,0,1-2.583-5.471L41.684,81a3.074,3.074,0,0,0-1.457-5.559l-7.481-.805a3.074,3.074,0,0,1-.432-6.035l7.29-1.863a3.074,3.074,0,0,0,.65-5.71l-6.684-3.453a3.074,3.074,0,0,1,1.777-5.784l7.47.9a3.074,3.074,0,0,0,2.668-5.089L40.5,41.959a3.074,3.074,0,0,1,3.746-4.751l6.642,3.534a3.074,3.074,0,0,0,4.327-3.782L52.6,29.9a3.074,3.074,0,0,1,5.21-3.077l4.917,5.695a3.074,3.074,0,0,0,5.4-1.963l.112-7.523a3.074,3.074,0,0,1,5.969-.987l2.528,7.086a3.074,3.074,0,0,0,5.745.12L85.3,22.28a3.074,3.074,0,0,1,5.923,1.236l-.2,7.521a3.074,3.074,0,0,0,5.314,2.187l5.151-5.485a3.074,3.074,0,0,1,5.077,3.292l-2.906,6.94a3.074,3.074,0,0,0,4.165,3.959l6.784-3.253a3.074,3.074,0,0,1,3.544,4.9L112.937,49a3.074,3.074,0,0,0,2.453,5.2l7.5-.583a3.074,3.074,0,0,1,1.534,5.853L117.6,62.641a3.074,3.074,0,0,0,.41,5.732l7.205,2.166a3.074,3.074,0,0,1-.684,6.012l-7.508.492a3.074,3.074,0,0,0-1.688,5.493l5.936,4.623a3.074,3.074,0,0,1-2.81,5.359l-7.178-2.253a3.074,3.074,0,0,0-3.558,4.512l3.865,6.455a3.074,3.074,0,0,1-4.556,3.982" transform="translate(-23.857 -15.907)" fill={iconColors[index]}/>
                        <path d="M49.89,101.291h-.115a5.057,5.057,0,0,1-4.951-4.316l-1.183-7.43a1.026,1.026,0,0,0-1.878-.392L37.708,95.49a5.122,5.122,0,0,1-9.322-3.837L29.967,84.3a1.026,1.026,0,0,0-1.609-1.044L22.287,87.7a5.122,5.122,0,0,1-7.307-6.946l4.132-6.288a1.026,1.026,0,0,0-1.124-1.555L10.722,74.86a5.122,5.122,0,0,1-4.3-9.116l6.124-4.371a1.026,1.026,0,0,0-.486-1.856l-7.481-.805a5.122,5.122,0,0,1-.72-10.055l7.29-1.863a1.026,1.026,0,0,0,.217-1.906L4.677,41.434A5.122,5.122,0,0,1,7.637,31.8l7.47.9a1.026,1.026,0,0,0,.891-1.7L11.013,25.36a5.122,5.122,0,0,1,6.242-7.916L23.9,20.978a1.026,1.026,0,0,0,1.444-1.262L22.728,12.66a5.122,5.122,0,0,1,8.68-5.127l4.917,5.695a1.026,1.026,0,0,0,1.8-.656l.112-7.523A5.122,5.122,0,0,1,48.186,3.4l2.528,7.087a1.026,1.026,0,0,0,1.918.04l2.822-6.975a5.122,5.122,0,0,1,9.869,2.059l-.2,7.521a1.026,1.026,0,0,0,1.774.73l5.151-5.485A5.122,5.122,0,0,1,80.5,13.867L77.6,20.807a1.026,1.026,0,0,0,1.39,1.322l6.784-3.253a5.122,5.122,0,0,1,5.906,8.17L86.46,32.467a1.026,1.026,0,0,0,.819,1.735l7.5-.583a5.122,5.122,0,0,1,2.555,9.752l-6.823,3.171a1.026,1.026,0,0,0,.137,1.913l7.205,2.166a5.122,5.122,0,0,1-1.14,10.017l-7.508.492a1.026,1.026,0,0,0-.563,1.834l5.936,4.623A5.122,5.122,0,0,1,89.9,76.515l-7.178-2.253a1.026,1.026,0,0,0-1.188,1.506L85.4,82.223a5.122,5.122,0,0,1-7.59,6.634l-5.88-4.694a1.026,1.026,0,0,0-1.652.976l1.273,7.415A5.122,5.122,0,0,1,62.074,96l-3.787-6.5a1.026,1.026,0,0,0-1.893.313L54.9,97.185a5.054,5.054,0,0,1-5.013,4.106M42.607,84.58a5.218,5.218,0,0,1,1.067.111A5.084,5.084,0,0,1,47.686,88.9l1.183,7.43a1.026,1.026,0,0,0,2.02.042L52.38,89a5.122,5.122,0,0,1,9.447-1.562l3.787,6.5a1.026,1.026,0,0,0,1.9-.69l-1.273-7.416a5.122,5.122,0,0,1,8.244-4.869l5.88,4.694a1.026,1.026,0,0,0,1.521-1.329l-3.866-6.455a5.122,5.122,0,0,1,5.929-7.519l7.179,2.253a1.026,1.026,0,0,0,.938-1.789L86.127,66.2a5.122,5.122,0,0,1,2.812-9.152l7.508-.492a1.026,1.026,0,0,0,.228-2.007L89.47,52.378a5.122,5.122,0,0,1-.684-9.55l6.823-3.171A1.026,1.026,0,0,0,95.1,37.7l-7.5.583a5.122,5.122,0,0,1-4.088-8.658l5.217-5.422a1.026,1.026,0,0,0-1.183-1.637l-6.784,3.253a5.122,5.122,0,0,1-6.94-6.6l2.906-6.94a1.026,1.026,0,0,0-1.695-1.1l-5.151,5.484a5.122,5.122,0,0,1-8.854-3.645l.2-7.521a1.026,1.026,0,0,0-1.977-.413l-2.822,6.975a5.122,5.122,0,0,1-9.573-.2L44.328,4.78a1.026,1.026,0,0,0-1.993.33l-.112,7.523a5.122,5.122,0,0,1-9,3.272L28.308,10.21a1.026,1.026,0,0,0-1.739,1.027l2.614,7.055a5.122,5.122,0,0,1-7.209,6.3L15.331,21.06a1.026,1.026,0,0,0-1.25,1.586l4.986,5.635a5.122,5.122,0,0,1-4.446,8.48l-7.47-.9A1.026,1.026,0,0,0,6.556,37.8l6.685,3.453a5.122,5.122,0,0,1-1.083,9.514l-7.29,1.863a1.026,1.026,0,0,0,.144,2.014l7.481.805a5.122,5.122,0,0,1,2.427,9.262L8.8,69.078A1.026,1.026,0,0,0,9.659,70.9l7.266-1.952a5.122,5.122,0,0,1,5.609,7.76L18.4,83a1.026,1.026,0,0,0,1.464,1.392l6.071-4.445a5.122,5.122,0,0,1,8.034,5.209L32.39,92.513a1.026,1.026,0,0,0,1.868.769l4.055-6.337a5.079,5.079,0,0,1,4.294-2.364" transform="translate(0 0.001)"/>
                    </g>
                </g>
                <text transform="translate(588 4052.146)" fontSize="40" fontFamily="Helvetica"><tspan x="-11.123" y="0">{++index}</tspan></text>
            </g>
        </svg>
    )
}



const Step = ({title, subtitle, description, index}: {title: string, subtitle: string, description: string, index: number}) => {
    return (
        <Box mb={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
                <Box width={80} mr={3}>
                    <Icon index={index}/>
                </Box>
                <Box>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography variant='h6'>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
            <Typography>
                {description}
            </Typography>
        </Box>
    )
}

interface Props {
    steps: {
        title: string
        subtitle: string
        description: string
    }[]
}

export const Plan = ({steps}: Props) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const largerThanSM = useMediaQuery(theme.breakpoints.up('sm'));

    const extra = steps.length > 4

    return (
        <Box component='section' px={4} py={10} position='relative'>
            <Box sx={{ display: 'flex'}}>
                <Box flex={1} sx={{ position: 'relative', display: largerThanSM ? 'inline-block' : 'none' }}>
                    <Box sx={{ position: 'absolute', top: '2%', left: largerThanMD ? 30 : 0, width: '70%', transform: 'rotate(-16deg)' }}>
                        <Laptop />
                    </Box>
                    <Box sx={{ position: 'absolute', top: extra ? '30%' : '50%', left: largerThanMD ? 30 : 0, width: '80%'}}>
                        <Swatches />
                    </Box>
                    {extra && <Box sx={{position: 'absolute', bottom: '10%', left: largerThanMD ? 30 : 0, width: '80%'}}>
                        <YumComputer/>
                    </Box>}
                </Box>
                <Box flex={2}>
                    <Container maxWidth='sm' sx={{ margin: 'auto' }}>
                        {steps.map((step, i) => <Step {...step} index={i} key={i} />)}
                    </Container>
                </Box>
                <Box flex={1} sx={{ position: 'relative', display: largerThanSM ? 'inline-block' : 'none'}}>
                    <Box sx={{ position: 'absolute', top: '10%', right: largerThanMD ? 30 : 0, width: '60%'}}>
                        <Pencil />
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: extra ? '30%' : 0, right: largerThanMD ? 30 : 0, width: '60%' }}>
                        <OkHands />
                    </Box>
                    {extra && <Box sx={{position: 'absolute', bottom: 0, right: largerThanMD ? 30 : 0, width: '70%'}}>
                        <Eyes/>
                    </Box>}
                </Box>
            </Box>
        </Box>
    )
}
