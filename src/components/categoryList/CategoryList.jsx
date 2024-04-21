import React from 'react'
import Category from './category/Category';


const CategoryList = () => {

  const items = [
    {
      catId : 1,
      catName : "Fiction",
      catImg : "https://placehold.it/400/888888"
    },
    {
      catId : 2,
      catName : "Comedy",
      catImg : "https://placehold.it/400/888888"
    },
    {
      catId : 3,
      catName : "Science",
      catImg : "https://placehold.it/400/888888"
    },
    {
      catId : 4,
      catName : "History",
      catImg : "https://placehold.it/400/888888"
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">All Categories</h2>
      <div className="row">
        {
          items.map((category, index)=>(
            <Category key={index} data={category}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryList