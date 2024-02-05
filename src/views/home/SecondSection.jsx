import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 1.png'
import imgSect2 from '../../assets/images/portal/pag1/vista 2.png'
import imgSect3 from '../../assets/images/portal/pag1/vista 3.png'
import { MultiUtility } from '../../components/MultiUtility'
import { useTranslation } from 'react-i18next'

export const SecondSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: isMobile ? '100%' : '900px',
          position: 'relative',
          mt: '5em',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'left',
            padding: '2em',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#33277b">
            Wallet
          </Typography>
          <Typography>
            {t("TEXT_SECTION2")}
            <span style={{ fontWeight: 'bold' }}>{t("TEXT1_SECTION2")}</span>
            <br />
            {t("TEXT3_SECTION2")}
          </Typography>
        </Box>

        <Box>
          <img src={imgSect1} style={{ width: '100%', zIndex: '-1' }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isMobile ? '100%' : '900px',
          position: 'relative',
          mt: '5em',
          padding: '2em',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <img src={imgSect2} style={{ width: isMobile ? '100%' : '50%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
            ml: '2em',
          }}
        >
          <Typography variant="h4" fontWeight="700" color="#4d4d4d" mt="1em">
            {t("SECTION2_SUBTITLE1")}
          </Typography>
          <Typography variant="h6" color="#4d4d4d">
            {t("SECTION2_TEXT1")}
          </Typography>
          <ul style={{ listStyle: 'none', color: '#4d4d4d', fontSize: '25px' }}>
            <li>Ethereum</li>
            <li>Binance</li>
            <li>Bitcoin</li>
            <li>Tron</li>
          </ul>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : '900px',
          mt: '5em',
          gap: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" fontWeight="800" color="#4d4d4d">
            {t("SECTION2_SUBTITLE2")}
          </Typography>
          <Typography color="#4d4d4d" fontWeight="bold">
            {t("SECTION2_TEXT2")}
          </Typography>
          <MultiUtility />
        </Box>

        <img src={imgSect3} />
      </Box>
    </>
  )
}
