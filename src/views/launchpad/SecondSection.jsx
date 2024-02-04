import { Box, Button, Card, TextField, Typography } from '@mui/material'
import imageA from '../../assets/images/launchpad/imageA.png'
import imageB from '../../assets/images/launchpad/imageB.png'
import imageC from '../../assets/images/launchpad/imageC.png'
import icono from '../../assets/images/launchpad/icono.png'
import image11 from '../../assets/images/launchpad/image11.png'
import CurrentSale from '../../components/CurrentSale'

export const SecondSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '99vw',
        height: '1500px',
        background: 'linear-gradient(60deg, #d8f0ff, #FFF , #d8f0ff)',
        mb:'50px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '600', marginTop: '50px' }}>
        Wallet LaunchPad provides
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: '600', color: '#14A8FC' }}>
        the best perks across the ecosystem
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: '600' }}>
        for investors and projects
      </Typography>

      <Box sx={{ display: 'flex', marginTop: '60px', gap:'20px'  }}>
        <Card
          sx={{
            width: '350px',
            background: '#ACDAFF',
            padding: '20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'justify'
          }}
        >
          <img
            src={imageA}
            alt="imagec"
            style={{ marginLeft: '20px', width:'250px' }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            Safest
          </Typography>
          <Typography variant="p" fontSize="20px">
            Built on a decentralized platform that streamlines and secures the
            crowdfunding process in crypto, as well as eliminates the
            vulnerabilities and risks faced by many previous projects.
          </Typography>
        </Card>

        <Card
          sx={{
            width: '350px',
            background: '#c9efff',
            padding: '20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'justify'
          }}
        >
          <img
            src={imageB}
            alt="imagec"
            style={{ marginLeft: '20px', width:'250px' }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            The most Profitable
          </Typography>
          <Typography variant="p" fontSize="20px">
            The privilege of early participation in the most promising
            blockchain projects. Guarantee the benefits and bring the highest
            profit for investors.
          </Typography>
        </Card>

        <Card
          sx={{
            width: '350px',
            background: '#c9efff',
            padding: '20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'justify'
          }}
        >
          <img
            src={imageC}
            alt="imagec"
            style={{ marginLeft: '20px', width:'250px' }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            mt="1em"
          >
            The most convenient
          </Typography>
          <Typography variant="p" fontSize="20px">
            Focus convenience, ease of operation for all professionals or
            beginners to seize opportunities in the Crypto market. No need for
            complicated knowledge, you can operate with just a few clicks
          </Typography>
        </Card>
      </Box>

      <Box width="76%" marginTop="50px" marginBottom="50px">
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: '#000',
            fontWeight: '600',
            fontSize: '25px',
            marginBottom: '10px',
          }}
        >
          Current Sale
        </Typography>

        <CurrentSale />

        <TextField
          placeholder="Enter token name or token symbol"
          fullWidth="true"
        />
      </Box>

      <img src={icono} alt="icono" style={{height:'50px'}} />

      <Button
        variant="contained"
        sx={{
          marginTop: '30px',
          marginBottom: '30px',
          borderRadius: '10px',
          textTransform: 'initial',
          background: 'linear-gradient(90deg, rgba(38,170,222,1) 0%, rgba(0,87,255,1) 100%)'
        }}
      >
        Connect Wallet
      </Button>

      <Card
        sx={{
          width: '70%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '20px',
          paddingLeft: '50px',
         
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop:'2em',
            paddingBottom:'2em'
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '10px' }}
          >
            Apply to launch now to bring your
          </Typography>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '10px' }}
          >
            project to over 30 VCs and global
          </Typography>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '10px' }}
          >
            investors of Rabbit LaunchPad
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              borderRadius: '10px',
              textTransform: 'initial',
              marginRight: '330px',
              background: 'linear-gradient(90deg, rgba(38,170,222,1) 0%, rgba(0,87,255,1) 100%)'
            }}
          >
            Connect Wallet
          </Button>
        </Box>

        <img src={image11} alt="image11" />
      </Card>
    </Box>
  )
}
