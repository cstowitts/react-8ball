import './App.css';
import answers from "./config";
import EightBall from './EightBall';

function App() {
  return (
    <div className="App">
      <EightBall className="EightBall" answers={answers} />
    </div>
  );
}

export default App;
