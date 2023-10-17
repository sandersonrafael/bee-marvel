<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Home']" />
    <main class="position-absolute top-50 start-50 translate-middle">
      <div class="d-flex justify-content-center">
        <Logo class="mv-gray align-self-center text"  />
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
  props: ['getPathRoute'],
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
