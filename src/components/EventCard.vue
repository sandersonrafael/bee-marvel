<template>
  <div class="card border-0 flex-xl-row justify-content-between p-0">
    <img :src="eventImg" :alt="eventTitle" class="img-fluid col-12 col-xl-5 pe-md-4">
    <div class="col-12 col-xl-7 d-flex flex-column justify-content-between gap-2 mt-4 mt-xl-0">
      <h1 class="fs-4 fw-bold lh-1">{{ eventTitle?.toUpperCase() }}</h1>
      <p class="fs-6 lh-sm">{{ formattedDescription() }}</p>
      <p class="mb-0"><span class="fw-bold">DATE OF THE EVENT</span>: <span>{{ formattedDate() }}</span></p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventCard',
  props: {
    eventImg: String,
    eventTitle: String,
    eventDescription: String,
    eventDate: String,
  },
  methods: {
    formattedDescription(): string {
      const text = (this.eventDescription as string).toUpperCase();
      return text.length > 248 ? `${text.slice(0, 249)}...` : text;
    },
    formattedDate(): string {
      const date = this.eventDate as string;

      if (date) return date.split(' ')[0].split('-').reverse().join('/');
      return 'NOT AVAILABLE';
    },
  },
};
</script>
