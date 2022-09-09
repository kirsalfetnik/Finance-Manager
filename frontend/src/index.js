import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MonthsContextProvider } from './context/MonthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MonthsContextProvider>
      <App />
    </MonthsContextProvider>
  </React.StrictMode>
);

