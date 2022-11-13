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
  const { question, setQuestion, questions } = useContext(QuestionContext);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  const handleNextQuestion = () => {
    let availableQuestions = questions.filter(
      (item) => item.isSubmitted === false
    );
    const currentObject = availableQuestions.find(
      (item) => item.id === question.id
    );
    const nextObjectIndex = availableQuestions.indexOf(currentObject) + 1;
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
    if (selected) {
      setSelected("");
      handleNextQuestion();
      question.isSubmitted = true;
    } else {
      setError(true);
    }
  };

  return (
    <div className="question-container">
      {question ? (
        <>
          <h2>Sual {question.id}</h2>
          <div className="question-content">
            <form onSubmit={handleSubmitAnswer}>
              <FormControl error={error}>
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
                    davam et
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                  >
                    tesdiq et
                  </Button>
                </div>
              </FormControl>
            </form>
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
