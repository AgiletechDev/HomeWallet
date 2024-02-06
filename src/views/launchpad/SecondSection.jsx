import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import imageA from '../../assets/images/launchpad/icono 1.png'
import imageB from '../../assets/images/launchpad/icono 2.png'
import imageC from '../../assets/images/launchpad/icono 3.png'
import icono from '../../assets/images/launchpad/caja conectar.png'
import image11 from '../../assets/images/launchpad/cuadro imagen der.png'
import CurrentSale from '../../components/CurrentSale'
import { useTranslation } from 'react-i18next'

export const SecondSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        background: 'linear-gradient(60deg, #d8f0ff, #FFF , #d8f0ff)',
        mb: '50px',
        textAlign: 'center',
        padding: '1em',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '600', marginTop: '50px' }}>
        {t("LAUNCHPAD_SECTION2_TITLE1")}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: '600', color: '#3e387b' }}>
        {t("LAUNCHPAD_SECTION2_TITLE2")}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: '600' }}>
        {t("LAUNCHPAD_SECTION2_TITLE3")}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          marginTop: '60px',
          gap: '50px',
          padding: isMobile ? '1em' : '1em 12em',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Card
          sx={{
            width: '100%',
            background:
              'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            alignItems: 'center',
            color: 'white',
            borderRadius: '20px',
          }}
        >
          <img src={imageA} alt="imagec" style={{ width: '100px' }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE1")}
          </Typography>
          <Typography variant="p" fontSize="20px">
            {t("LAUNCHPAD_CARD_TEXT")}
          </Typography>
        </Card>

        <Card
          sx={{
            width: '100%',
            background:
              'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            alignItems: 'center',
            color: 'white',
            borderRadius: '20px',
          }}
        >
          <img src={imageB} alt="imagec" style={{ width: '100px' }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE2")}
          </Typography>
          <Typography variant="p" fontSize="20px">
            {t("LAUNCHPAD_CARD2_TEXT")}
          </Typography>
        </Card>

        <Card
          sx={{
            width: '100%',
            background:
              'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            alignItems: 'center',
            color: 'white',
            borderRadius: '20px',
          }}
        >
          <img src={imageC} alt="imagec" style={{ width: '100px' }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE3")}
          </Typography>
          <Typography variant="p" fontSize="20px">
          {t("LAUNCHPAD_CARD3_TEXT")}
          </Typography>
        </Card>
      </Box>

      <Box
        marginTop="50px"
        marginBottom="50px"
        sx={{ width: isMobile ? '100%' : '70%' }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: '#000',
            fontWeight: '600',
            fontSize: '25px',
            marginBottom: '10px',
            textAlign: 'left',
          }}
        >
          {t("LAUNCHPAD_SUBTITLE1")}
        </Typography>

        <CurrentSale />

        <TextField
          placeholder={t("LAUNCHPAD_SECTION2_INPUT1")}
          fullWidth={true}
        />
      </Box>

      <img src={icono} alt="icono" style={{ height: '50px' }} />

      <Button
        variant="contained"
        sx={{
          marginTop: '30px',
          marginBottom: '30px',
          borderRadius: '10px',
          textTransform: 'initial',
          background:
            'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
        }}
      >
        {t("LAUNCHPAD_SECTION2_BUTTON1")}
      </Button>

      <Card
        sx={{
          mt: '3em',
          width: isMobile ? '100%' : '70%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          background: '#e3e3e3',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '1em 2em',
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              marginBottom: '10px',
              textAlign: isMobile ? 'center' : 'start',
            }}
          >
            {t("LAUNCHPAD_CARD4")}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              borderRadius: '10px',
              textTransform: 'initial',
              background:
                'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
              width: 'auto',
              marginX: 'auto',
            }}
          >
            {t("LAUNCHPAD_CARD4_BUTTON")}
          </Button>
        </Box>

        <img src={image11} alt="image11" />
      </Card>
    </Box>
  )
}
