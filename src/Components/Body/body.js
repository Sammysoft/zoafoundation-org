import React from 'react';
import Header from '../Header/header'
import Main from '../Main/main';
import About from '../About/About';
import Count from '../Counts/count';
import Video from '../Video/Video';
import Clients from '../Clients/client';
import Testimonials from '../Testimonials/index';
import Footer from '../Footer/footer';
/*eslint-disable */
export default function body() {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Count />
            <Video />
            <Clients />
            <Testimonials />
            <Footer />
        </div>
    )
}
