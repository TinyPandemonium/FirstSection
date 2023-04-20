
import React from 'react'
import { Link } from 'react-router-dom'
import UserLogOut from '../LogoutForm/LogoutForm'
export default function NavBar({user, setUser}) {
    return (
      <nav>
        <span><Link to='/'>Home</Link></span>
        {user ? 
        <>
        <span><Link to='/search'>Search</Link></span>
        <UserLogOut user={user} setUser={setUser}/>
        </>
        :
        <></>
        }
      </nav>
    )
  }