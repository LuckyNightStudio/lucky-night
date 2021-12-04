import {Container, Box, Typography, useTheme, useMediaQuery} from "@mui/material";
import {theme} from "../../utils/theme";
import {BookButton} from "../BookButton";
import {Drinks, Laptop} from "./icons";


export const IntroText = () => {
    const theme = useTheme();
    const largerThanMD = useMediaQuery(theme.breakpoints.up('md'));
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <Box sx={{overflow: 'hidden', position: 'relative' }}>
            <Container>
                <Box display='flex' pt={8} position='relative' flexDirection={largerThanMD ? 'row' : 'column'}>
                    {largerThanLG && (
                        <Box style={{position: 'absolute', right: -140, top: 80, width: 240}}>
                            <Drinks/>
                        </Box>
                    )}
                    <Box width={largerThanMD ? '400px' : '100%'} px={4} sx={{ display: largerThanMD ? 'inline' : 'flex' }}>
                        <Typography variant='h5' pb={4}>
                            You’re <span style={{color: theme.palette.red.main }}>crazy</span> about the work you do & making real impact. Don’t allow poor brand strategy or lack of clarity to interfere with your <span style={{color: theme.palette.green.main}}>wildest dreams</span>
                        </Typography>
                        <Box sx={{ width: '170px', minWidth: '100px', ml: 2 }}>
                            <Laptop />
                        </Box>
                    </Box>
                    <Box flex={1} px={4} pr={largerThanLG ? 15 : 0} mb={2}>
                        <Typography variant='body1' pb={4}>
                            <span style={{ fontWeight: 600 }}>Lucky Night Studio</span> takes visionary young businesses from overwhelm to laser-focus! Our thoughtful brand identity and web design solutions deeply understand your dream customer base and convert them into a paying reality.
                        </Typography>
                        <Typography variant='body1' pb={4}>
                            <span style={{ fontWeight: 600 }}>No tricks, no jargon, no bullshit.</span> Just expert, strategy-led brand identity and websites that build deep emotional connections & convert the right buyers while simplifying your marketing efforts.
                        </Typography>
                        <BookButton />
                    </Box>
                </Box>
            </Container>
            {largerThanMD && <Box sx={{
                bgcolor: 'green.light',
                width: '100%',
                height: '20px',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: -1
            }}/>}
        </Box>
    )
}
