<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{name: 'Comics', urlPath: ''}]" />

    <Loading v-if="loading" />

    <main>
      <div class="row">
        <ComicCard
          v-for="comic in comicList"
          :key="comic.id"
          :comic-pages="comic.pageCount"
          :comic-img="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
          :comic-name="comic.title"
          class="col-6 col-md-4 col-lg-3 col-xl-2 p-3"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import ComicCard from '../components/ComicCard.vue';
import FetchResponse from '../types/FetchResponse';
import Comic from '../types/comicsTypes/Comic';
import fetchData from '../utils/fetchData';
import Loading from '../components/Loading.vue';

export default {
  name: 'Comics',
  data() {
    return {
      comicList: ([] as Comic[]),
      loading: true,
    };
  },
  components: {
    Breadcrumb,
    ComicCard,
    Loading,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');

    const loadApiData = async () => {
      try {
        const getComics = await fetchData('comics') as FetchResponse;
        const getList: Comic[] = (getComics?.data?.results as Comic[]) || [];

        this.comicList = getList.filter((char) => {
          return char.thumbnail.path.indexOf('image_not_available') === -1;
        });
      } finally {
        this.loading = false;
      }
    };
    loadApiData();
  },
};
</script>
