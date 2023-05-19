import React from 'react';
import { Box, Button, Container, Hidden, Stack, Typography, useMediaQuery } from '@mui/material';
import { section1Content } from '../utils/content';
import LaunchButton from '../components/Buttons/LaunchButton';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import useMeasure from 'react-use-measure';
import Title from '../components/Title/Title';
import useScrollPosition from '../hooks/useScrollPosition';
import { useTheme } from '@emotion/react';

const {
    MainBG,
    TreesImage,
    CliffImage,
    HorseImage,
    ShootingStarImage,
    title,
    subtitle,
  } = section1Content;

  const CustomButton = ({children, ...props}) =>(
    <Button variant='outlined'
    sx={{borderRadius: 4,
    color: "text.primary",
    borderColor: "text.primary",
    height: 58,
    px : 2,}}
    {...props}
    >{children}</Button>
  )

const Section1 = () => {

    const theme =  useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [ref,{height}] = useMeasure();

    const scrollPosition = useScrollPosition();

  return (
    <Box sx={{width:"100%"}}>
        {/*Main Background*/}
        <Box sx={{position:"fixed", zIndex:-10, left:0, right: 0 ,top:0}}>
            <img src={MainBG} style={{width:"100%"}} />
        </Box>

        {/*Background elements*/}
        <Box ref={ref} sx={{position : "absolute", width:"100%", zIndex:-1, right: 0, left: 0,
        top : 0}}>


            <img src={MainBG} style={{width:"100%", opacity:0}} />

            {/*star*/}
            <img src={ShootingStarImage} style={{position:"absolute", top: "30px", right:"15%",
            width:"500px"}}/>
            {/*trees*/}
            <Hidden mdDown>
            <img src={TreesImage} style={{position:"absolute", width: "100%",
            right: 0, left: 0, bottom: "3%"}} />
            </Hidden>

            
            {/*cliff*/}
            <img src={CliffImage} style={{position:"absolute",
            right: 0, top: 0,backgroundSize : "cover", height:"100%"}}/>
            {/*horse*/}
            <img src={HorseImage} style={{position:"absolute",
            height:"38%",
            right:"14%",
            bottom:"45%",
            transform:"rotate(7deg)"}}/>

            <Box sx={{bgcolor:"background.default",
                    position:"absolute",
                    bottom:"0",
                    left:0,
                    right: 0,
                    height: "800px",
                    top : height,
                    // top : `calc(${height}px) - 13%`
                }}>
            </Box>
        </Box>



        {/*Content*/}
        <Container sx={{ height: "80vh", mt:8, [theme.breakpoints.up("md")]:{mt:9}}}>
            <Stack sx={{height : "100%"}} justifyContent="center">
                <Title variant={{
                    xs:"h3",
                    sm:"h3",
                    md:"h1",
                }} sx={{letterSpacing: "0.02em", mb:1}}>
                    {title}
                </Title>
                <Title variant={{
                    xs:"h4",
                    sm:"h3",
                    md:"h2",
                }} sx={{letterSpacing: "0.05em", mb:5, fontWeight: 500}}>
                    {subtitle}
                </Title>

                <Stack direction={{xs: 'column' , md : 'row'}}
                alignItems="center" spacing={4}>
                    <LaunchButton sx={{height : 68, px : 3}} 
                    fullWidth={isSmallScreen}/>
                    <CustomButton fullWidth={isSmallScreen}>
                        <AppleIcon sx={{fontSize: 34, ml : -1}}/>
                        <Stack sx={{textAlign: "left", ml:1}}>
                            <Typography variant='caption' sx={{lineHeight: 1}}>
                                Download on the
                            </Typography>
                            <Typography>
                                App Store
                            </Typography>
                        </Stack>
                    </CustomButton>
                    <CustomButton fullWidth={isSmallScreen}>
                        <GoogleIcon sx={{fontSize: 34}}/>
                        <Stack sx={{textAlign: "left", ml:1}}>
                            <Typography variant='caption'>
                                Get it in on
                            </Typography>
                            <Typography>
                                Google Play
                            </Typography>
                        </Stack>
                    </CustomButton>
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}

export default Section1