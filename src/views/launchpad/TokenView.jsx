import { Box, Typography, Button, Card, TextField } from '@mui/material'
import image11 from '../../assets/images/launchpad/image11.png'

export const TokenView = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Create Token
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <Card
            sx={{
              mt: '3em',
              width: '100%',
              height: '300px',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '20px',
              paddingLeft: '50px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: '10px' }}
              >
                With Rabbit Create Token you do not need complicated knowledge,
                create a separate Token for you and your project with simple
                operations after a few mouse clicks
              </Typography>

              <Button
                variant="contained"
                sx={{
                  marginTop: '30px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  textTransform: 'initial',
                  marginRight: '330px',
                }}
              >
                Connect Wallet
              </Button>
            </Box>

            <img src={image11} alt="image11" />
          </Card>
          <Box
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '20px',
              mt: '2em',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
          >
            <Typography textAlign="left" variant="h5" fontWeight="bold">
              Name
            </Typography>
            <TextField label="Binance" placeholder="0.0" fullWidth="true" />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              Title
            </Typography>

            <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              Symbol
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
            <Typography textAlign="left" variant="h5" fontWeight="bold">
              Decimals
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
            <Typography textAlign="left" variant="h5" fontWeight="bold">
              Total Supply
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
          </Box>
          <Typography textAlign="left" variant="p">
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
              borderRadius: '10px',
              textTransform: 'initial',
              marginRight: '330px',
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
