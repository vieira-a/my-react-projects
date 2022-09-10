import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './Apps';
import TemperatureConverter from './pages/Temperatures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import TemperatureConverter from './pages/Temperatures';
// import Navigation from './components/Navigation';
// //import { render } from '@testing-library/react';


// // function LoadTemperatureConverter(){
// //   return render (
    
// //     <TemperatureConverter/>
    
// //   )
// // }

// // export default LoadTemperatureConverter;
// function App(){
//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//           <Route exact path='/' element={<Home />} />
//           <Route path='/temperatureconverter' element={<TemperatureConverter />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;

// //ReactDOM.render(<App />, document.getElementById("root"));



// ReactDOM.render(
// <React.StrictMode>
//     <App />
// </React.StrictMode>,
// document.getElementById('root')
// );