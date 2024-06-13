import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

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
      <Footer /> 
    </>
  );
}

export default App;
