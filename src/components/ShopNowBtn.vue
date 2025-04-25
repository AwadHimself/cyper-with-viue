<script setup>
import { defineProps } from 'vue';

defineProps({
  title:{
    type :String,
    default : 'Shop Now'
  },
  theme:{
    type:String,
    default: 'light'
  }
})

</script>

<template>
        <button :class="`shop-now ${theme}`">
        {{ title }}
      </button>
</template>

<style lang="scss" scoped>
        .shop-now.light{
          transition: .3s;
          display: flex;
          padding: 16px 56px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 6px;
          border: 1px solid var(--Main-White, #FFF);
          &:hover{
            background-color: white;
            color: #211C24;
          }
        }
        .shop-now.dark{
          transition: .3s;
          display: flex;
          padding: 16px 56px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          color: black;
          border-radius: 6px;
          border: 1px solid var(--Main-Black, #000);
          &:hover{
            background-color:#211C24;
            color: white;
          }
        }
</style>
