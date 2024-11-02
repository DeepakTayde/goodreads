// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import BookDetails from "../../components/bookDetails/BookDetails";
import BOOK_DATA from '../../data/books'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../redux/actions/BookActions';

const BookDetailsPage = () => {
  let {id} = useParams()
  // const [book, setBook] = useState([])

  const book = useSelector(state => state.book)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(addBook(BOOK_DATA[id]))
      return ()=>{
        dispatch(removeBook())
      }
  }, [])
  return (
    <>
      <Navbar />

     <BookDetails data={book} />

    </>
  );
};

export default BookDetailsPage;
