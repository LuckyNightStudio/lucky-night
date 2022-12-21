import {NextPage} from "next";
import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import img from '../public/freebies.png'

const Freebies: NextPage = () => {
    const theme = useTheme();
    const largerThanMG = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 5,  flexDirection: largerThanMG ? 'row': 'column'}}>
                    <Box p={4} sx={{ flex: 4 }}>
                        <Typography variant={'h3'} component={'h1'} sx={{ color: '#fff'}}>
                            Create brand magic with <mark>free</mark> curated resources
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 2, mt: 'auto', mb: '-6px'}}>
                        <Box sx={{ maxWidth: 300 }}>
                            <Image
                                src={img.src}
                                alt={'freebies'}
                                height={img.height}
                                width={img.width}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box bgcolor={'white.main'}>
                <Container>
                    <Box sx={{ display: 'flex', px: 4, py: 8 }}>
                        <Box sx={{ flex: 2}}>
                            img
                        </Box>
                        <Box sx={{ flex: 4}}>
                            <Typography variant={'h5'} mb={2}>
                                Bold & results-driven websites for online businesses with a little extra ‘je ne sais quoi’
                            </Typography>
                            <Typography mb={2} fontWeight={600}>
                                DIY not your bag? Whether you want a quick and dirty Squarespace site or a built-from-the-ground-up masterpiece, we’ve got the skills and experience.                            </Typography>
                            <Typography mb={2}>
                                We’re working on honing our core services right now. Until then, fill in the form for a chat about availability & prices.
                            </Typography>

                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Freebies