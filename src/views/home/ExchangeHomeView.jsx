import { Stack, Typography } from '@mui/material';
import { ViewSection } from '../../components';

import imgSect2 from '../../assets/images/portal/pag1/vista 2.png';
import { useTranslation } from 'react-i18next';

export const ExchangeHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection className='my-12'>
      <Stack
        alignItems='center'
        justifyContent='center'
        gap={2}
        direction={{ xs: 'column', md: 'row' }}
      >
        <img src={imgSect2} className='w-[100%] sm:w-[50%]' />
        <Stack justifyContent='center' textAlign='left'>
          <Typography variant='h4' fontWeight='700' color='#4d4d4d' mt='1em'>
            {t('SECTION2_SUBTITLE1')}
          </Typography>
          <Typography variant='h6' color='#4d4d4d'>
            {t('SECTION2_TEXT1')}
          </Typography>
          <ul style={{ listStyle: 'none', color: '#4d4d4d', fontSize: '25px' }}>
            <li>Ethereum</li>
            <li>Binance</li>
            <li>Bitcoin</li>
            <li>Tron</li>
          </ul>
        </Stack>
      </Stack>
    </ViewSection>
  );
};
