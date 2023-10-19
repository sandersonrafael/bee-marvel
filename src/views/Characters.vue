<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <Breadcrumb :breadcrumb="[{name: 'Characters', urlPath: ''}]" />
      <Search @search="searchCharacters" class="pt-2" />
    </div>

    <Loading v-if="loading" />

    <main>
      <div class="row">
        <CharacterCard
          v-for="character in characterShowableList"
          :key="character.id"
          :char-img="`${character.thumbnail.path}.${character.thumbnail.extension}`"
          :char-name="character.name"
          :url-param="character.id"
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
import CharacterCard from '../components/CharacterCard.vue';
import fetchData from '../api/fetchData';
import FetchResponse from '../types/FetchResponse';
import Character from '../types/charactersTypes/Character';
import Loading from '../components/Loading.vue';
import Search from '../components/Search.vue';
import PaginationButtons from '../components/PaginationButtons.vue';

export default {
  name: 'Characters',
  data() {
    return {
      characterList: ([] as Character[]),
      characterPageList: ([] as Character[]),
      characterShowableList: ([] as Character[]),
      loading: true,
      charactersPerPage: 18,
      numberOfPages: 0,
      actualPage: 1,
    };
  },
  components: {
    Breadcrumb,
    CharacterCard,
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
        const getCharacters = await fetchData('characters') as FetchResponse;
        const getList: Character[] = (getCharacters?.data?.results as Character[]) || [];

        this.characterList = getList.filter((char) => {
          return char.thumbnail.path.indexOf('image_not_available') === -1;
        });

        this.getNumberOfPages();
        this.getCharacterPageList();
        this.getCharacterShowableList();

      } finally {
        this.loading = false;
      }
    };
    loadApiData();
  },
  methods: {
    searchCharacters(searchValue: string) {
      if (searchValue) {
        this.characterShowableList = this.characterPageList.filter((char) => {
          return char.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
        });
      } else {
        this.characterShowableList = [...this.characterPageList];
      }
    },
    getNumberOfPages() {
      const numberOfCharacters = this.characterList.length;
      this.numberOfPages = Math.ceil(numberOfCharacters / this.charactersPerPage);
    },
    getCharacterPageList() {
      this.characterPageList = this.characterList.filter((_char, index) => {
        return index >= (this.actualPage - 1) * this.charactersPerPage
        && index < this.actualPage * this.charactersPerPage;
      });
    },
    getCharacterShowableList() {
      this.characterShowableList = [...this.characterPageList];
    },
    selectAnotherPage(page: number) {
      this.actualPage = page;
      this.getCharacterPageList();
      this.getCharacterShowableList();
      window.scrollTo({ behavior: 'smooth', top: 0 });
    },
  },
  emits: ['getPathRoute'],
};
</script>
