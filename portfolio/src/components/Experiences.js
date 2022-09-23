import "./styles/Experience.css";
import { memo } from "react";
import Experience from "./Experience";

const Experiences = memo(() => {

    return(
        <section id="experiences" className="experience">
            <h1 className="experiences-title">Experiences</h1>
            
            <Experience
                dateStart={"Feb 2017"}
                dateEnd={"Current"}
                position={"Front-end developer"}
                description={"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."}
            />

            <Experience
                dateStart={"Aug 2016"}
                dateEnd={"Feb 2017"}
                position={"Full-stack developer"}
                description={"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."}
            />
        </section>
    )
})
export default Experiences;