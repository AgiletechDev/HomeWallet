import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'


export const TokenDesc = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: '1em' }}>
      <Typography
        color="#33277b"
        variant="h5"
        fontWeight="700"
        textAlign="center"
      >
        VICNET TOKEN
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' :'1fr 1fr',
          gap: '5px',
          padding: '0.5em',
          color: '#33277b',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            gap: '5px',
            borderTop: isMobile ? 'none' : '5px solid #33277b',
            width: isMobile ? '100%' : '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ mt: '1em', fontSize: isMobile ? '20px' : '25px' }}>
            {t("TOKENDESC_TEXT1")}
          </Typography>
          <Typography sx={{ mt: '1em', fontSize: isMobile ? '20px' :'25px' }}>VIC</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderTop: isMobile ? 'none' :'5px solid #33277b',
            width: isMobile ? '100%' : '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ mt: '1em', fontSize: isMobile ? '20px' :'25px' }}>
            {t("TOKENDESC_TEXT3")}
          </Typography>
          <Typography sx={{ mt: '1em', fontSize:isMobile ? '20px' : '25px' }}>
            100,000,000
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: isMobile ? '100%' : '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: isMobile ? '20px' :'25px' }}>
            Token Symbol:
          </Typography>
          <Typography sx={{ fontSize:isMobile ? '20px' : '25px' }}>RAB</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: isMobile ? '100%' : '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize:isMobile ? '20px' : '25px' }}>
            Red Blockchain:
          </Typography>
          <Typography sx={{ fontSize: isMobile ? '20px' :'25px' }}>
            {' '}
            BNB Smart Chain (BEP20)& Arbitrum (ETH)
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: isMobile ? '100%' : '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize:isMobile ? '20px' : '25px' }}>
            {t("TOKENDESC_TEXT2")}
          </Typography>
          <Typography sx={{ fontSize: isMobile ? '20px' :'25px' }}>
            Utility & Governance
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: isMobile ? '100%' : '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize:isMobile ? '20px' : '25px' }}>
            Token Decimal:{' '}
          </Typography>
          <Typography sx={{ fontSize:isMobile ? '20px' : '25px' }}>18</Typography>
        </Box>
      </Box>
    </Box>
  )
}