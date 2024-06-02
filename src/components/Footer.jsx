import { Box, Typography, useTheme, useMediaQuery, Stack  } from '@mui/material'
import iconotelegram from '../assets/images/portal/svg/iconotelegram.svg'
import iconox from '../assets/images/portal/svg/iconox.svg'
import iconodiscord from '../assets/images/portal/svg/iconodiscord.svg'
import iconoYT from '../assets/images/portal/svg/iconoYT.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: isMobile ? '90%' :'70%',
          height:  isMobile ? '80%' :'60%',
          textAlign: 'center',
          margin: 'auto',
          borderRadius: '10px',
          background: 'white',
          marginY: 15,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            mt:'1em'
          }}
        >
          <Typography
            variant="h6"
            component="p"
            className='bg-gradient-main bg-clip-text text-transparent'
            sx={{
              marginRight: '8px',
              fontSize: '15px',
              letterSpacing: '1px',
            }}
          >
            Powered by
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            AGILETECH
          </Typography>
        </Box>

        <Typography
          variant="p"
          component="p"
          sx={{
            fontSize: '25px',
            letterSpacing: '2px',
            marginBottom: '20px',
          }}
        >
          {t("CONTACT_US")}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: '20px', mr: '10px' }}
          >
            Email:
          </Typography>
          <a
            href="mailto:contact@agrawallet.com"
            style={{ textDecoration: 'none', fontSize: '20px' }}
          >
            contact@agrawallet.com
          </a>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img
              className='invert'
              src={iconotelegram}
              alt="telegram"
              style={{width: '40px' }}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className='invert'
              src={iconox}
              alt="twitter"
              style={{ width: '40px' }}
            />
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className='invert'
              src={iconodiscord}
              alt="discord"
              style={{ width: '50px' }}
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
              className='invert'
              src={iconoYT}
              alt="youtube"
              style={{ width: '50px' }}
            />
          </a>
        </Box>
      </Box>
      <Stack sx={{background: 'black', justifyContent: 'center', alignItems:'center', padding: 2}}>
        <Typography color='white'>
          Copyright 2024 © Wallet. All Right Reserved
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
