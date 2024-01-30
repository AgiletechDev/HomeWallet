import { Box, Typography } from '@mui/material'


const data = [
  {
    title:'News',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Stalking',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Airdrop',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Event',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Launchpad',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Market strategy',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
  },
  {
    title:'Referral Program',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
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
  borderBottom: '2px solid black',
  marginBottom: '2px',
  textAlign: 'justify',
};

export const MultiUtility = () => {
  return (
    <Box sx={containerStyle}>
      {data.map((item, index) => (
        <Box key={index} style={boxStyle}>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>{item.title}</Typography>
          <Typography sx={{mb:'2em', textAlign:'justify'}}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};