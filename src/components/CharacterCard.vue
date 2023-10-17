<template>
  <div class="card border-0">
    <RouterLink :to="(charUrl as string)">
      <img :src="charImg" :alt="charName" class="img-fluid rounded-1">
    </RouterLink>
    <RouterLink class="text-dark fw-bold fs-5 pt-3" :to="(charUrl as string)">{{ charName }}</RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CaracterCard',
  props: {
    charImg: String,
    charName: String,
    charUrl: String,
  },
};
</script>
