import React from "react";
import "../components/css/Inicio.css";

const Inicio = () =>{
    return (
       <section className="inicio-container">
         <div className="inicio-content">
            <h2>Construyendo experiencias digitales que inspiren.</h2>
            <p>Apasionado por el Desarrollo Frontend | Transformar ideas en soluciones web perfectas y visualmente impresionantes. </p>
         </div>

         <div className="inicio-img">
                <img src="./assets/images/man" alt=""/>
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