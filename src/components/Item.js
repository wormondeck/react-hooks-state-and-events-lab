import React, {useState} from "react";

function Item({ name, category }) {
  const [isItem, setItem] = useState(false);

  function handleClick() {
    setItem((isItem) => !isItem)
  }

  const itemClass = isItem ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={`add ${isItem ? "remove" : ""}`}>{isItem ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
