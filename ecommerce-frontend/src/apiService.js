const BASE_URL = 'http://localhost:3000';

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return await response.json();
};

export const fetchOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  return await response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  });
  return await response.json();
};

// ... Add other API calls as needed ...
