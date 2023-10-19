<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{name: 'Home', urlPath: ''}]" />
    <main class="position-absolute top-50 start-50 translate-middle w-100">
      <div class="d-flex justify-content-center">
        <Logo class="mv-gray d-sm-none" width="186" height="75" />
        <Logo class="mv-gray d-none d-sm-block" />
      </div>
      <p class="pt-3 text-dark text-center fw-bold fs-2">WELCOME TO MARVEL'S DIRECTORY</p>
    </main>
  </div>
</template>

<script lang="ts">
import Logo from '../icons/Logo.vue';
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    Breadcrumb,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
  emits: ['getPathRoute'],
};
</script>
