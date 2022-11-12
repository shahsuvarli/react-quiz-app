import { Button } from "@mui/material";
import React, { useContext } from "react";
import { QuestionContext } from "../App";

function QuestionTable() {
  const { setQuestion, questions } = useContext(QuestionContext);
  const selectQuestion = (item) => {
    setQuestion(item);
  };

  return (
    <div className="question-table-container">
      <h2>QuestionTable</h2>
      <div className="questions-id">
        {questions.map((item) => {
          return (
            <Button onClick={() => selectQuestion(item)} key={item.id}>
              {item.id}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionTable;
