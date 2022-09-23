import logo from "../logo.svg";

export default function Experience({logoUrl, dateStart, dateEnd, position, description}){

    return(
        <div className="experience-single">
            <img src={logoUrl || logo} alt="" className="experience-logo" />
            <div className="experience-info">
                <h3 className="experience-date">{dateStart} - {dateEnd}</h3>
                <h3 className="experience-position">{position}</h3>
                <p className="experience-explanation">{description}</p>
            </div>
        </div>
    )
}