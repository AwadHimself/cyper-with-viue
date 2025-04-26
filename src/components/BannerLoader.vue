<script setup>
import Skeleton from 'primevue/skeleton'
</script>
<template>
    <section>
    <div class="grid-container grid grid-cols-1 md:grid-cols-4  ">
      <div class="col-span-1 md:col-span-2 flex gap-2 items-center">
        <Skeleton width="20rem" height="15rem"></Skeleton>
        <div>
          <Skeleton height="4rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="20rem"></Skeleton>
          <Skeleton width="15rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2 row-span-2 flex gap-2 items-center justify-end" style="background-color: #ededed; --p-skeleton-background: #525558; --p-skeleton-animation-background: rgb(63 50 50 / 40%)">
        <div>
          <Skeleton height="4rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="20rem"></Skeleton>
          <Skeleton width="15rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton width="15rem" height="3rem" class=" justify-self-center "></Skeleton>
        </div>
        <Skeleton width="20rem" height="25rem"></Skeleton>
      </div>
      <div class="flex gap-1 items-center " style="background-color: #ededed; --p-skeleton-background: #525558; --p-skeleton-animation-background: rgb(63 50 50 / 40%)">
        <Skeleton width="10rem" height="15rem"></Skeleton>
        <div>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="10rem"></Skeleton>
          <Skeleton width="8rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton width="2rem" class="mb-2"></Skeleton>
        </div>
      </div>
      <div class="flex gap-1 items-center" style="background-color: #353535;">
        <Skeleton width="10rem" height="10rem"></Skeleton>
        <div>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="10rem"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
      </div>
    </div>
  </section>

</template>
