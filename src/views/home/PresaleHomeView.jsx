import { Grid } from '@mui/material';
import { Calculator, Timer, ViewSection } from '../../components';
import { useTranslation } from 'react-i18next';

import background from '../../assets/backgrounds/image.png';

export const PresaleHomeView = () => {
  const { t } = useTranslation();

  return (
    <ViewSection className='my-8'>
      <Grid
        container
        spacing={2}
        paddingY='2em'
        width={{ xs: '100%', md: '900px' }}
      >
        <Grid item xs={12} md={6}>
          <Timer title={t('comp.timer.title')} background={background} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Calculator />
        </Grid>
      </Grid>
    </ViewSection>
  );
};
