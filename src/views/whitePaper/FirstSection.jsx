import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import background from './../../assets/images/background.svg'

export const FirstSection = () => {

  const { t } = useTranslation();

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        paddingY: 15,
        paddingX: 'calc(50% - 450px)',
        backgroundImage: `url(${background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
          height: isMobile ? '100%' : '500px',
          width:  '100%',
          mb:'2em'
        }}
      >
        <Typography
          variant='h3'
          fontWeight='900'
          fontSize={{xs: '40px', sm: '80px'}}
          top={{xs: -5, sm: -40}}
          className='absolute text-white text-shadow z-0'
        >
          WHITEPAPER
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
          WHITEPAPER
        </Typography>
        <Button
          sx={{
            color: 'white',
            fontSize: '20px',
            borderRadius: '30px',
            marginTop: '60px',
            paddingX: 4,
            backgroundColor: '#0A85D9',
          }}
        >
          {t("WHITEPAPER_DOWNLOAD")}
        </Button>
      </Box>
    </Box>
  )
}
