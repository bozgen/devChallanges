import winners from "../images/winners.svg";
import "./styles/Results.css";

const Results = ({score, setScore, setResults, nextQuestion}) => {
    
    const handleClick = () => {
        setScore(0);
        setResults(false);
        nextQuestion();
    }

    return (
        <div className="results-card">
            <img className="results-image" src={winners} alt=""/>
            <h1 className="results-title">Results</h1>
            <h3 className="results-info">You got <span className="results-score">{score}</span> correct answers</h3>
            <button onClick={handleClick} className="results-btn">Try again</button>
        </div>
    )
}
export default Results;