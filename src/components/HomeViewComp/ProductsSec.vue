<script setup>
import { reactive, computed, onMounted , defineProps } from 'vue';
import ProductCard from '../GlobalComponents/ProductCard.vue';
import axios from 'axios';
const state = reactive({
  products: [],
  selectedTag: "Bestseller",
  loading: false,
  error: '',
});
const filterByTag = (tag) => {
  state.loading = true;
  setTimeout(() => {
    state.selectedTag = tag;
    state.loading = false;
  }, 500);
}

const props = defineProps({
  limit: {
    type: Number,
    default: 4
  }
});

const limitedProducts = computed(() => {
  return filteredProducts.value.slice(0, props.limit || filteredProducts.value.length );
});


const fetchProducts = async () => {
  state.loading = true;
  try {
    const response = await axios.get('/src/api/data.json');
    state.products = response.data.products;
    await new Promise(resolve => setTimeout(resolve, 1500))
  } catch (error) {
    console.error('Failed to fetch banners:', error)
  } finally {
    state.loading = false;
  }
};
const uniqueTags = computed(() => {
  const tags = new Set();
  state.products.forEach((product) => {
    if (product.tags) {
      product.tags.forEach((tag) => tags.add(tag));
    }
  });
  return [...tags];
});

const filteredProducts = computed(() => {
  if (!state.selectedTag) return state.products;
  return state.products.filter((product) =>
    product.tags.includes(state.selectedTag)
  );
});

onMounted(() => {
  fetchProducts();
});


</script>

<template>
  <section class="container px-4 py-14 md:px-20 md:py-20 justify-self-center">
    <div class="tags flex gap-8 " v-if="uniqueTags.length">
      <button
        v-for="tag in uniqueTags"
        :key="tag"
        @click="filterByTag(tag)"
        :class="['tag-button', { active: state.selectedTag === tag }]"
        >
        {{ tag }}
      </button>
    </div>

    <div class="products grid grid-cols-2  lg:grid-cols-4 gap-4 mt-8 ">
      <ProductCard
      v-for="product in limitedProducts"
        :key="product.id"
        :product="product"
        :loading="state.loading"
  />
    </div>
  </section>
</template>

  <style lang="scss" scoped>
.tag-button{
  color: #8B8B8B;
text-align: center;
cursor: pointer;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 32px; /* 177.778% */
&.active{
  color: var(--Main-Black, #000);
text-align: center;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 32px; /* 177.778% */
border-bottom: 2px solid black;

}
}
</style>
