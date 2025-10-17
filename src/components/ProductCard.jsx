import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{product.name}</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#282c34",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
