import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetStudentData from './populateStudentData';

const root = ReactDOM.createRoot(document.getElementById('tile-grid'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

