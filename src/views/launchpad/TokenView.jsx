import { Box, Typography, Button, Card, TextField,useTheme,
  useMediaQuery } from '@mui/material'
import image11 from '../../assets/images/launchpad/cuadro de imagen der4.png'
import { useTranslation } from 'react-i18next'

export const TokenView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation();

  return (
    <Box sx={{  width: isMobile ? '100%' : '900px',  padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          {t("TOKEN_TITLE")}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <Card
            sx={{
              mt: '3em',
              width: '100%',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              borderRadius: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
                {t("TOKEN_DESCRIPTION")}
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
              gap: '1em',
              backgroundColor: 'white',
            }}
          >
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>{t("LAUNCHPAD_LOCKLIST_TABLECELL0")}
            </Typography>
            <TextField label="Binance" placeholder="0.0" fullWidth={true}/>
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>{t("LAUNCHPAD_LOCKLIST_TABLECELL1")}
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true} />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>{t("DECIMALS")}
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true} />
            <Typography textAlign="left" variant="h6" fontWeight="bold">
              <span style={{ color: '#14A8FC' }}>* </span>{t("TOTAL_SUPPLY")}
            </Typography>
            <TextField label="ex Muck" placeholder="0.0" fullWidth={true}/>
            <Typography
              textAlign="left"
              variant="body"
              fontWeight="600"
              color="#14A8FC"
            >
             {t("FORM_VERIFY_HELPERTEXT")} 0.18 BNB
            </Typography>
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
            <Typography textAlign="justify" variant="p">
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
