import React from 'react';
import './Body.css';
import Header from '../Header/Header';
import Cards from '../Cards/Card';
import Section from '../Section/Section';


function Body(){
    return(
        <div className={'container'}>
            <Header />
            <Cards/>
            <Section />
            
        </div>
    )
}

export default Body;