<script setup>
import { useRoute } from 'vue-router'
import 'primeicons/primeicons.css'
const route = useRoute()
const categoryName = route.params.category

import BreadCrump from '@/components/GlobalComponents/BreadCrump.vue';





</script>
<template>
  <div class="container flex justify-start justify-self-center px-20 py-10">
    <BreadCrump :categoryName="categoryName" />
  </div>

</template>
