import { Box, Typography, useTheme, useMediaQuery  } from '@mui/material'
import iconotelegram from '../assets/images/portal/svg/iconotelegram.svg'
import iconox from '../assets/images/portal/svg/iconox.svg'
import iconodiscord from '../assets/images/portal/svg/iconodiscord.svg'
import iconoYT from '../assets/images/portal/svg/iconoYT.svg'

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
        height: '100%',
        padding:'2em'
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
          background: 'linear-gradient(to right, #3b3f78 14%, #486284 83%)',
          boxShadow: '0px 10px 35px rgba(0, 0, 0, 0.1)',
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
            sx={{
              color: 'white',
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
              color: 'white',
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
            color: 'white',
          }}
        >
          CONTACT US
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
            sx={{ fontSize: '20px', mr: '10px', color: 'white' }}
          >
            Email:
          </Typography>
          <a
            href="mailto:contact@agrawallet.com"
            style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}
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
            marginTop: '20px',
            marginBottom: '20px',
            gap:'40px'
          }}
        >
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img
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
              src={iconoYT}
              alt="youtube"
              style={{ width: '50px' }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
