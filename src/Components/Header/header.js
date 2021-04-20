import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable */
export default function header() {
    return (
        <div>
            <header id="header" className="fixed-top">
        {/* <div className="container d-flex align-items-center">
    
          <h5 className="logo mr-auto">
            <Link to="/Home">Zoa Foundation</Link>
          </h5>
          
          <Link to="/" className="logo mr-auto"></Link>
    
          <nav id={'navbar'} className="navbar">
            <ul>
              <li className="active">
                <Link to="/Home">Zoa Foundation</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Activities</a>
              </li>
              <li>
                <Link to="/Team" >Team</Link>
              </li>
              <li className="drop-down">
                <a href="">Categories</a>
                <ul>
                  <li>
                    <a href="#">Administration</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Accounts</a>
                    <ul>
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="#">Sign Up</a>
                      </li> 
                    </ul>
                  </li>
                  <li>
                    <a href="#">Outreaches</a>
                  </li>
                  <li>
                    <a href="#">Networks</a>
                  </li>
                  <li>
                    <a href="#">Join Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
    
            </ul>
            <i className="bi mobile-nav-toggle bi-x">
            </i>
          </nav>
          
    
          <a href="#about" className="get-started-btn scrollto">Join Us</a>
    
        </div> */}






      


 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link to="/Home" className="navbar-brand">Zoa Foundation</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/Home" className="nav-link" >Contact</Link>
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
