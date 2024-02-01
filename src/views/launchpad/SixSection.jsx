import { Box, Typography, Button, Card, TextField } from '@mui/material'
import { FooterLaunchpad } from '../../components'
import image11 from '../../assets/images/launchpad/image11.png'

export const SixSection = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Create RAB Sale
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
                Raise capital and launch your project with easy steps and the
                best fees in the market to reach our global investors.
                Automatically list your Token after successful fundraising on:
                PancakeSwap, UniSwap
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
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Let`s Start
          </Typography>
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
            <Typography textAlign="left" variant="h4" fontWeight="bold">
              Verify Token
            </Typography>
            <Typography textAlign="left" variant="h5" fontWeight="bold">
              Enter the token address and verify
            </Typography>
            <TextField
              label="Token Address"
              placeholder="0.0"
              fullWidth="true"
            />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              Currency
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '1em',
              }}
            >
              <TextField label="BUSD" placeholder="0.0" fullWidth="true" />
              <TextField label="BNB" placeholder="0.0" fullWidth="true" />
            </Box>
            <Typography textAlign="left" variant="h5" fontWeight="bold">
              Afiliate Program
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: '1em',
              }}
            >
              <TextField
                label="Disable Affiliate"
                placeholder="0.0"
                fullWidth="true"
              />
              <TextField
                label="Enable Affiliate"
                placeholder="0.0"
                fullWidth="true"
              />
            </Box>
          </Box>
          <Typography textAlign="left" variant="p">
            Warning: Disclaimer: Make sure your token is not listed on any AMM
            yet The information provided shall not in any way constitute a
            recommendation as to whether you should invest in any product
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
      <FooterLaunchpad />
    </Box>
  )
}
