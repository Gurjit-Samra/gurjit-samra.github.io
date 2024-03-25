import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

const App = () => {
return(
    <Router>
        <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/Home"  element={<Home />} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Projects" element={<Projects/>} />
            <Route exact path="/Contact"  element={<Contact />} />
        </Routes>
    </Router> 
)
};

export default App;