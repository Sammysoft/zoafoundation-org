import React from 'react';
import Body from '../AboutBody/About';
import Nav from '../Nav/Nav';


export default function AboutPage() {
    return (
       <div>
            <Nav />
            <div className="container">
            <Body />
        </div>
       </div>
    )
}
