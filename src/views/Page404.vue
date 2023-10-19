<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{ name: 'Page 404', urlPath: '' }]" />

    <div class="position-absolute w-100 top-50 start-50 translate-middle text-center">
      <p class="fs-3 fw-bolder">ERROR 404 - PAGE NOT FOUND</p>
      <p class="fs-5 fw-medium">
        The page you're looking don't exists. <br>
        Get back to homepage clicking <RouterLink to="/" class="text-dark">HERE</RouterLink>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
export default {
  name: 'Page404',
  props: {
    pathRoute: Function,
  },
  components: {
    Breadcrumb,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
  emits: ['getPathRoute'],
};
</script>
