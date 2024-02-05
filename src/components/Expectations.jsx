import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import imgIcon1 from '../assets/images/portal/pag1/icono 1.png'
import imgIcon2 from '../assets/images/portal/pag1/icono 2.png'
import imgIcon3 from '../assets/images/portal/pag1/icono 3.png'
import imgIcon4 from '../assets/images/portal/pag1/icono 4.png'
import imgIcon5 from '../assets/images/portal/pag1/icono 5.png'
import imgIcon6 from '../assets/images/portal/pag1/icono 6.png'
import imgIcon7 from '../assets/images/portal/pag1/icono 7.png'
import imgIcon8 from '../assets/images/portal/pag1/icono 8.png'
import imgIcon9 from '../assets/images/portal/pag1/icono 9.png'
import { t } from 'i18next'





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
        <Box key={index} style={boxStyle}>
          <img src={item.image} alt={`Image ${index + 1}`} style={{ width: '20%', margin: 'auto' }} />
          <Typography sx={{mt:'0.5em',mb:'2em', textAlign:'center',fontWeight:'bold'}}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};