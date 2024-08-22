import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const flags = {
  es: '🇪🇸',
  en: '🇺🇸',
  it: '🇮🇹',
  pt: '🇧🇷',
}

export const FirstSection = () => {
  const { t } = useTranslation()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [lang, setLang] = useState('en')

  const onChange = (e) => {
    setLang(e.target.value)
  }

  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `whitepaper_${lang}.pdf`
    link.href = `/download/whitepaper_${lang}.pdf`
    link.click()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: isMobile ? '100%' : '500px',
        width: isMobile ? '100%' : '99vw',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {!isMobile && (
        <img
          src={apoyo2_1}
          alt="circulo"
          height="500px"
          width="500px"
          style={{ position: 'absolute', left: '0', bottom: '0' }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
          height: isMobile ? '100%' : '1000px',
          width: '99vw',
          mb: '2em',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '35px',
            fontWeight: '600',
            marginTop: '20px',
            color: '#33277b',
          }}
        >
          WHITEPAPER
        </Typography>
        <img src={lineahorizonta1} alt="" width="15%" />
        <Typography
          sx={{
            width: isMobile ? '100%' : '50%',
            mt: '30px',
            color: '#33277b',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {t('WHITEPAPER_TEXT')}
        </Typography>
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
          marginY={12}
        >
          <Button
            color="base"
            variant="contained"
            onClick={onDownload}
            sx={{
              padding: isMobile ? '10px 30px' : '10px 30px 10px 30px',
              fontWeight: '700',
            }}
          >
            {t('WHITEPAPER_DOWNLOAD')} {flags[lang]}
          </Button>
          <FormControl>
            <InputLabel color="base" id="download-label">
              Lang
            </InputLabel>
            <Select
              color="base"
              variant="outlined"
              value={lang}
              onChange={onChange}
              label="Spanish"
              labelId="download-label"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="it">Italian</MenuItem>
              <MenuItem value="pt">Portuguese</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      {!isMobile && (
        <>
          <img
            src={apoyo4}
            alt="circulo"
            height="500px"
            width="500px"
            style={{ position: 'absolute', right: '0', bottom: '0' }}
          />

          <img
            src={circulos}
            alt="circulo"
            height="150px"
            width="120px"
            style={{ position: 'absolute', right: '5%', bottom: '5%' }}
          />
        </>
      )}
    </Box>
  )
}
