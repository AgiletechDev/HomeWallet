import { Box, Typography } from '@mui/material'

import imgLogo from '../assets/images/portal/logo.png'



export const FooterLaunchpad = () => {
  return (
    <Box
    sx={{ mt: '5em', display: 'flex', flexDirection: 'column', gap: '2em', maxWidth:'1000px', margin:'auto', padding:'2em' }}
  >
    <img src={imgLogo} width="20%" />
    <Typography>
      Disclaimer: Rabbit LaunchPad will never endorse or encourage you to
      invest in any of the projects listed, therefore is not liable for any
      loss that occurs. It is the responsibility of investors to do their
      own research and seek financial advice from a professional. More
      information about (DYOR) can be found via Wallet Educat
    </Typography>
    <Typography
      textAlign="left"
      variant="h6"
      fontWeight="700"
      color="#14A8FC"
    >
      contact@therabbit.io
    </Typography>
    <Box sx={{mt:'2em', display:'flex', gap:'1em'}}>
        <Typography>About us</Typography>
        <Typography>FAQs</Typography>
        <Typography>Docs</Typography>
        <Typography>Terms of use</Typography>
    </Box>
  </Box>
  )
}
