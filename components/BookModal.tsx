import {Box, Modal, useMediaQuery, useTheme} from "@mui/material";
import {Dispatch} from "react";
// Remove?
export const BookingModal = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: Dispatch<boolean>}) => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: largerThanMD ? 895 : 300, minHeight: 800, overflow: 'auto' }} className='widget'>
                <Box onClick={() => setIsOpen(false)}>X</Box>
                <iframe src="https://koalendar.com/e/free-consultation-15?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
            </Box>
        </Modal>
    )
}
