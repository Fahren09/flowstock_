import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App'; // Importa el componente App
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Renderiza el componente App */}
  </React.StrictMode>
);

reportWebVitals();
