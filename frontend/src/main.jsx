import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";



createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)