import {Button} from "@mui/material";
import {useState} from "react";
import {BookingModal} from "./BookModal";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface Props {
    color?: string
    styles?:  SxProps<Theme>
}

export const ButtonStyle = { borderRadius: 10, border: 'solid 4px black', px: 4}

export const BookButton = ({color = 'primary', styles= {}}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button variant='contained' color={color as any} sx={{...ButtonStyle, ...styles}} onClick={() => setIsModalOpen(true)}>
                BOOK A FREE CONSULTATION
            </Button>
            <BookingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </>
    )
}
