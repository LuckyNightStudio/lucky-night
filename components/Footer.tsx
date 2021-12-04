import {Box, Container} from "@mui/material";
import {Logo} from "./Logo";

export const Footer = () => {
    return (
        <Box  bgcolor='secondary.main' p={4}>
            <Container>
                <footer>
                    <Box width='100px'>
                        <Logo type='footer' />
                    </Box>
                </footer>
            </Container>
        </Box>
    )
}
