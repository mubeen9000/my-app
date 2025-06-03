import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Contextapi from './Components/Contextapi'; 
import reportWebVitals from './reportWebVitals';
import { Contextstore } from './Components/Contextapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Contextapi>
      <App />
    </Contextapi>
);

reportWebVitals();
