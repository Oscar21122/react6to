import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [items, setItems] = useState([]);
  // let [count, setCount] = useState(0);
  let [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (isLogin) {
      getItems()
    }
  }, [isLogin])

  const getItems = async () => {
    try {
      const result = await fetch("http://localhost:5001/items");
      const data = await result.json();
      console.log(data); // Verifica qué datos están siendo devueltos
      setItems(data);
    } catch (error) {
      console.error("Error al obtener items:", error);
    }
  };
  

  // const sum = () => {
  //   setCount(count + 1);
  // };
  // const resta = () => {
  //   setCount(count - 1);
  // };
  const add = async (item) => {
    const result = await fetch("http://localhost:5001/items/", {
      method:"POST",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(item),
    });
    const data = await result.json()
    setItems([...items, data.item]);
  };
  const del = async (id) => {
    await fetch(`http://localhost:5001/items/${id}`, { method: "DELETE" });
    setItems(items.filter((item) => item.id !== id));
  };
  const login = async (user) => {
    const result = await fetch("http://localhost:5001/login/", {
      method:"POST",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(user),
    });
      const data = await result.json();
      setIsLogin(data.isLogin)
      return data.isLogin

    // if (user.username==="oscar" && user.password==="123") {
    //   setIsLogin(true)
    // }
    // return true
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
