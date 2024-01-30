import { Box, Typography } from '@mui/material'
import imgLogo from '../../assets/images/portal/logo.png'
import imgSect1 from '../../assets/images/portal/section A.png'
import { Expectations } from '../../components/Expectations'

export const FirstSection = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2em',
            height: '300px',
            boxShadow: '0 4px 8px rgba(38, 171, 223, 0.5)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <img src={imgLogo} style={{ width: '20%' }} />
          <Typography
            variant="h4"
            sx={{
              color: '#26abdf',
              fontWeight: '800',
              textAlign: 'center',
              mt: '0.5em',
            }}
          >
            NEW GENERATION MULTI-UTILITYDEX
            <br />
            WALLET SUPER APP
          </Typography>
        </Box>
        <img
          src={imgSect1}
          style={{
            width: '100%',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        />
      </Box>

      <Box
        sx={{
          mt: '15em',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1em',
          position: 'relative',
          maxWidth: '900px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#26abdf',
            fontWeight: '800',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          MORE THAN YOUR EXPECTATION
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          Wallet is All You Need to Access Crypto World
        </Typography>
        <Expectations />
      </Box>
    </>
  )
}
