import React from 'react'

export default function Favorites({favorites, removeFromFavorites}) {
  
    return ( 
        <main className='favorites'>
            {favorites.length > 0 ? ( 
            favorites.map((book) => (
              <div key={book.id} >
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                  <div>
                      <p>{book.volumeInfo.title}</p>
                      <p> { book.volumeInfo.authors}</p>
                    <button onClick={() => removeFromFavorites(book.id)}>remove from favorites</button>
                  </div>
              </div>
              ))
             ) : (
            <h5>You don't have any favorited books yet.</h5>
          )}
        </main>
      )
}
