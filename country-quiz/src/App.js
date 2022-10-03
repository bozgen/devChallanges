import './App.css';
import { useEffect, useState } from "react";
import fetchCountries from "./services/fetchCountries";
import Question from './components/Question';
import Results from './components/Results';

function App() {
  
  const numberOfQuestionTypes = 2;
  
  const [countries, setCountries] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);

  const [results, setResults] = useState(false);

  const getCountries = async () => {
    if(countries.length !==0) return;
    const data = await fetchCountries();
    setCountries(data);
  }
  
  const makeQuestionCapital = () => {
    
    let choices = new Set();
    while(choices.size < 4){
      choices.add(Math.floor(Math.random() * countries.length));
    }
    choices = [...choices];
    const capital = countries[choices[0]].capital[0];
    const answer = countries[choices[0]].name.common;
    const c1 = countries[choices[1]].name.common;
    const c2 = countries[choices[2]].name.common;
    const c3 = countries[choices[3]].name.common;


    return {type:"capital", capital, answer, c1, c2, c3};
  }

  const makeQuestionCapitalElement = (question) => {
    
    return (
      <Question
      type="capital"
      capital={question.capital}
      answer={question.answer}
      c1={question.c1}
      c2={question.c2}
      c3={question.c3}
      setScore={setScore}
      results={results}
      setResults={setResults}
      nextQuestion={nextQuestion}
      currentQuestion={currentQuestion}
      />
    )
  }

  const makeQuestionFlag = () => {
    let choices = new Set();
    while(choices.size < 4){
      choices.add(Math.floor(Math.random() * countries.length));
    }
    choices = [...choices];
    const flag = countries[choices[0]].flags.svg;
    const answer = countries[choices[0]].name.common;
    const c1 = countries[choices[1]].name.common;
    const c2 = countries[choices[2]].name.common;
    const c3 = countries[choices[3]].name.common;

    return {type:"flag", flag, answer, c1, c2, c3};
  }

  const makeQuestionFlagElement = (question) => {
    return (
      <Question
      type="flag"
      flag={question.flag}
      answer={question.answer}
      c1={question.c1}
      c2={question.c2}
      c3={question.c3}
      setScore={setScore}
      results={results}
      setResults={setResults}
      nextQuestion={nextQuestion}
      currentQuestion={currentQuestion}
      />
    )
  }

  const nextQuestion = () => {
    const type = Math.floor(Math.random() * numberOfQuestionTypes);
    switch(type){
      case 0: // capital question
        setCurrentQuestion(makeQuestionCapital());
        break;
      case 1: // flag question
        setCurrentQuestion(makeQuestionFlag());
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if(countries.length !== 0) return;
    getCountries();
  },[])
  

  useEffect(()=>{
    if(countries.length === 0) return;
    
    nextQuestion();
  },[countries.length])

  let currentQuestionFunction;
  if(currentQuestion){
    currentQuestionFunction = currentQuestion.type === "capital" 
    ? makeQuestionCapitalElement
    : makeQuestionFlagElement
  }

  return (
    <div className="App">
      <h1 className="App-title">COUNTRY QUIZ</h1>
      {!results && currentQuestion && currentQuestionFunction(currentQuestion)}
      {results && <Results
                  score={score}
                  setScore={setScore}
                  setResults={setResults}
                  nextQuestion={nextQuestion}/>}
    </div>
  );
}

export default App;
