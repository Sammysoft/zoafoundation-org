import React from 'react';
import './Nav.css';

function Nav (){
    return(
       
            <div className={"Navbar"}>
                <div className={"fa-wrapper"}>
                <i className={'fa fa-instagram fa-2x'}></i>
                <i className={'fa fa-facebook fa-2x'}></i>
                <i className={'fa fa-twitter fa-2x'}></i>
                <i className={'fa fa-youtube fa-2x'}></i>
                <i className={'fa fa-phone fa-2x'}></i>
                </div>
            </div>
      
    )
}

export default Nav;