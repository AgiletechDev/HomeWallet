import { Box, Typography, Button, TextField } from '@mui/material'
import rabbit from '../../assets/images/launchpad/imagesectionA.png'
import CurrentSale from '../../components/CurrentSale'

export const ListGrowsView = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: '5em',
              gap: '2em',
            }}
          >
            <Typography
              textAlign="left"
              variant="h3"
              fontWeight="700"
              color="#14A8FC"
            >
              Connect your wallet
            </Typography>
            <Typography textAlign="left" variant="h3" fontWeight="700">
              & start exploring
            </Typography>
            <Typography textAlign="left" variant="h5" fontWeight="700">
              Here you are - Wallet LaunchPad
            </Typography>
            <Box sx={{ mt: '2em' }}>
              <Button>Connect Wallet</Button>
              <Button>How to Start</Button>
            </Box>
            <Typography textAlign="left" variant="h6" fontWeight="700">
              Powered by Agiletech
            </Typography>
          </Box>

          <Box>
            <img src={rabbit} alt="img rabbbit" />
          </Box>
        </Box>
        <Box width="85%" marginTop="40px" marginBottom="50px">
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
            fullWidth="true"
          />
          <Button
            sx={{ mt: '2em', border: '1px solid #14A8FC', alignSelf: 'strech' }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
