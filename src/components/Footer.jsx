import { Box, Typography } from '@mui/material'
import telegram from '../assets/images/portal/telegram.png'
import twitter from '../assets/images/portal/twitter.png'
import discord from '../assets/images/portal/discord.png'
import youtube from '../assets/images/portal/youtube.png'

const Footer = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        // marginTop: '10px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '70%',
          height: '60%',
          textAlign: 'center',
          margin: 'auto',
          borderRadius: '20px',
          boxShadow: '0px 10px 35px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#006EFD',
              marginRight: '8px',
              fontSize: '18px',
            }}
          >
            Powered by
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: '25px',
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
          CONTACT US
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: '20px', fontWeight: '600', mr: '10px' }}
          >
            Email:
          </Typography>
          <a
            href="mailto:contact@wallet.com"
            style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}
          >
            contact@wallet.com
          </a>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img
              src={telegram}
              alt="telegram"
              style={{ marginRight: '50px', width: '40px' }}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              style={{ marginRight: '50px', width: '40px' }}
            />
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={discord}
              alt="discord"
              style={{ marginRight: '50px', width: '40px' }}
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtube}
              alt="youtube"
              style={{ marginLeft: '10px', width: '40px' }}
            />
          </a>
        </Box>
      </Box>

      <footer
        style={{
          background: 'black',
          height: '45px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '-10px',
          marginLeft:'-10px',
          marginRight:'-8px',

        }}
      >
        <p>Copyright 2024 © Wallet. All Right Reserved</p>
      </footer>
    </Box>
  )
}

export default Footer
