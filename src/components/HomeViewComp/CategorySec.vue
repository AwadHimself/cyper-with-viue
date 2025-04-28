<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'

import CategoryCard from './CategoryCard.vue';
const state = reactive({
  categories: [],
})
const fetchCategories = async () => {
  try {
    const response = await axios.get('/api/categories')
    state.categories = response.data
  } catch (error) {
    console.error('Failed to fetch banners:', error)

  }
}
onMounted(() => {
  fetchCategories()
})



</script>

<template>
 <section class="flex justify-center">
  <div class="container px-4 py-16 md:px-20 md:py-20 flex flex-col gap-8">
    <div class="Browse flex justify-between">
      <p>Browse By Category</p>
      <div class="arrows flex gap-4">
        <img src="../../assets/icons/CategoryIcons/ArrowL.png" class="cursor-pointer" alt="">
        <img src="../../assets/icons/CategoryIcons/ArrowR.png" class="cursor-pointer" alt="">
      </div>
    </div>
    <div class="cards flex gap-8 justify-center flex-wrap ">
      <CategoryCard v-for="Category in state.categories" :key="Category.id" :Category="Category" />
    </div>
  </div>
 </section>
</template>

<style lang="scss" scoped>
  .Browse{
    color: var(--Main-Black, #000);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.24px;
  }
</style>
