import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { QuestionContext } from "../App";
import SendIcon from "@mui/icons-material/Send";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Question() {
  const {
    question,
    setQuestion,
    questions,
    setStatus,
    status,
    correct,
    setCorrect,
    selected,
    setSelected,
  } = useContext(QuestionContext);
  const [error, setError] = useState(false);

  let availableQuestions = questions.filter(
    (item) => item.isSubmitted === false
  );

  let nextObjectIndex;

  const IsCorrect = (question, selected) => {
    question.options.find((item) =>
      item.option === selected
        ? (item.myChoice = true)
        : (item.myChoice = false)
    );
  };

  const handleStartButton = () => {
    setStatus("started");
    setQuestion(questions[0]);
  };

  const handleNextQuestion = () => {
    const currentObject = availableQuestions.find(
      (item) => item.id === question.id
    );

    if (
      availableQuestions.indexOf(currentObject) ===
      availableQuestions.length - 1
    ) {
      nextObjectIndex = 0;
    } else {
      nextObjectIndex = availableQuestions.indexOf(currentObject) + 1;
    }

    const nextQuestion = availableQuestions.find(
      (item, index) => index === nextObjectIndex
    );

    setQuestion(nextQuestion);
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    setError(false);
  };

  const handleSubmitAnswer = (event) => {
    event.preventDefault();
    if (selected && availableQuestions.length > 1) {
      setSelected("");
      question.selected = true;
      setTimeout(() => {
        handleNextQuestion();
      }, 1000);
      question.isSubmitted = true;
      IsCorrect(question, selected);
    } else if (selected && !availableQuestions.length <= 1) {
      setTimeout(() => {
        setStatus("completed");
      }, 1000);
      IsCorrect(question, selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="question-container">
      {status === "started" ? (
        <>
          <h2>Sual {question.id}</h2>
          <form onSubmit={handleSubmitAnswer} className="form">
            <FormControl error={error} className="form-control">
              <FormLabel>
                {question.id}. {question.questionText}
              </FormLabel>
              <RadioGroup name={toString(question.id)}>
                {question.options.map((option) => {
                  return (
                    <FormControlLabel
                      value={option.option}
                      control={<Radio />}
                      label={option.option}
                      key={option.option}
                      onChange={handleRadioChange}
                    />
                  );
                })}
              </RadioGroup>
              {error && (
                <Alert severity="warning">Zəhmət olmasa variant seçin</Alert>
              )}
              <div className="question-buttons">
                <Button
                  variant="outlined"
                  endIcon={<NavigateNextIcon />}
                  onClick={() => {
                    handleNextQuestion(question.id);
                  }}
                >
                  növbəti
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  təsdiq et
                </Button>
              </div>
            </FormControl>
          </form>
        </>
      ) : status === "not started" ? (
        <Button variant="contained" onClick={handleStartButton}>
          başla
        </Button>
      ) : (
        <Button variant="contained" onClick={handleStartButton} disabled>
          bitdi
        </Button>
      )}
    </div>
  );
}

export default Question;
