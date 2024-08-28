import { Box, Typography } from '@mui/material';
import { ViewSection } from '../../components';

import { useTranslation } from 'react-i18next';

import imgSect1 from '../../assets/images/portal/pag1/vista 1.png';
import bgMainTop from '../../assets/backgrounds/bg-main-top.png';
import mgMainExpectations from './../../assets/backgrounds/bg-main-expectations.png';

export const HeroHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection
      className='mt-5'
      before={
        <Box
          className='absolute left-0 top-0 -z-[1] h-screen w-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${bgMainTop})` }}
        >
          <Box
            className='absolute right-0 top-[100%] -z-[1] h-[600px] w-[600px] bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${mgMainExpectations})` }}
          />
        </Box>
      }
    >
      <Typography
        variant='h4'
        sx={{
          color: 'white',
          textShadow: '0px 0px 8px white',
          fontWeight: '800',
          textAlign: 'center',
        }}
      >
        {t('TITLE_HOME')}
        <br />
        {t('TITLE_HOME2')}
      </Typography>
      <img src={imgSect1} className='mt-10 w-full' />
    </ViewSection>
  );
};
