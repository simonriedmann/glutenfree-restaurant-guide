import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';

/*
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
