import "./styles/App.css";
import Body from "./components/Body";
import { createContext, useState } from "react";
import { quiz } from "./data/quiz.js";

export const QuestionContext = createContext();

function App() {
  const [question, setQuestion] = useState(0);
  const [questions, setQuestions] = useState(quiz);

  return (
    <QuestionContext.Provider
      value={{ question, setQuestion, questions, setQuestions }}
    >
      <div className="App">
        <header className="App-header">Exam</header>
        <Body />
      </div>
    </QuestionContext.Provider>
  );
}

export default App;
