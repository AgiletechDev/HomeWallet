import { Box, Typography } from '@mui/material'
import ArrowRight from '@mui/icons-material/KeyboardArrowRight'
export const TokenDesc = () => {
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
          gridTemplateColumns: '1fr 1fr',
          gap: '5px',
          padding: '0.5em',
          color: '#33277b',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderTop: '5px solid #33277b',
            width: '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ mt: '1em', fontSize: '25px' }}>
            Nombre del token:{' '}
          </Typography>
          <Typography sx={{ mt: '1em', fontSize: '25px' }}>VIC</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderTop: '5px solid #33277b',
            width: '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ mt: '1em', fontSize: '25px' }}>
            Suministro máximo:
          </Typography>
          <Typography sx={{ mt: '1em', fontSize: '25px' }}>
            100,000,000
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: '25px' }}>
            Token Symbol:
          </Typography>
          <Typography sx={{ fontSize: '25px' }}>RAB</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: '25px' }}>
            Red Blockchain:
          </Typography>
          <Typography sx={{ fontSize: '25px' }}>
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
            width: '350px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: '25px' }}>
            Tipo de Token:
          </Typography>
          <Typography sx={{ fontSize: '25px' }}>
            Utility & Governance
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            width: '500px',
            pb: '5px',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: '25px' }}>
            Token Decimal:{' '}
          </Typography>
          <Typography sx={{ fontSize: '25px' }}>18</Typography>
        </Box>
      </Box>
    </Box>
  )
}
