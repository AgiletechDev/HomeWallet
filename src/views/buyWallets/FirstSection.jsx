import { Box, Typography } from '@mui/material'
import huobi from '../../assets/images/portal/huobi.png'
import buywallet from '../../assets/images/portal/buywallet.png'
import mexcglobal from '../../assets/images/portal/mexcglobal.png'
import pancakeswap from '../../assets/images/portal/pancakeswap.png'

export const FirstSection = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '50vh', 
        // border: '1px solid black',
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '75px',
        width: '70%',
        height: '80%',
      }}
      >
        <img src={buywallet} alt="buywallet title" height='120px' />
        {/* <Typography variant='h4' component='p' sx={{fontSize: '60px',}}>BUY WALLET</Typography>
        <Typography variant='h4' component='p' sx={{marginTop: '-30px'}}>Buy Wallet</Typography> */}
      
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginY: '50px',
            width: '100%'
        }}
        >
            <img src={huobi} alt="" style={{width: '32%'}}/>
            <img src={mexcglobal} alt="" style={{width: '32%'}}/>
            <img src={pancakeswap} alt="" style={{width: '32%'}}/>
            
        </Box>

      </Box>
      
    </Box>
  )
}
