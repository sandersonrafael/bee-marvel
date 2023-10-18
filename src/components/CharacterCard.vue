<template>
  <div class="card border-0">
    <RouterLink :to="`/characters/${urlParam}`">
      <img :src="charImg" :alt="charName" class="img-fluid rounded-1">
    </RouterLink>
    <RouterLink class="text-dark fw-bold fs-5 pt-3" :to="`/characters/${urlParam}`">{{ charName }}</RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CaracterCard',
  props: {
    charImg: String,
    charName: String,
    urlParam: Number,
  },
};
</script>
