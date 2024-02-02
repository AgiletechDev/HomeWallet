import { AppBar, Box, Button, Divider, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import spainFlag from '../assets/images/portal/spain.png';
import logoconjunto from '../assets/images/portal/logoconjunto.png';
import botoncomprar from '../assets/images/portal/botoncomprar.png';
import flechadesplazamiento from '../assets/images/portal/svg/flechadesplazamiento.svg';
import playstore from '../assets/images/portal/svg/playstore.svg';
import apple from '../assets/images/portal/svg/apple.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
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

  const list = [
    {title:'Product', click: handleClick}, 
    {title:'Tokenomic', click: handleClick2}, 
    {title:'Company', click: handleClick3}, 
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
          <img src={logoconjunto} alt="logo"
            style={{
              width: '20%',
              height: '70%',
              padding: '30px',
              position: 'absolute',
              left: '5px',
            }}
          />
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
                  fontSize: '13px',
                  fontWeight: '600',
                  color:'white'
                  }}
                >
                  {title}
                  <Button sx={{marginLeft: '-20px'}} onClick={click}>
                    <img src={flechadesplazamiento} style={{height: '10px', width: '10px'}} alt="" />
                  </Button>
                </Typography>
              ))
            }
            <Link to="/blog">
            <Button sx={{fontSize: '13px', paddingY: '10px' ,textTransform: 'capitalize', color: 'white', marginLeft: '-15px'}}>Blog</Button>
            </Link>
            

            <Button sx={{ marginLeft: '-12px'}}>
                <img src={spainFlag} alt="spain flag" />
            </Button>

            <Link to='/buywallets'>
              <Button variant='contained'
                sx={{
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  fontSize: '13px',
                  padding: '20px',
                  background: `url(${botoncomprar})`
                }}
              >
                Comprar
              </Button>
            </Link>
      
            {/* <Divider orientation='vertical' variant='middle' sx={{ height: '30px', mx: '10px', background: 'white' }} /> */}

            <Button sx={{ height: '30px'}}>
              <img src={apple} style={{width: '25px', paddingTop: '10px'}} />
            </Button>
            <Button sx={{ height: '30px', marginLeft: '-15px'}}>
              <img src={playstore} style={{width: '25px', paddingTop: '10px'}} />
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