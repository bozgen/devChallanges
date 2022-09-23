import "./styles/Introduction.css";
import { memo } from "react";
import logo from "../logo.svg";
import email from "../icons/email.svg";
import phone from "../icons/phone.svg";

const Introduction = memo(() => {

    return(
        <section className="intro">
            <div className="intro-card">
                <img className="profile-picture"src={logo} alt="profile of the website's owner. He is smiling." />
                <div className="intro-info-wrapper">
                    <div className="intro-info">
                        <div className="intro-info-id">
                            <h2 className="intro-info-name">Bilal Özgen</h2>
                            <h4 className="intro-info-job">Front-end developer</h4>
                        </div>
                        <div className="intro-info-contact">
                            <div className="intro-info-contact-single"><img className="intro-icon" src={email} alt="" /><h3 className="email">biozgenv2@gmail.com</h3></div>
                            <div className="intro-info-contact-single"><img className="intro-icon" src={phone} alt="" /><h3 className="phone">(+90) 538 852 2878</h3></div>
                        </div>
                    </div>
                    <p className="intro-bio">
                    Self-motivated developer, who is willing to learn and create outstanding UI applications. <br />
                    <br />
                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
                    </p>
                </div>
            </div>
        </section>
    )
})
export default Introduction;