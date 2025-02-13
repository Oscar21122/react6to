import React from 'react'
import Item from "./Item"

const List = ({items}) => {
  return (
    <div>{items.map((i)=><Item key={i.id} item={i}></Item>)}</div>
  )
}

export default List