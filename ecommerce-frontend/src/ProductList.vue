<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/apiService';

const products = ref([]);

onMounted(async () => {
  products.value = await fetchProducts();
  console.log(products.value)
});
</script>
