import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import cuadrodescargar from '../../assets/images/portal/cuadrodescargar.png'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {

  const { t } = useTranslation();

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        height: isMobile ? '100%' : '500px',
        width: isMobile ? '100%' : '99vw',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {!isMobile && (
        <img
          src={apoyo2_1}
          alt="circulo"
          height="500px"
          width="500px"
          style={{ position: 'absolute', left: '0', bottom: '0' }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
          height: isMobile ? '100%' : '1000px',
          width:  '99vw',
          mb:'2em'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '35px',
            fontWeight: '600',
            marginTop: '20px',
            color: '#33277b',
          }}
        >
          WHITEPAPER
        </Typography>
        <img src={lineahorizonta1} alt="" width="15%" />
        <Typography
          sx={{
            width: isMobile ? '100%' : '50%',
            mt: '30px',
            color: '#33277b',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {t("WHITEPAPER_TEXT")}
        </Typography>
        <Button
          sx={{
            color: 'white',
            fontWeight: '800',
            fontSize: '30px',
            textTransform: 'capitalize',
            background: `url(${cuadrodescargar})`,
            height: '50px',
            width: '230px',
            borderRadius: '20px',
          }}
        >
          {t("WHITEPAPER_DOWNLOAD")}
        </Button>
      </Box>
      {!isMobile && (
        <>
          <img
            src={apoyo4}
            alt="circulo"
            height="500px"
            width="500px"
            style={{ position: 'absolute', right: '0', bottom: '0' }}
          />

          <img
            src={circulos}
            alt="circulo"
            height="150px"
            width="120px"
            style={{ position: 'absolute', right: '5%', bottom: '5%' }}
          />
        </>
      )}
    </Box>
  )
}
