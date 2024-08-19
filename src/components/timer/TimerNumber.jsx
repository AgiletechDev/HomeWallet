import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

export const TimerNumber = ({ name, value }) => {
  return (
    <Grid
      item
      xs={2}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: '1em',
          backgroundColor: 'white',
          padding: '0.5em',
          color: 'black',
          borderRadius: '10px',
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: '1em',
          color: 'white',
        }}
      >
        {name}
      </Typography>
    </Grid>
  )
}

TimerNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
