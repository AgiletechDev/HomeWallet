import { Box, Typography, Button, Card, TextField,useTheme,
  useMediaQuery } from '@mui/material'
import image11 from '../../assets/images/launchpad/image 13.png'

export const TokenView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{  width: isMobile ? '100%' : '900px',  padding: '1em', mt: '5em' }}>
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
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              borderRadius: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2em 3em',
              }}
            >
              <Typography
                variant="p"
                fontWeight="600"
                sx={{ marginBottom: '10px', textAlign: 'justify' }}
              >
                With Rabbit Create Token you do not need complicated knowledge,
                create a separate Token for you and your project with simple
                operations after a few mouse clicks
              </Typography>
            </Box>

            <img src={image11} alt="image11" style={{}} />
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
              backgroundColor: 'white',
            }}
          >
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>Name
            </Typography>
            <TextField label="Binance" placeholder="0.0" fullWidth={true}/>
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>Symbol
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true} />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>Decimals
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true} />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>Total Supply
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true}/>
            <Typography
              textAlign="left"
              variant="body"
              fontWeight="600"
              color="#14A8FC"
            >
              Token creation fee: 0.18 BNB
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 'fit-content',
              margin: '0 auto',
              mb: '5em',
            }}
          >
            <Typography textAlign="justify" variant="p">
              <span style={{ color: '#14A8FC' }}>Disclaimer: </span>The
              information provided shall not in any way constitute a
              recommendation as to whether you should invest in any product
              discussed. We accept no liability for any loss occasioned to any
              person acting or refraining from action as a result of any
              material provided or published
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '30px',
                borderRadius: '10px',
                textTransform: 'initial',
                background:
                  'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)',
              }}
            >
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
