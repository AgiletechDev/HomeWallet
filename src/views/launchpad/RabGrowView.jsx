import { Box, Typography, Button, Card, TextField } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import image11 from '../../assets/images/launchpad/image 17.png'

export const RabGrowView = () => {
  return (
    <Box sx={{ padding: '1em', mt: '5em', maxWidth: '900px' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Create RAB Grow
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <Card
            sx={{
              mt: '3em',
              width: '100%',
              display: 'flex',
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
                Direct connect the top 30 VCs from Rabbit Launchpad and get
                comprehensive Marketing support on social media platforms
              </Typography>

              <Button
                variant="contained"
                sx={{
                  marginTop: '30px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  textTransform: 'initial',
                  marginRight: '330px',
                  background:
                    'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)',
                }}
              >
                Connect Wallet
              </Button>
            </Box>

            <img src={image11} alt="image11" style={{}} />
          </Card>
          <Typography
            textAlign="center"
            variant="h3"
            fontWeight="bold"
            mt="1em"
          >
            Let`s Start
          </Typography>
          <Box
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '20px',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
              background: 'white',
            }}
          >
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Typography
                textAlign="left"
                variant="h5"
                fontWeight="bold"
                color="#14A8FC"
                sx={{
                  padding: '5px',
                  backgroundColor: '#d8f0ff',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                1
              </Typography>
              <Typography textAlign="left" variant="h5" fontWeight="bold">
                Verify Token
              </Typography>
            </Box>
            <Typography
              textAlign="left"
              variant="h6"
              fontWeight="600"
              color="#938f99"
            >
              Enter the token address and verify
            </Typography>
            <Typography textAlign="left" variant="h6" fontWeight="600">
              <span style={{ color: '#14A8FC' }}>*</span> Token Address
            </Typography>
            <TextField
              label="Token Address"
              placeholder="0.0"
              fullWidth="true"
            />
            <Typography
              textAlign="left"
              variant="body"
              fontWeight="600"
              color="#14A8FC"
            >
              Pool creation fee: 0.7 BNB
            </Typography>
            <Typography
              textAlign="left"
              variant="h6"
              fontWeight="bold"
              mt="0.5em"
            >
              <span style={{ color: '#14A8FC' }}>*</span> Currency
            </Typography>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="none"
                name="radio-buttons-group-currency"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: '2em',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      flex: '1',
                      borderRadius: '10px',
                      border: '1px solid gray',
                      padding: '0.5em',
                    }}
                  >
                    <FormControlLabel
                      value="BUSD"
                      control={<Radio />}
                      label="BUSD"
                    />
                  </Box>
                  <Box
                    sx={{
                      flex: '1',
                      borderRadius: '10px',
                      border: '1px solid gray',
                      padding: '0.5em',
                    }}
                  >
                    <FormControlLabel
                      sx={{}}
                      value="BNB"
                      control={<Radio />}
                      label="BNB"
                    />
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>

            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>*</span> Afiliate Program
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="none"
                name="radio-buttons-group-program"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: '2em',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      flex: '1',
                      borderRadius: '10px',
                      border: '1px solid gray',
                      padding: '0.5em',
                    }}
                  >
                    <FormControlLabel
                      value="Disable Afiliate"
                      control={<Radio />}
                      label="Disable Afiliate"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flex: '1',
                      borderRadius: '10px',
                      border: '1px solid gray',
                      padding: '0.5em',
                    }}
                  >
                    <FormControlLabel
                      value="Enable Afiliate"
                      control={<Radio />}
                      label="Enabel Afiliate"
                    />
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 'fit-content',
              margin: '0 auto',
              mb:'5em'
            }}
          >
            <Typography textAlign="justify" variant="p">
              <span style={{ color: '#14A8FC' }}>Warning: </span>Make sure your
              token is not listed on any AMM yet <br />
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
