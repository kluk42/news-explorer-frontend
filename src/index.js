import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './utils/useUser/useUser';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.root')
);
