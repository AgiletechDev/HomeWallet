import { Box, Typography, Stack } from '@mui/material'
import { TableWallet, TokenDesc } from '../../components'
import imgGraf from '../../assets/images/portal/pag2/grafica.png'
import { useTranslation } from 'react-i18next'

import background from './../../assets/images/background.svg'

export const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        padding: '1em',
        width: '100%',
        paddingX: 'calc(50% - 450px)',
        backgroundImage: `url(${background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
      }}
    >
      <Stack mt='2em'>
        <Box className='relative'>
          <Typography
            variant='h3'
            fontWeight='900'
            fontSize={{xs: '50px', sm: '80px'}}
            bottom={20}
            className='absolute left-0 bottom-0 -translate-y-5 sm:translate-y-0 text-white text-shadow z-0'
          >
            {t("TOKENOMIC_TITLE")}
          </Typography>
          <Typography className='relative z-10' variant="h2" paddingLeft={{sm:10}} fontWeight="700">
            {t("TOKENOMIC_TITLE")}
          </Typography>
        </Box>

        <TokenDesc />
      </Stack>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={imgGraf}
          alt=""
          style={{ margin: 'auto', display: 'block' }}
        />
      </Box>
      
      <TableWallet />
    </Box>
  )
}