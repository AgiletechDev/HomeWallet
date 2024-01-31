import { AppBar, Box, Button, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import logo from '../assets/images/portal/logo.png';
import spainFlag from '../assets/images/portal/spain.png';
import playstore from '../assets/images/portal/playstore.png';
import apple from '../assets/images/portal/apple.png';
import { KeyboardArrowDown } from '@mui/icons-material';
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
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(58px)'
      }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(18px)',
            position: 'relative'
          }}
          >
          <img src={logo} alt="logo"
            style={{
              width: '10%',
              maxWidth: '10%',
              height: '70%',
              padding: '0',
              position: 'absolute',
              left: '5px'
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
                  fontWeight: '540',
                  color:'black'
                  }}
                >
                  {title}
                  <IconButton sx={{marginLeft: '-10px'}} children={<KeyboardArrowDown/>} onClick={click}/>
                </Typography>
              ))
            }
      
            <Button sx={{fontSize: '17px', textTransform: 'capitalize', color: 'black'}}>Blog</Button>

            <Button sx={{ marginLeft: '-12px'}}>
                <img src={spainFlag} alt="spain flag" />
            </Button>

            <Link to='/buywallets'>
              <Button variant='contained'
                sx={{
                  borderRadius: '20px',
                  height: '40px'
                }}
              >
                Buy Wallet
              </Button>
            </Link>
      
            <Divider orientation='vertical' variant='middle' sx={{ height: '30px', mx: '10px' }} />
            <Button sx={{backgroundColor: '#F7FAF5', mr: '5px', height: '40px'}}>
              <img src={apple} style={{width: '34px'}} />
            </Button>
            <Button sx={{backgroundColor: '#F7FAF5', height: '40px'}}>
              <img src={playstore} style={{width: '30px'}} />
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
                    background: '#006EFD',
                    color: 'white',
                    borderRadius: '15px'
                  },
              }}
          >
            Wallet
          </MenuItem>
        </Link>

        <Link to='/' style={{textDecoration: 'none',}}>
          <MenuItem onClick={handleClose}
            sx={{
              color: 'black',
              '&:hover': {
                    background: '#006EFD',
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
                    background: '#006EFD',
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
                    background: '#006EFD',
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
                    background: '#006EFD',
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
                    background: '#006EFD',
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
                    background: '#006EFD',
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