import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import options from './util/alerts';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App/>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
