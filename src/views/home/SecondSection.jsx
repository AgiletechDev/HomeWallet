import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 1.png'
import imgSect2 from '../../assets/images/portal/pag1/vista 2.png'
import imgSect3 from '../../assets/images/portal/pag1/vista 3.png'
import { MultiUtility } from '../../components/MultiUtility'

export const SecondSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          position: 'relative',
          mt: '5em',
         
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
            zIndex: '1',
            
            top: '300px',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#33277b">
            Wallet
          </Typography>
          <Typography>
            Admite más de
            <span style={{ fontWeight: 'bold' }}>
              14 blockchains líderes
            </span><br />
            Seguimiento de gráficos y precios en tiempo real para cada toke
          </Typography>
        </Box>

        <Box>
          <img
            src={imgSect1}
            style={{ width: '100%', zIndex: '-1', marginLeft: '180px' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1000px',
          position: 'relative',
          mt: '5em',
        }}
      >
        <img src={imgSect2} style={{ width: '50%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            ml: '2em',
          }}
        >
          <Typography variant="h4" fontWeight="700" color="#4d4d4d">
          Intercambio
          </Typography>
          <Typography variant="h6" color="#4d4d4d">
          Intercambia más de 300 tokens en múltiples cadenas:
          </Typography>
          <ul style={{listStyle:'none', color:"#4d4d4d" , fontSize:'25px'}}>
            <li>Ethereum</li>
            <li>Binance</li>
            <li>Bitcoin</li>
            <li>Tron</li>

          </ul>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          mt: '5em',
          gap: '110px',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#4d4d4d">
            Multiusos
          </Typography>
          <Typography color="#4d4d4d" fontWeight="bold">Mejorar la experiencia de usuario</Typography>
          <MultiUtility />
        </Box>
        <Box
          sx={{
  
          }}
        >
          <img src={imgSect3} />
        </Box>
      </Box>
    </>
  )
}
