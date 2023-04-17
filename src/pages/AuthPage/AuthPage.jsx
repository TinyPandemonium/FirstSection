
import React from 'react'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm'

export default function AuthPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true);
    
  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignupForm setUser={setUser} />}
    </main>
  )
}