<script setup>
import ShopNowBtn from '../ShopNowBtn.vue';
</script>
<template>
  <section class="flex justify-center">
    <div class="grid-container grid grid-cols-1 md:grid-cols-4">

      <div class="banner-md col-span-1 md:col-span-2 flex items-center py-10 px-4 md:p-0 md:pr-10 text-center md:text-start  flex-col md:flex-row gap-6 md:gap-0">
        <div class="img">
          <img src="/src/assets/HomeAssets/PlayStation.png" alt=""  class="hidden md:block">
          <img src="/src/assets/HomeAssets/PlayStationSM.png" alt="" class="block md:hidden">
        </div>
        <div class="info flex flex-col gap-4">
          <p>Playstation 5</p>
          <span>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</span>
        </div>
      </div>

      <div class=" banner-lg row-start-4 col-span-1  md:col-span-2 row-span-1 md:row-span-2 flex items-center md:justify-end py-10 px-4  md:p-0  md:pl-14  text-center md:text-start   flex-col-reverse md:flex-row gap-6 md:gap-0  ">
        <div class="info flex flex-col gap-4">
          <p>Macbook <span>Air</span></p>
          <span>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</span>
          <ShopNowBtn theme="dark" />
        </div>
        <div class="img  md:flex md:justify-end">
          <img src="/src/assets/HomeAssets/MacBook Pro 14.png" alt=""  class="hidden md:block">
          <img src="/src/assets/HomeAssets/MacBook Pro 14SM.png" alt="" class="block md:hidden">
        </div>
      </div>
      <div class=" banner-sm light flex items-center py-10 px-4 md:p-0 md:pr-10  flex-col md:flex-row text-center md:text-start  gap-6 md:gap-0">
                <div class="img block">
                  <img src="/src/assets/HomeAssets/Headphone.png" alt="" class="hidden md:block">
                  <img src="/src/assets/HomeAssets/HeadphoneSM.png" class="block md:hidden">
                </div>
        <div class="info flex flex-col gap-4">
          <p>Apple AirPods <span>Max</span></p>
          <span>Computational audio. Listen, it's powerful</span>
        </div>

      </div>
      <div class="banner-sm  dark flex items-center py-10 px-4 md:p-0 md:pr-10  flex-col md:flex-row text-center md:text-start  gap-6 md:gap-0">
                <div class="img">
                  <img src="/src/assets/HomeAssets/appleVision.png"  class="hidden md:block" alt="">
                  <img src="/src/assets/HomeAssets/appleVisionSM.png" class="block md:hidden" alt="">
                </div>
        <div class="info flex flex-col gap-4">
          <p>Apple Vision <span>Pro</span></p>
          <span>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.grid-container{
  .banner-md , .banner-lg , .banner-sm{
    .img{
      flex: 1 0 50%;
    }
    .info{
      flex: 1 0 50%;
      p{
        color: #000;
        font-size: 49px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
        span{
          color: #000;
            font-size: 64px;
          font-style: normal;
          font-weight: 500;
          line-height: 56px;
        }
      }
      span{
        color: #909090;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .banner-sm{
    &.light{
      background-color: #EDEDED;;
    }
    &.dark{
      background-color:#353535;
      .info{
        p {
        color: white;
        span{
          color: white;
        }
      }
      span{
        color: #909090;
      }
      }
    }
    .img{
      flex: 1 0 50%;
    }
    .info{
      flex: 1 0 50%;
      p{
        color: #000;
        font-size: 29px;
        font-style: normal;
        font-weight: 100;
        line-height: 40px;
      span{
        color: #000;
        font-size: 29px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 137.931% */
        }
      }
      span{
        color: #909090;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .banner-lg{
    background: #EDEDED;
    .info{
      p{
      font-weight: 100;
    }
    }
  }
}
</style>
