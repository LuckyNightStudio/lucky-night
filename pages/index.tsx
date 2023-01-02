import type { NextPage } from 'next'
import {NextSeo} from "next-seo";
import { Box, Typography, Button, useTheme, useMediaQuery} from "@mui/material";
import {ButtonStyle} from "../components/BookButton";
import * as React from "react";
import Image from "next/image";
import phone from '../public/homepage/phone.png'
import laptop from '../public/homepage/laptop.png'
import {Eyes2} from "../components/icons";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const theme = useTheme();
    const {pathname} = useRouter()
    const largerThanLG = useMediaQuery(theme.breakpoints.up('lg'));
    const largerThanMG = useMediaQuery(theme.breakpoints.up('md'));
    const bgcolor = pathname === '/' ? '#FEF6F8' : pathname === '/freebies' ? '#F69FB9' : '#D4C0F2'

    return (
    <>
        <NextSeo
            title="Lucky Night Studio"
            description="Providing Squarespace templates & digital assets"
        />
      <Box bgcolor={bgcolor}>
          <Box sx={{ display: 'flex', mb: largerThanMG ? '-60px' : 0}}>
              {largerThanMG && (<Box sx={{flex: 4}}>
                  <Box sx={{width: '82%', ml: 'auto', mt: 'auto', mr: 2}}>
                      <Image src={phone.src}
                             alt={'Phone with website on'}
                             width={phone.width}
                             height={phone.height}
                             quality={100}
                             />
                  </Box>
              </Box>)}
              <Box sx={{ textAlign: 'center', flex: 5, p: 3 }}>
                  <Typography component={'h4'} sx={{ fontSize: '1.5em', color: theme.palette.red.main, fontWeight: 600, mb: 8, mt: 8 }}>COMING SOON</Typography>
                  <Typography component={'h1'} variant={'h2'} mb={3}>Squarespace templates & digital assets</Typography>
                  <Typography fontWeight={600} sx={{ letterSpacing: '.1rem'}}>
                      Build an unstoppable & enviable brand with professionally designed digital assets.
                  </Typography>
                  <Typography mb={5}>
                      Created by you, supported by us, adored by your customers.
                  </Typography>
                  <a href="https://mailchi.mp/luckynightstudio/stay-in-the-loop">
                      <Button variant='contained' color={'secondary'} sx={{...ButtonStyle, mb: 8}}>
                          STAY IN THE LOOP
                      </Button>
                  </a>
              </Box>
              {largerThanLG && (<Box sx={{
                  flex: 4,
                  minHeight: 'calc(100vh - 110px)',
                  position: 'relative',
                  span: {minHeight: '80%', mt: '60px !important'}
              }}>
                  <Box sx={{position: 'absolute', top: 0, left: '30%', width: 180}}>
                      <Eyes2/>
                  </Box>
                  <Image src={laptop.src}
                         alt={'Laptop with website on'}
                         width={laptop.width}
                         height={laptop.height}
                         objectFit='cover'
                         objectPosition={'left center'}
                         quality={100}
                         />
              </Box>)}
          </Box>
      </Box>
        {largerThanMG && <Box sx={{ height: '40px', width: '100%'}} bgcolor={'#000'}></Box>}
    </>
  )
}



export default Home
