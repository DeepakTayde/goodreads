import React from "react";
import { Link } from "react-router-dom";
const Category = (props) => {
  const { catId, catName, catImg } = props.data;
  return (
    <div index={catId} className="col-md-3">
      <Link to={"/books"}>
        <div className="card">
          <img src={catImg} alt="" className="card-img-top" />
          <div className="card-body">
            <div className="card-title">{catName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
