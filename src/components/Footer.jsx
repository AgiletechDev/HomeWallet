import { Box, Typography } from '@mui/material'
import iconotelegram from '../assets/images/portal/svg/iconotelegram.svg'
import iconox from '../assets/images/portal/svg/iconox.svg'
import iconodiscord from '../assets/images/portal/svg/iconodiscord.svg'
import iconoYT from '../assets/images/portal/svg/iconoYT.svg'


const Footer = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#191970',
        height: '500px',
        marginLeft: '-8px',
        width: '99vw',
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
          borderRadius: '10px',
          background: 'linear-gradient(to right, #3b3f78 14%, #486284 83%)',
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
              color: 'white',
              marginRight: '8px',
              fontSize: '15px',
              letterSpacing: '1px'
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
              color: 'white'
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
            color: 'white'
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img
              src={iconotelegram}
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
              src={iconox}
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
              src={iconodiscord}
              alt="discord"
              style={{ marginRight: '50px', width: '50px' }}
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
              style={{ marginLeft: '10px', width: '50px' }}
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
          // marginLeft:'-10px',
          // marginRight:'-8px',

        }}
      >
        <p>Copyright 2024 © Wallet. All Right Reserved</p>
      </footer>
    </Box>
  )
}

export default Footer
