import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/Group 2.png'
import imgSect2 from '../../assets/images/portal/section A.png'
import imgSect3 from '../../assets/images/portal/A.png'
import { MultiUtility } from '../../components/MultiUtility'

export const SecondSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '900px',
          position: 'relative',
          mt: '5em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
            zIndex: '1',
            position: 'absolute',
            top: '300px',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#26abdf">
            Wallet
          </Typography>
          <Typography>
            Supports over{' '}
            <span style={{ fontWeight: 'bold' }}>14 leading blockchains</span>{' '}
            <br />
            Track real-time charts and prices for each token
          </Typography>
        </Box>

        <Box>
          <img
            src={imgSect1}
            style={{ width: '10%', zIndex: '-1', marginLeft: '100px' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '900px',
          position: 'relative',
          mt: '5em',
        }}
      >
        <img src={imgSect2} style={{ width: '50%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            ml: '2em',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#26abdf">
            Swap
          </Typography>
          <Typography>
            Swap over <span style={{ fontWeight: 'bold' }}>3000 tokens</span> on
            multiple chains:
          </Typography>
          <ul>
            <li>Ethereum</li>
            <li>Binance</li>
            <li>Bitcoin</li>
          </ul>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '900px',
          mt: '5em',
          marginInline: 'auto',
          gap:'50px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '0 1 50%',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#26abdf">
            Multi utility
          </Typography>
          <Typography>Enhance user experience</Typography>
          <MultiUtility />
        </Box>
        <Box
          sx={{
            flex: '0 1 50%',
          }}
        >
          <img src={imgSect3} />
        </Box>
      </Box>
    </>
  )
}
