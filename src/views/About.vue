<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  props: ['getPathRoute'],
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
