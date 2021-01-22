import React from 'react';
import './Contact.css';
import Header from '../Header/ForContact/Header';
import Handles from './Handles';



function Body(){
    return(
        <div className={'container'}>
            <Header />
            <Handles />
            
        </div>
    )
}

export default Body;