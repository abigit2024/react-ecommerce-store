import React, { useContext } from "react";
import products from "../products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Products 🛍️</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
