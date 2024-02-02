import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Container } from '@mui/material'
import NavbarLaunchpad from './components/NavbarLaunchpad';

function App() {

  const location = useLocation();
  
  const renderNavbar = () => {
    if (location.pathname.startsWith('/launchpad')) {
      return <NavbarLaunchpad />;
    } else {
      return <Navbar />;
    }
  };


  return (
    <>
      {renderNavbar()} 
      <Container
      sx={{
        maxWidth: '1280px',
        marginInline: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <Outlet />
    </Container>
      
      <Footer />
    </>
  )
}

export default App
