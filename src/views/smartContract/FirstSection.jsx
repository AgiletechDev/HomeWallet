import { Box, Button, Typography } from "@mui/material"
import solidprooficon from '../../assets/images/portal/solidprooficon.png'
import cuadro1 from '../../assets/images/portal/cuadro1.png'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2 from '../../assets/images/portal/apoyo2.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'

const list = [
  {
    title: 'BNB Smart Chain:',
    url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
  },
  {
    title: 'Arbitrum:',
    url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
  },
];

export const FirstSection = () => {
  return (
    <Box sx={{
      display: 'flex',
    }}>

      <img src={apoyo2} alt="lineas" width='400px' height='300px' style={{position: 'absolute', top: '50%', left:'-200px', }} />
      <img src={apoyo2_1} alt="lineas" width='500px' height='600px' style={{position: 'absolute', top: '55%', left:'0', zIndex: -1}} />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '800px',
        marginTop: '40px',
        width: '99vw',
        }}
      >
        <Typography variant="h5" sx={{fontSize: '35px', fontWeight: '600', marginTop: '20px', color: '#6500B7' }}>CONTRATO INTELIGENTE</Typography>
        <img src={lineahorizonta1} alt="" width='25%' />
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
                      color: '#6500B7',
                      mt: '20px',
                    }}
                  >
                    {title}
                  </Typography>
                  <a href={url} target="_blank"
                  rel="noreferrer"
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      color: '#6500B7'
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
                color: '#6500B7',
                mt: '10px',
                mb: '10px'
              }}
            >
              Wallet Smart Contract audited by SolidProof
            </Typography>
            {/* <a href="https://github.com/solidproof/projects/tree/main/Wallet%20Token"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                color: 'black'
              }}
            >
              https://github.com/solidproof/projects/tree/main/Wallet%20Token
            </a> */}
            <img src={solidprooficon} alt="img solidProof" style={{height: '100px', marginTop: '10px', marginBottom: '5px'}} />
            <Typography variant="h5" sx={{fontSize: '35px', fontWeight: '800', marginTop: '20px', marginBottom: '25px', color: '#6500B7' }}>LISTING ON</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
            >
              <img src={cuadro1} alt="" style={{width: '25%', marginRight: '10px'}}/>
              <img src={cuadro1} alt="" style={{width: '25%', marginRight: '10px'}}/>
              <img src={cuadro1} alt="" style={{width: '25%', marginRight: '10px'}}/>
      
            </Box>
            <Button
            sx={{
                borderRadius: '20px',
                marginTop: '50px',
                fontWeight: '600',
                fontSize: '25px',
                color: 'black',
                textTransform: 'lowercase'
            }}
            >
                BUY WALLET
            </Button>
          </Box>
      </Box>


      <img src={circulos} alt="lineas" width='100px' height='100px' style={{position: 'absolute', bottom: '0%', right:'1%', }} />
      <img src={apoyo4} alt="lineas" width='500px' height='600px' style={{position: 'absolute', top: '55%', right:'0', zIndex: -1}} />

    </Box>

  )
}
