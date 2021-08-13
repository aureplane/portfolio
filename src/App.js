import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstSlide from "./components/FirstSlide";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <FirstSlide />
      <Services />
      <Footer />
    </>
  );
}

export default App;
