import React from "react";

const BookDetails = (props) => {
  const { title, description, image, author } = props.data;
  return (
    <div className="container-fluid mt-3">
      <div class="card-header"> <h2 className="text-center">Book Details</h2></div>
      <div className="row mt-4">
        <div className="col-md-8">
          <div class="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-2 text-center" >
                <img src={image} alt="..." className="img-fluid p-2 img-thumbnail"/>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h1 className="card-title">{title}</h1>
                  <h2 className="card-text text-muted">
                    <small>By : </small>
                    {author}
                  </h2>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div class="card mb-3" >
          <div class="card-header text-center"><h2>Book Review</h2></div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default BookDetails;
