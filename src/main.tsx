import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapperApp from './App';
import './fontawesome';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrapperApp />
  </React.StrictMode>
);
