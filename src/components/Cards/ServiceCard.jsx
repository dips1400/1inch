import React from 'react'
import { Box, Typography, Stack, useTheme, useMediaQuery } from '@mui/material'
import Title from '../Title/Title'
import OutlinedButton from '../Buttons/OutlinedButton'

const ServiceCard = ({title, subtitle, image}) => {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
    sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "30px",
            border: "1px solid transparent",
            background:
              "linear-gradient(120deg,#5f5f61,transparent) border-box",
            WebkitMask:
              "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exlude",
          },
      }}
      >
        <Stack sx={{height:"100%"}} spacing={1}>
            <Title variant={{xs: "h5", sm:"h4"}}>{title}</Title>
            <Typography variant='body2'
            color="text.secondary">{subtitle}</Typography>
            <img src={image} style={{width:"100%", height:"280px", 
            objectFit : "contain",
            flex: 1}}/>
            <OutlinedButton arrow 
            fit={!isMobile}
            fullWidth={isMobile}>Learn more</OutlinedButton>
        </Stack>
      </Box>
  )
}

export default ServiceCard