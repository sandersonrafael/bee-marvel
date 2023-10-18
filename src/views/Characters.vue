<template>
  <div class="container">
    <Breadcrumb :breadcrumb="[{name: 'Characters', urlPath: ''}]" />

    <Loading v-if="loading" />

    <main>
      <div class="row">
        <CharacterCard
          v-for="character in characterList"
          :key="character.id"
          :char-img="`${character.thumbnail.path}.${character.thumbnail.extension}`"
          :char-name="character.name"
          :url-param="character.id"
          class="col-6 col-md-4 col-lg-3 col-xl-2 p-3"
        />
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import CharacterCard from '../components/CharacterCard.vue';
import fetchData from '../utils/fetchData';
import FetchResponse from '../types/FetchResponse';
import Character from '../types/charactersTypes/Character';
import Loading from '../components/Loading.vue';

export default {
  name: 'Characters',
  data() {
    return {
      characterList: ([] as Character[]),
      loading: true,
    };
  },
  components: {
    Breadcrumb,
    CharacterCard,
    Loading,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');

    const loadApiData = async () => {
      try {
        const getCharacters = await fetchData('characters') as FetchResponse;
        const getList: Character[] = (getCharacters?.data?.results as Character[]) || [];

        this.characterList = getList.filter((char) => {
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
