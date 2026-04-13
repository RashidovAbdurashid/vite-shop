import { useState, useEffect } from "react";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    async function getItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    }
    getItems();
  }, []);

  return (
    <div>
      <h1>Royxat korinishi</h1>
      <ul className="product-list">
        {items.map(function (item) {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <span className="price">${item.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
