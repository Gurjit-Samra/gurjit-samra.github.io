import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
return(
    <Router>
        <Routes>
            <Route exact path="/pages/Home" component={Home} />
            <Route exact path="/pages/Contact" component={Contact} />
            <Route exact path="/pages/Projects" component={Projects} />
        </Routes>
    </Router> 
)
};

export default App;