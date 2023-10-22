<template>
  <div class="min-h-screen bg-gray-100 py-6">
    <div class="px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="text-2xl font-bold mb-6 text-gray-700">
        Products
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white p-6 rounded shadow">
          <h3 class="text-xl font-semibold mb-4">{{ product.name }}</h3>
          <p class="text-gray-600 mb-4">${{ product.price }}</p>

          <RouterLink :to="`/products/${product.id}`" class="btn btn-primary btn-sm">Details</RouterLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/apiService';

const products = ref([]);

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const viewDetails = (id) => {
  // Navigate to product details page
  // This will be implemented in the next step
};
</script>
