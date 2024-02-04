import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Container, Box } from '@mui/material'
import NavbarLaunchpad from './components/NavbarLaunchpad'
import { FooterLaunchpad } from './components'

function App() {
  const location = useLocation()

  const renderNavbar = () => {
    if (location.pathname.startsWith('/launchpad')) {
      return <NavbarLaunchpad />
    } else {
      return <Navbar />
    }
  }

  const renderFooter = () => {
    if (location.pathname.startsWith('/launchpad')) {
      return <FooterLaunchpad />
    } else {
      return <Footer />
    }
  }

  const renderOutlet = () => {
    if (location.pathname.startsWith('/launchpad')) {
      return (
        <Box
       
          sx={{
            background: 'linear-gradient(60deg, #d8f0ff, #FFF ,  #d8f0ff)',
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
            
          }}
        >
          <Outlet />
        </Box>
      )
    } else {
      return (
        <Container
          sx={{
            maxWidth: '1280px',
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '80px',
          }}
        >
          <Outlet />
        </Container>
      )
    }
  }
  return (
    <>
      {renderNavbar()}
      {renderOutlet()}

      {renderFooter()}
    </>
  )
}

export default App
