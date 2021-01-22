import React from 'react';
import './Nav.css';

function Nav (){
    return(
       
            <div className={"Navbar"}>
                <div className={"fa-wrapper"}>
                <i className={'fa fa-instagram '}></i>
                <i className={'fa fa-facebook '}></i>
                <i className={'fa fa-twitter '}></i>
                <i className={'fa fa-youtube '}></i>
                <i className={'fa fa-phone '}></i>
                </div>
            </div>
      
    )
}

export default Nav;