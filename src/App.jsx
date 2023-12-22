import React from 'react';
import NavBar from './Components/Navbar';
import Cover from './Components/Cover';
import Portafolio from './Components/Services'
import Footer from './Components/Footer'
import './Components/CSS/App.css'


const App = () => {
  return (
    <div className='contenedor'>
      <NavBar />
      <Cover />
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;
