<template>
  <div class="card border-0">
    <img :src="comicImg" :alt="comicName" class="img-fluid rounded-1 pb-1">
    <span class="fw-bold fs-6 pt-2">{{ comicName?.toUpperCase() }}</span>
    <span class="fs-6">PAGES: {{ comicPages }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ComicCard',
  props: {
    comicImg: String,
    comicName: String,
    comicPages: Number,
  },
};
</script>
