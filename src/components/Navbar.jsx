import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Divider, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'
import spainFlag from '../assets/images/portal/spain.png';
import estadosunidos from '../assets/images/portal/estadosunidos.png';
import logoconjunto from '../assets/images/portal/logoconjunto.png';
import botoncomprar from '../assets/images/portal/botoncomprar.png';
import flechadesplazamiento from '../assets/images/portal/svg/flechadesplazamiento.svg';
import playstore from '../assets/images/portal/svg/playstore.svg';
import apple from '../assets/images/portal/svg/apple.svg';
import {useTheme, useMediaQuery
} from '@mui/material'

const Navbar = () => {

// const isSmallScreen = useMediaQuery('(max-width:600px)');
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = ()=>{
      setAnchorElm(null);
      setOpen(false);
  }
  const handleClick = (e)=>{
      setAnchorElm(e.currentTarget);
      setOpen(true)
  }
// menu 2
  const [anchorElm2, setAnchorElm2] = useState(null);
  const [open2, setOpen2] = useState(false);
  const handleClose2 = ()=>{
      setAnchorElm2(null);
      setOpen2(false);
  }
  const handleClick2 = (e)=>{
      setAnchorElm2(e.currentTarget);
      setOpen2(true)
  }

// menu 3
  const [anchorElm3, setAnchorElm3] = useState(null);
  const [open3, setOpen3] = useState(false);
  const handleClose3 = ()=>{
      setAnchorElm3(null);
      setOpen3(false);
  }
  const handleClick3 = (e)=>{
      setAnchorElm3(e.currentTarget);
      setOpen3(true)
  }

  
  // Translate Method
  
  const [englishLanguage, setEnglishLanguage] = useState(false)
  
  const {t , i18n} = useTranslation();
  
  const handleLenguage = ()=>{
    if(!englishLanguage){
      i18n.changeLanguage("en");
      setEnglishLanguage(!englishLanguage);
      return
    } 
    i18n.changeLanguage("es");
    setEnglishLanguage(!englishLanguage);
    return
  };
  
  const product = t("NAVBARTITLE1");
  const Company = t("NAVBARTITLE3");

  const list = [
    {title:product, click: handleClick}, 
    {title:'Tokenomic', click: handleClick2}, 
    {title:Company, click: handleClick3}, 
  ]

  return (
    <div>
      <AppBar component='nav'  position='fixed'
      sx={{
        height: '0',
        marginBottom: '40px',
      }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            background: '#33277b',
            backdropFilter: 'blur(18px)',
            position: 'relative'
          }}
          >
          <Link to='/' color='inherit' style={{
                width: '300px',
                padding: isMobile ? '20px' : '30px',
                position: 'relative',
                left: isMobile ? '0':(isTablet ? '0' :'5px'),
                
              }}>
            <img src={logoconjunto} alt="logo"
              style={{
                width: isMobile ? '65%' : '100%',
                height: isMobile ? '35px' : '50px',
                position: 'absolute',
                top: '5px',
                marginLeft: isMobile ? '-10px' : '-50px',
              }}
            />
          </Link>
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%'
            }}
          >
      
            {
              list.map(({title, click}, index)=> (
                <Typography key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: isMobile ? '8px' : ( isTablet ? '11px' :'13px'),
                  fontWeight: '600',
                  color:'white',
                  marginLeft: isMobile ? '-18px' : ( isTablet ? '-10px' :'0')
                  }}
                >
                  {title}
                  <Button sx={{marginLeft: isMobile ? '-25px' : ( isTablet ? '-25px' :'-20px')}} onClick={click}>
                    <img src={flechadesplazamiento} style={{height: '10px', width: isMobile ? '8px' : '10px'}} alt="" />
                  </Button>
                </Typography>
              ))
            }
            <Link to="/blog">
            <Button sx={{fontSize: isMobile ? '10px' : '13px', paddingY: '10px' ,textTransform: 'capitalize', color: 'white', marginLeft: isMobile ? '-40px' : ( isTablet ? '-35px' :'-15px')}}>Blog</Button>
            </Link>
            

            <Button sx={{ marginLeft: isMobile ? '-28px' : ( isTablet ? '-25px' :'-12px')}} onClick={()=> handleLenguage()}>
                {!englishLanguage ? <img src={spainFlag} alt="spain flag"  style={{width: isMobile ? '18px' : ( isTablet ? '18px' :'24px')}}/> : <img src={estadosunidos} alt="UE flag"  style={{width: isMobile ? '18px' : ( isTablet ? '18px' :'24px')}}/>}
            </Button>

            <Link to='/buywallets'>
              <Button variant='contained'
                sx={{
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  fontSize: isMobile ? '8px' : '13px',
                  padding: isMobile ? '2px' : '20px',
                  background: `url(${botoncomprar})`,
                  marginLeft: isMobile ? '-10px' : ( isTablet ? '-12px' :'0')
                }}
              >
                {t("NAVBUTTON")}
              </Button>
            </Link>
      
            {/* <Divider orientation='vertical' variant='middle' sx={{ height: '30px', mx: '10px', background: 'white' }} /> */}

            <Button sx={{ height: '30px', marginLeft: isMobile ? '-15px' : ( isTablet ? '-15px' :'0')}}>
              <img src={apple} style={{width: isMobile ? '20px':( isTablet ? '18px' :'25px'), paddingTop: '10px'}} />
            </Button>
            <Button sx={{ height: '30px', marginLeft: isMobile ? '-25px':( isTablet ? '-35px' :'-15px'), marginRight: isMobile ? '-15px':( isTablet ? '-35px' :'0')}}>
              <img src={playstore} style={{width: isMobile ? '20px':( isTablet ? '18px' :'25px'), paddingTop: '10px'}} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorElm} open={open} onClose={handleClose} 
        sx={{borderRadius: '50px'}}
      >
      
        <Link to='/' style={{textDecoration: 'none',}}>
          <MenuItem onClick={handleClose}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Wallet
          </MenuItem>
        </Link>

        <Link to='/launchpad' style={{textDecoration: 'none',}}>
          <MenuItem onClick={handleClose}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Launchpad
          </MenuItem>
        </Link> 

      </Menu>

      <Menu anchorEl={anchorElm2} open={open2} onClose={handleClose2} 
        sx={{borderRadius: '50px'}}
      >
      
        <Link to='/tokenomics' style={{textDecoration: 'none'}}>
          <MenuItem onClick={handleClose2}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Tokenomic
          </MenuItem>
        </Link>

        <Link to='/smartcontract' style={{textDecoration: 'none'}}>
          <MenuItem onClick={handleClose2}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Smart Contract
          </MenuItem>
        </Link>  

      </Menu>

      <Menu anchorEl={anchorElm3} open={open3} onClose={handleClose3} 
        sx={{borderRadius: '50px'}}
      >
      
        <Link to='/roadmap' style={{textDecoration: 'none'}}>
          <MenuItem onClick={handleClose3}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
            }}
          >
            Roadmap
          </MenuItem>
        </Link>

        <Link to='/whitepaper' style={{textDecoration: 'none'}}>
          <MenuItem onClick={handleClose3}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            WhitePaper
          </MenuItem>
        </Link> 

        <Link to='/backersandpartners' style={{textDecoration: 'none'}}>
          <MenuItem onClick={handleClose3}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#191970',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Backer & Partner
          </MenuItem>
        </Link>   

        

      </Menu>
    </div>
  )
}

export default Navbar