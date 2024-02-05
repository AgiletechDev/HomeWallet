import { Box, Button, Typography, useTheme, useMediaQuery  } from '@mui/material'
import rabbit from '../../assets/images/launchpad/imagesectionA.png'
import bitcoin from '../../assets/images/launchpad/bitcoin.png'
import etherum from '../../assets/images/launchpad/etherum.png'

export const FirstSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          alignItems:  isMobile ? 'center' : 'start',
          justifyContent:  isMobile ? 'center' : 'start',
          minHeight: '60%',
          paddingTop: '60px',
          paddingLeft: isMobile ? '1em' : '1em',
          paddingRight: isMobile ? '1em' : 0,
          marginBottom: '40px',
        }}
      >
        <Box
          sx={{  display: 'flex',
          flexDirection: 'column',
          alignItems:  isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'left',
          width: '100%',
          maxWidth: isMobile ? '100%' : '600px',
          margin: isMobile ? 'auto' : 0, }}
        >
          <Typography
            variant="h2"
            component="p"
            sx={{
              color: '#14A8FC',
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
              color: '#14A8FC',
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
              color: '#14A8FC',
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
                background: 'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)'
              }}
            >
              Connect Wallet
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'initial' }}>
              How to Start
            </Button>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ marginRight: '10px', fontSize: '13px' }}>
              Powered by
            </Typography>
            <Typography sx={{ color: '#14A8FC', fontWeight: '600' }}>
              AGILETECH
            </Typography>
          </Box>
        </Box>
          <Box>
          <img src={rabbit} alt="img rabbbit" style={{height: isMobile ? '50%' : '60%',
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
