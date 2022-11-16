import "./styles/App.css";
import Body from "./components/Body";
import { createContext, useState } from "react";
import { quiz } from "./data/quiz.js";
import Answers from "./components/Answers";

export const QuestionContext = createContext();

function App() {
  const [question, setQuestion] = useState(0);
  const [questions, setQuestions] = useState(quiz);
  const [status, setStatus] = useState("not started");
  const [correct, setCorrect] = useState(0);

  return (
    <QuestionContext.Provider
      value={{
        question,
        setQuestion,
        questions,
        setQuestions,
        status,
        setStatus,
        correct,
        setCorrect,
      }}
    >
      <div className="App">
        <header className="App-header">İmtahan ({correct})</header>
        <Body />
        {status === "completed" && <Answers />}
      </div>
    </QuestionContext.Provider>
  );
}

export default App;
