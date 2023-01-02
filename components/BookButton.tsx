import {Button} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import Link from 'next/link'

interface Props {
    color?: string
    styles?:  SxProps<Theme>
}

export const ButtonStyle = { borderRadius: 5, border: 'solid 3px black', px: 4}

export const BookButton = ({color = 'primary', styles= {}}: Props) => {

    return (
        <Link href='/contact' passHref>
            <Button variant='contained' color={color as any} sx={{...ButtonStyle, ...styles}}>
                ENQUIRE NOW
            </Button>
        </Link>
    )
}
