import React from 'react'
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material'
import solidprooficon from '../../assets/images/portal/solidprooficon.png'
import cuadro1 from '../../assets/images/portal/cuadro1.png'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2 from '../../assets/images/portal/apoyo2.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const shortenUrl = (url, isMobile) => {
  if (isMobile) {
    return url.substring(0, 20) + '...'
  }
  return url
}

export const FirstSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const title1 = t('SUBTITLE1')
  const title2 = t('SUBTITLE2')

  const list = [
    {
      title: title1,
      url: 'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
    },
    {
      title: title2,
      url: 'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {!isMobile && (
        <>
          <img
            src={apoyo2}
            alt="lineas"
            width="400px"
            height="300px"
            style={{ position: 'absolute', top: '50%', left: '-200px' }}
          />
          <img
            src={apoyo2_1}
            alt="lineas"
            width="500px"
            height="600px"
            style={{ position: 'absolute', top: '55%', left: '0', zIndex: -1 }}
          />
        </>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: isMobile ? '100%' : '900px',
          marginTop: '40px',
          width: isMobile ? '100%' : '99vw',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '35px',
            fontWeight: '600',
            marginTop: '20px',
            color: '#33277b',
            textAlign: 'center',
          }}
        >
          {t('TITLE_SMARTCONTRACT')}
        </Typography>
        <img src={lineahorizonta1} alt="" width="25%" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {list.map(({ title, url }, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                  color: '#33277b',
                  mt: '20px',
                }}
              >
                {title}
              </Typography>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  color: '#33277b',
                }}
              >
                {shortenUrl(url, isMobile)}
              </a>
            </div>
          ))}
          <Typography
            variant="h6"
            sx={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#33277b',
              mt: '10px',
              mb: '10px',
            }}
          >
            {t('SUBTITLE3')}
          </Typography>
          <img
            src={solidprooficon}
            alt="img solidProof"
            style={{ height: '100px', marginTop: '10px', marginBottom: '5px' }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: '35px',
              fontWeight: '800',
              marginTop: '20px',
              marginBottom: '25px',
              color: '#33277b',
            }}
          >
            {t('SUBTITLE4')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              width: '100%',
              gap: '30px',
              maxWidth: '700px',
            }}
          >
            <img src={cuadro1} alt="" style={{ marginRight: '10px' }} />
            <img src={cuadro1} alt="" style={{ marginRight: '10px' }} />
            <img src={cuadro1} alt="" style={{ marginRight: '10px' }} />
          </Box>
          <Link to='/buywallets'>
            <Button
              sx={{
                background: '#33277b',
                borderRadius: '20px',
                marginTop: '50px',
                fontWeight: '600',
                fontSize: '25px',
                color: 'white',
                textTransform: 'capitalize',
                mb:'2em'
              }}
            >
              {t('BUTTONNAME')}
            </Button>
          </Link>
        </Box>
      </Box>

      {!isMobile && (
        <>
          <img
            src={circulos}
            alt="lineas"
            width="100px"
            height="100px"
            style={{ position: 'absolute', bottom: '0%', right: '1%' }}
          />
          <img
            src={apoyo4}
            alt="lineas"
            width="500px"
            height="600px"
            style={{ position: 'absolute', top: '55%', right: '0', zIndex: -1 }}
          />
        </>
      )}
    </Box>
  )
}