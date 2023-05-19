import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const LaunchButton = ({sx ={}, ...props}) => {
  return (
    <Button variant='contained' sx={{borderRadius : 4, height:"58px"}}{...props}>
        Launch dApp
        <KeyboardArrowRightIcon />
    </Button>
  )
}

export default LaunchButton