import { Box, Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import roadmap from '../../assets/images/portal/roadmap.png'

export const FirstSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        height: isMobile ? '100%' : '900px',
        width: '100%',
        position: 'relative',
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
          className='absolute text-white text-shadow -z-10'
        >
          ROADMAP
        </Typography>
        <Typography
          variant="h5"
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
