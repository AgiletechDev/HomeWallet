import { Box, Typography } from '@mui/material'
import { TableWallet, TokenDesc } from '../../components'
import imgGraf from '../../assets/images/portal/pag2/grafica.png'

export const FirstSection = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em' }}>
      <Box>
        <Typography textAlign="center" variant="h4" fontWeight="700" color="#33277b">
          Tokenómica
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
