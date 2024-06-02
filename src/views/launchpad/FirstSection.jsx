import { Box, Button, Typography, useTheme, useMediaQuery  } from '@mui/material'
import rabbit from '../../assets/images/launchpad/main/hero.png'
import etherum from '../../assets/shared/coins/ETH.svg'
import binace from '../../assets/shared/coins/BNB.svg'
import bitcoin from '../../assets/shared/coins/btc.svg'
import tron from '../../assets/shared/coins/TRX.svg'
import busd from '../../assets/shared/coins/BUSD.svg'
import dai from '../../assets/shared/coins/DAI.svg'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems:  isMobile ? 'center' : 'center',
          justifyContent:  isMobile ? 'center' : 'center',
          minHeight: '60%',
          paddingTop: '60px',
          paddingLeft: isMobile ? '1em' : '1em',
          paddingRight: isMobile ? '1em' : 0,
          marginBottom: '40px',
          maxWidth: isMobile ? '100%' : '1000px'
        }}
      >
        <Box
          sx={{  display: 'flex',
          flexDirection: 'column',
          alignItems:  isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'left',
          width: '100%',
          maxWidth: isMobile ? '100%' : '900px',
          margin: isMobile ? 'auto' : 0, }}
        >
          <Typography
            variant="h2"
            component="p"
            className='bg-gradient-main bg-clip-text'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              color: 'transparent',
              fontSize: '45px',
              fontWeight: '600',
              marginBottom: '35px',
            }}
          >
            <span>
              {t("LAUNCHPAD_SECTION1_TITLE1")}
            </span>
            <span>
              {t("LAUNCHPAD_SECTION1_TITLE2")}
            </span>
            <span>
              {t("LAUNCHPAD_SECTION1_TITLE3")}
            </span>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#000',
              fontWeight: '600',
              fontSize: '25px',
              marginBottom: '35px',
            }}
          >
            {t("LAUNCHPAD_SECTION1_TEXT")}
          </Typography>

          <Box sx={{ display: 'flex', marginBottom: '30px' }}>
            <Button
              variant="contained"
              className='bg-gradient-main-45'
              sx={{
                marginRight: '10px',
                borderRadius: '10px',
                textTransform: 'initial',
              }}
            >
              {t("LAUNCHPAD_SECTION1_BUTTON")}
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'initial', border: '1px solid #7b7b7b40', color:'primary' }}>
              {t("LAUNCHPAD_SECTION1_BUTTON2")}
            </Button>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ marginRight: '10px', fontSize: '13px' }}>
              Powered by
            </Typography>
            <Typography className='bg-gradient-main-45 bg-clip-text italic' sx={{ color: 'transparent', fontWeight: '900' }}>
              AGILETECH
            </Typography>
          </Box>
        </Box>
          <Box>
            <img
              src={rabbit}
              alt="img rabbbit"
              className='sm:-translate-x-[200px]'
              style={{
                width: '568px',
              }}
            />
          </Box>

      </Box>


      <Box
        sx={{
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center',
          marginTop: '50px',
          backgroundColor:'white',
          padding:'2em',
          width: isMobile ? '90%' : '100%',
          margin:'auto'
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Typography
            variant="p"
            sx={{ marginRight: '10px', fontSize: '23px' }}
          >
            Suppported
          </Typography>
          <Typography
            variant="p"
            sx={{ marginRight: '10px', fontSize: '23px', fontWeight: '600' }}
          >
            Blockchains
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap:'10px'
          }}
        >
          <img src={etherum} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={binace} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={bitcoin} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={tron} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={busd} alt="etherum" style={{ marginRight: '50px' }} />
          <img src={dai} alt="etherum" style={{ marginRight: '50px' }} />
        </Box>
      </Box>
    </Box>
    
  )
}
