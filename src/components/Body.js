import React from "react";
import Question from "./Question";
import QuestionTable from "./QuestionTable";
import "../styles/body.css";

function Body() {
  return (
    <div className="body">
      <Question />
      <QuestionTable />
    </div>
  );
}

export default Body;
