import { Box, Typography, Stack } from '@mui/material'
import { TableWallet, TokenDesc } from '../../components'
import imgGraf from '../../assets/images/portal/pag2/grafica.png'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1200px', padding: '1em' }}>
      <Stack mt='2em'>
        <Box className='relative'>
          <Typography
            variant='h3'
            fontWeight='900'
            fontSize='80px'
            bottom={20}
            className='absolute text-white text-shadow -z-10'
          >
            {t("TOKENOMIC_TITLE")}
          </Typography>
          <Typography variant="h2" paddingLeft={10} fontWeight="700">
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