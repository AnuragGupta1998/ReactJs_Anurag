import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DisplayFun from './Display.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <DisplayFun />
    <App />
    </>
    
  </React.StrictMode>,
)
