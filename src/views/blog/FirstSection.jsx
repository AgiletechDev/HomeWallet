import { Box, Typography } from '@mui/material'
import {  Blog } from '../../components'


export const FirstSection = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em' }}>
      <Box>
        <Typography textAlign="left" variant="h4" fontWeight="700">
          Tokenomics BLOG
        </Typography>
        <Blog />
      </Box>
      
      
    
    </Box>
  )
}
