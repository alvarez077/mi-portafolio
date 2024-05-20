import React from "react";
import '../components/css/Skills.css';
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard";

const Skills = () => {
    return(
    <section className="skills-container">
            <h5>Capacidades técnicas</h5>

            <div className="skills-content">
                <div className="skills">
              
                {SKILLS.map((item) => (
                   <SkillCard 
                   key={item.title}
                   iconUrl={item.icon}
                   title={item.title}
                   />
                ))}

               </div>
               <div className="skills-info"></div>
            </div>
    </section>
        
    )
}

export default Skills;