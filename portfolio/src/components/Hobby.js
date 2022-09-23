import logo from "../logo.svg";

export default function Hobby({image, title, description}){

    return (
        <div className="hobby hobby-top">
            <img className="hobby-img" src={image || logo} alt=""/>
            <h2 className="hobby-title">{title}</h2>
            <h3 className="hobby-explanation">{description}</h3>
        </div>
    )
}