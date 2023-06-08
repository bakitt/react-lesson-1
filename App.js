import Home from "./Home"
import Hello from "./Hello"
import { useState } from "react"


//!==== useState - функция, которая меняет состояние объекта.====
function App() {
  const [num, setNum] = useState(0);
  const [Bakyt, setBakyt] = useState('');
  return (
    <div className="App">

<h1>
  {num}
  {num === 15 ? ' max' : num === 0 ? ' min' : num === 102 ? ' Hello' : ''}
</h1>

<button onClick={() => {
  if (num < 15) setNum(num + 1);
}}>+</button>

<button onClick={() => {
  if (num > 0) setNum(num - 1);
}}>-</button>

<button onClick={() => {
  setNum(0);
}}>Reset</button>

<button onClick={() => {
  setNum(15);
}}>max</button>

<button onClick={() => {
  if (num < 11) setNum(num + 5);
}}>+5</button>

<button onClick={() => {
  if (num > 4) setNum(num - 5);
}}>-5</button>

    </div>
)}

export default App;
