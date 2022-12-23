import React, { useContext } from "react";
import { QuestionContext } from "../provider/GlobalProvider";

function Answers() {
  const { questions } = useContext(QuestionContext);
  return (
    <div className="answers-container">
      {questions.map((item) => {
        return (
          <div key={item.id}>
            <p style={{ fontWeight: "bold" }}>{item.questionText}</p>
            {item.options.map((option, index) => {
              return (
                <p
                  key={option.option}
                  style={{
                    color:
                      option.isCorrect && option.myChoice
                        ? "green"
                        : !option.myChoice && option.isCorrect
                        ? "blue"
                        : !option.myChoice && !option.isCorrect
                        ? "#000"
                        : option.myChoice && !option.isCorrect
                        ? "red"
                        : "blue",
                    marginLeft: 20,
                  }}
                >
                  {index + 1}){option.option}
                </p>
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
