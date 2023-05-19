import React, { useState } from 'react'
import { section4Content } from '../utils/content'
import { Container, Grid, Stack, Tabs, Tab, Typography } from '@mui/material'
import Title from '../components/Title/Title';
import OutlinedButton from '../components/Buttons/OutlinedButton';

const {top, bottom} = section4Content;

const Section4 = () => {

  const [tabValue,setTabValue] = useState(0);
  return (
    <Container sx={{mt:{xs:15, md:20,lg:25}}}>

      {/*top*/}
        <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
          {/*Left*/}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{maxWidth : 480}}>
              <Title variant={{xs:"h3",md:"h2"}}>
                {top.title}
              </Title>
              <Typography color="text.secondary" variant='body2' sx={{pb :2}}>
                {top.subtitle}
              </Typography>
              <OutlinedButton arrow fit sx={{width :{xs:"auto",md:"fit-content"}}}> Swap </OutlinedButton>
            </Stack>
          </Grid>

          {/*Right*/}
          
          <Grid item xs={12} md={6}>
          <img src={top.image} style={{width:"100%",objectFit:"contain"}}/>
          </Grid>

        </Grid>

      {/*bottom*/}

      <Grid container spacing={15} flexWrap="wrap" alignItems="center"
      sx={{mt: {sx:10, md: 15}}}>
          {/*Left*/}

          <Grid item xs={12} md={6}>
          <img src={bottom.TABS[tabValue].image} style={{width:"100%",objectFit:"contain"}}/>
          </Grid>

          {/*Right*/}
          
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{maxWidth : 480}}>
              <Title variant={{xs:"h3",md:"h2"}}>
                {bottom.title}
              </Title>
              
              <Tabs value={tabValue}
              onChange={(e,v) => setTabValue(v)}
              variant='scrollable'
              scrollButtons="auto"
              >
                {bottom.TABS.map(({name})=>(
                  <Tab label={name} key={name} sx={{minWidth:60, 
                  "&.Mui-selected" : {color:"text.primary"}}} />
                ))}
              </Tabs>

              <Typography color="text.secondary" variant='body2' style={{ width:"fit-content"}} sx={{pb :2, minHeight:70}}>
                {bottom.TABS[tabValue].subtitle}
              </Typography>

              <OutlinedButton arrow fit sx={{width :{xs:"auto",md:"fit-content"}}}> Learn more </OutlinedButton>
            </Stack>
          </Grid>
          

        </Grid>


      
          

    </Container>
  )
}

export default Section4