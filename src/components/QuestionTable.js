import { Button } from "@mui/material";
import React, { useContext } from "react";
import { QuestionContext } from "../provider/GlobalProvider";

function QuestionTable() {
  const { setQuestion, questions, status } = useContext(QuestionContext);
  const selectQuestion = (item) => {
    setQuestion(item);
  };

  return (
    <div className="question-table-container">
      <h2>Sual siyahısı</h2>
      <div className="questions-id" disabled>
        {questions.map((item) => {
          return (
            <Button
              variant="contained"
              onClick={() => selectQuestion(item)}
              key={item.id}
              disabled={status !== "started" ? true : item.isSubmitted}
            >
              {item.id}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionTable;
