import { AppBar,Stack, Container, useMediaQuery , useTheme, Typography, IconButton} from '@mui/material'
import React from 'react'
import  {NAVBAR_HEIGHT}  from '../../constants'
import useScrollPosition from '../../hooks/useScrollPosition'
import navbarContent from '../../utils/content'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LanguageIcon from '@mui/icons-material/Language';
import LaunchButton from '../Buttons/LaunchButton';
import MenuIcon from '@mui/icons-material/Menu';


const {Logo} = navbarContent;

const LinkButton = ({children, ...props}) =>(
  <Stack direction="row"
  alignItems="center"
  spacing={0.2}
  sx={{cursor: "pointer",
  color: "text.secondary",
  "&:hover" : {
    color:"text.primary"
  },}}{...props}>
    {children}
  </Stack>
)

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));


  return (
    <AppBar elevation={0}
    sx={{height : NAVBAR_HEIGHT,
      py : 1,
       bgcolor: scrollPosition > 10 ?
      "rgba(7,7,16,0.7)" : "transparent",
      backdropFilter : scrollPosition > 10 && "blur(60px)"}}>

        <Container sx={{[theme.breakpoints.up("lg")]:{
          maxWidth : '1380px !important',
          px:2
        }}}>
          <Stack direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap">
            {/*Logo*/}
              <img src={Logo} style={{height : "100%", objectFit:"contain",
            }} alt="logoimage" />

            {/*Links*/}
            {!isMobile && (
              <Stack direction="row"
              alignItems = "center" justifyContent="center"
              spacing={6} sx={{flex:1}}
              flexWrap="wrap"
              >
                <LinkButton>
                  <Typography variant='body2'>
                    Products
                  </Typography>
                  <KeyboardArrowDownIcon fontSize='small'/>
                </LinkButton>
  
                <LinkButton>
                  <Typography variant='body2'>
                  Developers
                  </Typography>
                  <KeyboardArrowDownIcon fontSize='small'/>
                </LinkButton>
  
                <LinkButton>
                  <Typography variant='body2'>
                  Governance
                  </Typography>
                  <KeyboardArrowDownIcon fontSize='small'/>
                </LinkButton>
  
                <LinkButton>
                  <Typography variant='body2'>
                  About
                  </Typography>
                  <KeyboardArrowDownIcon fontSize='small'/>
                </LinkButton>
  
                <LinkButton spacing={0.5}>
                  <Typography variant='body2'>
                  Blog
                  </Typography>
                  <ArrowOutwardIcon sx={{fontSize:"16px"}}/>
                </LinkButton>
  
              </Stack>
            )}
            

            {/*Action Button*/}
            {isMobile ? (<IconButton>
              <MenuIcon sx={{color : "text.secondary"}}/></IconButton>) :
              (<Stack spacing={5} direction="row">
              <LinkButton spacing={1} justifyContent="center"
              direction="row">
                <LanguageIcon fontSize='small'/>
                <Typography variant='body2'>
                EN
                </Typography>
              </LinkButton>
              <LaunchButton style={{height:"42px",borderRadius : 10}}/>
            </Stack>)
            }
          </Stack>
        </Container>
    </AppBar>
  )
}

export default Navbar