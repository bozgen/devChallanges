import "./styles/Header.css";

export default function Header(){


    return(
        <header id="home" className="header">
            <h1 className="page-title">bozgen</h1>
            <nav className="header-nav">
                <ul className="header-link-list">
                    <li className="header-link"><a href="#" className="header-link-a">Home</a></li>
                    <li className="header-link"><a href="#skills" className="header-link-a">Skills</a></li>
                    <li className="header-link"><a href="#experiences" className="header-link-a">Experiences</a></li>
                    <li className="header-link"><a href="#hobbies" className="header-link-a">Hobbies</a></li>
                    <li className="header-link"><a href="#blog" className="header-link-a">Blog</a></li>
                    <li className="header-link"><a href="#projects" className="header-link-a">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}