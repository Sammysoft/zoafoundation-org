import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable */
export default function header() {
    return (
        <div>
            <header id="header" className="fixed-top">

 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link to="/Home" className="navbar-brand">Zoa Foundation</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/Home" className={'nav-link'}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/Home#contact" className="nav-link" >Contact</Link>
      </li>
      <li class="nav-item">
        <Link to="/Team" className="nav-link" >Team</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Accounts
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/"  className="dropdown-item" > Sign In</Link>
          <Link to="/" >Sign Up</Link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </header>
        </div>
    )
}
