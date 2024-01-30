import { AppBar, Box, Button, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../assets/images/portal/logo.png';
import spainFlag from '../assets/images/portal/spain.png';
import playstore from '../assets/images/portal/playstore.png';
import apple from '../assets/images/portal/apple.png';
import { KeyboardArrowDown } from '@mui/icons-material';

const list = ['Product', 'Tokenomic', 'Company', 'Blog']

const Navbar = () => {

  return (
    <AppBar component='nav'  position='fixed' 
    sx={{ 
      height: '0', 
      marginBottom: '40px', 
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(58px)'
    }}
    >

      <Toolbar 
        sx={{
          display: 'flex', 
          alignItems: 'center', 
          padding: '0', 
          background: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(18px)', 
          position: 'relative'
        }}
        >

        <img src={logo} alt="logo" 
          style={{
            width: '10%', 
            maxWidth: '10%', 
            height: '70%', 
            padding: '0', 
            position: 'absolute', 
            left: '5px'
          }} 
        />

        <Box 
        sx={{
          display: 'flex', 
          justifyContent: 'flex-end', 
          width: '100%' 
          }}
        >
          
          {
            list.map((title, index)=> (
              <Typography key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                fontWeight: '540', 
                color:'black'
                }}
              >
                {title}
                <IconButton sx={{marginLeft: '-10px'}} children={<KeyboardArrowDown/>}/>
              </Typography>
            ))
          }
       
          <Button sx={{ marginLeft: '-12px'}}>
              <img src={spainFlag} alt="spain flag" />
          </Button>

          <Button variant='contained'  sx={{borderRadius: '20px', height: '40px'}}>Buy Wallet</Button>
          

          <Divider orientation='vertical' variant='middle' sx={{ height: '30px', mx: '10px' }} />


          <Button sx={{backgroundColor: '#F7FAF5', mr: '5px', height: '40px'}}>
            <img src={apple} style={{width: '34px'}} />
          </Button>
          <Button sx={{backgroundColor: '#F7FAF5', height: '40px'}}>
            <img src={playstore} style={{width: '30px'}} />
          </Button>
        </Box>
 
      </Toolbar>
    </AppBar>
  )
}

export default Navbar