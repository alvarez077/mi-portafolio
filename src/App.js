import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Inicio />
      <Skills />
      </div>
    </>
  );
}

export default App;
