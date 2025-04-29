<script setup>
import { ref, defineProps } from "vue";
import { useRoute } from "vue-router"; // لجلب المسار الحالي
import 'primeicons/primeicons.css'
import Breadcrumb from 'primevue/breadcrumb';

const props = defineProps({
  categoryName: {
    type: String,
    required: true
  }
});

const route = useRoute();

const home = ref({
  icon: 'pi pi-home',
  route: '/'
});

const categoryPath = `/${encodeURIComponent(props.categoryName)}`;

const items = ref([
  { label: props.categoryName.toUpperCase(), route: categoryPath }
]);
</script>

<template>
  <div class="card flex gap-4 justify-center">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link :to="item.route" v-slot="{ href, navigate }" custom>
          <a
            :href="href"
            @click="navigate"
            v-bind="props.action"
            :class="[
              'transition-all',
              route.path === item.route
                ? 'text-primary font-semibold text-black'
                : 'text-surface-700 dark:text-surface-0'
            ]"
          >
            <span v-if="item.icon" :class="[item.icon, 'mr-2']" />
            {{ item.label }}
          </a>
        </router-link>
      </template>
    </Breadcrumb>
  </div>
</template>
