import "./styles/Experience.css";
import logo from "../logo.svg";

export default function Experience(){

    return(
        <section id="experiences" className="experience">
            <h1 className="experiences-title">Experiences</h1>
            
            <div className="experience-single">
                <img src={logo} alt="" className="experience-logo" />
                <div className="experience-info">
                    <h3 className="experience-date">Feb 2017 - Current</h3>
                    <h3 className="experience-position">Front-end developer</h3>
                    <p className="experience-explanation">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>

            <div className="experience-single">
                <img src={logo} alt="" className="experience-logo" />
                <div className="experience-info">
                    <h3 className="experience-date">Aug 2016 - Feb 2017</h3>
                    <h3 className="experience-position">Full-stack developer</h3>
                    <p className="experience-explanation">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>
        </section>
    )
}