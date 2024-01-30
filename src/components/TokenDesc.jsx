import { Box, Typography } from '@mui/material'
import ArrowRight from '@mui/icons-material/KeyboardArrowRight'
export const TokenDesc = () => {
  return (
    <Box sx={{ padding: '1em' }}>
      <Typography color="#26abdf" variant="h5" fontWeight="700">
        WALLET Token
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          padding: '1em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '350px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Token name:</Typography>
          <Typography>WALLET</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '500px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Max supply:</Typography>
          <Typography>100,000,000 RAB</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '350px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Token Symbol:</Typography>
          <Typography>RAB</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '500px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Blockchain network:</Typography>
          <Typography>BNB Smart Chain (BEP20) & Arbitrum</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '350px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Token type:</Typography>
          <Typography>Utility & Governance</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
            borderBottom: '1px solid black',
            width: '500px',
            pb: '5px',
          }}
        >
          <ArrowRight sx={{ color: '#26abdf' }} />
          <Typography fontWeight="bold">Token Decimal: </Typography>
          <Typography>18</Typography>
        </Box>
      </Box>
    </Box>
  )
}
