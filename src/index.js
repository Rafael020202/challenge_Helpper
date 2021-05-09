import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/';
import Global from './styles/global';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global/>
  </React.StrictMode>,
  document.getElementById('root')
);

