import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material'
import imageA from '../../assets/images/launchpad/main/card.01.png'
import imageB from '../../assets/images/launchpad/main/card.02.png'
import imageC from '../../assets/images/launchpad/main/card.03.png'
import icono from '../../assets/images/launchpad/caja conectar.png'
import image11 from '../../assets/images/launchpad/main/wallet.png'
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
      <Typography variant="h4" className='bg-gradient-main bg-clip-text' sx={{ fontWeight: '600', color: 'transparent' }}>
        {t("LAUNCHPAD_SECTION2_TITLE2")}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: '600' }}>
        {t("LAUNCHPAD_SECTION2_TITLE3")}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          marginTop: '60px',
          maxWidth: '1000px',
          gap: {xs: 2,md:4},
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: '100%',
            background: '#CDE6FF',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'start',
            color: 'black',
            borderRadius: '20px',
          }}
        >
          <Stack justifyContent='center' sx={{flexGrow: 1}}>
            <img src={imageA} alt="imagec" style={{ width: '180px' }} />
          </Stack>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE1")}
          </Typography>
          <Typography variant="body2">
            {t("LAUNCHPAD_CARD_TEXT")}
          </Typography>
        </Card>

        <Card
          elevation={0}
          sx={{
            width: '100%',
            background: '#CDE6FF',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'start',
            color: 'black',
            borderRadius: '20px',
          }}
        >
          <Stack justifyContent='center' sx={{flexGrow: 1}}>
            <img src={imageB} alt="imagec" style={{ width: '180px' }} />
          </Stack>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE2")}
          </Typography>
          <Typography variant="body2">
            {t("LAUNCHPAD_CARD2_TEXT")}
          </Typography>
        </Card>

        <Card
          elevation={0}
          sx={{
            width: '100%',
            background: '#CDE6FF',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'start',
            color: 'black',
            borderRadius: '20px',
          }}
        >
          <Stack justifyContent='center' sx={{flexGrow: 1}}>
            <img src={imageC} alt="imagec" style={{ width: '180px' }} />
          </Stack>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            {t("LAUNCHPAD_CARD_TITLE3")}
          </Typography>
          <Typography variant="body2">
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
        className='bg-gradient-main-45'
        sx={{
          marginTop: '30px',
          marginBottom: '30px',
          borderRadius: '10px',
          textTransform: 'initial',
        }}
      >
        {t("LAUNCHPAD_SECTION2_BUTTON1")}
      </Button>

      <Card
        elevation={0}
        sx={{
          mt: '3em',
          width: isMobile ? '100%' : '70%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          background: 'white',
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
            className='bg-gradient-main-45'
            sx={{
              marginTop: '30px',
              borderRadius: '10px',
              textTransform: 'initial',
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
