<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

defineProps({
  Category: {
    type: Object,
  },
})
</script>

<template>
  <router-link :to="`/${Category.name}`">
    <div
      class="category-card flex flex-col justify-center items-center gap-4 py-6 px-12 max-sm:w-32"
    >
      <img :src="Category.icon" />
      <span class="title">{{ Category.name }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.category-card {
  border-radius: 15px;
  background: #ededed;
  max-width: 160px;
  min-width: 135px;
  height: 128px;
  .title {
    color: var(--Main-Black, #000);
    width: 135px;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
}
</style>
