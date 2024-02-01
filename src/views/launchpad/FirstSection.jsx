import { Box, Button, Typography } from "@mui/material"
import rabbit from '../../assets/images/launchpad/imagesectionA.png'
import bitcoin from '../../assets/images/launchpad/bitcoin.png'
import etherum from '../../assets/images/launchpad/etherum.png'

export const FirstSection = () => {

  return (
    <Box  sx={{width: '99vw', height: '840px', background: 'linear-gradient(60deg, #BEFFFF, #FFF ,  #BEFFFF)'}}>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        height: '60%',
        paddingTop: '60px',
        paddingLeft: '300px',
        marginBottom: '40px'
      }}>
        <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '50px'}}>
          <Typography variant="h2" component='p' sx={{color: '#14A8FC', fontSize: '45px', fontWeight: '600',marginBottom: '35px'}}>Safest</Typography>
          <Typography variant="h2" component='p' sx={{color: '#14A8FC', fontSize: '45px', fontWeight: '600',marginBottom: '35px'}}>The most Profitable</Typography>
          <Typography variant="h2" component='p' sx={{color: '#14A8FC', fontSize: '45px', fontWeight: '600',marginBottom: '35px'}}>The most Convenient</Typography>
          <Typography variant="h6" component='p' sx={{color: '#000', fontWeight: '600', fontSize: '25px', marginBottom: '35px'}}>Here you are - Wallet LaunchPad</Typography>
        
          <Box sx={{display: 'flex', marginBottom: '30px'}}>
            <Button variant="contained" sx={{marginRight: '10px', borderRadius: '10px', textTransform: 'initial'}}>Connect Wallet</Button>
            <Button variant="outlined" sx={{textTransform: 'initial'}}>How to Start</Button>
          </Box>

          <Box sx={{display: 'flex',}}>
            <Typography  sx={{marginRight: '10px', fontSize: '13px'}}>Powered by</Typography>
            <Typography sx={{color: '#14A8FC', fontWeight: '600'}}>AGILETECH</Typography>
          </Box>

          
        </Box>

        <img src={rabbit} alt="img rabbbit" />

      </Box>
      <Box sx={{
        background: 'white', 
        width: '99vw', 
        height: '18%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '100px'
      }}
      >
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
          <Typography variant="p" sx={{marginRight: '10px', fontSize: '23px'}}>Suppported</Typography>
          <Typography variant="p" sx={{marginRight: '10px', fontSize: '23px', fontWeight: '600'}}>Blockchains</Typography>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={etherum} alt="etherum" style={{marginRight: '50px'}} />
          <img src={bitcoin} alt="etherum" style={{marginRight: '50px'}} />
          <img src={etherum} alt="etherum" style={{marginRight: '50px'}} />
          <img src={bitcoin} alt="etherum" style={{marginRight: '50px'}} />
          <img src={etherum} alt="etherum" style={{marginRight: '50px'}} />
          <img src={bitcoin} alt="etherum" style={{marginRight: '50px'}} />
          
        </Box>

        

      </Box>

    </Box>
  )
}
