import React from 'react'
import { Link } from 'react-router-dom';

const Book = (props) => {
    const { id, title, image, } = props.data;
  return (
    <div  className="col-sm-2 mt-3">
        <div className="card p-2">
            <img src={image} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
            <Link to={'/book/details/' +id} className="btn btn-dark btn-block">Show details</Link>
        </div>
    </div>
  )
}

export default Book