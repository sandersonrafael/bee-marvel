<template>
  <div class="card border-0">
    <img :src="comicImg" :alt="comicName" class="img-fluid rounded-1">
    <span class="fw-bold fs-6 pt-2" :to="(comicUrl as string)">{{ comicName }}</span>
    <span class="fs-6" :to="(comicUrl as string)">PAGES: {{ comicPages }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ComicCard',
  props: {
    comicImg: String,
    comicName: String,
    comicUrl: String,
    comicPages: Number,
  },
};
</script>
