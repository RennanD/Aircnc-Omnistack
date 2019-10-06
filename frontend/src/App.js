import React, {useState, useEffect} from 'react';
import './App.css';
import logo from './assets/logo.svg'

import api from './services/api'
import Routes from './routes'

function App() {

  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await api.post('/session', { email })
    
    const { _id } = response.data
    localStorage.setItem('user', _id)
  }

  return (
    <div className="container">
      <img src= { logo } alt="AirCnC"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
