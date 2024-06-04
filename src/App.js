import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Inicio />
      <Skills />
      <WorkExperience />
      <Contacto />
      </div>
    </>
  );
}

export default App;
