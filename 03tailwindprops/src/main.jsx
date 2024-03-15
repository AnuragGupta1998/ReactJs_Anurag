import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let array=[10,20,30,40]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <App  name={array} />
    
  </React.StrictMode>,
)
