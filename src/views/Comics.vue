<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Comics']" />

    <main>
      <div class="row">
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MANAS DA D " :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MANA SDSAD" :comic-url="'/ok/okok'" class="col-2 p-3" />
      </div>
      <div class="row">
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MANAS DA D " :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MAN" :comic-url="'/ok/okok'" class="col-2 p-3" />
        <ComicCard :comic-pages="100" :comic-img="imagemTemporaria" comic-name="SPIDER MANA SDSAD" :comic-url="'/ok/okok'" class="col-2 p-3" />
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import ComicCard from '../components/ComicCard.vue';

export default {
  name: 'Comics',
  data() {
    return {
      imagemTemporaria: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Namtheun_2021-10-16_0225Z.jpg',
    };
  },
  components: {
    Breadcrumb,
    ComicCard,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
