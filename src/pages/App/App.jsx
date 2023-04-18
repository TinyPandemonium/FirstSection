import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Search from '../../components/Search/Search';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [addToRead, setAddToRead] = useState([]);
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

  const sendToRead = (result) => {
    const oldresult = [...addToRead]
    const newresult = [...oldresult, result]
    setAddToRead(newresult)
    console.log(newresult)

  }

  const removeFromRead =(id) => {
    const oldresult = [...addToRead]
    const newresult = oldresult.filter(result => result.id !== id)
    setAddToRead(newresult)
    console.log(newresult)
  }



  return (
   <>
   <NavBar user={user} setUser={setUser}/>
   <h1>Placeholder text here</h1>
   {user ? 
   <>
   <Routes>
    <Route path="/search" element={<Search results={results} searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={handleSubmit} isLoading = {isLoading} addToRead={addToRead}/>} />
   </Routes>
   </> : <AuthPage setUser={setUser}/>
   } 
   </>
  )
}

export default App