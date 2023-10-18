<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Characters']" />

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

export default {
  name: 'Characters',
  data() {
    return {
      imagemTemporaria: 'https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg?w=740',
      characterList: ([] as Character[]),
    };
  },
  components: {
    Breadcrumb,
    CharacterCard,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');

    (async () => {
      const getCharacters = await fetchData('characters') as FetchResponse;
      const getList: Character[] = getCharacters?.data?.results || [];

      this.characterList = getList.filter((char) => {
        return char.thumbnail.path.indexOf('image_not_available') === -1;
      });
    })();
  },
};
</script>
