import { Box, Typography } from '@mui/material'
import { TableWallet, TokenDesc } from '../../components'
import imgGraf from '../../assets/images/portal/image 2.png'

export const FirstSection = () => {
  return (
    <Box sx={{ width: '1000px', border: '1px solid black', padding: '1em' }}>
      <Box>
        <Typography textAlign="left" variant="h4" fontWeight="700">
          Tokenomics
        </Typography>

        <TokenDesc />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
