import { Stack, Typography } from '@mui/material'
import logo from './../assets/icons/logo.svg'

export const Logo = () => {
  return (
    <Stack direction='row'>
      <img
        style={{ width: 53, height: 53 }}
        width={53}
        height={53}
        src={logo}
        alt='logo'
      />
      <Stack justifyContent='center' alignItems='center'>
        <Typography
          color='black'
          variant='h4'
          fontStyle='italic'
          fontWeight='900'
        >
          Wallet
        </Typography>
        <Typography color='black' variant='body2' fontStyle='italic'>
          Blockchain
        </Typography>
      </Stack>
    </Stack>
  )
}
