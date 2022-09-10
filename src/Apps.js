import React from 'react';

import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TemperatureConverter from './pages/Temperatures';
import { render } from '@testing-library/react';


function App() {
    return (
        
        <Router>
            <Navigation />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/temperature' element={<TemperatureConverter/>} />
        </Routes>
        </Router>
    );
}

render(
    <TemperatureConverter/>
)

export default App;