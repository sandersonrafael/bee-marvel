<template>
  <div class="card border-0 flex-xl-row justify-content-between p-0">
    <img :src="eventImg" :alt="eventTitle" class="img-fluid col-12 col-xl-5 pe-md-4">
    <div class="col-12 col-xl-7 d-flex flex-column justify-content-between gap-2 mt-4 mt-xl-0">
      <h1 class="fs-4 fw-bold lh-1">ACTS OF VENGEANCE!</h1>
      <P class="">LOKI SETS ABOUT CONVINCING THE SUPER-VILLAINS OF EARTH TO ATTACK HEROES OTHER THAN THOSE THEY NORMALLY FIGHT IN AN ATTEMPT TO DESTROY THE AVENGERS TO ABSOLVE HIS GUILT OVER INADVERTENTLY CREATING THE TEAM IN THE FIRST PLACE.</P>
      <p class="mb-0"><span class="fw-bold">DATE OF THE EVENT</span>: {{ eventDate }}</p>
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
};
</script>
