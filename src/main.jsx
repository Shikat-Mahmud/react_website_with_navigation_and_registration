import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RegistrationForm from './components/Registration'
import LoginForm from './components/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrationForm/>
    {/* <LoginForm/> */}
  </React.StrictMode>,
)
