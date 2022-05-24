import {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Box, Typography, Container} from "@mui/material";
import Link from 'next/link'

const Page: NextPage = () => {
    return (
        <>
            <NextSeo
                title="Page not found | Lucky Night Studio"
                description="Page not found, please check out homepage"
            />
            <Box>
                <Container maxWidth={'md'} sx={{ textAlign: 'center', px: 2, py: 18, '& a': {fontWeight: 'bold'} }}>
                    <Typography variant={'h2'} component={'h1'} mb={4}>
                        Oh no.... that page can't be found
                    </Typography>
                    <Typography>
                        Check out our <Link href={'/'}>homepage</Link>, to see if the answer is there
                    </Typography>
                </Container>
            </Box>
            </>
    )
}

export default Page
