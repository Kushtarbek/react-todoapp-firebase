import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';
import { AppThemeProvider } from './providers/theme';
import { AppRouterProvider } from './providers/route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <AppRouterProvider />
    </AppThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
