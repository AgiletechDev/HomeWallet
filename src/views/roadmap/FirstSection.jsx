import { Box, Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import roadmap from '../../assets/images/portal/roadmap.png'
import background from './../../assets/images/background.svg'

export const FirstSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        height: isMobile ? '100%' : '900px',
        position: 'relative',
        width: '100%',
        paddingX: 'calc(50% - 450px)',
        backgroundImage: `url(${background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
      }}
    >
      <Stack
        alignItems='center'
        gap={8}
        sx={{
          marginTop: '40px',
          height: isMobile ? '100%' : '1000px',
          width: '99vw',
          pb:'2em'
        }}
      >
        <Typography
          variant='h3'
          fontWeight='900'
          fontSize='80px'
          top={0}
          className='absolute text-white text-shadow -z-0'
        >
          ROADMAP
        </Typography>
        <Typography
          variant="h5"
          className='z-10'
          sx={{
            fontSize: '35px',
            fontWeight: '600',
            marginTop: '20px',
          }}
        >
          ROADMAP
        </Typography>
        <img src={roadmap} alt="" width="1000px" />
      </Stack>
    </Box>
  )
}
