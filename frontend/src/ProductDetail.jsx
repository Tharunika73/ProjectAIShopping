import React from 'react';

const ProductDetail = () => {
  // Sample product detail - replace with router logic later
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold">Product Details</h2>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <img src="/yellow-dress.jpg" alt="Yellow Dress" className="w-full md:w-1/2 rounded" />
        <div>
          <h3 className="text-xl font-semibold">Yellow Summer Dress</h3>
          <p className="text-pink-600 font-bold text-lg">₹999</p>
          <p className="text-sm text-gray-700 my-2">Perfect for summer outings. Light and comfy fabric.</p>
          <p><strong>Size:</strong> S, M, L</p>
          <p><strong>Delivery:</strong> 2-4 days</p>
          <p><strong>Payment:</strong> COD / UPI / Netbanking</p>
          <button className="mt-4 bg-brown-600 text-white px-6 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
