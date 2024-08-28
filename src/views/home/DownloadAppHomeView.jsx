import { useTranslation } from 'react-i18next';
import { ViewSection } from '../../components';
import { Box, Stack, Typography } from '@mui/material';

import imgSect3 from '../../assets/images/portal/pag1/ilustracion 3.png';
import qr from '../../assets/images/portal/pag1/apps 1.png';

export const DownloadAppHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection>
      <Box sx={{ position: 'relative', mt: '5em' }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          borderRadius={4}
          alignItems='center'
          padding='2em'
          zIndex={1}
          color='white'
          justifyContent='space-between'
          margin={{ xs: 0, sm: 2 }}
          sx={{
            background:
              'linear-gradient(97deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
          }}
        >
          <Box textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: '800',
                mt: '0.5em',
              }}
            >
              {t('DOWNLOAD')}
            </Typography>
            <Typography fontWeight='bold' sx={{}}>
              {t('DOWNLOAD_TEXT')}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems='center'
              gap={5}
              marginTop={8}
            >
              <img src={qr} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>{t('SCAN_DONWLOAD')}</Typography>
                <Typography variant='h6' fontWeight='bold'>
                  App Wallet
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <img
              src={imgSect3}
              className='w-full'
              style={{ marginTop: '1em' }}
            />
          </Box>
        </Stack>
      </Box>
    </ViewSection>
  );
};
