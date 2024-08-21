import { useMemo, useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

import commingsoon from './../../assets/logos/commingsoon.png'
import { useTranslation } from 'react-i18next'

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#505d82',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
}

export const Calculator = () => {
  const { t } = useTranslation()

  const priceRaised = parseFloat(import.meta.env.VITE_CALCULATOR_RAISED)
  const priceAgraToken = parseFloat(import.meta.env.VITE_CALCULATOR_PRICE_AGRA)
  const priceBNB = parseFloat(import.meta.env.VITE_CALCULATOR_PRICE_BNB)

  const [bnbAmount, setBnbAmount] = useState(0.0)
  const [agraAmount, setAgraAmount] = useState(0.0)

  const percent = useMemo(() => {
    if (isNaN(agraAmount)) return 0
    const result = (100 * agraAmount * priceAgraToken) / priceRaised
    if (isNaN(result) || priceRaised === 0) return 0
    return result
  }, [agraAmount, priceAgraToken, priceRaised])

  const formatNumber = (n) => {
    if (isNaN(n)) return 0
    return Math.round(n * 100) / 100
  }

  const onChangeBnb = (e) => {
    const value = e.target.value
    const agra = (parseFloat(value) * priceBNB) / priceAgraToken
    setBnbAmount(value)
    setAgraAmount(formatNumber(agra))
  }
  const onChangeAgra = (e) => {
    const value = e.target.value
    const bnb = (parseFloat(value) * priceAgraToken) / priceBNB
    setAgraAmount(value)
    setBnbAmount(isNaN(bnb) ? 0 : bnb)
  }

  return (
    <Stack
      position="relative"
      bgcolor="#0c183f"
      color="white"
      gap={1}
      paddingX={3}
      paddingY={4}
      flexGrow={1}
      height="100%"
      maxWidth="400px"
      marginX="auto"
      justifyContent="space-between"
      // border={3}
      // borderColor="#b0cd2d"
      style={{
        color: 'white',
      }}
    >
      <Stack position="absolute" width="100%" height="100%" left={0} top={0}>
        <img
          src={commingsoon}
          style={{
            width: '50%',
            zIndex: 1,
            userSelect: 'none',
            opacity: '90%',
          }}
        />
      </Stack>
      <Typography fontWeight={900}>
        RAISED: ${Intl.NumberFormat('en-EN').format(priceRaised)} USD
      </Typography>
      <Button color="app" variant="outlined" sx={{ fontWeight: 900 }}>
        {Math.round(percent * 100) / 100}%
      </Button>
      <Button color="app" variant="contained">
        BNB
      </Button>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={1}
        sx={{
          bgcolor: '#fff2',
          backdropFilter: 'blur(2px)',
          borderRadius: 2,
          border: '1px #fff2 solid',
        }}
      >
        <Typography>1 {t('comp.calc.token.name')}</Typography>
        <Typography>
          ${Intl.NumberFormat('en-EN').format(priceAgraToken)} USD
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={1}
        sx={{
          bgcolor: '#fff2',
          backdropFilter: 'blur(2px)',
          borderRadius: 2,
          border: '1px #fff2 solid',
        }}
      >
        <Typography>1 BNB</Typography>
        <Typography>
          ${Intl.NumberFormat('en-EN').format(priceBNB)} USD
        </Typography>
      </Stack>
      <Stack
        position="relative"
        direction="row"
        marginTop={6}
        marginBottom={2}
        gap={1}
      >
        <TextField
          label="BNB"
          variant="outlined"
          onChange={onChangeBnb}
          value={bnbAmount}
          sx={textFieldStyle}
        />
        <TextField
          color="app"
          label={t('comp.calc.token.name')}
          variant="outlined"
          placeholder={t('comp.calc.token.placename')}
          onChange={onChangeAgra}
          value={agraAmount}
          sx={textFieldStyle}
        />
        <Typography
          position="absolute"
          right={0}
          bottom={'100%'}
          marginBottom={1}
          padding={1}
          bgcolor="app.main"
          color="white"
          borderRadius={1}
        >
          ${Math.round(agraAmount * priceAgraToken * 100) / 100} USD
        </Typography>
      </Stack>
      <Button color="app" variant="contained" sx={{ fontWeight: 900 }}>
        {t('comp.calc.token.connect')}
      </Button>
      <Button color="app" variant="contained" sx={{ fontWeight: 900 }}>
        {t('comp.calc.token.buy')}
      </Button>
      <Button color="app" variant="contained">
        {t('comp.calc.token.own')}
      </Button>
    </Stack>
  )
}
