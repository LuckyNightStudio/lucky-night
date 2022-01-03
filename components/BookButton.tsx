import {Button, Modal, Box, useTheme, useMediaQuery} from "@mui/material";
import {useState} from "react";
import {BookingModal} from "./BookModal";

interface Props {
    color?: string
}

export const ButtonStyle = { borderRadius: 10, border: 'solid 4px black', px: 4}

export const BookButton = ({color = 'primary'}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button variant='contained' color={color as any} sx={ButtonStyle} onClick={() => setIsModalOpen(true)}>
                BOOK A FREE CONSULTATION
            </Button>
            <BookingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </>
    )
}
