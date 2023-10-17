<template>
  <div>
    <h1>Erro 404 - Página não encontrada</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Page404',
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
