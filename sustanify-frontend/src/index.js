import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main component
import './index.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 API
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

