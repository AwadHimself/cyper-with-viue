<script setup>
</script>

<template>
  <nav class="flex justify-center my-4">
    <div class="navbar container flex justify-between items-center px-10 py-4">
      <div class="logo">CYBER</div>
      <div class="search">
        <input type="text" id="search" placeholder="Search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
      <div class="links ">
        <ul class=" flex gap-10 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="icons ">
        <ul class=" flex gap-6 ">
          <li><font-awesome-icon :icon="['far', 'heart']" /></li>
          <li><font-awesome-icon :icon="['fas', 'cart-shopping']" /></li>
          <li><font-awesome-icon :icon="['fas', 'user']" /></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
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
        padding: 16px;

        }
      }
    }
  }
</style>
