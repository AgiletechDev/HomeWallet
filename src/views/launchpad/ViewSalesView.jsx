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
              className='bg-gradient-main bg-clip-text'
              textAlign={isMobile ? 'center' : 'left'}
              variant="h3"
              fontWeight="700"
              noWrap
              color="transparent"
            >
              {t("RABSALE_TITLE1")}
            </Typography>
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              variant="h3"
              fontWeight="700"
              color="black"
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
                className='bg-gradient-main-45'
                sx={{
                  color: 'white',
                  borderRadius: '5px',
                }}
              >
                {t("LAUNCHPAD_SECTION2_BUTTON1")}
              </Button>
              <Button variant="outlined" sx={{ textTransform: 'initial', border: '1px solid #7b7b7b40', color:'primary' }}>
                {t("LAUNCHPAD_SECTION1_BUTTON2")}
              </Button>
            </Box>
            <Typography textAlign="left" variant="h6" fontWeight="700">
              Powered by{' '}
              <span className='bg-gradient-main-45 bg-clip-text italic text-transparent'
                style={{
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
            className='bg-gradient-main-45'
            sx={{
              color: 'white',
              mt: '2em',
              borderRadius: '5px',
            }}
          >
            {t("LAUNCHPAD_SECTION2_BUTTON1")}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
