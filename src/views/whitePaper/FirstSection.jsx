import { Box, Button, Typography } from "@mui/material"
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import cuadrodescargar from '../../assets/images/portal/cuadrodescargar.png'

export const FirstSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      height: '500px',
      width: '99vw',
      overflow: 'hidden',
      position: 'relative',

    }}>

      <img src={apoyo2_1} alt="circulo" height='500px' width='500px' style={{position: 'absolute', left: '0', bottom: '0'}} />


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        height: '1000px',
        width: '99vw',
        }}
      >
        <Typography variant="h5" sx={{fontSize: '35px', fontWeight: '600', marginTop: '20px', color: '#33277b' }}>WHITEPAPER</Typography>
        <img src={lineahorizonta1} alt="" width='15%' />
        <Typography sx={{
          width: '50%',
          mt: '30px',
          color: '#33277b',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '50px'
        }}
        >
          Este documento detallado es tu pasaporte exclusivo hacia la comprensión completa de nuestra tecnología innovadora,
          los objetivos de nuestra plataforma y el futuro emocionante que estamos construyendo
        </Typography>
        <Button sx={{
          color: 'white',
          fontWeight: '800',
          fontSize: '30px',
          textTransform: 'capitalize',
          background: `url(${cuadrodescargar})`,
          height: '50px',
          width: '230px',
          borderRadius: '20px'
        }}
        >
          Descargar
        </Button>

      </Box>

      <img src={apoyo4} alt="circulo" height='500px' width='500px' style={{position: 'absolute', right: '0', bottom: '0'}} />
      <img src={circulos} alt="circulo" height='150px' width='120px' style={{position: 'absolute', right: '5%', bottom: '5%'}} />


    </Box>
  )
}
