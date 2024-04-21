import React, { useState, useEffect } from 'react';
import BOOK_DATA from '../../data/books'
import Book from './book/Book';

const BookList = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        setBooks(BOOK_DATA)
    }, [])
  return (
    <div className="container-fluid mt-3">
      <div class="card-header"> <h2 className="text-center">Book List</h2></div>
        <div className="row">
        {
          books.map((book, index)=>(
            <Book key={index} data={book}/>
          ))
        }
        </div>
    </div>
  )
}

export default BookList