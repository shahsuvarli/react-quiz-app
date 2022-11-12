import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext } from "react";
import { QuestionContext } from "../App";
import SendIcon from "@mui/icons-material/Send";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Question() {
  const { question, setQuestion, questions } = useContext(QuestionContext);
  return (
    <div className="question-container">
      {question ? (
        <>
          <h2>Question {question.id}</h2>
          <div className="question-content">
            <p>
              {question.id}. {question.questionText}
            </p>
            <RadioGroup name={question.id}>
              {question.options.map((option) => {
                return (
                  <FormControlLabel
                    value={option.option}
                    control={<Radio />}
                    label={option.option}
                  />
                );
              })}
            </RadioGroup>
            <div className="question-buttons">
              <Button variant="outlined" endIcon={<NavigateNextIcon />}>
                davam et
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                tesdiq et
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Button variant="contained" onClick={() => setQuestion(questions[0])}>
          START
        </Button>
      )}
    </div>
  );
}

export default Question;
