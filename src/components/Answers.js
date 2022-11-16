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
            {item.options.map((item) => {
              return (
                <option
                  key={item.option}
                  style={{ color: item.isCorrect && "green" }}
                >
                  {item.option}
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
