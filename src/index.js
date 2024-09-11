import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobaStyles from './global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobaStyles />
    <App />
  </React.StrictMode>
);

