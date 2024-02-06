import { Box, Button, Typography, useTheme, useMediaQuery  } from '@mui/material'
import rabbit from '../../assets/images/launchpad/personaje.png'
import bitcoin from '../../assets/images/launchpad/bitcoin.png'
import etherum from '../../assets/images/launchpad/etherum.png'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems:  isMobile ? 'center' : 'center',
          justifyContent:  isMobile ? 'center' : 'center',
          minHeight: '60%',
          paddingTop: '60px',
          paddingLeft: isMobile ? '1em' : '1em',
          paddingRight: isMobile ? '1em' : 0,
          marginBottom: '40px',
          maxWidth: isMobile ? '100%' : '1000px'
        }}
      >
        <Box
          sx={{  display: 'flex',
          flexDirection: 'column',
          alignItems:  isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'left',
          width: '100%',
          maxWidth: isMobile ? '100%' : '900px',
          margin: isMobile ? 'auto' : 0, }}
        >
          <Typography
            variant="h2"
            component="p"
            sx={{
              color: '#3e387b',
              fontSize: '45px',
              fontWeight: '600',
              marginBottom: '35px',
            }}
          >
            Safest
          </Typography>
          <Typography
            variant="h2"
            component="p"
            sx={{
              color: '#3e387b',
              fontSize: '45px',
              fontWeight: '600',
              marginBottom: '35px',
            }}
          >
            The most Profitable
          </Typography>
          <Typography
            variant="h2"
            component="p"
            sx={{
              color: '#3e387b',
              fontSize: '45px',
              fontWeight: '600',
              marginBottom: '35px',
            }}
          >
            The most Convenient
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#000',
              fontWeight: '600',
              fontSize: '25px',
              marginBottom: '35px',
            }}
          >
            Here you are - Wallet LaunchPad
          </Typography>

          <Box sx={{ display: 'flex', marginBottom: '30px' }}>
            <Button
              variant="contained"
              sx={{
                marginRight: '10px',
                borderRadius: '10px',
                textTransform: 'initial',
              background: 'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)'
              }}
            >
              Connect Wallet
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'initial', border: '1px solid #3e387b', color:'black' }}>
              How to Start
            </Button>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ marginRight: '10px', fontSize: '13px' }}>
              Powered by
            </Typography>
            <Typography sx={{ color: '#3e387b', fontWeight: '600' }}>
              AGILETECH
            </Typography>
          </Box>
        </Box>
          <Box>
          <img src={rabbit} alt="img rabbbit" style={{width: isMobile ? '50%' : '100%',
            flexShrink: 0,
            marginLeft: isMobile ? 'auto' : '0',
            marginRight: isMobile ? 'auto' : '0',}}/>
          </Box>
       
      </Box>


      <Box
        sx={{
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center',
          marginTop: '50px',
          backgroundColor:'#f1fbff',
          padding:'2em',
          boxShadow: '0px 8px 10px -5px rgba(0, 0, 0, 0.1), 0px -8px 10px -5px rgba(0, 0, 0, 0.1)',
          width: isMobile ? '90%' : '100%',
          margin:'auto'
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Typography
            variant="p"
            sx={{ marginRight: '10px', fontSize: '23px' }}
          >
            Suppported
          </Typography>
          <Typography
            variant="p"
            sx={{ marginRight: '10px', fontSize: '23px', fontWeight: '600' }}
          >
            Blockchains
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap:'10px'
          }}
        >
          <img src={etherum} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={bitcoin} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={etherum} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={bitcoin} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={etherum} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={bitcoin} alt="etherum" style={{ marginRight: '50px' }} />
        </Box>
      </Box>
    </Box>
    
  )
}
