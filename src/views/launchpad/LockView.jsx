import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material'
import image11 from '../../assets/images/launchpad/cuadro imagen der2.png'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InfoIcon from '@mui/icons-material/Info'
import { useTranslation } from 'react-i18next'

export const LockView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation();

  return (
    <Box sx={{ width: isMobile ? '100%' : '900px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          {t("CREATELOCK_TITLE")}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em', mt:'2em' }}>

        <Card
            sx={{
              mt: '3em',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              borderRadius: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              margin:'auto'
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
               {t("CREATELOCK_DESCRIPTION")}
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
              gap: '3em',
              backgroundColor: 'white',
              margin:'auto'
            }}
          >
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_TOKEN_TITLE")}
              </Typography>
              <TextField
                label="Token Address"
                placeholder="0.0"
                fullWidth={true}
              />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_TOKEN_TITLE2")}
              </Typography>
              <TextField label="Ejem Muck Lock..." placeholder="0.0" fullWidth={true} />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h6" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_TOKEN_TITLE3")}
              </Typography>
              <TextField
                label="Ejem Muck"
                placeholder="0"
                fullWidth={true}
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
              <FormControlLabel control={<Checkbox />} label={t("FORM_TOKEN_CHECK")} />
            </Box>
            <Box>
              <Typography textAlign="left" variant="h5" fontWeight="bold">
                <span style={{ color: '#14A8FC' }}>*</span>
                  {t("FORM_TOKEN_TITLE4")}
              </Typography>
              <TextField label={t("FORM_TOKEN_TEXTFIELDDATE")} placeholder="0.0" fullWidth={true} />
            </Box>
            <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#e8f0fb',
    padding: '1em',
    width: '100%',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: isMobile ? 'center' : 'left',
  }}
>
  <InfoIcon sx={{ color: '#3e387b' }} />
  <Typography sx={{ color: '#0a85d9' }}>
    {t("TOKEN_ALERT")}
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
            <Typography textAlign="justify" variant="p" padding='1em'>
              <span style={{ color: '#14A8FC' }}>{t("LAUNCHPAD_DISCLAIMER")} </span>
                {t("LAUNCHPAD_DISCLAIMER_TEXT")}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '30px',
                borderRadius: '10px',
                textTransform: 'initial',
                background:
                'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
              }}
            >
              {t("LAUNCHPAD_SECTION2_BUTTON1")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
