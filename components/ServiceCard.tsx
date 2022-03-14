import {Box, Typography} from "@mui/material";
import * as React from "react";
import {BookButton} from "./BookButton";

interface Props {
    title: string
    description: string
    list: string[]
    color: string
    icon?: JSX.Element
    iconSize?: number,
    price?: string,
    buttonColor?: string
    handleClick?: (e: any) => void
}

export const ServiceCard = ({title, description, list, color, icon, iconSize = 0, price, buttonColor, handleClick}: Props) => {
    return (
        <Box sx={{
            borderRadius: 16,
            border: 'solid 3px',
            my: 4,
            mx: 2,
            textAlign: 'center',
            overflow: 'hidden',
            flex: 1,
            maxWidth: 420,
            minWidth: 300,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{ flex: '1 1 29%', background: color}}>
                <Box sx={{background: color}} p={4}>
                    <Typography fontWeight='600' fontSize='1.5rem' mb={2}>{title}</Typography>
                    <Typography>{description}</Typography>
                </Box>
                <Box sx={{background: `linear-gradient(${color} 50%, #ffffff 50%)` }}>
                    <Box sx={{width: iconSize, m: 'auto'}}>
                        {icon}
                    </Box>
                </Box>
            </Box>
            <Box p={4} sx={{ background: 'white', height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', flex: '1 1 65%', alignItems: 'center'}}>
                <Box>
                    {list.map((text) => (
                        <Typography key={text} mb={2} dangerouslySetInnerHTML={{__html: text}} />
                    ))}
                </Box>
                {price ?
                    <Box mt={3}>
                        <Typography mb={1}>Starting from {price}</Typography>
                        <BookButton color={buttonColor} handleClick={handleClick} />
                    </Box>
                    : <Typography sx={{background: color, display: 'inline-block', px: 1, lineHeight: '0.5rem'}}>
                    & much more
                </Typography>}
            </Box>
        </Box>
    )
}
