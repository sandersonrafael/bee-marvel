<template>
  <div class="container pb-5">
    <Breadcrumb :breadcrumb="[{name: 'Chacacters', urlPath: '/characters'}, {name: charName, urlPath: ''}]" />

    <Loading v-if="loadingCharacter" />

    <main v-if="!loadingCharacter">
      <div class="row py-3">
        <div class="col-12 col-md-6 col-lg-3 pb-4">
          <img
            :src="imageSrc"
            :alt="charName"
            class="img-fluid rounded-1"
          >
        </div>

        <div class="col-122 col-md-6 col-lg-9 px-lg-5">
          <h1 class="fs-2 fw-bold pb-4">{{ charName.toUpperCase() }}</h1>
          <p class="lh-base pb-4">{{ charDescription.toUpperCase() }}</p>

          <div class="row position-relative">
            <Loading v-if="loadingComics" class="top-50 start-100" />
            <h2 class="fs-2 fw-bold pb-3">COMICS</h2>
            <ComicCard
              v-for="(comic, index) in charComics"
              :key="index"
              :comic-img="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
              :comic-name="comic.title"
              :comic-pages="comic.pageCount"
              class="col-6 col-md-6 col-lg-3 pb-4"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import ComicCard from '../components/ComicCard.vue';
import FetchResponse from '../types/FetchResponse';
import Character from '../types/charactersTypes/Character';
import Comic from '../types/comicsTypes/Comic';
import fetchData from '../utils/fetchData';
import Loading from '../components/Loading.vue';

export default {
  name: 'Character',
  data() {
    return {
      character: ({} as Character),
      imageSrc: '',
      charName: '',
      charDescription: '',
      charComics: ([] as Comic[]),
      loadingCharacter: true,
      loadingComics: true,
    };
  },
  components: {
    Breadcrumb,
    ComicCard,
    Loading,
  },
  mounted() {
    this.$emit('getPathRoute');

    const loadApiData = async () => {
      try {
        const getCharacter = await fetchData(`characters/${this.$route.params.id}`) as FetchResponse;
        this.character = (getCharacter?.data?.results[0] as Character) || {};

        this.imageSrc = `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
        this.charName = this.character.name;
        this.charDescription = this.character.description || 'NO DESCRIPTION AVAILABLE';
      } finally {
        this.loadingCharacter = false;
      }

      try {
        const getCharacterComics = await fetchData(`characters/${this.$route.params.id}/comics`) as FetchResponse;
        const comicList: Comic[] = (getCharacterComics?.data?.results as Comic[]) || [];

        this.charComics = comicList
          .filter((comic) => comic.thumbnail.path.indexOf('image_not_available') === -1)
          .filter((_comic, index) => index < 4);
      }
      finally {
        this.loadingComics = false;
      }
    };
    loadApiData();
  },
};
</script>
