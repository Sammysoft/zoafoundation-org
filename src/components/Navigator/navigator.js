import React from 'react';
import { Link } from 'react-router-dom';
import './navigator.css';

Navigator = () =>{
    return (
    <div data-aos="slide-left" data-aos-duration="600" className={"Navigator"}>
        <Link to="/Home"><span id={"nav-items"}>Home</span></Link> <br/> 
        <Link to="/About"><span id={"nav-items"}>About</span></Link> <br/>
        <span id={"nav-items"}>Contact</span><br/>
        <span id={"nav-items"}>Join</span><br/>
    </div>
    )
}

export default Navigator;