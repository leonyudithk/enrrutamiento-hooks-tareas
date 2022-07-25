import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './routers/AppRouters';
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouters/>
  </React.StrictMode>
);


