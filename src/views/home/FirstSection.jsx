import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/vista 1.png'
import { Expectations } from '../../components/Expectations'

export const FirstSection = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2em',
            height: '300px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#33277b',
              fontWeight: '800',
              textAlign: 'center',
              mt: '0.5em',
            }}
          >
            SÚPER APLICACIÓN DEX WALLET <br />
MULTIUTILIDAD DE NUEVA GENERACIÓN
            <br />
          </Typography>
        </Box>
        <img
          src={imgSect1}
          style={{
            width: '100%',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -40%)',
            zIndex: 2,
          }}
        />
      </Box>

      <Box
        sx={{
          mt: '15em',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1em',
          position: 'relative',
          maxWidth: '900px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#4d4d4d',
            fontWeight: '800',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          MÁS QUE TU EXPECTATIVA
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#4d4d4d',
            fontWeight: '700',
            textAlign: 'center',
            mt: '0.5em',
          }}
        >
          La billetera que necesitas para entrar al mundo del Crypto
        </Typography>
        <Expectations />
      </Box>
    </>
  )
}
