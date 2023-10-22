<template>
  <div class="min-h-screen bg-gray-100 py-6">
    <div class="px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="text-2xl font-bold mb-6 text-gray-700">
        Product Details
      </div>
      <div class="bg-white p-6 rounded shadow">
        <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-gray-600 mb-4">${{ product.price }}</p>

        <div class="flex items-center space-x-4 mb-4">
          <label for="quantity" class="text-sm font-medium text-gray-700">Quantity:</label>
          <input v-model="quantity" type="number" id="quantity" name="quantity" min="1" class="p-2 w-24 border rounded-md">
          <button @click="placeOrder" class="btn btn-primary">Order</button>
        </div>

        <router-link to="/products" class="btn btn-outline btn-sm">Back to Products</router-link>
      </div>
    </div>
  </div>
</template>

<!-- ... existing script ... -->


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProductById, createOrder } from '@/apiService';

const route = useRoute();
const productId = route.params.id;
const product = ref({});

const quantity = ref(1);

const placeOrder = async () => {
  const orderData = {
    productId: product.value.id,
    quantity: quantity.value
  };
  try {
    const newOrder = await createOrder(orderData);
    alert("Order placed successfully!", newOrder);
    // You can also navigate to a confirmation page or show a success message to the user.
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Error placing order. Please try again.");
  }
};

onMounted(async () => {
  try {
    product.value = await fetchProductById(productId);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
});
</script>
