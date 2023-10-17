<template>
  <nav class="breadcrumb pt-4 pb-3 gray-200-text mb-0">
    <RouterLink to="/" class="d-flex align-items-center gray-200-text me-2">
      <HomeIcon width="16" height="16" />
    </RouterLink>
    <span v-for="(item, index) in breadcrumb" :key="index" class="breadcrumb-item">{{ item }}</span>
  </nav>
</template>

<script lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
export default {
  name: 'Breadcrumb',
  components: {
    HomeIcon,
  },
  props: {
    breadcrumb: Array,
  },
};
</script>
