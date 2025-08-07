// frontend/src/services/api.js

const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // ✅ Test backend connection
  testConnection: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/test`);
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // ✅ Get all users from database
  getUsers: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // ✅ Register or create a new user
  createUser: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // ✅ Get all products
  getProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // ✅ Get cart for a specific user
  getCart: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch cart");
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // ✅ (Optional) Get orders for a specific user
  getOrders: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};
