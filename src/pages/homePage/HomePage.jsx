import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from  '../../components/header/Header'
import CategoryList from '../../components/categoryList/CategoryList'
import BookList from '../../components/bookList/BookList'


const HomePage = () => {
  return (
    <>
        <Navbar />
        <Header />
        <CategoryList />
        <BookList/>
    </>
  )
}

export default HomePage