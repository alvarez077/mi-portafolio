import React from "react";
import "../components/css/Inicio.css";

const Inicio = () =>{
    return (
       <section className="inicio-container">
         <div className="inicio-content">
            <h2>Construyendo experiencias digitales que inspiren.</h2>
            <p class="half-fade">Apasionado por el Desarrollo Frontend | <span class="fade-in-out">Transformar ideas en soluciones web perfectas y visualmente impresionantes.</span></p>
               
         </div>

         <div className="inicio-img">
                <img src="./assets/images/manjpg" alt=""/>
                </div>
              <div className="tech-icons">
            <div className="tech-icon">
                    <img src="./assets/images/react.png" alt=""/>
                </div>
              <div className="tech-icon">
                 <img src="./assets/images/html.png" alt=""/>
              </div>
              <div className="tech-icon">
                 <img src="./assets/images/css.png" alt=""/>
              </div>
              <div className="tech-icon">
                 <img src="./assets/images/jsp.png" alt=""/> 
         </div>
         </div>
       </section>
    )
}

export default Inicio;