<script setup>
import { reactive, defineProps, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Skeleton } from 'primevue'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

const toast = useToast()

const Added = () => {
  toast.add({
    severity: 'success',
    summary: 'Added to Wishlist',
    detail: 'The product has been added to your wishlist ❤️',
    life: 3000,
    closable: true,
  })
}
const Removed = () => {
  toast.add({
    severity: 'error',
    summary: 'Removed from Wishlist',
    detail: 'The product has been removed from your wishlist 💔',
    life: 3000,
    closable: true,
  })
}

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

const state = reactive({
  wWishList: false,
  wishlist: [],
})

const getWishlist = async () => {
  try {
    const response = await axios.get('/api/wishlist')
    state.wishlist = response.data
  } catch (error) {
    console.error('Error fetching wishlist:', error)
  }
}

const product = {
    id: props.product.id,
    name: props.product.name,
    category :props.product.category
  }


const addToWishlist = async () => {
  try {
    if (!state.wishlist.some((item) => item.productId === product.id)) {
      await axios.post('/api/wishlist', product)
      Added()
      state.wishlist.push(product)
      state.wWishList = true
    }
  } catch (error) {
    console.error('Error adding to wishlist:', error)
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'There was an error adding the product to your wishlist!',
      life: 3000,
    })
  }
}

const removeFromWishlist = async () => {
  try {
    await axios.delete(`/api/wishlist/${product.id}`)
    Removed()
    getWishlist()
    state.wWishList = false
  } catch (error) {
    console.error('Error removing from wishlist:', error)
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'There was an error removing the product from your wishlist!',
      life: 3000,
    })
  }
}

const isProductInWishlist = computed(() => {
  return state.wishlist.some((item) => item.id === props.product.id)
})

const LikeTogle = async () => {
  if (isProductInWishlist.value) {
    await removeFromWishlist()
  } else {
    await addToWishlist()
  }
}
onMounted(() => {
  getWishlist()
})
</script>

<template>
  <div class="prod-card py-6 px-4 flex flex-col gap-4 items-center w-fit justify-self-center">
    <div class="flex justify-end w-full icon">
      <button v-if="!isProductInWishlist" @click="LikeTogle" type="button">
        <img src="../../assets/icons/CategoryIcons/like.png" class="cursor-pointer" alt="" />
      </button>
      <button v-else @click="LikeTogle" type="button">
        <img src="../../assets/icons/CategoryIcons/liked.png" class="cursor-pointer" alt="" />
      </button>
    </div>
    <div>
      <img
        :src="props.product.thumbnail"
        style="width: 160px; height: 190px"
        v-if="!props.loading"
      />
      <Skeleton v-else width="10rem" height="11.875rem" />
    </div>
    <div>
      <p v-if="!props.loading" class="title flex justify-center items-center">
        {{ props.product.name }}
      </p>
      <div v-else class="flex flex-col items-center gap-1">
        <Skeleton width="15rem" height=".7em" />
        <Skeleton width="10rem" height=".7rem" />
        <Skeleton width="5rem" height=".7rem" />
      </div>
    </div>
    <div>
      <p v-if="!props.loading" class="price">{{ props.product.price }}$</p>
      <Skeleton v-else width="8rem" height="1.5em" />
    </div>
    <div>
      <routerLink :to="`/${product.category}/${product.id}`" v-if="!props.loading" class="buy-now">Buy Now</routerLink>
      <Skeleton v-else width="12rem" height="2.2em" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prod-card {
  --p-skeleton-background: #c1c6cb;
  --p-skeleton-animation-background: rgb(121 114 114 / 40%);
  border-radius: 9px;
  background: #f6f6f6;
  .title {
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
  .price {
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
