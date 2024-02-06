import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import rabbit from '../../assets/images/launchpad/personaje3.png'
import CurrentSale from '../../components/CurrentSale'
import icono from '../../assets/images/launchpad/icono.png'
import { useTranslation } from 'react-i18next'

export const ViewSalesView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  
  const { t } = useTranslation();
 
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
              {t("RABSALE_TITLE1")}
            </Typography>
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              variant="h3"
              fontWeight="700"
              color="#3e387b"
            >
              {t("RABSALE_TITLE2")}
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
                  'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
                  color: 'white',
                  borderRadius: '5px',
                }}
              >
                {t("LAUNCHPAD_SECTION2_BUTTON1")}
              </Button>
            </Box>
            <Typography textAlign="left" variant="h6" fontWeight="700" color="#3e387b">
              Powered by{' '}
              <span
                style={{
                  color: '#3e387b',
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
            {t("LAUNCHPAD_SUBTITLE1")}
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
              alignSelf: 'strech',
              background:
              'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            }}
          >
            {t("LAUNCHPAD_SECTION2_BUTTON1")}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
