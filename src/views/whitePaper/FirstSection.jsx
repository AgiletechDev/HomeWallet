import { Box, Button, Typography } from "@mui/material"
import whitepaper from '../../assets/images/portal/whitepaper.png'

export const FirstSection = () => {
  return (
    <Box sx={{height: '50vh',marginTop: '40px', width: '80%',}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '70px'}}>
          <img src={whitepaper} alt="title whitpaper" height='120px'/>

        {/* <Box sx={{textAlign: 'center'}}>
            <Typography variant="h2">WHITEPAPER</Typography>
            <Typography variant="h4" sx={{mt: '-20px'}}>Whitepaper</Typography>
        </Box> */}

        <Button variant="contained" 
        sx={{   
            borderRadius: '20px', 
            marginTop: '50px',
            fontWeight: '600',
            fontSize: '17px',
            textTransform: 'capitalize'
        }}
        >
            Wallet Whitepaper
        </Button>

        </Box>
    </Box>
  )
}