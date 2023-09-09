import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextAPI from './ContextAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextAPI>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextAPI>
);
