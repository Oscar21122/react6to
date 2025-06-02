import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import ItemInfo from "./components/ItemInfo";
import LifeCycle from "./components/LifeCycle"; 
import useItems from "./hooks/useItems.tsx";
import useAuth from "./hooks/useAuth.tsx";

function App() {
    const { items, loading, error, getItems, addItem, delItem } = useItems();
    const { isLogin, login, setLogout } = useAuth();

    useEffect(() => {
        if (isLogin) {
            getItems();
        }
    }, [isLogin, getItems]);

    return (
        <div>
            <BrowserRouter>
                {isLogin && <ResponsiveAppBar setLogout={setLogout} />}
                <Routes>
                    <Route path="/" element={<Login login={login} />} />
                    <Route path="/add" element={<Add add={addItem} />} />
                    <Route 
                        path="/items" 
                        element={
                            <List 
                                items={items} 
                                ondelete={delItem}
                                loading={loading}
                                error={error}
                            />
                        } 
                    />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/lifecycle" element={<LifeCycle />} /> 
                    <Route path="/items/:id" element={<ItemInfo items={items} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
