<template>
  <div>
    <div v-for="index in numberOfButtons" :key="index" class="btn-group">
      <input
        @change="emitActualPage(index)"
        type="radio"
        name="page"
        :id="`page-${index}`"
        :checked="index === 1"
        class="btn-check"
      />
      <label
        :for="`page-${index}`"
        :class="`btn btn-outline-danger rounded-0
        ${index === 1 && 'rounded-start'}
        ${index === numberOfButtons && 'rounded-end'}`"
      >
        {{ index }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PaginationButtons',
  data() {
    return {
      numberOfButtons: 0,
    };
  },
  props: {
    numberOfPages: Number,
  },
  updated() {
    this.numberOfButtons = this.numberOfPages || 0;
  },
  methods: {
    emitActualPage(page: number) {
      this.$emit('changePage', page);
    },
  },
  emits: ['changePage'],
};
</script>
