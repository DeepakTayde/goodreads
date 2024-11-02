import React, { useState, useEffect } from 'react';
import BOOK_DATA from '../../data/books'
import Book from './book/Book';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setBooks } from '../../redux/actions/BookActions';


const BookList = () => {
    // const [books, setBooks] = useState([])

    const books = useSelector(state => state.allBooks.books)
    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(setBooks(BOOK_DATA))
        dispatch(fetchBooks())
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