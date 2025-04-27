<script setup>
import { reactive , defineProps } from 'vue';
import { Skeleton } from 'primevue';


const props =  defineProps({
  product: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: true,
  }
})

const state = reactive({
  wWishList : false
})

const LikeTogle = ()=>{
  state.wWishList = !state.wWishList
}
</script>

<template>
  <div class="prod-card py-6 px-4 flex flex-col gap-4 items-center w-fit justify-self-center">
    <div class="flex justify-end w-full icon" >
      <img v-if="!state.wWishList" @click="LikeTogle" src="../../assets/icons/CategoryIcons/like.png" class=" cursor-pointer" alt="" />
      <img v-else  @click="LikeTogle" src="../../assets/icons/CategoryIcons/liked.png" class=" cursor-pointer" alt="" />
    </div>
    <div>
      <img :src="props.product.thumbnail" style="width: 160px; height: 190px" v-if="!props.loading"  />
      <Skeleton v-else width="10rem" height="11.875rem" ></Skeleton>
    </div>
    <div>
      <p  v-if="!props.loading"  class="title flex justify-center items-center">{{ props.product.name }}</p>
      <div  v-else class="flex flex-col items-center gap-1">
        <Skeleton width="10rem" height=".5em" ></Skeleton>
        <Skeleton width="8rem" height=".5rem" ></Skeleton>
        <Skeleton width="4rem" height=".5rem" ></Skeleton>
      </div>
    </div>
    <div>
      <p v-if="!props.loading"  class="price">{{ props.product.price }}$</p>
      <Skeleton v-else width="8rem" height="1.5em" ></Skeleton>
    </div>
    <div>
      <button v-if="!props.loading" class="buy-now">Buy Now</button>
      <Skeleton v-else width="12rem" height="2.2em" ></Skeleton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prod-card {
  --p-skeleton-background: #c1c6cb;
  --p-skeleton-animation-background: rgb(121 114 114 / 40%);
  border-radius: 9px;
  background: #f6f6f6;
  .title{
    color: var(--Main-Black, #000);
    height: 48px;
    width: 236px;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
  .price{
    color: var(--Main-Black, #000);
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px; /* 100% */
    letter-spacing: 0.72px;
  }
  .buy-now {
    cursor: pointer;
    display: flex;
    color: white;
    padding: 12px 64px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Main-Black, #000);
  }
}
</style>
