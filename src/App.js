import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstSlide from "./components/FirstSlide";
import Services from "./components/Services";

import Home from "./pages/home";
import Contact from "./pages/contact";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <FirstSlide />
      <Services />
    </>
  );
}

export default App;
