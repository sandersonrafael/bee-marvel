<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{ name: 'Events', urlPath: ''}]" />

    <Loading v-if="loading" />

    <main>
      <div class="row mb-3">
        <EventCard
          v-for="event in eventPageList"
          :key="event.id"
          :event-img="`${event.thumbnail.path}.${event.thumbnail.extension}`"
          :event-title="event.title"
          :event-description="event.description"
          :event-date="event.start"
          class="col-12 col-md-6 col-lg-4 col-xl-6 p-3 pb-4 container"
        />
      </div>
    </main>

    <PaginationButtons
      @change-page="selectAnotherPage"
      :number-of-pages="numberOfPages"
      class="pb-5 pt-3 d-flex justify-content-center"
    />
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import EventCard from '../components/EventCard.vue';
import FetchResponse from '../types/FetchResponse';
import fetchData from '../api/fetchData';
import MarvelEvent from '../types/eventsTypes/Event';
import Loading from '../components/Loading.vue';
import PaginationButtons from '../components/PaginationButtons.vue';

export default {
  name: 'Events',
  data() {
    return {
      eventList: ([] as MarvelEvent[]),
      eventPageList: ([] as MarvelEvent[]),
      loading: true,
      eventsPerPage: 12,
      numberOfPages: 0,
      actualPage: 1,
    };
  },
  components: {
    Breadcrumb,
    EventCard,
    Loading,
    PaginationButtons,
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

        this.getNumberOfPages();
        this.getEventPageList();

      } finally {
        this.loading = false;
      }
    };
    loadApiData();
  },
  methods: {
    getNumberOfPages() {
      const numberOfEvents = this.eventList.length;
      this.numberOfPages = Math.ceil(numberOfEvents / this.eventsPerPage);
    },
    getEventPageList() {
      this.eventPageList = this.eventList.filter((_event, index) => {
        return index >= (this.actualPage - 1) * this.eventsPerPage
          && index < this.actualPage * this.eventsPerPage;
      });
    },
    selectAnotherPage(page: number) {
      this.actualPage = page;
      this.getEventPageList();
      window.scrollTo({ behavior: 'smooth', top: 0 });
    },
  },
  emits: ['getPathRoute'],
};
</script>
