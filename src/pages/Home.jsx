import { SecondSection, ThirdSection, FirstSection } from '../views/home'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: '1280px',
        marginInline: 'auto',
        paddingInline: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Box>
  )
}

export default Home
