import {Button} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import Link from 'next/link'

interface Props {
    color?: string
    styles?:  SxProps<Theme>
    handleClick?: (e: any) => void
}

export const ButtonStyle = { borderRadius: 10, border: 'solid 4px black', px: 4}

export const BookButton = ({color = 'primary', styles= {}, handleClick}: Props) => {

    if(handleClick) {
        return (
            <Button variant='contained' color={color as any} sx={{...ButtonStyle, ...styles}} onClick={handleClick}>
                ENQUIRE NOW
            </Button>
        )
    }

    return (
        <Link href='/contact' passHref>
            <Button variant='contained' color={color as any} sx={{...ButtonStyle, ...styles}}>
                ENQUIRE NOW
            </Button>
        </Link>
    )
}
