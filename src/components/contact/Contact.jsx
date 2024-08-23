import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { StatusOK, StatusError } from './../shared'
import { formState } from '../../utils/formState'

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#505d82',
    },
    '&:hover fieldset': {
      borderColor: '#33277B',
    },
    '& input:focus': {
      borderColor: '#f00',
    },
  },
  '& .MuiInputBase-input': {
    color: '#000',
  },
  '& .MuiInputLabel-root': {
    color: '#000',
  },
}

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = () => {
  const { t } = useTranslation()

  const formRef = useRef(null)
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(formState.EDIT)

  const buttonDisabled = !!data.email && !!data.message && !!data.name

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const sendMail = async () => {
    if (formRef.current) {
      setLoading(true)
      try {
        const response = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICEID || '',
          import.meta.env.VITE_EMAILJS_TEMPLATEID_CONTACT || '',
          formRef.current
        )
        console.log('RESPONSE STATUS', response.status)
        console.log('RESPONSE TEXT', response.text)
        setStatus(formState.OK)
        setData(initialState)
      } catch (e) {
        console.log('ERROR', e)
        setStatus(formState.ERROR)
      }
      setLoading(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendMail()
  }

  return (
    <Stack position="relative" bgcolor='white' padding={4} borderRadius={4} boxShadow='0px 0px 5px gray'>
      {status === formState.OK && (
        <StatusOK onAction={() => setStatus(formState.EDIT)} />
      )}
      {status === formState.ERROR && (
        <StatusError onAction={() => setStatus(formState.EDIT)} />
      )}
      <Grid
        ref={formRef}
        component="form"
        onSubmit={onSubmit}
        sx={{ padding: { xs: '5px', sm: '10px' } }}
        container
      >
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            borderRight: { xs: 'none', sm: '2px solid #33277B' },
            paddingRight: { xs: '0', sm: '2em' },
          }}
        >

          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: '25px',
              letterSpacing: '2px',
              marginBottom: '20px',
              fontWeight: 900
            }}
          >
            {t('CONTACT_US')}
          </Typography>

          <Box
            height={8}
            bgcolor='#33277B'
            width='30%'
          />

          <TextField
            disabled={loading}
            label={t('home.form.label1')}
            type="text"
            placeholder={t('home.form.label1.placeholder')}
            fullWidth
            name="name"
            value={data.name}
            onChange={handleChange}
            sx={{ mb: { xs: '1em', sm: '3em' }, mt: '2em', ...textFieldStyle }}
          />

          <TextField
            disabled={loading}
            label={t('home.form.label2')}
            type="email"
            placeholder={t('home.form.label2.placeholder')}
            fullWidth
            name="email"
            value={data.email}
            onChange={handleChange}
            sx={{ mb: '3em', ...textFieldStyle }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: { xs: '0', sm: '2em' },
          }}
        >
          <Typography
            variant="p"
            sx={{
              mb: { xs: '1em', sm: '1em' },
              fontWeight: 600,
            }}
          >
            {t('home.form.label3')}
          </Typography>
          <TextareaAutosize
            disabled={loading}
            className="outline-none bg-white rounded-md border-[1px] p-4 border-[#505d82] focus:border-[#33277B] focus:border-2"
            aria-label="textarea"
            placeholder={t('home.form.label3.placeholder')}
            name="message"
            value={data.message}
            onChange={handleChange}
            sx={{
              width: '100%',
              resize: 'none',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              rows: 10,
            }}
          />
          <Button
            disabled={!buttonDisabled || loading}
            variant="contained"
            color="success"
            fullWidth
            type="submit"
            className={loading ? 'animate-pulse' : ''}
            sx={{
              marginTop: { xs: '3em', sm: 'auto' },
              padding: { xs: '15px', sm: '20px' },
              backgroundColor: '#33277B',
            }}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              t('home.form.btn')
            )}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}
