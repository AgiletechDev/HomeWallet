import { Box, Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 2.png'
import imgSect3 from '../../assets/images/portal/pag1/vista 3.png'
import qr from '../../assets/images/portal/qr.svg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaAngleDown, FaAngleUp, FaChevronRight } from 'react-icons/fa'
import background from './../../assets/images/background.svg'

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
          width: '100%',
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
            }}
          >
            <Typography
              className='text-white text-shadow sm:translate-y-8 -z-10'
              variant='h3'
              fontWeight='900'
              fontSize={{xs:'40px', sm:'80px'}}
            >
              SECURITY
            </Typography>
            <Typography
              variant="h4"
              fontWeight="800"
            >
              <span className='sm:text-nowrap'>{t("SUBTITLE_SECTION3")}</span>
              <br />
              <span className='text-lg sm:text-2xl text-white text-nowrap saturate-0 text-shadow px-2'>
                {t("SUBTITLE_SECTION3.2")}
              </span>
              <span className='text-2xl sm:text-nowrap'>{t("SUBTITLE_SECTION3.3")}</span>
            </Typography>
            <ul className='mt-16 flex flex-col gap-4' style={{ fontSize: '20px' }}>
              <li className='flex gap-3'>
                <FaChevronRight color='#0A85D9' size={16} className='size-4' />
                <span>{t("TEXT1_SECTION3")}</span>
              </li>
              <li className='flex gap-3'>
                <FaChevronRight color='#0A85D9' size={16} className='size-4' />
                <span>{t("TEXT2_SECTION3")}</span>
              </li>
              <li className='flex gap-3'>
                <FaChevronRight color='#0A85D9' size={16} className='size-4' />
                <span>{t("TEXT3_SECTION3")}</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img src={imgSect1} style={{ width: '90%' }} />
        </Box>
      </Box>

      <Stack
        justifyContent='space-between'
        sx={{
          width: isMobile ? '100%' : '900px',
          position: 'relative',
          mt: '5em',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            gap: 8,
            padding: '2em',
          }}
        >
          <Box>
            <Typography
              className='bg-gradient-main bg-clip-text text-transparent'
              variant="h4"
              fontWeight="800"
            >
              DOWNLOAD NOW
            </Typography>
            <Typography>
              {t("TEXT3_SECTION2")}
            </Typography>
          </Box>
          <Stack direction='row' gap={4}>
            <Box>
              <img width={133} height={133} src={qr} />
            </Box>
            <Stack flexGrow={1} justifyContent='center'>
              <Typography>
                Scan to download
              </Typography>
              <Typography fontWeight={900} fontSize='20px'>
                App Wallet
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <img src={imgSect3} style={{ width: '100%', zIndex: '-1' }} />
        </Box>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          mt: '5em',
          marginInline: 'auto',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          paddingX: 'calc(50% - 450px)',
          backgroundImage: `url(${background})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center center',
        }}
      >
        <Typography
          variant='h3'
          fontWeight='900'
          fontSize='80px'
          className='text-white text-shadow'
        >
          FAQ
        </Typography>
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
            width: '100%',
            mb: '3em',
            gap: 2,

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
                className='flex items-center gap-2'
                style={{ cursor: 'pointer', outline: 'none', color: '#0A85D9' }}
              >
                {
                  openIndex === index ?
                  <FaAngleUp size={16} />:
                  <FaAngleDown size={16} />
                }
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
              <Box
                className='h-[1px] my-1 bg-[#0A85D9]/40'
              />
            </div>
          ))}
        </Box>
      </Box>
    </>
  )
}
