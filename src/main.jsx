import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/AppRouter'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../i18n/español/es.json'
import en from '../i18n/ingles/en.json'

i18next.use(initReactI18next).init({
  lng: "es", 
  interpolation:  {
    escapeValue: false,
  },
  resources:{
    es:{
      translation: es,
    },
    en:{
      translation: en,
    }
  }

})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
