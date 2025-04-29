<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="flex justify-center  bg-black ">
    <div class="container px-10 py-24 flex flex-col gap-6 ">
      <div class="flex flex-col  gap-6">
        <div class="info flex justify-between flex-wrap gap-12">
          <div class="about flex flex-col gap-6 items-center md:items-start text-center md:text-start">
            <img src="../../assets/LogoFooter.svg" class="w-fit" alt="">
            <p class=" w-fit md:w-96 ">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div class="links flex justify-between flex-col md:flex-row items-center text-center md:text-start ">
            <div>
              <ul class="ul-links flex flex-col gap-4">
                <li class="head">Services</li>
                <li><router-link to="/Bonus program" >Bonus program</router-link></li>
                <li><router-link to="/Gift cards" >Gift cards</router-link></li>
                <li><router-link to="/Credit and payment" >Credit and payment</router-link></li>
                <li><router-link to="/Service contracts" >Service contracts</router-link></li>
                <li><router-link to="/Non-cash account" >Non-cash account</router-link></li>
                <li><router-link to="/Payment" >Payment</router-link></li>
              </ul>
            </div>
            <div>
              <ul class="ul-links flex flex-col gap-4">
                <li class="head">Assistance to the buyer</li>
                <li><router-link to="/Find an order" >Find an order</router-link></li>
                <li><router-link to="/Terms of delivery" >Terms of delivery</router-link></li>
                <li><router-link to="/Exchange and return of goods" >Exchange and return of goods</router-link></li>
                <li><router-link to="/Guarantee" >Guarantee</router-link></li>
                <li><router-link to="/Frequently asked questions" >Frequently asked questions</router-link></li>
                <li><router-link to="/Terms of use of the site" >Terms of use of the site</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="socials w-52 self-center md:self-start ">
          <ul class=" flex justify-between">
            <routerLink to="/socials"><img src="../../assets/icons/socials/Twitter.png" alt="" srcset=""></routerLink>
            <routerLink to="/socials"><img src="../../assets/icons/socials/Facebook.png" alt="" srcset=""></routerLink>
            <routerLink to="/socials"><img src="../../assets/icons/socials/Tiktok.png" alt="" srcset=""></routerLink>
            <routerLink to="/socials"><img src="../../assets/icons/socials/Instagram.png" alt="" srcset=""></routerLink>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .about{
    flex: 1 0 50%;
    p{
      color: #CFCFCF;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 170.5%; /* 23.87px */
    }
  }

  .links{
    flex: 1 0 42%;
    gap: 62px;
    .ul-links{
    li{
      a{
        color: #CFCFCF;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px; /* 228.571% */
      }
    }
    .head{
      color: var(--Main-White, #FFF);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 100% */
    }
  }

  }
</style>
