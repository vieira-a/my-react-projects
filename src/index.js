import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './Apps';
import TemperatureConverter from './pages/Temperatures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TemperatureConverter />,
  <App />
);