import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/About';
import Products from './components/Products';
import ContactUs from './components/Contact';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      {/* <Products /> */}
      <Partners/>
      <ContactUs />
    </div>
  );
}

export default App;
