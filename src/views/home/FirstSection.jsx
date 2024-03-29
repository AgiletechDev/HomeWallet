import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/vista 1.png'
import { Expectations } from '../../components/Expectations'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {

  const { t } = useTranslation();

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Box sx={{ width: isMobile ? '100%' : '900px', position: 'relative' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2em',
            position: 'relative',
            gap: '50px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#33277b',
              fontWeight: '800',
              textAlign: 'center',
              mt: '0.5em',
            }}
          >
            {t("TITLE_HOME")} <br />
            {t("TITLE_HOME2")}

            <br />
          </Typography>
          <img
            src={imgSect1}
            style={{
              width: '100%',
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1em',
          position: 'relative',
          maxWidth: isMobile ? '100%' : '900px', 
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#4d4d4d',
            fontWeight: '800',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          {t("SUBTITLE_HOME1")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#4d4d4d',
            fontWeight: '700',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          {t("SUBTITLE_PARRAFO")}
        </Typography>
        <Expectations />
      </Box>
    </>
  )
}
