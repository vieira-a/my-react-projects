import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TemperatureConverter from './pages/Temperatures';

import "./styles/main.sass"

function App() {
    return (

        <Router>
            <Navigation/>
            <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/temperature' element={<TemperatureConverter/>} />
            </Routes>
        <Footer />
        </Router>
    
    );
};

export default App;