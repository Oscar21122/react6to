import { useState, useCallback } from 'react';

interface Item {
    id: string;
    name: string;
    price: number;
}

const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getItems = useCallback(async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No hay token de autenticación");
            return;
        }

        setLoading(true);
        setError(null);
        
        try {
            const result = await fetch("https://express6to.onrender.com/items", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!result.ok) {
                throw new Error(`Error ${result.status}: ${result.statusText}`);
            }

            const data = await result.json();
            setItems(data);
        } catch (error) {
            console.error("Error al obtener items:", error);
            setError("Error al obtener items");
            setItems([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const addItem = async (item: Omit<Item, 'id'>) => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No hay token de autenticación");
            return false;
        }

        setLoading(true);
        setError(null);

        try {
            const result = await fetch("https://express6to.onrender.com/items/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(item),
            });

            if (!result.ok) {
                throw new Error(`Error ${result.status}: ${result.statusText}`);
            }

            const data = await result.json();
            
            if (data.item) {
                setItems(prevItems => [...prevItems, data.item]);
                return true;
            } else {
                throw new Error("No se recibió el item creado");
            }
        } catch (error) {
            console.error("Error al agregar item:", error);
            setError("Error al agregar item");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const delItem = async (id: string) => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No hay token de autenticación");
            return false;
        }

        setLoading(true);
        setError(null);

        try {
            const result = await fetch(`https://express6to.onrender.com/items/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!result.ok) {
                throw new Error(`Error ${result.status}: ${result.statusText}`);
            }

            setItems(prevItems => prevItems.filter(item => item.id !== id));
            return true;
        } catch (error) {
            console.error("Error al eliminar item:", error);
            setError("Error al eliminar item");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { 
        items, 
        loading, 
        error, 
        getItems, 
        addItem, 
        delItem 
    };
};

export default useItems;