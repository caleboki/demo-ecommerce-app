<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchProductById } from '@/apiService';

const router = useRouter();
const route = useRoute();
const product = ref(null);

onMounted(async () => {
  const productId = route.params.id;
  product.value = await fetchProductById(productId);
});
</script>

