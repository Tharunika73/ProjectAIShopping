// src/components/CartViewer.jsx
import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const CartViewer = ({ userId }) => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getCart(userId).then((res) => {
      if (res.success) setCart(res.data);
      else setError(res.error);
    });
  }, [userId]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!cart) return <p>Loading cart...</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item, idx) => (
          <li key={idx}>
            Product ID: {item.productId} (Qty: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartViewer;
