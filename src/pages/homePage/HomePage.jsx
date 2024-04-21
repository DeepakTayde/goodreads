import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from  '../../components/header/Header'
import CategoryList from '../../components/categoryList/CategoryList'


const HomePage = () => {
  return (
    <>
        <Navbar />
        <Header />
        <CategoryList />
    </>
  )
}

export default HomePage