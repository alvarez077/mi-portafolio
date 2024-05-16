import React from "react";
import "../components/css/MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return(
        <>
         <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            
          <div className="mobile-menu-container">
             <img className="logo" src="./assets/images/logo.png" alt=""/>
          
          <ul>
                <li>
                    <a className="menu-item">Inicio</a>
               </li>
              <li>
                    <a className="menu-item">Habilidades</a>
               </li>
              <li>
                    <a className="menu-item">Experencias Laborales</a>
               </li>
                        <li>
                            <a className="menu-item">Contáctame</a>
                        </li>
                        <button className="contact-btn" onClick={() => {}}>Contratarme</button>

                    </ul>
                    </div>
         </div>
        </>
    )
}

export default MobileNav;