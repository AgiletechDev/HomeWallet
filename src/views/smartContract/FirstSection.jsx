import { Box, Button, Typography } from "@mui/material"
import solidprooficon from '../../assets/images/portal/solidprooficon.png'
import cuadro1 from '../../assets/images/portal/cuadro1.png'
import lineahorizonta1 from '../../assets/images/portal/lineahorizonta1.png'
import apoyo2 from '../../assets/images/portal/apoyo2.png'
import apoyo2_1 from '../../assets/images/portal/apoyo2_1.png'
import apoyo4 from '../../assets/images/portal/apoyo4.png'
import circulos from '../../assets/images/portal/circulos.png'
import { useTranslation } from 'react-i18next'
import {useTheme, useMediaQuery
} from '@mui/material'
import { Link } from "react-router-dom"

export const FirstSection = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation();
  const title1 =t("SUBTITLE1");
  const title2 =t("SUBTITLE2");

  const list = [
    {
      title: title1,
      url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
    },
    {
      title: title2,
      url:'https://bscscan.com/address/0x24Ef78C7092d255Ed14a028lac1800C359aF3afe',
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
    }}>

      <img src={apoyo2} alt="lineas"
      style={{
        width: isMobile ?  '200px' : (isTablet ? '300px' : '400px'),
        height: isMobile ?  '100px' : '300px',
        position: 'absolute', 
        top: isMobile ?  '10%' : (isTablet ? '10%' : '30%'), 
        left:isMobile ?  '-120px' : (isTablet ? '-190px' : '-200px'), 
        zIndex: isMobile ? '-1' : '-1'
        }} 
      />
      <img src={apoyo2_1} alt="lineas"  style={{position: 'absolute', top: isMobile ? '55%' :'55%', left:'0', zIndex: -1, width:  isMobile ?  '270px' : '500px'}} />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: isMobile ?  '100%' : '20%',
        marginTop: isMobile ?  '0' : '40px',
        width: isMobile ?  '100%' : '99vw',
        }}
      >
        <Typography variant="h5" sx={{fontSize: isMobile ?  '20px' : '35px', fontWeight: '600', marginTop: '20px', color: '#33277b' }}>{t("TITLE_SMARTCONTRACT")}</Typography>
        <img src={lineahorizonta1} alt="linea" style={{width: isMobile ?  '25%' : '25%'}} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}
          >
            {
              list.map(({title, url}, index)=>(
                <div key={index} style={{textAlign: 'center'}}>
                  <Typography variant="h6"
                    sx={{
                      fontWeight: '600',
                      color: '#33277b',
                      mt: '20px',
                    }}
                  >
                    {title}
                  </Typography>
                  <a href={url} target="_blank"
                  rel="noreferrer"
                    style={{
                      fontSize: isMobile ?  '10px' : (isTablet ? '15px' : '20px'),
                      fontWeight: '600',
                      textDecoration: 'none',
                      color: '#33277b'
                    }}
                  >
                    {url}
                  </a>
                </div>
                ))
            }
            <Typography variant="h6"
              sx={{
                fontSize: isMobile ?  '10px' : '15px',
                fontWeight: '600',
                color: '#33277b',
                mt: '10px',
                mb: '10px'
              }}
            >
              {t("SUBTITLE3")}
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
            <img src={solidprooficon} alt="img solidProof" style={{height: isMobile ?  '50px' : '100px', marginTop: '10px', marginBottom: '5px'}} />
            <Typography variant="h5" sx={{fontSize: isMobile ?  '20px' : '35px', fontWeight: '800', marginTop: '20px', marginBottom: '25px', color: '#33277b' }}>{t("SUBTITLE4")}</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
            >
              <img src={cuadro1} alt="" style={{width: isMobile ? '30%' :'25%', marginRight: '10px'}}/>
              <img src={cuadro1} alt="" style={{width: isMobile ? '30%' :'25%', marginRight: '10px'}}/>
              <img src={cuadro1} alt="" style={{width: isMobile ? '30%' :'25%', marginRight: '10px'}}/>
      
            </Box>
            <Link to='/buywallets'>
              <Button
              sx={{
                  borderRadius: '20px',
                  marginTop: (isTablet ? '0' : '50px'),
                  fontWeight: '600',
                  fontSize: '25px',
                  color: 'black',
                  textTransform: 'lowercase'
              }}
              >
                  {t("BUTTONNAME")}
              </Button>
            </Link>
          </Box>
      </Box>


      <img src={circulos} alt="lineas"   style={{position: 'absolute', bottom: isMobile ?  '150px' : (isTablet ? '30%' : '10%'), right:'1%', width: isMobile ?  '30px' : (isTablet ? '80px' : '125px') }} />
      <img src={apoyo4} alt="lineas"  style={{position: 'absolute', top: isMobile ?  '55%' : '50%', right:'0', zIndex: -1, width: isMobile ?  '270px' : '500px'}} />

    </Box>

  )
}
