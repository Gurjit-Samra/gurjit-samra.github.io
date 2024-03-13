import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pages/Contact"  element={<Contact />} />
            <Route exact path="/pages/Projects" element={<Projects/>} />
        </Routes>
    </Router> 
)
};

export default App;