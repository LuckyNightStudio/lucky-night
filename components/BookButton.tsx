import {Button} from "@mui/material";

interface Props {
    color?: string
}

export const ButtonStyle = { borderRadius: 10, border: 'solid 4px black', px: 4}

export const BookButton = ({color = 'primary'}: Props) => {
    return (
        <Button variant='contained' color={color as any} sx={ButtonStyle}>
            BOOK A FREE CONSULTATION
        </Button>
    )
}
