import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import { BrowserRouter } from 'react-router-dom';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
     </BrowserRouter>
  </React.StrictMode>,
)
