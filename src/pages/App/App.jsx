import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);
  return (
   <>
   <NavBar user={user} setUser={setUser}/>
   <h1>Placeholder text here</h1>
   {user ? 
   <>
   </> : <AuthPage setUser={setUser}/>
   } 
   </>
  )
}

export default App