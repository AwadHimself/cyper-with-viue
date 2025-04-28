<script setup>
import NavBar from './components/GlobalComponents/NavBar.vue'
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';
</script>

<template>
 <NavBar />
 <RouterView />
 <Toast position="top-right" />
</template>

<style>
</style>
