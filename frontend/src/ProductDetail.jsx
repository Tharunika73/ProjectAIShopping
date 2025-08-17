import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "auto", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;
