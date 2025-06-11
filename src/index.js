import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contextapi from './Components/Contextstore'; // ✅ Correct import
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextapi>
    <App />
  </Contextapi>
);

reportWebVitals();
