import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next'

export default function CurrentSale() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label={t("LAUNCHPAD_SUBTITLE1_TEXT1")} />
        <Tab value="two" label={t("LAUNCHPAD_SUBTITLE1_TEXT2")} />
        <Tab value="three" label={t("LAUNCHPAD_SUBTITLE1_TEXT3")} />
        <Tab value="three" label={t("LAUNCHPAD_SUBTITLE1_TEXT4")} />
      </Tabs>
      
    </Box>
  );
}