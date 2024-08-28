import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import App from './App';

import es from '../i18n/español/es.json';
import en from '../i18n/ingles/en.json';

import './App.css';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY || '';
emailjs.init({ publicKey });

i18next.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
