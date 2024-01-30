import { Box, Typography } from '@mui/material'
import imgIcon1 from '../assets/images/portal/A.png'

const data = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis iusto veritatis cumque. Id incidunt unde',
    image: imgIcon1,
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
  borderBottom: '2px solid black',
  marginBottom: '2px',
  textAlign: 'center',
};

export const Expectations = () => {
  return (
    <Box sx={containerStyle}>
      {data.map((item, index) => (
        <Box key={index} style={boxStyle}>
          <img src={item.image} alt={`Image ${index + 1}`} style={{ width: '10%', margin: 'auto' }} />
          <Typography sx={{mb:'2em', textAlign:'center'}}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};