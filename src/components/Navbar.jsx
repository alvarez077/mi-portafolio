import React, { useState } from "react";
import "../components/css/Navbar.css";
import MobileNav from "./MobileNav";

const Navbar = () =>{

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/logo.png" alt="logo"/>

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

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"}
                        style={{ fontSize: "1.8rem" }}>
                             {openMenu ? <i class="bx bx-x-circle"> </i>: 
                             <i class='bx bx-menu '></i> }
                        </span>
                    </button>
                </div>
            </nav> 
        </>
    )
}

export default Navbar;