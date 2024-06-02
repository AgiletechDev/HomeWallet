import { Box, Stack, Typography } from '@mui/material'
import cuadro1 from '../../assets/images/portal/smart/image-1.png'
import cuadro2 from '../../assets/images/portal/smart/image-2.png'
import cuadro3 from '../../assets/images/portal/smart/image-3.png'
import { useTranslation } from 'react-i18next'
import background from './../../assets/images/background.svg'

export const FirstSection = () => {

  const { t } = useTranslation();

  return (
    <Box sx={{
      display: 'flex',
      height: '500px',
      width: '100%',
      paddingY: 15,
      overflow: 'hidden',
      position: 'relative',
      paddingX: 'calc(50% - 450px)',
      backgroundImage: `url(${background})`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center center',
    }}>
      <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        height: '1000px',
        width: '99vw',
        }}
      >
        <Typography
          variant='h3'
          fontWeight='900'
          fontSize='80px'
          top={-40}
          className='absolute text-white text-shadow -z-0'
        >
          Buy Wallet
        </Typography>
        <Typography
          variant="h5"
          className='z-10'
          sx={{fontSize: '35px', fontWeight: '600', marginTop: '20px' }}
        >
          {t("BUYWALLET_TITLE")}
        </Typography>
        <Stack
          direction='row'
          gap={5}
          sx={{
            zIndex: '1',
            marginTop: '50px',
          }}
        >
          {/* 
          <img src={cuadro1} alt="cuadro1" style={{marginRight: '20px'}} />
          <img src={cuadro1} alt="cuadro1" style={{marginRight: '20px'}} />
          <img src={cuadro1} alt="cuadro1" style={{marginRight: '20px'}} />
           */}
          {
            [cuadro1, cuadro2, cuadro3].map((src, index) => (
              <Stack key={index} gap={2}>
                <img src={src} width={328} height={98} style={{ marginRight: '10px' }} />
                <Box className='h-1 my-1 rounded-lg bg-black' />
              </Stack>
            ))
          }
        </Stack>
      </Box>
    </Box>
  )
}
