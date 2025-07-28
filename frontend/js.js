
document.addEventListener("DOMContentLoaded", () => {
  // ---------- LOGIN / REGISTER FORM ----------
  const formContainer = document.getElementById("formContainer");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const closeBtn = document.getElementById("closeBtn");
  const showAuthBtn = document.getElementById("showAuth");
  const switchToRegister = document.getElementById("switchToRegister");
  const switchToLogin = document.getElementById("switchToLogin");

  if (showAuthBtn && formContainer) {
    showAuthBtn.addEventListener("click", () => {
      formContainer.style.display = "flex";
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      formContainer.style.display = "none";
    });

    switchToRegister.addEventListener("click", () => {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    switchToLogin.addEventListener("click", () => {
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // ---------- PRODUCT CARD CLICK (index.html or home.html) ----------
  const currentPage = window.location.pathname;

  if (currentPage.includes("home.html") || currentPage.endsWith("/")) {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        const product = {
          name: card.querySelector("h3")?.textContent || "",
          price: card.querySelector(".price")?.textContent.replace("₹", "").trim() || "",
          rating: card.querySelector(".rating")?.textContent || "",
          description: card.querySelector(".description")?.textContent || "",
          image: card.querySelector("img")?.getAttribute("src") || ""
        };

        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "product.html";
      });
    });
  }

  // ---------- PRODUCT PAGE RENDERING + ADD TO CART ----------
  if (currentPage.includes("product.html")) {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
      document.getElementById("productImage").src = product.image;
      document.getElementById("productTitle").textContent = product.name;
      document.getElementById("productPrice").textContent = `Price: ₹${product.price}`;
      document.getElementById("productRating").textContent = `Rating: ${product.rating}`;
      document.getElementById("productDescription").textContent = product.description;

      const addToCartBtn = document.getElementById("addToCartBtn");
      if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
          const cartItem = {
            product: product.name,
            price: parseFloat(product.price),
            quantity: 1
          };

          let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

          const existing = cart.find(item => item.product === cartItem.product);
          if (existing) {
            existing.quantity += 1;
          } else {
            cart.push(cartItem);
          }

          localStorage.setItem("cartItems", JSON.stringify(cart));
          alert("Product added to cart!");
        });
      }
    } else {
      document.body.innerHTML = "<p style='text-align:center; margin-top:2rem;'>Product not found.</p>";
    }
  }

  // ---------- CART PAGE: Show Cart Items ----------
  if (currentPage.includes("cart.html")) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const cartItemsContainer = document.getElementById("cartItemsContainer");

    if (cartItemsContainer) {
      if (cartItems.length === 0) {
        cartItemsContainer.innerHTML += "<p>Your cart is empty.</p>";
      } else {
        cartItems.forEach(item => {
          const div = document.createElement("div");
          div.innerHTML = `
            <input type="checkbox" name="product" value="${item.product}" checked />
            ${item.product} - ₹${item.price}
            <input type="number" name="quantity_${item.product}" min="1" value="${item.quantity}" style="width: 80px; margin-left: 10px;" />
          `;
          cartItemsContainer.appendChild(div);
        });
      }
    }
  }

  // ---------- CATEGORY SCROLL ----------
  const categorySection = document.querySelector(".category-section");
  if (categorySection) {
    categorySection.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      categorySection.scrollLeft += evt.deltaY;
    });
  }
});

