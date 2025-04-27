<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import BannerItem from '../BannerItem.vue'
import BannerLoader from '../BannerLoader.vue'
const state = reactive({
  banners: [],
  loading: true,
})

const fetchBanners = async () => {
  try {
    const res = await axios.get('/src/api/banners.json')
    state.banners = res.data

    await new Promise(resolve => setTimeout(resolve, 1500))
  } catch (error) {
    console.error('Failed to fetch banners:', error)
  } finally {
    state.loading = false
  }
}

onMounted(() => {
  fetchBanners()
})
</script>

<template>
  <section>
    <div v-if="state.loading" >
      <BannerLoader />
    </div>
    <div v-else class="grid-container grid grid-cols-1 md:grid-cols-4">
      <BannerItem v-for="banner in state.banners" :key="banner.id" :banner="banner" />
    </div>
  </section>
</template>


<style lang="scss">
.grid-container {
  .banner-md,
  .banner-lg,
  .banner-sm {
    .img {
      flex: 1 0 50%;
    }
    .info {
      flex: 1 0 50%;
      p {
        color: #000;
        font-size: 49px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
        span {
          color: #000;
          font-size: 64px;
          font-style: normal;
          font-weight: 500;
          line-height: 56px;
        }
      }
      span {
        color: #909090;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .banner-sm {
    &.light {
      background-color: #ededed;
    }
    &.dark {
      background-color: #353535;
      .info {
        p {
          color: white;
          span {
            color: white;
          }
        }
        span {
          color: #909090;
        }
      }
    }
    .img {
      flex: 1 0 50%;
    }
    .info {
      flex: 1 0 50%;
      p {
        color: #000;
        font-size: 29px;
        font-style: normal;
        font-weight: 100;
        line-height: 40px;
        span {
          color: #000;
          font-size: 29px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px; /* 137.931% */
        }
      }
      span {
        color: #909090;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .banner-lg {
    background: #ededed;
    .info {
      p {
        font-weight: 100;
      }
    }
  }
}
</style>
