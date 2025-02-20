import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ]);
  let [count, setCount] = useState(0);
  let [isLogin, setIsLogin] = useState(false);

  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };
  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const login = (user) => {
    if (user.username==="oscar" && user.password==="123") {
      setIsLogin(true)
      return true
    }
  };
  const setLogout = () => {
    setIsLogin(false)
    return false
  };
  return (
    <div>
      <BrowserRouter>
      {isLogin && <ResponsiveAppBar setLogout={setLogout}/>}
      <Routes>
        <Route path="/" element={<Login login={login}/>}/>
        <Route path="/add" element={<Add add={add} />}/>
        <Route path="/items" element={<List items={items} ondelete={del} />}/>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      {/* {count}
      <Boton name={"suma"} click={sum} />
      <Boton click={resta} name={"resta"} />
      <Boton name={"mensaje"} click={() => alert("hola")} /> */}
    </div>
  );
}

export default App;
