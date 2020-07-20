import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { SlideShow } from './SlideShow';
import { Services } from './Services';
import { FooterComponent } from './footerComponent';


function App() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <Services />
      <FooterComponent />
    </div>
  );
}

export default App;
