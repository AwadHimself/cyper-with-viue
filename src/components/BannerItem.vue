<script setup>
import { reactive, onMounted, onUnmounted, defineProps } from 'vue'
import ShopNowBtn from './ShopNowBtn.vue'

const props = defineProps({
  banner: {
    type: Object,
    required: true
  }
})

const state = reactive({
  isMobile: false,
})

const breakpoint = 768

const checkWidth = () => {
  state.isMobile = window.innerWidth < breakpoint
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})

const getImageClass = () => {
  if (props.banner.type.includes('banner-lg')) {
    return 'img md:flex md:justify-end'
  }
  return 'img block'
}

const getInfoClass = () => {
  return 'info flex flex-col gap-4'
}

const getFlexDirection = () => {
  if (props.banner.type.includes('banner-lg')) {
    return 'flex-col md:flex-row-reverse pl-6'
  }
  return 'flex-col md:flex-row'
}

const getPaddingClass = () => {
  if (props.banner.type.includes('banner-lg')) {
    return 'md:pl-14'
  }
  return 'md:pr-10'
}
</script>

<template>
  <div :class="`${banner.type} flex items-center py-10 px-4 md:p-0 ${getPaddingClass()} text-center md:text-start gap-6 md:gap-0 ${getFlexDirection()}`">
    <div :class="getImageClass()">
      <img v-if="!state.isMobile" :src="banner.imgDesktop" alt="" />
      <img v-else :src="banner.imgMobile" alt="" />
    </div>
    <div :class="getInfoClass()">
      <p v-html="banner.title"></p>
      <span v-html="banner.description"></span>
      <ShopNowBtn v-if="banner.hasButton" theme="dark" />
    </div>
  </div>
</template>


<style scoped>
/* لو محتاج تحط ستايل ل اللودينج مثلا */
</style>
