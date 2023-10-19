<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <Breadcrumb :breadcrumb="[{name: 'Comics', urlPath: ''}]" />
      <Search @search="searchComics" class="pt-2" />
    </div>

    <Loading v-if="loading" />

    <main>
      <div class="row">
        <ComicCard
          v-for="comic in comicShowableList"
          :key="comic.id"
          :comic-pages="comic.pageCount"
          :comic-img="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
          :comic-name="comic.title"
          class="col-6 col-md-4 col-lg-3 col-xl-2 p-3"
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
import ComicCard from '../components/ComicCard.vue';
import FetchResponse from '../types/FetchResponse';
import Comic from '../types/comicsTypes/Comic';
import fetchData from '../api/fetchData';
import Loading from '../components/Loading.vue';
import Search from '../components/Search.vue';
import PaginationButtons from '../components/PaginationButtons.vue';

export default {
  name: 'Comics',
  data() {
    return {
      comicList: ([] as Comic[]),
      comicPageList: ([] as Comic[]),
      comicShowableList: ([] as Comic[]),
      loading: true,
      comicsPerPage: 18,
      numberOfPages: 0,
      actualPage: 1,
    };
  },
  components: {
    Breadcrumb,
    ComicCard,
    Loading,
    Search,
    PaginationButtons,
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

        this.getNumberOfPages();
        this.getComicPageList();
        this.getComicShowableList();

      } finally {
        this.loading = false;
      }
    };
    loadApiData();
  },
  methods: {
    searchComics(searchValue: string) {
      if (searchValue) {
        this.comicShowableList = this.comicPageList.filter((comic) => {
          return comic.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
        });
      } else {
        this.comicShowableList = [...this.comicPageList];
      }
    },
    getNumberOfPages() {
      const numberOfComics = this.comicList.length;
      this.numberOfPages = Math.ceil(numberOfComics / this.comicsPerPage);
    },
    getComicPageList() {
      this.comicPageList = this.comicList.filter((_comic, index) => {
        return index >= (this.actualPage - 1) * this.comicsPerPage
          && index < this.actualPage * this.comicsPerPage;
      });
    },
    getComicShowableList() {
      this.comicShowableList = [...this.comicPageList];
    },
    selectAnotherPage(page: number) {
      this.actualPage = page;
      this.getComicPageList();
      this.getComicShowableList();
      window.scrollTo({ behavior: 'smooth', top: 0 });
    },
  },
  emits: ['getPathRoute'],
};
</script>
