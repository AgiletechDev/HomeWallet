import { Stack, Typography } from '@mui/material';
import { MultiUtility, ViewSection } from '../../components';

import imgSect3 from '../../assets/images/portal/pag1/vista 3.png';
import { useTranslation } from 'react-i18next';

export const MultiUtilityHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection className='py-16'>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>
        <Stack>
          <Typography variant='h4' fontWeight='800' color='#4d4d4d'>
            {t('SECTION2_SUBTITLE2')}
          </Typography>
          <Typography color='#4d4d4d' fontWeight='bold'>
            {t('SECTION2_TEXT2')}
          </Typography>
          <MultiUtility />
        </Stack>

        <img src={imgSect3} />
      </Stack>
    </ViewSection>
  );
};
