import React from "react";
import "../components/css/ContactoInfoCard.css";

const ContactoInfoCard = ({ iconUrl, text }) => {
    return (
        <div className="container-details-card">
            <div className="icon">
               <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
};

export default ContactoInfoCard;