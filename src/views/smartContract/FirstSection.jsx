import { Box, Button, Typography, useTheme, useMediaQuery, Stack } from '@mui/material'
import solidprooficon from '../../assets/images/portal/solidprooficon.png'
import icon1 from '../../assets/images/portal/smart/image-1.png'
import icon2 from '../../assets/images/portal/smart/image-2.png'
import icon3 from '../../assets/images/portal/smart/image-3.png'
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
        position: 'relative',
        display: 'flex',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: isMobile ? '100%' : '900px',
          marginTop: '40px',
          width: '100%',
        }}
      >
        <Typography
          variant='h3'
          fontWeight='900'
          fontSize='80px'
          top={-40}
          className='absolute text-white text-shadow -z-10'
        >
          {t("TITLE_SMARTCONTRACT")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '35px',
            fontWeight: '600',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          {t('TITLE_SMARTCONTRACT')}
        </Typography>
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
                  color: '#0A85D9',
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
              color: '#0A85D9',
              mt: '10px',
              mb: '10px',
            }}
          >
            {t('SUBTITLE3')}
          </Typography>
          <a href='https://github.com/solidproof/projects/tree/main/Wallet%20Token'>
            https://github.com/solidproof/projects/tree/main/Wallet%20Token
          </a>
          <img
            src={solidprooficon}
            alt="img solidProof"
            className='saturate-0 brightness-50'
            style={{ height: '100px', marginTop: '10px', marginBottom: '5px' }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: '35px',
              fontWeight: '800',
              marginTop: '20px',
              marginBottom: '25px',
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
            {
              [icon1, icon2, icon3].map((src, index) => (
                <Stack key={index} gap={2}>
                  <img src={src} width={328} height={98} style={{ marginRight: '10px' }} />
                  <Box className='h-1 my-1 rounded-lg bg-black' />
                </Stack>
              ))
            }
          </Box>
          <Link to='/buywallets'>
            <Button
              sx={{
                background: '#0A85D9',
                borderRadius: '40px',
                paddingX: '30px',
                marginY: '50px',
                fontWeight: '600',
                fontSize: '25px',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              {t('BUTTONNAME')}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}