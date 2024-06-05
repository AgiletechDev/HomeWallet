import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { FaChevronDown } from 'react-icons/fa'
import { Logo } from './Logo'

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

  //
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  if (isMobile) {
    return (
      <React.Fragment>
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
              background: 'white',
              backdropFilter: 'blur(18px)',
              position: 'relative',
              justifyContent: 'space-between'
            }}
          >
            <Link
              to="/launchpad"
              color="inherit"
              style={{
                padding: '20px',
                position: 'relative',
              }}
            >
              <Logo />
              {/* <img
                src={logoconjunto}
                alt="logo"
                style={{
                  width: '80%',
                  height: '50px',
                }}
              /> */}
            </Link>
            <IconButton color="black" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          className="drawer"
          PaperProps={{
            style: {
              right: 0,
              width: '250px',
              background: 'white',
            },
          }}
        >
          <Box
            sx={{
              padding: '20px',
              textAlign: 'center',
              color: 'white',
              mt: '2em',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            <Link to="/launchpad" onClick={handleDrawerClose}>
              <Logo />
              {/* <img
                src={logoconjunto}
                alt="logo"
                style={{
                  width: '80%',
                  marginBottom: '20px',
                }}
              /> */}
            </Link>

            <Link
              to="/launchpad/createsale"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>Create Sale</Typography>
            </Link>
            <Link
              to="/launchpad/rabsale"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>View Sales</Typography>
            </Link>
            <Link
              to="/launchpad/token"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>Token</Typography>
            </Link>
            <Link
              to="/launchpad/lock"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>Create Lock</Typography>
            </Link>
            <Link
              to="/launchpad/listlocks"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>List Locks</Typography>
            </Link>
            <Link
              to="/launchpad/liquidity"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>Liquidity</Typography>
            </Link>
            <Link
              to="/launchpad/rabgrow"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>Create Grow</Typography>
            </Link>
            <Link
              to="/launchpad/listgrow"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>List Grows</Typography>
            </Link>
            <Link
              to="/"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Typography>HomePage</Typography>
            </Link>
          </Box>
        </Drawer>
      </React.Fragment>
    )
  }

  return (
    <header style={{marginTop: '104px'}}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '104px',
          marginBottom: '40px',
          background: 'white',
          top: 0,
          left: 0,
        }}
      >
        <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              background: 'primary',
              // backdropFilter: 'blur(18px)',
              position: 'relative',
            }}
          >
          <Stack direction='row' gap={10}>

          <Link to="/launchpad" style={{display:'block'}}>
            <Logo/>
            {/* <img
              src={logoconjunto}
              alt="logo"
              style={{
                width: '100%',
                padding: '30px',
                left: '5px',
              }}
            /> */}
          </Link>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {list.map(({ title, click }, index) => (
              <Button key={index} sx={{ display:'flex', gap:1, marginLeft: '-20px' }} onClick={click}>
                <FaChevronDown size={10} />
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'black',
                  }}
                >
                  {title}
                </Typography>
              </Button>
            ))}
            <Link to="/">
              <Button
                sx={{
                  textTransform: 'capitalize',
                  color: 'black',
                  marginLeft: '-15px',
                }}
              >
                HomePage
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
                    },
                  }}
                >
                  Create Lock
                </MenuItem>
              </Link>

              <Link
                to="/launchpad/listlocks"
                style={{ textDecoration: 'none' }}
              >
                <MenuItem
                  onClick={handleClose3}
                  sx={{
                    color: 'black',
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
                    },
                  }}
                >
                  List Locks
                </MenuItem>
              </Link>

              <Link
                to="/launchpad/liquidity"
                style={{ textDecoration: 'none' }}
              >
                <MenuItem
                  onClick={handleClose3}
                  sx={{
                    color: 'black',
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
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
                    borderRadius: '10px',
                    minWidth: '150px',
                    marginX: 1,
                    '&:hover': {
                      background: '#29b0ea',
                      color: 'white',
                    },
                  }}
                >
                  List Grows
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '20px',
            }}
          >
            <Link to="/buywallets">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '10px',
                  textTransform: 'capitalize',
                  textWrap: 'nowrap',
                  fontWeight: '600',
                  fontSize: '13px',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Buy Rabbit
              </Button>
            </Link>
            <Link to="/launchpad/connectwallet">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '10px',
                  textTransform: 'capitalize',
                  textWrap: 'nowrap',
                  fontWeight: '600',
                  fontSize: '13px',
                }}
              >
                Connect Wallet
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavbarLaunchpad
