import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import image11 from '../../assets/images/launchpad/cuadro imagen der.png'
import { useTranslation } from 'react-i18next'

export const RabGrowView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  const { t } = useTranslation();
  
  return (
    <Box sx={{ padding: '1em', mt: '5em', width: isMobile ? '100%' : '900px' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Create VICGrow
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em', mt:'2em' }}>
          <Card
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '20px',
              flexDirection: isMobile ? 'column' : 'row',
              margin: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1em 2em',
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{
                  marginBottom: '10px',
                  textAlign: isMobile ? 'center' : 'justify',
                }}
              >
                {t("VICGROW_DESCRIPTION")}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: isMobile ? 'center' : 'start',
                  marginTop: isMobile ? '30px' : '0',
                  mt: '1em',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
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

            <img
              src={image11}
              alt="image11"
              style={{ width: isMobile ? '100%' : '30%' }}
            />
          </Card>

          <Typography
            textAlign="center"
            variant="h3"
            fontWeight="bold"
            mt="1em"
          >
            {t("VICGROW_SUBTITLE")}
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
                color="white"
                sx={{
                  padding: '5px',
                  background: 'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
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
                {t("FORM_VERIFY_TITLE")}
              </Typography>
            </Box>
            <Typography
              textAlign="left"
              variant="h6"
              fontWeight="600"
              color="#938f99"
            >
              {t("FORM_VERIFY_TEXT")}
            </Typography>
            <Typography textAlign="left" variant="h6" fontWeight="600">
              <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_VERIFY_ADDRESS")}
            </Typography>
            <TextField
              label="Token Address"
              placeholder="0.0"
              fullWidth={true}
            />
            <Typography
              textAlign="left"
              variant="body"
              fontWeight="600"
              color="#14A8FC"
            >
              {t("FORM_VERIFY_HELPERTEXT")} 0.7 BNB
            </Typography>
            <Typography
              textAlign="left"
              variant="h6"
              fontWeight="bold"
              mt="0.5em"
            >
              <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_VERIFY_CURRENCY")}
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
              <span style={{ color: '#14A8FC' }}>*</span> {t("FORM_VERIFY_AFILIATE")}
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
              mb: '5em',
              padding: '1em',
            }}
          >
            <Typography textAlign="justify" variant="p">
              <span style={{ color: '#14A8FC' }}>{t("ADVERTENCIA")} </span>
              {t("ADVERTENCIA_DESCRIPTION")} <br />
              <span style={{ color: '#14A8FC' }}>{t("LAUNCHPAD_DISCLAIMER")} </span>The
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
