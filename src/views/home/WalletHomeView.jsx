import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ViewSection } from '../../components';

import imgSect1 from '../../assets/images/portal/pag1/ilustracion 1.png';
import bgWallet from './../../assets/backgrounds/bg-wallet.png';

export const WalletHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection
      className='relative flex py-16'
      before={
        <Box
          className='absolute -z-[1] my-auto aspect-[1920_/_862] min-h-[auto] w-full self-center bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${bgWallet})` }}
        />
      }
    >
      <Stack height='100%' direction='row' alignItems='center'>
        <Stack
          justifyContent='center'
          textAlign='left'
          padding='2em'
          color='white'
        >
          <Typography variant='h4' fontWeight='800'>
            Wallet
          </Typography>
          <Typography>
            {t('TEXT_SECTION2')}
            <span style={{ fontWeight: 'bold' }}>{t('TEXT1_SECTION2')}</span>
            <br />
            {t('TEXT3_SECTION2')}
          </Typography>
        </Stack>
        <Box>
          <img src={imgSect1} className='-z-[1] mx-auto w-[80%]' />
        </Box>
      </Stack>
    </ViewSection>
  );
};
