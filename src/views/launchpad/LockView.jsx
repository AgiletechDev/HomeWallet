import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  InputAdornment,
} from '@mui/material'
import image11 from '../../assets/images/launchpad/image 15.png'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InfoIcon from '@mui/icons-material/Info'

export const LockView = () => {
  return (
    <Box sx={{ width: '900px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Create Lock
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <Card
            sx={{
              mt: '3em',
              width: '100%',
              height: '200px',
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
                padding: '2em',
              }}
            >
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{ marginBottom: '10px', textAlign: 'justify' }}
              >
                Token lock feature is used for Developer/Founding Team Token
                unlocking can be done on set time with flexible amount
              </Typography>
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
              gap: '3em',
              backgroundColor: 'white',
            }}
          >
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> Token or LP Token
                address
              </Typography>
              <TextField
                label="Token Address"
                placeholder="0.0"
                fullWidth="true"
              />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> Title
              </Typography>
              <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> Amount
              </Typography>
              <TextField
                label="ex Muck"
                placeholder="0"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="body1"
                        fontWeight="bold"
                        sx={{ color: '#14A8FC', backgroundColor: 'white' }}
                      >
                        MAX
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{ justifyContent: 'flex-start' }}
              />
              <FormControlLabel control={<Checkbox />} label="Using Vesting?" />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h5" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> Lock until (UTC
                time)
              </Typography>
              <TextField label="ex Muck" placeholder="0.0" fullWidth="true" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#e8f0fb',
                padding: '1em',
              }}
            >
              <InfoIcon sx={{ color: '#0a85d9' }} />
              <Typography color="#0a85d9">
                Please exclude lockup address
                0x79554D1AAc42F42177509B5e55E2614B2415C11B from fees, rewards,
                max tx amount to start locking tokens. We don&apos;t support
                rebase tokens
              </Typography>
            </Box>
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
              <span style={{ color: '#14A8FC' }}>Disclaimer: </span>T The
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
