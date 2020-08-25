import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <TourList/>
  
    </div>
  );
}

export default App;
