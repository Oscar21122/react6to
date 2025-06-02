import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);

    // Verificar si hay token al inicializar
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        }
    }, []);

    const login = async (user) => {
        try {
            const result = await fetch("https://express6to.onrender.com/login/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user),
            });

            const data = await result.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                setIsLogin(true);
                return true;
            } else {
                setIsLogin(false);
                return false;
            }
        } catch (error) {
            console.error("Error en login:", error);
            setIsLogin(false);
            return false;
        }
    };

    const setLogout = () => {
        setIsLogin(false);
        localStorage.removeItem("token");
    };

    return { isLogin, login, setLogout };
};

export default useAuth;