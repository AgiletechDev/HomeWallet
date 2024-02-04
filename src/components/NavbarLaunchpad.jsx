import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import flechadesplazamiento from '../assets/images/portal/svg/flechadesplazamiento.svg'
import logoconjunto from '../assets/images/portal/logoconjunto.png'
import botoncomprar from '../assets/images/portal/botoncomprar.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavbarLaunchpad = () => {
  const [anchorElm, setAnchorElm] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setAnchorElm(null)
    setOpen(false)
  }
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget)
    setOpen(true)
  }
  // menu 2
  const [anchorElm2, setAnchorElm2] = useState(null)
  const [open2, setOpen2] = useState(false)
  const handleClose2 = () => {
    setAnchorElm2(null)
    setOpen2(false)
  }
  const handleClick2 = (e) => {
    setAnchorElm2(e.currentTarget)
    setOpen2(true)
  }

  // menu 3
  const [anchorElm3, setAnchorElm3] = useState(null)
  const [open3, setOpen3] = useState(false)
  const handleClose3 = () => {
    setAnchorElm3(null)
    setOpen3(false)
  }
  const handleClick3 = (e) => {
    setAnchorElm3(e.currentTarget)
    setOpen3(true)
  }

  //menu 4
  const [anchorElm4, setAnchorElm4] = useState(null)
  const [open4, setOpen4] = useState(false)
  const handleClose4 = () => {
    setAnchorElm4(null)
    setOpen4(false)
  }
  const handleClick4 = (e) => {
    setAnchorElm4(e.currentTarget)
    setOpen4(true)
  }

  const list = [
    { title: 'RAB Sale', click: handleClick },
    { title: 'Token', click: handleClick2 },
    { title: 'Lock', click: handleClick3 },
    { title: 'RAB Grow', click: handleClick4 },
  ]

  return (
    <div>
      <AppBar
        component="nav"
        position="fixed"
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
            position: 'relative',
            gap: '30px',
          }}
        >
          <Link to="/launchpad">
            <img
              src={logoconjunto}
              alt="logo"
              style={{
                width: '100%',
                padding: '30px',
                left: '5px',
              }}
            />
          </Link>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              gap: '20px',
            }}
          >
            {list.map(({ title, click }, index) => (
              <Typography
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                {title}
                <Button sx={{ marginLeft: '-20px' }} onClick={click}>
                  <img
                    src={flechadesplazamiento}
                    style={{ height: '10px', width: '10px' }}
                    alt=""
                  />
                </Button>
              </Typography>
            ))}
            <Link to="/">
              <Button
                sx={{
                  fontSize: '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: '-15px',
                }}
              >
                home
              </Button>
            </Link>

            <Menu
              anchorEl={anchorElm}
              open={open}
              onClose={handleClose}
              sx={{ borderRadius: '50px' }}
            >
              <Link
                to="/launchpad/createsale"
                style={{ textDecoration: 'none' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  Create sale
                </MenuItem>
              </Link>

              <Link to="/launchpad/rabsale" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  View Sales
                </MenuItem>
              </Link>
            </Menu>

            <Menu
              anchorEl={anchorElm2}
              open={open2}
              onClose={handleClose2}
              sx={{ borderRadius: '50px' }}
            >
              <Link to="/launchpad/token" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose2}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  Create token
                </MenuItem>
              </Link>
            </Menu>

            <Menu
              anchorEl={anchorElm3}
              open={open3}
              onClose={handleClose3}
              sx={{ borderRadius: '50px' }}
            >
              <Link to="/launchpad/lock" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose3}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  Create Lock
                </MenuItem>
              </Link>

              <Link to="/launchpad/listlocks" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose3}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  List Locks
                </MenuItem>
              </Link>

              <Link to="/launchpad/liquidity" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose3}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  Liquidity
                </MenuItem>
              </Link>
            </Menu>

            <Menu
              anchorEl={anchorElm4}
              open={open4}
              onClose={handleClose4}
              sx={{ borderRadius: '50px' }}
            >
              <Link to="/launchpad/rabgrow" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose4}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  Create Grow
                </MenuItem>
              </Link>

              <Link to="/launchpad/listgrow" style={{ textDecoration: 'none' }}>
                <MenuItem
                  onClick={handleClose4}
                  sx={{
                    color: 'black',
                    '&:hover': {
                      background: '#191970',
                      color: 'white',
                      borderRadius: '15px',
                    },
                  }}
                >
                  List Grows
                </MenuItem>
              </Link>
            </Menu>
            
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              gap: '20px',
            }}
          >
            <Link to="/launchpad/buywallet">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  fontSize: '13px',
                  padding: '20px',
                  background: `url(${botoncomprar})`,
                }}
              >
                Comprar
              </Button>
            </Link>
            <Link to="/launchpad/connectwallet">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  fontSize: '13px',
                  padding: '20px',
                  background: `url(${botoncomprar})`,
                }}
              >
                Comprar
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarLaunchpad
