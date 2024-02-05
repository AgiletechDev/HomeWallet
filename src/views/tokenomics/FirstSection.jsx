import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { TableWallet, TokenDesc } from '../../components'
import imgGraf from '../../assets/images/portal/pag2/grafica.png'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {
  const { t } = useTranslation();

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{ width: isMobile ? '100%' : '1000px', padding: '1em' }}>
      <Box mt='2em'>
        <Typography textAlign="center" variant="h4" fontWeight="700" color="#33277b">
          {t("TOKENOMIC_TITLE")}
        </Typography>

        <TokenDesc />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mt:'5em' }}>
        <img
          src={imgGraf}
          alt=""
          style={{ margin: 'auto', display: 'block' }}
        />
      </Box>
      
      <TableWallet />
    </Box>
  )
}
