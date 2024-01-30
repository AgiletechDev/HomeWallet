import { SecondSection, ThirdSection, FirstSection } from '../views/home'
import { Box,Container } from '@mui/material'

const Home = () => {
  return (
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
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Container>
  )
}

export default Home
