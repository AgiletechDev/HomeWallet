import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

// import commingsoon from './../../../assets/launchpad/banners/commingsoon.png'

export const Calculator = ({ background }) => {
  const priceRaised = parseFloat(import.meta.env.VITE_CALCULATOR_RAISED)
  const priceAgraToken = parseFloat(import.meta.env.VITE_CALCULATOR_PRICE_AGRA)
  const priceBNB = parseFloat(import.meta.env.VITE_CALCULATOR_PRICE_BNB)

  const [bnbAmount, setBnbAmount] = useState(0.0)
  const [agraAmount, setAgraAmount] = useState(0.0)

  const percent = useMemo(() => {
    if (isNaN(agraAmount)) return 0
    return (100 * agraAmount * priceAgraToken) / priceRaised
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
      bgcolor="#21470c"
      color="white"
      gap={1}
      paddingX={4}
      paddingY={2}
      borderRadius={2}
      justifyContent="space-between"
      // border={3}
      // borderColor="#b0cd2d"
      style={{
        color: 'white',
        background: `url(${background})`,
      }}
    >
      {/* 
      <Stack position="absolute" width="100%" height="100%" left={0} top={0}>
        <img
          src={commingsoon}
          style={{
            width: '50%',
            zIndex: 1,
            userSelect: 'none',
          }}
        />
      </Stack>
       */}
      <Typography fontWeight={900}>
        RAISED: ${Intl.NumberFormat('en-EN').format(priceRaised)} USD
      </Typography>
      <Button color="base" variant="contained" sx={{ fontWeight: 900 }}>
        {Math.round(percent * 100) / 100}%
      </Button>
      <Button color="base" variant="contained">
        BNB
      </Button>
      <Typography>
        1 Agra token = ${Intl.NumberFormat('en-EN').format(priceAgraToken)} USD
      </Typography>
      <Typography>
        1 BNB = ${Intl.NumberFormat('en-EN').format(priceBNB)} USD
      </Typography>
      <Stack position="relative" gap={1} direction="row">
        <TextField
          color="base"
          label="BNB"
          variant="filled"
          onChange={onChangeBnb}
          value={bnbAmount}
        />
        <TextField
          color="base"
          label="Agra token"
          variant="filled"
          placeholder="Agra token amount"
          onChange={onChangeAgra}
          value={agraAmount}
        />
        <Typography
          position="absolute"
          right={0}
          bottom={'100%'}
          marginBottom={1}
          padding={1}
          bgcolor="base.main"
          color="black"
          borderRadius={2}
        >
          ${Math.round(agraAmount * priceAgraToken * 100) / 100} USD
        </Typography>
      </Stack>
      <Button color="base" variant="contained" sx={{ fontWeight: 900 }}>
        Connect wallet
      </Button>
      <Button color="base" variant="contained" sx={{ fontWeight: 900 }}>
        Buy Agra token
      </Button>
      <Button color="base" variant="contained">
        MY TOKENS
      </Button>
    </Stack>
  )
}

Calculator.propTypes = {
  background: PropTypes.string,
}
