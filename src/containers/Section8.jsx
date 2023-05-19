import React from 'react'
import { Container, Stack, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { section8Content } from '../utils/content';
import Title from '../components/Title/Title';
import OutlinedButton from '../components/Buttons/OutlinedButton';

const {title, subtitle, caption, ShieldImage} = section8Content;

const Section8 = () => {

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container
    maxWidth="md"
    sx={{mt : {xs : 10, md: 20, lg: 25}, textAlign:"center"}}>
      <Stack alignItems="center">
        <Title variant={{xs : "h3", md:"h2"}} sx={{mb : 2}}>
          {title}
        </Title>
        <Typography variant='body2' color="text.secondary"
        sx={{mb : {xs:5, md:8}}}>
          {subtitle}
        </Typography>
        <Box sx={{px : {xs : 2, md: 5, lg:7}}}>
          <img src={ShieldImage} 
          style={{width:"100%", objectFit:"contain"}}/>
        </Box>
        <Typography variant='body2' 
        color="text.secondary"
        sx={{mt : {xs: 5, md:8}, mb:3}} >{caption}</Typography>

        <OutlinedButton arrow 
            fit={!isMobile}
            fullWidth={isMobile}>Learn more</OutlinedButton>
      </Stack>
    </Container>
  )
}

export default Section8