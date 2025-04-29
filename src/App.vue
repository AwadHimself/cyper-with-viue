<script setup>
import NavBar from './components/GlobalComponents/NavBar.vue'
// import FooterComp from './components/GlobalComponents/FooterComp.vue';
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';
</script>

<template>
 <NavBar />
 <RouterView />
 <Toast position="top-right" />
 <!-- <FooterComp /> -->
</template>

<style>
</style>
