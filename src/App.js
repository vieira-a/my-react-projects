import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TemperatureConverter from './pages/Temperatures';

function App() {
    return (

        <div>
            <div>
                <Router>
                <   Navigation />
        
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/temperature' element={<TemperatureConverter/>} />
                </Routes>
                </Router>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
    
};

export default App;