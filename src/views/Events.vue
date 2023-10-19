<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{ name: 'Events', urlPath: ''}]" />

    <Loading v-if="loading" />
    <main>
      <div class="row mb-3">
        <EventCard
          v-for="event in eventList"
          :key="event.id"
          :event-img="`${event.thumbnail.path}.${event.thumbnail.extension}`"
          :event-title="event.title"
          :event-description="event.description"
          :event-date="event.start"

          class="col-12 col-md-6 col-lg-4 col-xl-6 p-3 pb-4 container"
        />
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import EventCard from '../components/EventCard.vue';
import FetchResponse from '../types/FetchResponse';
import fetchData from '../utils/fetchData';
import MarvelEvent from '../types/eventsTypes/Event';
import Loading from '../components/Loading.vue';

export default {
  name: 'Events',
  data() {
    return {
      eventList: ([] as MarvelEvent[]),
      loading: true,
    };
  },
  components: {
    Breadcrumb,
    EventCard,
    Loading,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');

    const loadApiData = async () => {
      try {
        const getEvents = await fetchData('events') as FetchResponse;
        const getList: MarvelEvent[] = (getEvents?.data?.results as MarvelEvent[]) || [];

        this.eventList = [...getList];
      } finally {
        this.loading = false;
      }
    };
    loadApiData();
  },
  emits: ['getPathRoute'],
};
</script>
