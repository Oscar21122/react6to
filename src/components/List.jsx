import React from "react";
import Item from "./Item";

const List = ({ items, ondelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} ondelete={ondelete} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
