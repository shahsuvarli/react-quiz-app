import React, { useContext } from "react";
import { QuestionContext } from "../App";

function Answers() {
  const { questions } = useContext(QuestionContext);
  return (
    <div>
      {questions.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.questionText}</p>
            {item.options.map((option) => {
              return (
                <option
                  key={option.option}
                  style={{ color: option.isCorrect ? "green" : "#000" }}
                >
                  {option.option}
                </option>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
