import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import rabbit from '../../assets/images/launchpad/imagesectionA.png'
import CurrentSale from '../../components/CurrentSale'
import icono from '../../assets/images/launchpad/icono.png'

export const ListGrowsView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{ width: isMobile ? '100%' : '1000px', padding: '1em' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: '5em',
              gap: '2em',
            }}
          >
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              variant="h3"
              fontWeight="700"
              color="#14A8FC"
            >
              Connect your wallet
            </Typography>
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              variant="h3"
              fontWeight="700"
            >
              & start exploring
            </Typography>
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              variant="h5"
              fontWeight="700"
            >
              Here you are - Wallet LaunchPad
            </Typography>
            <Box
              sx={{
                mt: '2em',
                display: 'flex',
                gap: '20px',
                justifyContent: isMobile ? 'center' : 'start',
              }}
            >
              <Button
                sx={{
                  background:
                    'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)',
                  color: 'white',
                  borderRadius: '5px',
                }}
              >
                Connect Wallet
              </Button>
            </Box>
            <Typography textAlign="left" variant="h6" fontWeight="700">
              Powered by{' '}
              <span
                style={{
                  color: '#14A8FC',
                  textTransform: 'uppercase',
                  textStyle: 'italic',
                }}
              >
                Agiletech
              </span>
            </Typography>
          </Box>

          <Box>
            <img src={rabbit} alt="img rabbbit" />
          </Box>
        </Box>
        <Box
          width="100%"
          marginTop="40px"
          marginBottom="50px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#000',
              fontWeight: '600',
              fontSize: '25px',
              marginBottom: '10px',
            }}
          >
            Current Sale
          </Typography>

          <CurrentSale />

          <TextField
            placeholder="Enter token name or token symbol"
            fullWidth={true}
          />
          <img
            src={icono}
            alt="icono"
            style={{ width: '50px', marginTop: '2em' }}
          />
          <Button
            sx={{
              color: 'white',
              mt: '2em',
              border: '1px solid #14A8FC',
              alignSelf: 'strech',
              background:
                'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)',
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
