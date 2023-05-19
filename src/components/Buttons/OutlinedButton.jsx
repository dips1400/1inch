import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const OutlinedButton = ({sx={}, arrow, children, fit,...props}) => {
  return (
    <Button
    variant='outlined'
    sx={{borderRadius : 2,
    color : "text.primary",
    borderColor: "text.primary",
    width : fit ? "fit-content" : "auto",
    ...sx}}
    {...props}>
        {children}
        {arrow && <KeyboardArrowRightIcon fontSize='small' sx={{ml:0.5}}/>}
    </Button>
  )
}

export default OutlinedButton