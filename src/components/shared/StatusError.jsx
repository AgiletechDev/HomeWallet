import PropTypes from 'prop-types'
import { Button, Typography } from '@mui/material'
import { StatusContainer } from './StatusContainer'
import { IoReloadSharp } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export const StatusError = ({ onAction }) => {
  const { t } = useTranslation()

  return (
    <StatusContainer>
      <Typography>{t('home.form.status.error.title')}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={onAction}
        endIcon={<IoReloadSharp />}
      >
        <span>{t('home.form.status.error.button')}</span>
      </Button>
    </StatusContainer>
  )
}

StatusError.propTypes = {
  onAction: PropTypes.func,
}
