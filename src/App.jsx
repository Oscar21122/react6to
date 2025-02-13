import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const sum = () => {
    let newCount = count + 1
    setCount(newCount)
    console.log(newCount)
  }
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <div>{count}</div>   
        <button onClick={sum}>Sumar</button> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
