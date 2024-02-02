import { Box, Typography } from "@mui/material"
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import roadmap from '../../assets/images/portal/roadmap.png'
import fondo1Roadmap from '../../assets/images/portal/fondo1Roadmap.png'
import apoyo1 from '../../assets/images/portal/apoyo1.png'
import apoyo2 from '../../assets/images/portal/apoyo2.png'

export const FirstSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      height: '1000px',
      width: '99vw',
      overflow: 'hidden',
      position: 'relative',

    }}>

      <img src={apoyo1} alt="circulo" height='100px' width='80px' style={{position: 'absolute', left: '12%', top: '10%'}} />
      <img src={apoyo1} alt="circulo" height='100px' width='80px' style={{position: 'absolute', left: '6%', top: '19%'}} />


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        height: '1000px',
        width: '99vw',
        }}
      >
        <Typography variant="h5" sx={{fontSize: '35px', fontWeight: '600', marginTop: '20px', color: '#33277b' }}>ROADMAP</Typography>
          <img src={lineahorizonta1} alt="" width='15%' />
          <img src={roadmap} alt="" width='1000px'  />
          <img src={fondo1Roadmap} alt="" width='100%'  />
      </Box>

      <img src={apoyo2} alt="lineas" width='400px' height='300px' style={{position: 'absolute', top: '20%', right:'-220px', zIndex: '-1'}} />


    </Box>
  )
}
