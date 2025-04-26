<script setup>
import Skeleton from 'primevue/skeleton'
</script>
<template>
    <section>
    <div class="grid-container grid grid-cols-1 md:grid-cols-4  ">
      <div class="col-span-1 md:col-span-2 flex gap-20 items-center">
        <Skeleton width="15rem" height="19rem"></Skeleton>
        <div>
          <Skeleton height="4rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="20rem"></Skeleton>
          <Skeleton width="15rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2 row-span-2 flex items-center justify-end gap-25  " style="background-color: #ededed;  --p-skeleton-background: #c1c6cb; --p-skeleton-animation-background: rgb(121 114 114 / 40%);">
        <div class="">
          <Skeleton height="3rem" width="16rem" class="mb-2"></Skeleton>
          <Skeleton class="mb-2" width="17rem"></Skeleton>
          <Skeleton width="17rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton width="18rem" height="3rem" class=" justify-self-center mt-4 "></Skeleton>
        </div>
        <Skeleton width="15rem" height="33rem"></Skeleton>
      </div>
      <div class="flex gap-10 items-center " style="background-color: #ededed;     --p-skeleton-background: #c1c6cb; --p-skeleton-animation-background: rgb(121 114 114 / 40%);">
        <Skeleton width="6.5rem" height="17rem"></Skeleton>
        <div>
          <Skeleton height="1.5rem" width="5rem" class="mb-2"></Skeleton>
          <Skeleton height="1.5rem" width="7rem" class="mb-2"></Skeleton>
          <Skeleton height="1.5rem" width="3rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" height=".5rem" class="mb-2"></Skeleton>
          <Skeleton width="10rem" height=".5rem" class="mb-2"></Skeleton>
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
