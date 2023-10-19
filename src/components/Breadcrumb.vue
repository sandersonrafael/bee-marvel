<template>
  <nav class="breadcrumb pt-3 pb-3 ps-1 gray-200-text mb-0">
    <RouterLink to="/" class="d-flex align-items-center gray-200-text me-2">
      <HomeIcon width="16" height="16" />
    </RouterLink>
    <div v-for="item in breadcrumb" :key="item.name" class="breadcrumb-item d-flex align-items-center">
      <RouterLink v-if="item.urlPath" :to="item.urlPath" class="text-decoration-none gray-200-text">
        {{ item.name }}
      </RouterLink>

      <span v-else class="gray-200-text">{{ item.name }}</span>
    </div>
  </nav>
</template>

<script lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import BreadcrumItem from '../types/BreadcumbItem';

export default {
  name: 'Breadcrumb',
  components: {
    HomeIcon,
  },
  props: {
    breadcrumb: Array<BreadcrumItem>,
  },
};
</script>
