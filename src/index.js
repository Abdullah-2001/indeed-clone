import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './context/AuthProvider.jsx';
import RouterApp from './router/Router.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <RouterApp />
  </AuthProvider>
);