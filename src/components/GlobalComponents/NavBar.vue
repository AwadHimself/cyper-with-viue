<script setup>
import { RouterLink } from "vue-router";
import { ref } from 'vue'
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
  <nav class="flex justify-center">
    <div class="navbar container flex items-center px-10 py-4 justify-between md:justify-evenly ">
      <div class="logo"><img src="../../assets/cyber.svg" alt="" srcset=""></div>
      <div class="search hidden md:block">
        <input type="text" id="search" placeholder="Search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mag" />
      </div>
      <div :class="['links', { 'active': isMenuOpen }] ">
        <ul class=" flex gap-10 ">
          <router-link to="/" active-class="active">Home</router-link>
          <router-link to="/about/1" active-class="active">About</router-link>
          <router-link to="/contactus/1" active-class="active">Contact Us</router-link>
          <router-link to="blog1/" active-class="active">Blog</router-link>
        </ul>
      </div>
      <div class="icons hidden min-lg:block ">
        <ul class=" flex gap-6 ">
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          <font-awesome-icon :icon="['fas', 'user']" />
        </ul>
      </div>
      <button class="menu-toggle" @click="toggleMenu"><font-awesome-icon :icon="['fas', 'bars']" class="  block! md:hidden! text-4xl cursor-pointer"/></button>
    </div>
  </nav>
</template>

<style lang="scss" scoped >
  nav{
    .navbar{
      .logo{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bolder;
        font-size: 35px;
      }
      .search{
        position: relative;
        border-radius: 8px;
        background: #F5F5F5;
        input{
        border-radius: 8px;
        background: #F5F5F5;
        padding: 16px 16px 16px 25px;
        }
        .mag{
          color: #989898;
          position: absolute;
          left: 85%;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .links{
        &.active{
            ul{
              @media (width<768px) {
              height: 300px;
              }
            }
          }
        ul{
          @media (width<768px) {
          flex-direction: column;
          position: absolute;
          top: 66px;
          width: 100%;
          align-items: center;
          left: 0;
          background-color: #e3e1e1;
          color: white;
          transition: .3s;
          height: 0;
          overflow: auto;
          justify-content: center;
        }
          a{
            color: var(--Main-Black, #000);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            opacity: .3;
            transition: .3s;
            &.active{
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
