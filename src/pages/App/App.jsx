import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import AuthPage from '../AuthPage/AuthPage'
import Search from '../Search/Search';
import NavBar from '../../components/NavBar/NavBar';
import Favorites from '../Favorites/Favorites';

function App() {
  const [user, setUser] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(searchInput === '') return;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=books+${searchInput}&key=AIzaSyDIRwAzaXppOVc4eAxBHRRyuEO4g7m0E2I`
    );
    const data = await response.json();
    setResults(data.items);
  }

  const addToFavorites = (result) => {
    const oldresult = [...favorites]
    const newresult = [...oldresult, result]
    setFavorites(newresult)
    console.log(newresult)

  }

  const removeFromFavorites =(id) => {
    const oldresult = [...favorites]
    const newresult = oldresult.filter(result => result.id !== id)
    setFavorites(newresult)
    console.log(newresult)
  }



  return (
   <>
   <NavBar user={user} setUser={setUser}/>
   <h1>Placeholder text here</h1>
   {user ? 
   <>
   <Routes>
    <Route path='/search' element={<Search results={results} searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={handleSubmit} isLoading = {isLoading} addToFavorites={addToFavorites}/>} />
    <Route path='/favorites' element={<Favorites favorites={favorites} removeFromFavorites ={ removeFromFavorites} />} ></Route>
   </Routes>
   </> : <AuthPage setUser={setUser}/>
   } 
   </>
  )
}

export default App