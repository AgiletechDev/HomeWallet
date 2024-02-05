import { Box, Typography, useTheme, useMediaQuery  } from '@mui/material'
import {  Blog } from '../../components'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'

export const FirstSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{ width:  isMobile ? '100%' :  '1000px', padding: '1em',mt:'3em' }}>
      <Box sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', }}>
        <Typography textAlign="center" variant="h4" fontWeight="700" color="#33277b">
          Wallet BLOG
        </Typography>
        <img src={lineahorizonta1} alt="" width="15%" />
        
      </Box>
      <Blog />
    </Box>
  )
}
