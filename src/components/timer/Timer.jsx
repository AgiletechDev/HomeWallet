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
  }, [])

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
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Stack
        position="relative"
        padding="1em"
        borderRadius={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        zIndex={1}
      >
        <img
          src={background}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            zIndex: '-1',
            width: '100%',
            borderRadius: '30px',
            filter: 'hue-rotate(160deg)',
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
            <TimerNumber value={timec.days} name={t('plat.sec1.item1')} />

            <TimerNumber value={timec.hours} name={t('plat.sec1.item2')} />

            <TimerNumber value={timec.minutes} name={t('plat.sec1.item3')} />

            <TimerNumber value={timec.seconds} name={t('plat.sec1.item4')} />
          </Grid>

          <TimerProgress progress={progress} />
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: 'rgb(51, 39, 123)',
            ':hover': { bgcolor: 'rgb(51, 39, 123)' },
          }}
        >
          {t('plat.sec1.btn')}
        </Button>
      </Stack>
    </Stack>
  )
}

Timer.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}
