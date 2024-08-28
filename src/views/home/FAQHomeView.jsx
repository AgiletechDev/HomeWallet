import { Stack, Typography } from '@mui/material';
import { ViewSection } from '../../components';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const FAQHomeView = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { t } = useTranslation();

  return (
    <ViewSection>
      <Typography
        variant='h4'
        fontWeight='800'
        color='#4d4d4d'
        sx={{ textAlign: 'center' }}
      >
        {t('FREQUENT_QUESTIONS')}
      </Typography>

      <Stack
        width='100%'
        marginBottom='3em'
        sx={{
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
              {t(item.pregunta)}
            </summary>
            {openIndex === index && (
              <Typography
                variant='subtitle1'
                sx={{
                  padding: '1em',
                  textAlign: 'justify',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'darkgray',
                }}
              >
                {t(item.respuesta)}
              </Typography>
            )}
            <hr />
          </div>
        ))}
      </Stack>
    </ViewSection>
  );
};

const preguntasRespuestas = [
  {
    pregunta: 'PREGUNTA1',
    respuesta: 'RESPUESTA1',
  },
  {
    pregunta: 'PREGUNTA2',
    respuesta: 'RESPUESTA2',
  },
  {
    pregunta: 'PREGUNTA3',
    respuesta: 'RESPUESTA3',
  },
  {
    pregunta: 'PREGUNTA4',
    respuesta: 'RESPUESTA4',
  },
  {
    pregunta: 'PREGUNTA5',
    respuesta: 'RESPUESTA5',
  },
  {
    pregunta: 'PREGUNTA6',
    respuesta: 'RESPUESTA6',
  },
];
