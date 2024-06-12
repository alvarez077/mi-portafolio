import React from "react";
import "../components/css/Contacto.css";
import ContactoInfoCard from "./ContactoInfoCard";
import ContactoForm from "./ContactoForm";

const Contacto = () => {
    return (
         <section className="contact-container">
            <h5>Contáctame</h5>
            <div className="contact-content">
                <div style={{flex: 1}}>
                <ContactoInfoCard 
                iconUrl="./assets/images/email.png"
                text="alvarezanaya473@gmail.com"
                />
                </div>
                <ContactoInfoCard
                 iconUrl="./assets/images/github2.png"
                text="https://github.com/alvarez077"
                />

                <ContactoForm 
                />
                </div>    
                <div style={{flex: 1}}></div>
         </section>
    );
};

export default Contacto;