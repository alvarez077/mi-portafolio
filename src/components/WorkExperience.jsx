import React, { useRef }from "react";
import "../components/css/WorkExperience.css";
import { WORK_EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return(
        <section className="experience-container">
            <h5>Experiencias de Trabajo</h5>

            <div className="experience-content">
                <div className="arrow-right">
                <span className="material-symbols-outlined">chevron_right</span>
                </div>
                    <div className="arrow-left">

                    </div>
                <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
                ))}
                </Slider>
            </div>
        </section>  
    );
};

export default WorkExperience;