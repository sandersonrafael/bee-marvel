<template>
  <div class="vh-100">
    <Header :pathRoute="pathRoute"></Header>
    <RouterView @getPathRoute="getPathRoute" />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      pathRoute: '',
    };
  },
  methods: {
    getPathRoute() {
      this.pathRoute = window.location.href.split('/')[3];
    },
  },
};
</script>
<style>
  .vh-100 {
    min-height: 100vh;
  }

  .mv-gray {
    background-color: #B2B2B2;
  }

  .red-100-bg {
    background-color: #EC1D24;
  }

  .red-100-text {
    color: #EC1D24;
  }

  .red-200-bg {
    background-color: #9F0013;
  }

  .red-200-text {
    color: #9F0013;
  }

  .black-bg {
    background-color: #000000;
  }

  .black-text {
    color: #000000;
  }

  .gray-400-bg {
    background-color: #151515;
  }

  .gray-400-text {
    color: #151515;
  }

  .gray-300-bg {
    background-color: #202020;
  }

  .gray-300-text {
    color: #202020;
  }

  .gray-200-bg {
    background-color: #767676;
  }

  .gray-200-text {
    color: #767676;
  }

  .gray-100-bg {
    background-color: #CCCCCC;
  }

  .gray-100-text {
    color: #CCCCCC;
  }

  .white-bg {
    background-color: #FFFFFF;
  }

  .white-text {
    color: #FFFFFF;
  }
</style>
