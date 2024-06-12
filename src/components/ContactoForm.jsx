import React from "react";
import "../components/css/ContactoForm.css";

const ContactoForm = () => {
    return (
        <div className="contact-form-content"> 
        <form>
            <div className="name-container">
              <input type="text" name="firstname" placeholder="Nombres:" required/>
              <input type="text" name="lastname" placeholder="Apellidos:" required/>
            </div>
              <input type="text" name="email" placeholder="Email: " required/>
              <textarea type="text" name="mensaje" placeholder="Mensaje:" rows={3} />

              <button>ENVIAR</button>
        </form>
        </div>
    )
}

export default ContactoForm;