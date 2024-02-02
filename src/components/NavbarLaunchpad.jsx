import { AppBar, Box, Button, Toolbar } from '@mui/material'

import logoconjunto from '../assets/images/portal/logoconjunto.png'
import botoncomprar from '../assets/images/portal/botoncomprar.png'

import { Link } from 'react-router-dom'

const NavbarLaunchpad = () => {
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
          <img
            src={logoconjunto}
            alt="logo"
            style={{
              width: '20%',
              height: '70%',
              padding: '30px',

              left: '5px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              gap:'20px'
            }}
          >
            <Link to="/launchpad/rabsale">
              <Button
                sx={{
                  fontSize: '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: '-15px',
                }}
              >
                RAB Sale
              </Button>
            </Link>

            <Link to="/launchpad/token">
              <Button
                sx={{
                  fontSize: '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: '-15px',
                }}
              >
                Token
              </Button>
            </Link>

            <Link to="/launchpad/lock">
              <Button
                sx={{
                  fontSize: '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: '-15px',
                }}
              >
                Lock
              </Button>
            </Link>

            <Link to="/launchpad/rabgrow">
              <Button
                sx={{
                  fontSize: '13px',
                  paddingY: '10px',
                  textTransform: 'capitalize',
                  color: 'white',
                  marginLeft: '-15px',
                }}
              >
                RAB Grow
              </Button>
            </Link>
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
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              gap:'20px'
            }}
          >
            <Link to="/launchpad/buywallets">
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
