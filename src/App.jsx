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
    const token = localStorage.getItem("token"); 
    try { 
      const result = await fetch("https://express6to.onrender.com/items", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await result.json();
      console.log(data);
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
    const token = localStorage.getItem("token");
    const result = await fetch("https://express6to.onrender.com/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, data.item]);
  };
  

  const del = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://express6to.onrender.com/items/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    setItems(items.filter((item) => item.id !== id));
  };
  

  const login = async (user) => {
    const result = await fetch("https://express6to.onrender.com/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
  
    const data = await result.json();
  
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    console.log(data.token)
    setIsLogin(data.isLogin); 
    return data.isLogin;
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
