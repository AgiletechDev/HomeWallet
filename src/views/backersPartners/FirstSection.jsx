import { Box, Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import cuadro1 from '../../assets/images/portal/smart/image-1.png'
import cuadro2 from '../../assets/images/portal/smart/image-2.png'
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
        height:  isMobile ? '100%' :  '500px',
        overflow: 'hidden',
        position: 'relative',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingX: 'calc(50% - 450px)',
        backgroundImage: `url(${background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
          height: '100%',
        }}
      >
        <Typography
          noWrap
          variant='h3'
          fontWeight='900'
          fontSize='80px'
          top={-35}
          className='absolute text-white text-shadow z-0'
        >
          Backers & Partners
        </Typography>
        <Typography
          variant="h5"
          className='z-10'
          sx={{
            fontSize: '30px',
            fontWeight: '600',
            marginTop: '20px',
          }}
        >
          {t("BACKERSANDPARTNERS")}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection:isMobile ? 'column': 'row',
            zIndex: '1',
            marginTop: '50px',
            gap:'20px',
            mb:'2em'
          }}
        >
          {/* <img src={cuadro1} alt="cuadro1" style={{ marginRight: '20px' }} />
          <img src={cuadro1} alt="cuadro1" style={{ marginRight: '20px' }} /> */}
          {
            [cuadro1, cuadro2].map((src, index) => (
              <Stack key={index} gap={2}>
                <img src={src} width={328} height={98} style={{ marginRight: '10px' }} />
                <Box className='h-1 my-1 rounded-lg bg-black' />
              </Stack>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}
