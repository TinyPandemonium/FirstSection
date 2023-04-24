import { Link } from 'react-router-dom'
import UserLogOut from '../LogoutForm/LogoutForm'

export default function NavBar({user, setUser}) {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <span><Link to=''>Home</Link></span>
        {user ? 
        <>
        <span><Link to='/search'>Search</Link></span>
        <span><Link to='/favorites'>Favorites</Link></span>
        <span><Link to='/forums'>Forums</Link></span>
        <p className="text-bg-dark p-3">Hello, {user.name}</p>
        <UserLogOut user={user} setUser={setUser}/>
        </>
        :
        <></>
        }
      </nav>
    )
  }