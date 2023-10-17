<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Events']" />

    <main>
      <div class="row mb-3">
        <EventCard :event-date="'24/10/2016'" :event-img="imagemTemporaria" event-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :event-url="'/ok/okok'" class="col p-3 container" />
        <EventCard :event-date="'24/10/2016'" :event-img="imagemTemporaria" event-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :event-url="'/ok/okok'" class="col p-3 container" />
      </div>

      <div class="row">
        <EventCard :event-date="'24/10/2016'" :event-img="imagemTemporaria" event-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :event-url="'/ok/okok'" class="col p-3 container" />
        <EventCard :event-date="'24/10/2016'" :event-img="imagemTemporaria" event-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :event-url="'/ok/okok'" class="col p-3 container" />
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import EventCard from '../components/EventCard.vue';

export default {
  name: 'Events',
  data() {
    return {
      imagemTemporaria: 'https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg?w=740',
    };
  },
  components: {
    Breadcrumb,
    EventCard,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
