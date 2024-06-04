import React from "react";
import "../components/css/Contacto.css";
import ContactoInfoCard from "./ContactoInfoCard";

const Contacto = () => {
    return (
         <section className="contact-container">
            <h5>Contáctame</h5>
            <div className="contact-content">
                <div style={{flex: 1}}></div>
                <div style={{flex: 1}}></div>
                <ContactoInfoCard iconUrl="./assets/images/emailpng"
                text="alvarezanaya473@gmail.com"
                />
                <ContactoInfoCard iconUrl="./assets/images/githubpng"
                text="https://github.com/alvarez077"
                />
            </div>
         </section>
    )
}

export default Contacto;