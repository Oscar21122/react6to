import React from "react";
import Boton from "./Boton";
import { Link } from "react-router-dom";

const Item = ({ item, ondelete }) => {
  console.log(item);  // Verifica qué datos está recibiendo
  return (
    <tr>
      <td>
        <Link to={`/items/${item.id}?q=react55`}>
          {item.name}
        </Link>
      </td>
      <td>{item.price}</td>
      <td>
        <Boton click={() => ondelete(item.id)} name={"X"} />
      </td>
    </tr>
  );
};


export default Item;
