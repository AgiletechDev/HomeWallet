import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import cuadro1 from '../../assets/images/portal/cuadro1.png'

export const FirstSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        height:  isMobile ? '100%' :  '500px',
        width:  isMobile ? '100%' : '99vw',
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
          height: isMobile ? '100%' :  '1000px',
          width: isMobile ? '100%' :  '99vw',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '30px',
            fontWeight: '600',
            marginTop: '20px',
            color: '#33277b',
          }}
        >
          PATROCINADORES Y SOCIOS
        </Typography>
        <img src={lineahorizonta1} alt="" width="15%" />

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
          <img src={cuadro1} alt="cuadro1" style={{ marginRight: '20px' }} />
          <img src={cuadro1} alt="cuadro1" style={{ marginRight: '20px' }} />
        </Box>
      </Box>
      {!isMobile && (
        <>
          <img
            src={apoyo4}
            alt="circulo"
            height="500px"
            width="500px"
            style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              zIndex: '-1',
            }}
          />
          <img
            src={circulos}
            alt="circulo"
            height="150px"
            width="120px"
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '5%',
              zIndex: '-1',
            }}
          />
        </>
      )}
    </Box>
  )
}
