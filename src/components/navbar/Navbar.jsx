import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
const[loginStatus, setLoginStatus]=useState(false)

useEffect(()=>{
  let token = localStorage.getItem("token");
  if (!token){
    setLoginStatus(false)
  // navigate('/login')
    
  }else{

    setLoginStatus(true);
  };
}, [loginStatus]);

const logoutHandler=()=>{
  localStorage.clear();
  navigate('/login')
}


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">GoodReads</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/books">Books</Link>
      </li>      
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
    {
      loginStatus?(
        <button className="btn btn-danger my-2 my-sm-0" onClick={logoutHandler} type="submit">LogOut</button>

      ):(
        <Link className="btn btn-primary my-2 my-sm-0" to='/login'>Login</Link>
      )

    }
    </form>
  </div>
</nav>
  )
}

export default Navbar