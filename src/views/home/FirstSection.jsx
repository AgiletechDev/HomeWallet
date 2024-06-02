import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/vista 1.png'
import { Expectations } from '../../components/Expectations'
import { useTranslation } from 'react-i18next'
import { Logo } from '../../components/Logo'
import background from './../../assets/images/background.svg'

export const FirstSection = () => {

  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ width: '100%', position: 'relative' }}>
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
          <Logo />
          <Typography
            variant="h4"
            className='bg-gradient-main bg-clip-text'
            sx={{
              color: 'transparent',
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
          width: '100%',
          paddingX: 'calc(50% - 450px)',
          backgroundImage: `url(${background})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center center',
        }}
      >
        <Typography
          variant="h4"
          className='bg-gradient-main bg-clip-text'
          sx={{
            color: 'transparent',
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
            color: 'black',
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
