import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Inicio />
      <Skills />
      <WorkExperience />
      </div>
    </>
  );
}

export default App;
