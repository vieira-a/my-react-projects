import React from 'react';
import ReactDOM from 'react-dom/client';
//import HomePage from './Apps/Home/HomePage';
import AppNavbar from './components/Navbar';
import TemperatureConverter from './pages/Temperatures';
//import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppNavbar/>,
    <TemperatureConverter/>
    </>
);

// function LoadTemperatureConverter(){
//   return render (
    
//     <TemperatureConverter/>
    
//   )
// }

// export default LoadTemperatureConverter;
