import React from 'react'
/* eslint-disable */
export default function header() {
    return (
        <div>
            <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
    
          <h5 className="logo mr-auto"><a href="index.html">Zoa Foundation</a></h5>
          
          <a href="index.html" className="logo mr-auto"></a>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Activities</a></li>
              <li><a href="#team">Team</a></li>
              <li className="drop-down"><a href="">Categories</a>
                <ul>
                  <li><a href="#">Administration</a></li>
                  <li className="drop-down"><a href="#">Accounts</a>
                    <ul>
                      <li><a href="#">Sign In</a></li>
                      <li><a href="#">Sign Up</a></li> 
                    </ul>
                  </li>
                  <li><a href="#">Outreaches</a></li>
                  <li><a href="#">Networks</a></li>
                  <li><a href="#">Join Us</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
    
            </ul>
          </nav>
    
          <a href="#about" className="get-started-btn scrollto">Join Us</a>
    
        </div>
      </header>
        </div>
    )
}
