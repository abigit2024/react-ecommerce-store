import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        width: "100vw", // 👈 full viewport width
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#282c34",
        padding: "15px 30px",
        color: "white",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <h2>ShopEasy 🛍️</h2>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
