import React from 'react';
import ReactDOM from 'react-dom';
import { LoginProvider } from 'services/loginContext';
import Routes from './routes/RouteManager';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <LoginProvider>
      <Routes />
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
