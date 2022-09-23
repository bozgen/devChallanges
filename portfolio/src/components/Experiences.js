import "./styles/Experience.css";
import logo from "../logo.svg";
import Experience from "./Experience";

export default function Experiences(){

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
                logo={logo}
            />
        </section>
    )
}