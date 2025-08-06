import React from "react";

const products = {
  women: [
    {
      name: "Lahenga",
      price: "₹999",
      rating: "⭐⭐⭐",
      description: "A beautiful dress for evening parties.",
      image: "https://i.pinimg.com/736x/7c/92/e6/7c92e60b87c18af0f83e25e9a5f17a76.jpg"
    },
    {
      name: "Organsa Saree",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Elegant organza style for special occasions.",
      image: "https://i.pinimg.com/736x/3d/06/c0/3d06c0e89c287175d7c076801da29b2f.jpg"
    },
    {
      name: "Western Coat",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Trendy coat for winter fashion.",
      image: "https://i.pinimg.com/1200x/ab/09/ea/ab09eaa0264302f61aea9974406bbeb8.jpg"
    },
    {
      name: "Western Pants",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Perfect blend of comfort and trend.",
      image: "https://i.pinimg.com/736x/6f/ed/da/6fedda05422941cc2a80d083efc8895c.jpg"
    },
    {
      name: "Party Wear",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Elegant outfit for special occasions.",
      image: "https://i.pinimg.com/1200x/c8/b1/05/c8b105a7e633ca5c38a9573f3d1447f1.jpg"
    },
    {
      name: "Floral Wear",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Fresh floral designs for spring.",
      image: "https://i.pinimg.com/1200x/c2/d6/c4/c2d6c41daa5771572d0a2d7f9d45044f.jpg"
    },
    {
      name: "Kurti Set",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Comfortable and stylish cotton set.",
      image: "https://i.pinimg.com/1200x/aa/92/78/aa927801e5db7080e62447b21839eec6.jpg"
    },
    {
      name: "Kids Wear",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Stylish outfit for young fashionistas.",
      image: "https://i.pinimg.com/1200x/a7/f0/78/a7f0780bf64835fd93b63dd9c3526d6c.jpg"
    }
  ],
  men: [
    {
      name: "Casual Shirts",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Light and breathable for everyday use.",
      image: "https://i.pinimg.com/1200x/3f/cf/0b/3fcf0b6b0a11cee97abcd972bfb75888.jpg"
    },
    {
      name: "Formal Shirts",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Office-ready formal wear.",
      image: "https://i.pinimg.com/736x/f5/03/f3/f503f3697365ad29d732d693a7117f08.jpg"
    },
    {
      name: "Hoodies",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Stay warm with style.",
      image: "https://i.pinimg.com/1200x/8e/47/fa/8e47fa26e2f7d606af03413ee94fae34.jpg"
    },
    {
      name: "T-Shirts",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Soft and trendy everyday wear.",
      image: "https://i.pinimg.com/1200x/e2/f1/5c/e2f15c2691ac5331490babd4c21fa188.jpg"
    },
    {
      name: "Formal Pants",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Perfect match for formal shirts.",
      image: "https://i.pinimg.com/736x/ee/d3/92/eed39290cad6a1bb15488b03c5150a2c.jpg"
    },
    {
      name: "Jogging Set",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Activewear for comfort and movement.",
      image: "https://i.pinimg.com/1200x/6d/71/40/6d71408074de1e91e7fafeb397bf812a.jpg"
    },
    {
      name: "Traditional Set",
      price: "₹799",
      rating: "⭐⭐⭐⭐",
      description: "Perfect for festive occasions.",
      image: "https://i.pinimg.com/1200x/01/9f/2a/019f2a4b05b9ffab79ad32350d650978.jpg"
    },
    {
      name: "Ethnic Wear",
      price: "₹849",
      rating: "⭐⭐⭐⭐⭐",
      description: "Classic ethnic designs for modern men.",
      image: "https://i.pinimg.com/736x/d4/66/80/d4668023f501720d2a44082f3abffbc0.jpg"
    }
  ]
};

const ProductSection = () => {
  const sectionStyle = {
    padding: "50px",
    backgroundColor: "#f3ecc1",
    fontFamily: "Arial, sans-serif"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    color: "#3b1e08",
    marginBottom: "30px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    justifyContent: "center",
    paddingBottom: "60px"
  };

  const cardStyle = {
    backgroundColor: "#fff8e7",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center"
  };

  const imageStyle = {
    width: "50%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  };

  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: "#3b1e08",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Women's Fashion</h2>
      <div style={gridStyle}>
        {products.women.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.rating}</p>
            <p>{item.description}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 style={titleStyle}>Men's Fashion</h2>
      <div style={gridStyle}>
        {products.men.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.rating}</p>
            <p>{item.description}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ProductSection;
