import PropTypes from 'prop-types'
import { LinearProgress, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const TimerProgress = ({ progress }) => {
  const { t } = useTranslation()

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: '30px',
          backgroundColor: 'white',
          borderRadius: '30px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'rgb(51, 39, 123)',
          },
        }}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" color="white" fontSize="18px" maxWidth="80px">
          {t('comp.timer.bar.start')}
        </Typography>
        <Typography variant="h6" color="white" fontSize="18px" maxWidth="100px">
          {t('comp.timer.bar.end')}
        </Typography>
      </Stack>
    </>
  )
}

TimerProgress.propTypes = {
  progress: PropTypes.number.isRequired,
}
