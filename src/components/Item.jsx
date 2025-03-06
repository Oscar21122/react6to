import React from "react";
import Boton from "./Boton";

const Item = ({ item, ondelete }) => {
  console.log(item);  // Verifica qué datos está recibiendo
  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Boton click={() => ondelete(item.id)} name={"X"} />
        </li>
      </ul>
    </div>
  );
};


export default Item;
