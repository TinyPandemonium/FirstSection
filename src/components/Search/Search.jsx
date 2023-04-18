import { Link } from 'react-router-dom'

const Search = ({addToRead, results, isLoading, handleSubmit, searchInput, setSearchInput}) => {
  
    return (
    <main className='Search'>
        <h1></h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            id='searchInput'
            placeholder='search through googlebooks API here'
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            />
            <button className='searchBtn'>search</button>
        </form>
        <div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
            <div className='Search'>
             {results.map((result) => (
              <div key={result.id}>
                      {result.volumeInfo.imageLinks && (
                      <img src={result.volumeInfo.imageLinks.smallThumbnail  } alt={result.volumeInfo.title}/>
                    )}
                  <div>
                      <h6>{result.volumeInfo.title}</h6>
                      <p> { result.volumeInfo.authors}</p>
                      <div>
                        <a target='_blank' href={result.volumeInfo.previewLink}>see more</a>
                        <Link to="/">
                          <button type = "button" onClick={() => addToRead(result)}>add to read</button>
                        </Link>
                      </div>
                    </div>
                </div>
               ))}
             </div>
              )}
          </div>

    </main>
  )
}

export default Search;