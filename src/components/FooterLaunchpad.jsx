import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import DiscordIcon from '../assets/icons/icons8-discord.svg'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'

const iconStyle = {
  borderRadius: '50%',
  backgroundColor: '#f6f6f6',
  padding: '10px',
  marginRight: '10px',
}

export const FooterLaunchpad = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();
 
  return (
    <Box sx={{background:'white',}}>
    <Box
      sx={{
        mt: '5em',
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
        maxWidth: '1000px',
        margin: 'auto',
        padding: '2em',
      }}
    >
      {/* <img src={imgLogo} width={isMobile ? '100%' : "20%"} /> */}
      <Logo />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '650px',
          }}
        >
          <Typography>
            {t("LAUNCHPAD_FOOTER")}
          </Typography>
          <Typography
            textAlign="left"
            variant="h6"
            fontWeight="700"
            color="#14A8FC"
          >
            contact@therabbit.io
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Box sx={iconStyle}>
            <TwitterIcon sx={{ color: '#b1b5c3' }} />
          </Box>
          <Box sx={iconStyle}>
            <TelegramIcon sx={{ color: '#b1b5c3' }} />
          </Box>
          <Box sx={{ ...iconStyle }}>
            <img
              src={DiscordIcon}
              alt="Discord Icon"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                color: '#b1b5c3',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          borderTop: '1px solid black',
          mt: '0.5em',
          pt: '0.5em',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: isMobile ?'column':'row',  justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '1em' }}>
          <Typography>About us</Typography>
          <Typography>FAQs</Typography>
          <Typography>Docs</Typography>
          <Typography>Terms of use</Typography>
        </Box>
        <Box >
          <Typography>© 2000-2024, All Rights Reserved</Typography>
        </Box>
      </Box>
    </Box>
    </Box>
   
  )
}
