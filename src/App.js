import "./styles/App.css";
import Body from "./components/Body";
import Answers from "./components/Answers";
import { useContext } from "react";
import { QuestionContext } from "./provider/GlobalProvider";

function App() {
  const { status } = useContext(QuestionContext);
  return (
    <div className="App">
      <header className="App-header">İmtahan</header>
      {status === "completed" ? <Answers /> : <Body />}
    </div>
  );
}

export default App;
