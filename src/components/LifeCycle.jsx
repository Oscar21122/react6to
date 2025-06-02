import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    const [text, setText] = useState("");

    // 1. MONTAJE - Se ejecuta solo una vez al montar
    useEffect(() => {
        console.log("componente montado")
    }, [])

    // 2. ACTUALIZACIÓN - Se ejecuta cuando 'text' cambia
    useEffect(() => {
        console.log("componente actualizado")
    }, [text])

    // 3. DESMONTAJE - Se ejecuta al desmontar el componente
    useEffect(() => {
        return () => console.log("componente desmontado")
    }, [])

    // 4. Se ejecuta en CADA render
    useEffect(() => {
        console.log("componente renderizado");
        return () => console.log("limpieza antes del siguiente render")
    }) 

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>Texto: {text}</p>
        </div>
    );
};

export default LifeCycle;