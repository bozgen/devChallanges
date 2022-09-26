import './App.css';
import { useEffect, useState } from "react";
import fetchCountries from "./services/fetchCountries";
import QuestionCapital from './components/QuestionCapital';

function App() {
  
  const [countries, setCountries] = useState([]); 
  const [questions, setQuestions] = useState([]); // a queue of questions
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);

  const getAndSetCountries = async () => {
    const data = await fetchCountries();
    setCountries(data);
  }
  
  const makeQuestionCapital = () => {
    const r1 = Math.floor(Math.random() * countries.length);
    const r2 = Math.floor(Math.random() * countries.length);
    const r3 = Math.floor(Math.random() * countries.length);
    const r4 = Math.floor(Math.random() * countries.length);

    const capital = countries[r1].capital[0];
    const answer = countries[r1].name.common;
    const c1 = countries[r2].name.common;
    const c2 = countries[r3].name.common;
    const c3 = countries[r4].name.common;


    return {capital, answer, c1, c2, c3};
  }

  const makeQuestionCapitalElement = (question) => {
    return (
      <QuestionCapital
      capital={question.capital}
      answer={question.answer}
      c1={question.c1}
      c2={question.c2}
      c3={question.c3}
      setScore={setScore}
      />
    )
  }

  useEffect(() => {
    getAndSetCountries();
  },[])
  
  useEffect(()=>{
    if(countries.length === 0) return;

    const q = makeQuestionCapital();
    setQuestions(prev => [...prev, q])
  },[countries])

  useEffect(()=>{
    if(questions.length === 0) return;

    setCurrentQuestion(questions[0]);
    setQuestions(prevQ => {
      const newQuestions = [...prevQ];
      newQuestions.shift();
      return newQuestions;
    });

  },[questions])

  return (
    <div className="App">
      <h1 className="App-title">COUNTRY QUIZ</h1>
      {currentQuestion && makeQuestionCapitalElement(currentQuestion)}
      {score}
    </div>
  );
}

export default App;
