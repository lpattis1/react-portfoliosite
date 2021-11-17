import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Header from "./Header";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Loading done="100" />
      <Navbar />
      <Header />
      <Popup />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
