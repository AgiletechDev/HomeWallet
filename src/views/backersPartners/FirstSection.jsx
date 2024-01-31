import { Box, Typography } from '@mui/material'
import huobi from '../../assets/images/portal/huobi.png'
import mexcglobal from '../../assets/images/portal/mexcglobal.png'

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
        marginY: '35px',
        width: '70%',
        height: '80%',
      }}
      >
        <Typography variant='h4' component='p' 
            sx={{
                fontSize: '60px',
            }}
        >
            BACKERS & PARTNERS
        </Typography>

        <Typography variant='h4' component='p' 
            sx={{
                marginTop: '-30px',
            }}
        >
            Backers & Partners

        </Typography>
      
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginY: '10px',
            width: '100%'
        }}
        >
            <img src={huobi} alt="" style={{width: '50%'}}/>
            <img src={mexcglobal} alt="" style={{width: '50%'}}/>
            
        </Box>

      </Box>
      
    </Box>
  )
}
