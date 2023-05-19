import React from 'react'
import { Container, Stack, Grid, Typography } from '@mui/material'
import Title from '../components/Title/Title'
import { section3Content } from '../utils/content'

const {title, ITEMS} = section3Content;

const Section3 = () => {
  return (
    <Container sx={{mt : {xs :10, md: 20}}}>
      <Container maxWidth="md">
        <Title variant={{xs:"h3", md:"h2"}} sx={{textAlign:"center"}}>
          {title}
        </Title>
      </Container>
      <Grid container spacing={5} sx={{mt:4}} justifyContent="center">
        {ITEMS.map(({name,logo}) => (
          <Grid item xs={4} md={3} key={name}>
              <Stack alignItems="center">
                <img src={logo} style={{height:"120px", objectFit:"contain"}} />
                <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
              </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Section3