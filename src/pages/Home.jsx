import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Mahsulotlar galereyasi</h1>
      <div className="product-grid">
        {products.map(function (product) {
          return (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p className="price">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
