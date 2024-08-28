import { Stack, Typography } from '@mui/material';
import { Expectations, ViewSection } from '../../components';
import { useTranslation } from 'react-i18next';

export const ExpectationHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection className='relative py-8'>
      <Stack gap={2}>
        <Typography
          variant='h4'
          color='#33277b'
          textAlign='center'
          sx={{
            textShadow: '0px 0px 32px #fff8',
            fontWeight: '800',
          }}
        >
          {t('SUBTITLE_HOME1')}
        </Typography>
        <Typography
          variant='h6'
          color='#33277b'
          textAlign='center'
          sx={{
            textShadow: '0px 0px 32px #fff8',
            fontWeight: '700',
          }}
        >
          {t('SUBTITLE_PARRAFO')}
        </Typography>
      </Stack>
      <Expectations />
    </ViewSection>
  );
};
