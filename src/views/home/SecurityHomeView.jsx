import { Box, Stack, Typography } from '@mui/material';
import { ViewSection } from '../../components';
import { useTranslation } from 'react-i18next';

import bgSecurity from './../../assets/backgrounds/bg-security.png';
import imgSect1 from '../../assets/images/portal/pag1/ilustracion 2.png';

export const SecurityHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection
      className='relative flex py-16'
      after={
        <Box
          className='absolute -bottom-10 right-0 -z-[1] my-auto aspect-[1923_/_1183] min-h-[auto] w-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${bgSecurity})` }}
        />
      }
    >
      <Stack
        direction={{ xs: 'column', sm: 'row-reverse' }}
        alignItems='center'
      >
        <Stack
          direction='row'
          justifyContent='start'
          alignItems='center'
          color='black'
          width='100%'
        >
          <Stack color='white' textAlign='left' zIndex={10} padding='2em'>
            <Typography
              variant='h4'
              fontWeight='800'
              color={{ xs: 'black', sm: 'white' }}
            >
              {t('SUBTITLE_SECTION3')}
            </Typography>
            <ul
              style={{ fontSize: '20px' }}
              className='text-black md:text-white'
            >
              <li>- {t('TEXT1_SECTION3')}</li>
              <li>- {t('TEXT2_SECTION3')}</li>
              <li>- {t('TEXT3_SECTION3')}</li>
            </ul>
          </Stack>
        </Stack>
        <Box>
          <img src={imgSect1} style={{ width: '90%' }} />
        </Box>
      </Stack>
    </ViewSection>
  );
};
