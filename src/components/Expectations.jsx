import { Box, Typography } from '@mui/material'
import imgIcon1 from '../assets/images/portal/pag1/icono 1.png'
import imgIcon2 from '../assets/images/portal/pag1/icono 2.png'
import imgIcon3 from '../assets/images/portal/pag1/icono 3.png'
import imgIcon4 from '../assets/images/portal/pag1/icono 4.png'
import imgIcon5 from '../assets/images/portal/pag1/icono 5.png'
import imgIcon6 from '../assets/images/portal/pag1/icono 6.png'
import imgIcon7 from '../assets/images/portal/pag1/icono 7.png'
import imgIcon8 from '../assets/images/portal/pag1/icono 8.png'
import imgIcon9 from '../assets/images/portal/pag1/icono 9.png'


const data = [
  {
    text: 'El almacenamiento de activos mediante claves privadas garantiza un alto nivel de seguridad y reputación',
    image: imgIcon1,
  },
  {
    text: 'Fácil accesibilidad y anonimato para transacciones en cualquier momento y lugar.',
    image: imgIcon2,
  },
  {
    text: 'Intercambie más de un millón de tokens en catorce cadenas de bloques líderes',
    image: imgIcon3,
  },
  {
    text: 'Conéctese a varias DApps',
    image: imgIcon4,
  },
  {
    text: 'Ingresos pasivos mediante apuestas',
    image: imgIcon5,
  },
  {
    text: 'Noticias de última hora diarias y estrategias de mercado',
    image: imgIcon6,
  },
  {
    text: 'Participe en lanzamientos aéreos e  IDO de los proyectos líderes',
    image: imgIcon7,
  },
  {
    text: 'Compre tokens directamente a través de Visa y Mastercard',
    image: imgIcon8,
  },
  {
    text: 'Recompensas de un programa de referencia de afiliados',
    image: imgIcon9,
  },
]

const containerStyle = {
  mt: '3em',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: 40,
  marginInline: 'auto',
  justifyContent: 'center',

};

const boxStyle = {
  borderRadius:'20px',
  marginBottom: '2px',
  textAlign: 'center',
  background: 'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
  padding:'1em',
  color:'white',
  justifyContent:'center',
  height:'200px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
};

export const Expectations = () => {
  return (
    <Box sx={containerStyle}>
      {data.map((item, index) => (
        <Box key={index} style={boxStyle}>
          <img src={item.image} alt={`Image ${index + 1}`} style={{ width: '20%', margin: 'auto' }} />
          <Typography sx={{mt:'0.5em',mb:'2em', textAlign:'center',fontWeight:'bold'}}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};