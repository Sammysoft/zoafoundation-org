import React from 'react';
import { Link } from 'react-router-dom';
import './navigator.css';
/* eslint-disable */ 
Navigator = () =>{
    return (
    <div className={"Navigator"}>
        <Link to="/Home"><span id={"nav-items"}> Home</span></Link> <br/> 
        <Link to="/About"><span id={"nav-items"}>About</span></Link> <br/>
        <Link to='/Contact'><span id={"nav-items"}>Contact</span></Link><br/>
        <span id={"nav-items"}>Join</span><br/>
    </div>
    )
}

export default Navigator;