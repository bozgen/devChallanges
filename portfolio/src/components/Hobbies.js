import "./styles/Hobbies.css";
import logo from "../logo.svg";

export default function Hobbies(){

    return(
        <section id="hobbies" className="hobbies">
            <h1 className="hobbies-title">Hobbies</h1>
            
            <div className="hobby hobby-top">
                <img className="hobby-img" src={logo} alt=""/>
                <h2 className="hobby-title">Game Develeopment</h2>
                <h3 className="hobby-explanation">Quisque feugiat malesuada molestie.</h3>
            </div>
            
            <div className="hobby hobby-bottom">
                <img className="hobby-img" src={logo} alt=""/>
                <h2 className="hobby-title">Music</h2>
                <h3 className="hobby-explanation">Quisque feugiat malesuada molestie.</h3>
            </div>
        </section>
    )
}