import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/About";
import Products from "./components/Products";
import ContactUs from "./components/Contact";
import Partners from "./components/Partners";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      {/* <Products /> */}
      <Partners />
      <ContactUs />

      {/* Message Icon with hover effect and cleaner design */}
      <a href="/query.html" className="message-icon">
        <i className="fa fa-envelope"></i>
      </a>
    </div>
  );
}

export default App;
