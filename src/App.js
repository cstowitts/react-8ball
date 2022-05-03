import './App.css';
import answers from "./config";
import EightBall from './EightBall';
import Boxes from "./Boxes";

function App() {
  return (
    <div className="App">
      {/* <EightBall className="EightBall" answers={answers} /> */}
      <Boxes />
    </div>
  );
}

export default App;
