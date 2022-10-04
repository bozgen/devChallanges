import "./styles/Header.css";
import hamburger from "../icons/hamburger.svg";
import close from "../icons/close.svg";
import { memo } from "react";

const Header = memo(() => {

    // shows the navigation menu on mobile screen sizes
    const handleHamburger = () => {
        const nav = document.querySelector(".header-nav");
        const ham = document.querySelector(".header-hamburger");
        const close = document.querySelector(".header-close");
        
        nav.style.right = 0;
        ham.style.display = "none";
        close.style.display = "flex";      
    }
    // hides the navigation menu on mobile screen sizes
    const handleClose = () => {
        const close = document.querySelector(".header-close");
        const nav = document.querySelector(".header-nav");
        const ham = document.querySelector(".header-hamburger");

        nav.style.right = "-300px";
        ham.style.display = "flex";
        close.style.display = "none";
    }

    // adjusts the header style according to the window width
    const adjustHeader = () => {
        const close = document.querySelector(".header-close");
        const ham = document.querySelector(".header-hamburger");
        const nav = document.querySelector(".header-nav");
        
        close.style.display = "none";

        if(window.innerWidth >= 725) {
            ham.style.display = "none";
            nav.style.right = "0";
        }
        else {
            nav.style.right = "-300px";
            ham.style.display = "flex";
        }
    }
    window.addEventListener("resize", adjustHeader)

    return(
        <header id="home" className="header">
            <h1 className="page-title">bozgen</h1>
            
            <button onClick={handleHamburger}
            className="header-hamburger">
                <img className="header-ham-icon" src={hamburger} alt=""/>
            </button>

            <button onClick={handleClose}
            className="header-close">
                <img className="header-close-icon" src={close} alt=""/>
            </button>

            <nav className="header-nav">
                <ul className="header-link-list">
                    <li onClick={handleClose} className="header-link"><a href="#home" className="header-link-a">Home</a></li>
                    <li onClick={handleClose} className="header-link"><a href="#skills" className="header-link-a">Skills</a></li>
                    <li onClick={handleClose} className="header-link"><a href="#experiences" className="header-link-a">Experiences</a></li>
                    <li onClick={handleClose} className="header-link"><a href="#hobbies" className="header-link-a">Hobbies</a></li>
                    <li onClick={handleClose} className="header-link"><a href="#blog" className="header-link-a">Blog</a></li>
                    <li onClick={handleClose} className="header-link"><a href="#projects" className="header-link-a">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
})
export default Header;