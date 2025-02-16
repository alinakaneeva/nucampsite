// import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList campsite={[0]}/>
      <Footer />
    </div>
  );
}

export default App;
