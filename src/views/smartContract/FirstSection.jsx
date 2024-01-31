import { Box, Button, Typography } from "@mui/material"
import solidproof from '../../assets/images/portal/solidproof.png'
import pancakeswap from '../../assets/images/portal/pancakeswap.png'
import mexcglobal from '../../assets/images/portal/mexcglobal.png'
import huobi from '../../assets/images/portal/huobi.png'
import smartcontract from '../../assets/images/portal/smartcontract.png'

const list = [
  {
    title: 'BNB Smart Chain:',
    url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a0281ac1800C359aF3afex"',
  },
  {
    title: 'Arbitrum:',
    url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a0281ac1800C359aF3afex"',
  },
];

export const FirstSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '800px',
      marginTop: '40px', 
      width: '100%',
      // border: '1px solid'
      }}
    >
      <img src={smartcontract} alt="" height='15%' />
      {/* <Typography variant="h2" component='h1'>SMART CONTRACT</Typography>
      <Typography variant="h4" component='h2' sx={{mt: '-30px'}}>Smart Contract</Typography> */}
        
        <Box sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center'
          }}
        >
          {
            list.map(({title, url})=>(
              <>
                <Typography variant="h6" 
                  sx={{
                    fontWeight: '600',
                    color: '#208DFF',
                    mt: '20px',
                  }}
                >
                  {title}
                </Typography>

                <a href={url} target="_blank"
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >
                  {url}
                </a>
              </>
              ))
          }


          <Typography variant="h6" 
            sx={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#208DFF',
              mt: '30px',
            }}
          >
            Wallet Smart Contract audited by SolidProof
          </Typography>

          <a href="https://github.com/solidproof/projects/tree/main/Wallet%20Token"
            target="_blank"
            style={{
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              color: 'black'
            }}
          >
            https://github.com/solidproof/projects/tree/main/Wallet%20Token
          </a>


          <img src={solidproof} alt="img solidProof" style={{height: '100px', marginTop: '10px', marginBottom: '5px'}} />

          <Typography variant="h5" sx={{fontSize: '25px', fontWeight: '600', marginTop: '10px', marginBottom: '5px'}}>LISTING ON</Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
          >
            <img src={huobi} alt="" style={{width: '22%'}}/>
            <img src={mexcglobal} alt="" style={{width: '22%'}}/>
            <img src={pancakeswap} alt="" style={{width: '22%'}}/>
            
          </Box>

          <Button variant="contained" 
          sx={{   
              borderRadius: '20px', 
              marginTop: '50px',
              fontWeight: '600',
              fontSize: '17px',
              textTransform: 'capitalize'
          }}
          >
              BUY WALLET
          </Button>
        </Box>
    </Box>

  )
}
