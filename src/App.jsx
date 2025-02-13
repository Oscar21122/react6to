import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Boton from "./components/Boton"

function App() {
  let [count, setCount] = useState(524)
  const sum = () => {
    setCount(count + 1)
    console.log(count)
  }
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1>;
  return (
    <div>
      <Header></Header>
      <Boton></Boton>
      <Footer></Footer>
    </div>
  );
}

export default App;
