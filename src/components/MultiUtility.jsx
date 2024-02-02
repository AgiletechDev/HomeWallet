import { Box, Typography } from '@mui/material'


const data = [
  {
    title:'Noticias',
    text: 'Actualizar información del mercado todos los días',
  },
  {
    title:'Replanteo',
    text: 'Gana dinero pasivamente incluso mientras duermes',
  },
  {
    title:'Airdrop',
    text: 'Obtenga tokens de valor gratuitos de los principales proyectos globales',
  },
  {
    title:'Eventos',
    text: 'Gana grandes recompensas de eventos de billetera divirtiéndote',
  },
  {
    title:'Launchpad',
    text: 'Participa IDO de los mejores proyectos a nivel global',
  },
  {
    title:'Estrategia de mercado',
    text: 'Obtenga estrategias diarias de expertos',
  },
  {
    title:'Programa de referencia',
    text: 'Recompensas gratuitas por compartir dispositivos de Wallets con la comunidad',
  },
]

const containerStyle = {
  mt: '3em',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: 20,
  marginInline: 'auto',
  justifyContent: 'center',
};

const boxStyle = {
  borderBottom: '2px solid white',
  marginBottom: '2px',
  textAlign: 'justify',
  background: 'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
  color:'white',
  padding:'0.5em 1em',
  borderRadius:'30px',

};

export const MultiUtility = () => {
  return (
    <Box sx={containerStyle}>
      {data.map((item, index) => (
        <Box key={index} style={boxStyle}>
          <Typography variant="h6" sx={{fontWeight:'bold'}}>{item.title}</Typography>
          <Typography sx={{mb:'2em', textAlign:'justify'}}>{item.text}</Typography>
          <hr style={{color:'white', fontSize:'20px',}}/>
        </Box>
      ))}
    </Box>
  );
};