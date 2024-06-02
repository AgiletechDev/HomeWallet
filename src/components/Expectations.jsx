import { Box, Typography, useTheme, useMediaQuery  } from '@mui/material'
import { useTranslation } from 'react-i18next'
import imgIcon1 from '../assets/pages/home/grid.01.svg'
import imgIcon2 from '../assets/pages/home/grid.02.svg'
import imgIcon3 from '../assets/pages/home/grid.03.svg'
import imgIcon4 from '../assets/pages/home/grid.04.svg'
import imgIcon5 from '../assets/pages/home/grid.05.svg'
import imgIcon6 from '../assets/pages/home/grid.06.svg'
import imgIcon7 from '../assets/pages/home/grid.07.svg'
import imgIcon8 from '../assets/pages/home/grid.08.svg'
import imgIcon9 from '../assets/pages/home/grid.09.svg'


export const Expectations = () => {
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const containerStyle = {
  mt: '3em',
  display: 'grid',
  gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)',
  gridGap: 40,
  marginInline: 'auto',
  justifyContent: 'center',

};

const boxStyle = {
  marginBottom: '2px',
  textAlign: 'center',
  padding:'1em',
  justifyContent:'center',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
};



  const { t } = useTranslation();
  const data = [
    {
      text: t("TEXT_EXPECTATIONS"),
      image: imgIcon1,
    },
    {
      text: t("TEXT_EXPECTATIONS2"),
      image: imgIcon2,
    },
    {
      text: t("TEXT_EXPECTATIONS3"),
      image: imgIcon3,
    },
    {
      text: t("TEXT_EXPECTATIONS4"),
      image: imgIcon4,
    },
    {
      text: t("TEXT_EXPECTATIONS5"),
      image: imgIcon5,
    },
    {
      text: t("TEXT_EXPECTATIONS6"),
      image: imgIcon6,
    },
    {
      text: t("TEXT_EXPECTATIONS7"),
      image: imgIcon7,
    },
    {
      text: t("TEXT_EXPECTATIONS8"),
      image: imgIcon8,
    },
    {
      text: t("TEXT_EXPECTATIONS9"),
      image: imgIcon9,
    },
  ]

  return (
    <Box sx={containerStyle}>
      {data.map((item, index) => (
        <Box
          key={index}
          className='border-b-4 border-black/70'
          style={boxStyle}
        >
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            style={{ width: '20%', margin: 'auto' }}
          />
          <Typography
            sx={{
              mt:'0.5em',
              mb:'2em',
              textAlign:'center',
              fontWeight:'bold'
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};