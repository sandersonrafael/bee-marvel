<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Characters']" />

    <main>
      <div class="row">
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
      </div>
      <div class="row">
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
        <CharacterCard :char-img="imagemTemporaria" char-name="SPIDER MAN" :char-url="'/ok/okok'" class="col-2 p-3" />
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import CharacterCard from '../components/CharacterCard.vue';

export default {
  name: 'Characters',
  data() {
    return {
      imagemTemporaria: 'https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg?w=740',
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
  },
};
</script>
