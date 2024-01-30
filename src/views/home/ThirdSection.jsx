import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/background.png'
import imgSect2 from '../../assets/images/portal/B.png'
import qr from '../../assets/images/portal/qr.png'
import { useState } from 'react'

export const ThirdSection = () => {

  //
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const preguntasRespuestas = [
    {
      pregunta:
        '¿Cuáles son las medidas de seguridad implementadas para proteger mi cuenta y mis activos digitales?',
      respuesta: 'La capa de blockchain pública facilita contratos inteligentes de productos básicos, contratos inteligentes de carga, datos de prueba de origen y transacciones AGRA. La blockchain pública de Ethereum y los intercambios de terceros operan independientemente de Graintech y brindan seguridad y descentralización para contratos inteligentes y tokens AGRA.',
    },
    {
      pregunta:
        '¿Cuáles son las criptomonedas admitidas en esta plataforma y cómo puedo acceder a ellas?',
      respuesta: 'La criptomoneda AGRA, ya que con esta se podra uso de las funciones de la app, para acceder a ellas se realiza pagos con tarjeta de crédito en la cual se utilizarán para comprar tokens AGRA en intercambios públicos, que luego seguirán el mismo proceso que un pago directo de AGRA.',
    },
    {
      pregunta:
        '¿Puedo transferir mis criptomonedas a una billetera externa? ¿Cómo se realiza este proceso?',
      respuesta: 'A medida que los productos básicos avanzan a lo largo de la cadena de suministro, se puede establecer una prueba de origen creando un registro blockchain inmutable.En cada etapa se registran los participantes clave de la cadena de suministro, así como los nodos de la cadena de suministro que pertenecen y están controlados por cada una de estas entidades (como campos, silos, camiones y lugares de entrega).',
    },
    {
      pregunta:
        '¿Qué opciones de pago están disponibles para comprar criptomonedas en la plataforma?',
      respuesta: 'La Plataforma de Pago Graintech permite realizar pagos directos por el acceso a las Aplicaciones. Las pasarelas de pago admiten pagos en tokens AGRA.',
    },
    {
      pregunta:
        '¿Cómo puedo realizar un seguimiento de mis transacciones y saldos en tiempo real?',
      respuesta: 'A medida que se recoge y entrega cada carga, se recopilan datos y se les marca la hora en cada punto de la cadena de suministro. Todas las partes se actualizan en tiempo real a medida que se realiza cada transacción.',
    },
  ]
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          margin: '0',
          padding: '0',
          position: 'relative',
          background: `url(${imgSect1}) center/cover no-repeat`,
          mt: '5em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'black',
            width: '100%',
            ml: '15em',
            paddingRight: '7em',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              textAlign: 'justify',
              ml: '2em',
              zIndex: '1',
              padding: '2em',
              width: '50%',
            }}
          >
            <Typography variant="h4" fontWeight="800" color="#26abdf">
              Security is and will Wallets top priority
            </Typography>
            <ul>
              <li>
                We believe that data security and privacy are essential for
                establishing user confidence
              </li>
              <li>
                We invest heavily in ongoing security and privacy awareness
                training for all employees to bolster our security posture.
              </li>
              <li>
                Your Wallet is encrypted locally on your device and
                biometrically secured
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', mt: '5em' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '2em',
            height: '300px',
            width: '900px',
            boxShadow: '0 4px 8px rgba(38, 171, 223, 0.5)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#26abdf',
              fontWeight: '800',
              textAlign: 'center',
              mt: '0.5em',
            }}
          >
            DOWNLOAD NOW
          </Typography>
          <Typography fontWeight="bold">
            Simple Access to Cryptocurrency
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center', mt:'7em' }}>
            <img src={qr} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>Scan to download</Typography>
              <Typography variant="h6" fontWeight="bold">
                App Wallet
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src={imgSect2}
          style={{
            position: 'absolute',
            transform: 'translate(200%, -60%)',
            zIndex: 2,
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '900px',
          mt: '20em',
          marginInline: 'auto',
          gap:'50px',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        
          <Typography variant="h4" fontWeight="800" color="black" sx={{textAlign:'center'}}>
          Frequently Asked Quetions
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'justify',
              maxWidth: '80%',

              details: {
                borderRadius: '8px',
                marginBottom: '1em',
                padding: '1em',
                
              },
              summary: {
                cursor: 'pointer',
                userSelect: 'none',
                color: '#26abdf',
                padding: '0.5em',
                borderRadius: '4px',
                marginBottom: '0.5em',
                fontSize: '18px',
                fontWeight: '600',
                
              },
            }}
          >
            {preguntasRespuestas.map((item, index) => (
              <div key={index} style={{ listStyle: 'none' }}>
                <summary
                  onClick={() => handleToggle(index)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  {item.pregunta}
                </summary>
                {openIndex === index && <Typography variant="subtitle1" sx={{padding:'1em', textAlign:'justify', fontSize:'15px', fontWeight:'600',color:'darkgray'}}>{item.respuesta}</Typography>}
                <hr />
              </div>
            ))}
          </Box>

      </Box>
    </>
  )
}
