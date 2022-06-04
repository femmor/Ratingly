import React from 'react';
import ReactDOM from 'react-dom/client';
import { RatingProvider } from './context/RatingContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </React.StrictMode>
);
