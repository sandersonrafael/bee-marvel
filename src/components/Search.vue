<template>
  <div class="position-relative">
    <input
      v-model="inputValue"
      @input="emitSearchValue"
      type="text"
      id="search"
      class="ms-auto form-control w-75"
      placeholder="Search..."
    >
    <label
      v-if="!inputValue"
      for="search"
      class="z-3 position-absolute top-50 end-0 translate-middle pb-1"
    >
      <SearchIcon width="24" height="24" color="#bbb" />
    </label>
  </div>
</template>

<script lang="ts">
import SearchIcon from '../icons/SearchIcon.vue';

export default {
  name: 'Search',
  data() {
    return {
      inputValue: '',
    };
  },
  components: {
    SearchIcon,
  },
  methods: {
    emitSearchValue() {
      this.$emit('search', this.inputValue);
    },
  },
  emits: ['search'],
};
</script>
