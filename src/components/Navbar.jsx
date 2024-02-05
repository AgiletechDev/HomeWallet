import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import spainFlag from '../assets/images/portal/spain.png'
import estadosunidos from '../assets/images/portal/estadosunidos.png'
import logoconjunto from '../assets/images/portal/logoconjunto.png'
import botoncomprar from '../assets/images/portal/botoncomprar.png'
import flechadesplazamiento from '../assets/images/portal/svg/flechadesplazamiento.svg'
import playstore from '../assets/images/portal/svg/playstore.svg'
import apple from '../assets/images/portal/svg/apple.svg'

import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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

  const [englishLanguage, setEnglishLanguage] = useState(false)

  const { t, i18n } = useTranslation()

  const handleLenguage = () => {
    if (!englishLanguage) {
      i18n.changeLanguage('en')
      setEnglishLanguage(!englishLanguage)
      return
    }
    i18n.changeLanguage('es')
    setEnglishLanguage(!englishLanguage)
    return
  }

  const product = t('NAVBARTITLE1')
  const Company = t('NAVBARTITLE3')

  const links = [
    { title: product, click: handleClick },
    { title: 'Tokenomic', click: handleClick2 },
    { title: Company, click: handleClick3 },
  ]

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
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0',
              background: '#33277b',
              backdropFilter: 'blur(18px)',
              position: 'relative',
            }}
          >
            <Link
              to="/"
              color="inherit"
              style={{
                width: '300px',
                padding: '20px',
                position: 'relative',
              }}
            >
              <img
                src={logoconjunto}
                alt="logo"
                style={{
                  width: '100%',
                  height: '50px',
                }}
              />
            </Link>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
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
              background: '#33277b',
            },
          }}
        >
          <Box
            sx={{
              background: '#33277b',
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
            <Link to="/" onClick={handleDrawerClose}>
              <img
                src={logoconjunto}
                alt="logo"
                style={{
                  width: '80%',
                  marginBottom: '20px',
                }}
              />
            </Link>

            <Link
              to="/launchpad"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Launchpad</Typography>
            </Link>
            <Link
              to="/tokenomics"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Tokenomic</Typography>
            </Link>
            <Link
              to="/smartcontract"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Smart Contract</Typography>
            </Link>
            <Link
              to="/roadmap"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Roadmap</Typography>
            </Link>
            <Link
              to="/whitepaper"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>WhitePaper</Typography>
            </Link>
            <Link
              to="/backersandpartners"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Backers & Partners</Typography>
            </Link>
            <Link
              to="/blog"
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>Blog</Typography>
            </Link>
          </Box>
        </Drawer>
      </React.Fragment>
    )
  }

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
          }}
        >
          <Link
            to="/"
            color="inherit"
            style={{
              width: '300px',
              padding: isMobile ? '20px' : '30px',
              position: 'relative',
              left: isMobile ? '0' : '5px',
            }}
          >
            <img
              src={logoconjunto}
              alt="logo"
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
              width: '100%',
            }}
          >
            {links.map(({ title, path, click }, index) => (
              <Typography
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: isMobile ? '8px' : '13px',
                  fontWeight: '600',
                  color: 'white',
                  marginLeft: isMobile ? '-18px' : '0',
                }}
              >
                <Link
                  to={path}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  {title}
                </Link>
                <Button
                  sx={{ marginLeft: isMobile ? '-25px' : '-20px' }}
                  onClick={click}
                >
                  <img
                    src={flechadesplazamiento}
                    style={{ height: '10px', width: isMobile ? '8px' : '10px' }}
                    alt=""
                  />
                </Button>
              </Typography>
            ))}
            <Link to="/blog">
              <Button
                sx={{
                  fontSize: isMobile ? '10px' : '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: isMobile ? '-40px' : '-15px',
                }}
              >
                Blog
              </Button>
            </Link>

            <Button
              sx={{ marginLeft: isMobile ? '-28px' : '-12px' }}
              onClick={() => handleLenguage()}
            >
              {!englishLanguage ? (
                <img
                  src={spainFlag}
                  alt="spain flag"
                  style={{ width: isMobile ? '18px' : '24px' }}
                />
              ) : (
                <img
                  src={estadosunidos}
                  alt="UE flag"
                  style={{ width: isMobile ? '18px' : '24px' }}
                />
              )}
            </Button>

            <Link to="/buywallets">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  fontSize: isMobile ? '8px' : '13px',
                  padding: isMobile ? '2px' : '20px',
                  background: `url(${botoncomprar})`,
                  marginLeft: isMobile ? '-10px' : '0',
                }}
              >
                {t('NAVBUTTON')}
              </Button>
            </Link>

            <Button
              sx={{ height: '30px', marginLeft: isMobile ? '-15px' : '0' }}
            >
              <img
                src={apple}
                style={{
                  width: isMobile ? '20px' : '25px',
                  paddingTop: '10px',
                }}
              />
            </Button>
            <Button
              sx={{
                height: '30px',
                marginLeft: isMobile ? '-25px' : '-15px',
                marginRight: isMobile ? '-15px' : '0',
              }}
            >
              <img
                src={playstore}
                style={{
                  width: isMobile ? '20px' : '25px',
                  paddingTop: '10px',
                }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorElm}
        open={open}
        onClose={handleClose}
        sx={{ borderRadius: '50px' }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
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
            Wallet
          </MenuItem>
        </Link>

        <Link to="/launchpad" style={{ textDecoration: 'none' }}>
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
            Launchpad
          </MenuItem>
        </Link>
      </Menu>

      <Menu
        anchorEl={anchorElm2}
        open={open2}
        onClose={handleClose2}
        sx={{ borderRadius: '50px' }}
      >
        <Link to="/tokenomics" style={{ textDecoration: 'none' }}>
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
            Tokenomic
          </MenuItem>
        </Link>

        <Link to="/smartcontract" style={{ textDecoration: 'none' }}>
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
            Smart Contract
          </MenuItem>
        </Link>
      </Menu>

      <Menu
        anchorEl={anchorElm3}
        open={open3}
        onClose={handleClose3}
        sx={{ borderRadius: '50px' }}
      >
        <Link to="/roadmap" style={{ textDecoration: 'none' }}>
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
            Roadmap
          </MenuItem>
        </Link>

        <Link to="/whitepaper" style={{ textDecoration: 'none' }}>
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
            WhitePaper
          </MenuItem>
        </Link>

        <Link to="/backersandpartners" style={{ textDecoration: 'none' }}>
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
            Backer & Partner
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
