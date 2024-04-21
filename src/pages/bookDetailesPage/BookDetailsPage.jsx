import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import BookDetails from "../../components/bookDetails/BookDetails";
import BOOK_DATA from '../../data/books'
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  let {id} = useParams()
  const [book, setBook] = useState([])

  useEffect(()=>{
      setBook(BOOK_DATA[id])
  }, [id])
  return (
    <>
      <Navbar />

     <BookDetails data={book} />

    </>
  );
};

export default BookDetailsPage;
