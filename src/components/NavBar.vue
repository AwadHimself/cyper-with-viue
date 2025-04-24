<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex justify-center my-4">
    <div class="navbar container flex justify-between items-center px-10 py-4">
      <div class="logo"><img src="../assets/cyber.svg" alt="" srcset=""></div>
      <div class="search">
        <input type="text" id="search" placeholder="Search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mag" />
      </div>
      <div class="links">
        <ul class=" flex gap-10 ">
          <router-link to="/" active-class="active">Home</router-link>
          <router-link to="/about" active-class="active">About</router-link>
          <router-link to="/contactus" active-class="active">Contact Us</router-link>
          <router-link to="blog" active-class="active">Blog</router-link>
        </ul>
      </div>
      <div class="icons ">
        <ul class=" flex gap-6 ">
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          <font-awesome-icon :icon="['fas', 'user']" />
        </ul>
      </div>
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
        color: #989898;
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
        ul{
          a{
            color: var(--Main-Black, #000);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            opacity: .3;
            &.active{
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
