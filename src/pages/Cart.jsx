import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: "20px", width: "100%", maxWidth: "800px", margin: "auto" }}>
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p style={{ marginTop: "10px" }}>Your cart is empty 😔</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                  />
                  <span>{item.name}</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>₹{item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#c0392b",
                      color: "white",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3 style={{ textAlign: "right", marginTop: "20px" }}>
            Total: ₹{totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
