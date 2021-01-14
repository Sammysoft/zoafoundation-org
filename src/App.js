import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import './App.css';


function App() {
  return (
    <div>
       <Route path="/" exact component={HomePage} />
       <Route path="/Home"  component={HomePage} />
       <Route path="/About"  component={AboutPage} />
       <Route path="/Contact"  component={ContactPage} />
    </div>
  );
}

export default App;
