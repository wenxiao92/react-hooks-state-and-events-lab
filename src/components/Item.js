import React, {useState} from "react";

function Item({ name, category }) {
  const [currentCart, addOrRemove] = useState(true)
  const itemClass = currentCart ? "" : "in-cart"

  function handleItem(){
    addOrRemove((currentCart) => !currentCart)
  }




  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{currentCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
