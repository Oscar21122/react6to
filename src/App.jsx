import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Boton from "./components/Boton"
import List from "./components/List"
import Add from "./components/Add"

function App() {
  const items = [
    {id: 1, name: "item1", price: 1}, 
    {id: 2, name: "item2", price: 2}, 
    {id: 3, name: "item3", price: 3}]

  let [count, setCount] = useState(0)
  const sum = () => {
    setCount(count + 1)
    console.log(count)
  }
  const resta = () => {
    setCount(count - 1)
    console.log(count)
  }
  const add = (item) => {
    item.id = item.length + 1;
    item.push(item)
  }
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1>;
  return (
    <div>
      <Header></Header>
      {count}
      <Boton name={"suma"} click={sum} n></Boton>
      <Boton name={"resta"} click={resta}></Boton>
      <Boton name={"mensaje"} click={() => alert("hola")}></Boton>
      <Add add={add}></Add>
      <List items={items}></List>
      <Footer></Footer>
    </div>
  );
}

export default App;
