import { Box, Typography } from '@mui/material'
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 2.png'

import imgSect3 from '../../assets/images/portal/pag1/ilustracion 3.png'
import qr from '../../assets/images/portal/pag1/apps 1.png'
import { useState } from 'react'

export const ThirdSection = () => {
  //
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const preguntasRespuestas = [
    {
      pregunta: '¿Es segura la billetera?',
      respuesta:
        'La capa de blockchain pública facilita contratos inteligentes de productos básicos, contratos inteligentes de carga, datos de prueba de origen y transacciones AGRA. La blockchain pública de Ethereum y los intercambios de terceros operan independientemente de Graintech y brindan seguridad y descentralización para contratos inteligentes y tokens AGRA.',
    },
    {
      pregunta: '¿Cómo instalar la billetera?',
      respuesta:
        'La criptomoneda AGRA, ya que con esta se podra uso de las funciones de la app, para acceder a ellas se realiza pagos con tarjeta de crédito en la cual se utilizarán para comprar tokens AGRA en intercambios públicos, que luego seguirán el mismo proceso que un pago directo de AGRA.',
    },
    {
      pregunta: '¿Cómo importo o restauro mi billetera?',
      respuesta:
        'A medida que los productos básicos avanzan a lo largo de la cadena de suministro, se puede establecer una prueba de origen creando un registro blockchain inmutable.En cada etapa se registran los participantes clave de la cadena de suministro, así como los nodos de la cadena de suministro que pertenecen y están controlados por cada una de estas entidades (como campos, silos, camiones y lugares de entrega).',
    },
    {
      pregunta: '¿Cómo recibir dinero (moneda digital) en la billetera?',
      respuesta:
        'La Plataforma de Pago Graintech permite realizar pagos directos por el acceso a las Aplicaciones. Las pasarelas de pago admiten pagos en tokens AGRA.',
    },
    {
      pregunta: 'Tarifas de transacción en la billeter',
      respuesta:
        'A medida que se recoge y entrega cada carga, se recopilan datos y se les marca la hora en cada punto de la cadena de suministro. Todas las partes se actualizan en tiempo real a medida que se realiza cada transacción.',
    },
    {
      pregunta: '¿Es posible crear varias billeteras en la billetera Agra?',
      respuesta:
        'A medida que se recoge y entrega cada carga, se recopilan datos y se les marca la hora en cada punto de la cadena de suministro. Todas las partes se actualizan en tiempo real a medida que se realiza cada transacción.',
    },
  ]
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          maxWidth:'1000px',
          margin: '0',
          mt: '5em',
          zIndex: '1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'black',
            width: '100%',
  
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'justify',
              zIndex: '10',
              padding: '2em',
              color: '#4d4d4d',
            }}
          >
            <Typography variant="h4" fontWeight="800" color="#4d4d4d">
              La seguridad es y siempre será la máxima prioridad para las
              billeteras
            </Typography>
            <ul style={{ fontSize: '20px' }}>
              <li>
                Creemos que la seguridad y la privacidad de los datos son
                esenciales para establecer la confianza del usuario.
              </li>
              <li>
                Invertimos mucho en capacitación continua sobre seguridad y
                privacidad para todos los empleados para reforzar nuestra
                postura de seguridad.
              </li>
              <li>
                Su billetera está cifrada localmente en su dispositivo y
                protegida bimétricamente.
              </li>
            </ul>
          </Box>
         
        </Box>
        <Box>
            <img src={imgSect1} style={{ width: '90%' }} />
        </Box>
      </Box>

      <Box sx={{ position: 'relative', mt: '5em' }}>
        <Box
          sx={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2em',
            width: '900px',
            background:
              'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
            zIndex: 1,
            color: 'white',
            justifyContent:'space-between'
          }}
        >

          <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: '800',
                  textAlign: 'center',
                  mt: '0.5em',
                }}
              >
                Descargar ahora
              </Typography>
              <Typography fontWeight="bold" sx={{marginLeft:'4em'}}>
              Acceso sencillo a criptomonedas
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  mt: '7em',
                  padding: '1em',
                  gap: '20px',
                }}
              >
                <img src={qr} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography>Escanear para descargar</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    App Wallet
                  </Typography>
                </Box>
              </Box>
            
          </Box>
          <Box>
              <img src={imgSect3} style={{ width: '90%' }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '900px',
          mt: '20em',
          marginInline: 'auto',
          gap: '50px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="800"
          color="#4d4d4d"
          sx={{ textAlign: 'center' }}
        >
          Preguntas Frecuentes
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

            textAlign: 'justify',
            maxWidth: '100%',
            mb:'3em',

            details: {
              borderRadius: '8px',
              marginBottom: '1em',
              padding: '1em',
              
            },
            summary: {
              cursor: 'pointer',
              userSelect: 'none',
              color: '#4d4d4d',
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
              {openIndex === index && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    padding: '1em',
                    textAlign: 'justify',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'darkgray',
                  }}
                >
                  {item.respuesta}
                </Typography>
              )}
              <hr />
            </div>
          ))}
        </Box>
      </Box>
    </>
  )
}
