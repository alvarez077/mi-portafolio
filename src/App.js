import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Inicio />
      </div>
    </>
  );
}

export default App;
