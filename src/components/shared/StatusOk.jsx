import PropTypes from 'prop-types'
import { Typography, Button } from '@mui/material'
import { StatusContainer } from './StatusContainer'
import { IoSendSharp } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export const StatusOK = ({ onAction }) => {
  const { t } = useTranslation()

  return (
    <StatusContainer>
      <Typography color='black'>{t('home.form.status.ok.title')}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={onAction}
        endIcon={<IoSendSharp />}
      >
        <span>{t('home.form.status.ok.button')}</span>
      </Button>
    </StatusContainer>
  )
}

StatusOK.propTypes = {
  onAction: PropTypes.func,
}
