import React, { useState } from 'react'
import Boton from './Boton'

const Add = ({add}) => {
    const [name, setName] = useState("");
  return (
    <div>
        <input onChange={(e)=>setName(e.target.value)} type='text' name="" id=""/>
        <input type='number' name="" id=""/>
        <Boton name="Agregar"></Boton>
    </div>
  )
}

export default Add