import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 2.png'

import imgSect3 from '../../assets/images/portal/pag1/ilustracion 3.png'
import qr from '../../assets/images/portal/pag1/apps 1.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ThirdSection = () => {
  //
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const { t } = useTranslation()


  const preguntasRespuestas = [
    {
      pregunta: t("PREGUNTA1"),
      respuesta:
      t("RESPUESTA1"),
    },
    {
      pregunta: t("PREGUNTA2"),
      respuesta:
      t("RESPUESTA2"),
    },
    {
      pregunta: t("PREGUNTA3"),
      respuesta:
      t("RESPUESTA3"),
    },
    {
      pregunta: t("PREGUNTA4"),
      respuesta:
      t("RESPUESTA4"),
    },
    {
      pregunta: t("PREGUNTA5"),
      respuesta:
      t("RESPUESTA5"),
    },
    {
      pregunta: t("PREGUNTA6"),
      respuesta:
      t("RESPUESTA6"),
    },
  ]

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row-reverse',
          width: isMobile ? '100%' : '900px',
          margin: '0',
          mt: '5em',
          zIndex: '1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'black',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'justify',
              zIndex: '10',
              padding: '2em',
              color: '#4d4d4d',
            }}
          >
            <Typography variant="h4" fontWeight="800" color="#4d4d4d">
              {t("SUBTITLE_SECTION3")}
            </Typography>
            <ul style={{ fontSize: '20px' }}>
              <li>
                {t("TEXT1_SECTION3")}
              </li>
              <li>
                {t("TEXT2_SECTION3")}
              </li>
              <li>
                {t("TEXT3_SECTION3")}
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img src={imgSect1} style={{ width: '90%' }} />
        </Box>
      </Box>

      <Box sx={{ position: 'relative', mt: '5em' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            padding: '2em',
            width: isMobile ? '100%' : '900px',
            background:
              'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            zIndex: 1,
            color: 'white',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{textAlign:isMobile ? 'center' : 'left'}}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '800',
                mt: '0.5em',
              }}
            >
              {t("DOWNLOAD")}
            </Typography>
            <Typography fontWeight="bold" sx={{ }}>
              {t("DOWNLOAD_TEXT")}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                mt: '7em',
                gap: '20px',
              }}
            >
              <img src={qr} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>{t("SCAN_DONWLOAD")}</Typography>
                <Typography variant="h6" fontWeight="bold">
                  App Wallet
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src={imgSect3} style={{ marginTop: '1em',width: '100%' }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: isMobile ? '100%' : '900px',
          mt: '5em',
          marginInline: 'auto',
          gap: '50px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="800"
          color="#4d4d4d"
          sx={{ textAlign: 'center' }}
        >
          {t("FREQUENT_QUESTIONS")}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

            textAlign: 'justify',
            maxWidth: '100%',
            mb: '3em',

            details: {
              borderRadius: '8px',
              marginBottom: '1em',
              padding: '1em',
            },
            summary: {
              cursor: 'pointer',
              userSelect: 'none',
              color: '#4d4d4d',
              padding: '0.5em',
              borderRadius: '4px',
              marginBottom: '0.5em',
              fontSize: '18px',
              fontWeight: '600',
            },
          }}
        >
          {preguntasRespuestas.map((item, index) => (
            <div key={index} style={{ listStyle: 'none' }}>
              <summary
                onClick={() => handleToggle(index)}
                style={{ cursor: 'pointer', outline: 'none' }}
              >
                {item.pregunta}
              </summary>
              {openIndex === index && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    padding: '1em',
                    textAlign: 'justify',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'darkgray',
                  }}
                >
                  {item.respuesta}
                </Typography>
              )}
              <hr />
            </div>
          ))}
        </Box>
      </Box>
    </>
  )
}
