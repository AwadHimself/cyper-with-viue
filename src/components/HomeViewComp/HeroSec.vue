<script setup>
import ShopNowBtn from '../GlobalComponents/ShopNowBtn.vue';

</script>


<template>
  <section class="flex justify-center ">
    <div class="container px-10 flex flex-wrap md:flex-nowrap justify-center md:justify-evenly items-center text-center md:text-start gap-12 md:gap-0 ">
      <div class="info flex flex-col gap-6 items-center md:items-start mt-20 md:mt-0 ">
      <p>Pro.Beyond.</p>
      <p>IPhone 14 <span>Pro</span></p>
      <p>Created to change everything for the better. For everyone</p>
      <ShopNowBtn  />
    </div>
    <div><img src="/src/assets/HomeAssets/Iphone Image.png" alt="" class=""></div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  section{
    background: linear-gradient(91deg, #211C24 0.64%, #211C24 101%);
    width: 1;
    .container{
      @media (width <= 48rem) {
        height:900px ;
        overflow: hidden;
      }
      .info{
          color: #FFF;
          font-style: normal;
        p:nth-child(1) {
          opacity: 0.4;
          font-size: 25px;
          font-weight: 600;
        }
        p:nth-child(2){
          font-size: 96px;
          font-weight: 100 !important ;
          letter-spacing: -0.96px;
          span{
            font-weight: 600;
          }
        }
        p:nth-child(3){
          color: #909090;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }
  }
</style>
