import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = ()=> setCount(count+1);
  const decrement =()=> setCount(count-1);
  const zero = ()=> setCount(0);
  return (
    <div id="counter">
      <h1>Counter count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={zero}>Reset</button>
    </div>
  );
}

export default Counter;
