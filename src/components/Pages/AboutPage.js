import React from 'react';
import Body from '../AboutBody/About';
import Nav from '../Nav/Nav';
import Footer from '../Footer/footer';


export default function AboutPage() {
    return (
       <div>
            <Nav />
            <div className="container">
            <Body />
        </div>
        <Footer />
       </div>
    )
}
