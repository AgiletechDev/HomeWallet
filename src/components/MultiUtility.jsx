import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'


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

  const { t } = useTranslation()

  const data = [
    {
      title: t("MULTIPLY_TITLE1"),
      text: t("MULTIPLY_TEXT1"),
    },
    {
      title: t("MULTIPLY_TITLE2"),
      text: t("MULTIPLY_TEXT2"),
    },
    {
      title: t("MULTIPLY_TITLE3"),
      text: t("MULTIPLY_TEXT3"),
    },
    {
      title: t("MULTIPLY_TITLE4"),
      text: t("MULTIPLY_TEXT4"),
    },
    {
      title: t("MULTIPLY_TITLE5"),
      text: t("MULTIPLY_TEXT5"),
    },
    {
      title: t("MULTIPLY_TITLE6"),
      text: t("MULTIPLY_TEXT6"),
    },
    {
      title: t("MULTIPLY_TITLE7"),
      text: t("MULTIPLY_TEXT7"),
    },
  ]

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