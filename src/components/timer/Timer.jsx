import PropTypes from 'prop-types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { TimerNumber } from './TimerNumber'
import { TimerProgress } from './TimerProgress'

export const Timer = ({ title, background }) => {
  const { t } = useTranslation()

  const initialCounter = Math.max(
    Math.round((new Date('2024/10/13') - new Date()) / 1000),
    0
  )

  const [progress, setProgress] = useState((initialCounter / 11664000) * 100)
  const timer = useRef()
  const [counter, setCounter] = useState(initialCounter)

  useEffect(() => {
    const decreaseCounter = () => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0))
    }

    const decreaseProgress = () => {
      setProgress((prevProgress) =>
        prevProgress > 0 ? prevProgress - (1 / initialCounter) * 100 : 0
      )
    }

    const updateProgressAndCounter = () => {
      decreaseProgress()
      decreaseCounter()
    }

    timer.current = setInterval(updateProgressAndCounter, 1000)

    return () => {
      clearInterval(timer.current)
    }
  }, [initialCounter])

  const timec = useMemo(
    () => ({
      days: Math.floor(counter / (60 * 60 * 24)),
      hours: Math.floor((counter % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((counter % (60 * 60)) / 60),
      seconds: counter % 60,
    }),
    [counter]
  )

  return (
    <Stack
      height="100%"
      width={{ sx: '50%', lg: '100%' }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        position="relative"
        padding="1em"
        borderRadius={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        zIndex={1}
      >
        <img
          src={background}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            zIndex: '-1',
            width: '100%',
            borderRadius: '10px',
            height: '100%',
          }}
        />

        <Typography
          variant="h5"
          sx={{ color: 'white', textAlign: 'center', mt: '3em' }}
        >
          {title}{' '}
        </Typography>
        <Box width="100%">
          <Grid
            container
            sx={{
              justifyContent: 'center',
              marginTop: '5em',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '20px',
            }}
          >
            <TimerNumber value={timec.days} name={t('comp.timer.days')} />

            <TimerNumber value={timec.hours} name={t('comp.timer.hours')} />

            <TimerNumber value={timec.minutes} name={t('comp.timer.minutes')} />

            <TimerNumber value={timec.seconds} name={t('comp.timer.seconds')} />
          </Grid>

          <TimerProgress progress={progress} />
        </Box>

        <Button variant="contained" color="base">
          {t('comp.timer.button.buy')}
        </Button>
      </Stack>
    </Stack>
  )
}

Timer.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}
