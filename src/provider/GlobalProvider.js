import React, { createContext, useState } from "react";
import {quiz} from '../data/quiz.js'

export const QuestionContext = createContext();

function GlobalProvider({ children }) {
  const [question, setQuestion] = useState(0);
  const [questions, setQuestions] = useState(quiz);
  const [status, setStatus] = useState("not started");
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState("");
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
        selected,
        setSelected,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export default GlobalProvider;
