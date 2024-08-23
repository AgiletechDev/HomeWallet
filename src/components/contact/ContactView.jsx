import { Stack } from '@mui/material'
import { Contact } from './Contact'

export const ContactView = () => {
  return (
    <Stack
      width="100%"
      maxWidth="900px"
      marginY={6}
      alignItems="center"
      padding={4}
      borderRadius={4}
    >
      <Contact />
    </Stack>
  )
}
