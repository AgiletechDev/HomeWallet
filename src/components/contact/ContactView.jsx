import { Stack, Typography } from '@mui/material'
import { Contact } from './Contact'
import { useTranslation } from 'react-i18next'

export const ContactView = () => {
  const { t } = useTranslation()

  return (
    <Stack
      width="100%"
      maxWidth="900px"
      marginY={6}
      alignItems="center"
      padding={4}
      borderRadius={4}
      sx={{
        background: 'linear-gradient(to right, #3b3f78 14%, #486284 83%)',
      }}
    >
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: '25px',
          letterSpacing: '2px',
          marginBottom: '20px',
          color: 'white',
        }}
      >
        {t('CONTACT_US')}
      </Typography>

      <Contact />
    </Stack>
  )
}
