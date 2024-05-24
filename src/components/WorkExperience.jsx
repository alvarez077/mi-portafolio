import React from "react";
import "../components/css/WorkExperience.css";
import { WORK_EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
    return(
        <section className="experience-container">
            <h5>Experiencias de Trabajo</h5>
            <div className="experience-content">

                {WORK_EXPERIENCE.map((item) => {
                <ExperienceCard key={item.title} details ={item} />
                })}
            </div>
        </section>
    )
}

export default WorkExperience;