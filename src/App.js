import React from 'react';
import Header from './components/Header';
import AboutUs from './components/About';
import Products from './components/Products';
import ContactUs from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
