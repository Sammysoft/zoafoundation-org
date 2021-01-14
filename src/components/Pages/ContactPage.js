import React from 'react';
import Body from '../ContactBody/Contact';
import Nav from '../Nav/Nav';


export default function ContactPage() {
    return (
       <div>
            <Nav />
            <div className="container">
            <Body />
        </div>
       </div>
    )
}
