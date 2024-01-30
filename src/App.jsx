import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Container } from '@mui/material'

function App() {
  return (
    <>
      <Navbar />
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
