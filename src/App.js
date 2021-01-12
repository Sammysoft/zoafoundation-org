import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import './App.css';


function App() {
  return (
    <div>
       <Route path="/" exact component={HomePage} />
       <Route path="/Home"  component={HomePage} />
       <Route path="/About"  component={AboutPage} />
    </div>
  );
}

export default App;
