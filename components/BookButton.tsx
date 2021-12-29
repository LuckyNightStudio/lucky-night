import {Button, Modal, Box, useTheme, useMediaQuery} from "@mui/material";
import {useState} from "react";

interface Props {
    color?: string
}

export const ButtonStyle = { borderRadius: 10, border: 'solid 4px black', px: 4}

export const BookButton = ({color = 'primary'}: Props) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <Button variant='contained' color={color as any} sx={ButtonStyle} onClick={() => setIsModalOpen(true)}>
                BOOK A FREE CONSULTATION
            </Button>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: largerThanMD ? 895 : 300, minHeight: 800, overflow: 'auto' }} className='widget'>
                    <Box onClick={() => setIsModalOpen(false)}>X</Box>
                    <iframe src="https://koalendar.com/e/free-consultation-15?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
                </Box>
            </Modal>
        </>
    )
}
