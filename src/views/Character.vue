<template>
  <div class="container pb-5">
    <Breadcrumb :breadcrumb="['Chacacters', 'Spider man']" />

    <main>
      <div class="row py-3">
        <div class="col-12 col-md-6 col-lg-3 pb-4">
          <img :src="imagemTemporaria" :alt="''" class="img-fluid rounded-1">
        </div>

        <div class="col-122 col-md-6 col-lg-9 px-lg-5">
          <h1 class="fs-2 fw-bold pb-4">SPIDER MAN</h1>
          <p class="lh-base pb-4">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. RISUS PULVINAR IPSUM LAOREET VENENATIS. AUGUE LOREM SED MALESUADA DUIS ERAT. MASSA FELIS SEMPER GRAVIDA INTEGER TINCIDUNT MORBI EU ADIPISCING. FUSCE TORTOR ODIO NASCETUR TINCIDUNT SED ERAT. MASSA FELIS SEMPER GRAVIDA INTEGER TINCIDUNT MORBI EU ADIPISCING. FUSCE ERAT. MASSA FELIS SEMPER GRAVIDA INTEGER TINCIDUNT MORBI EU ADIPISCING. FUSCEERAT. MASSA FELIS SEMPER GRAVIDA INTEGER TINCIDUNT MORBI EU ADIPISCING. FUSCE.          </p>

            <div class="row pb-5">
              <h2 class="fs-2 fw-bold pb-3">COMICS</h2>
              <ComicCard :comic-pages="100" :comic-img="imagemTemporaria2" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-6 col-md-6 col-lg-3 pb-4" />
              <ComicCard :comic-pages="100" :comic-img="imagemTemporaria2" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-6 col-md-6 col-lg-3 pb-4" />
              <ComicCard :comic-pages="100" :comic-img="imagemTemporaria2" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-6 col-md-6 col-lg-3 pb-4" />
              <ComicCard :comic-pages="100" :comic-img="imagemTemporaria2" comic-name="SPIDER MAN BLA BLA LBA LA LASJDLJSABSD" :comic-url="'/ok/okok'" class="col-6 col-md-6 col-lg-3 pb-4" />
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import ComicCard from '../components/ComicCard.vue';

export default {
  name: 'Character',
  data() {
    return {
      imagemTemporaria: 'https://img.freepik.com/vetores-premium/moldura-quadrada-de-luz-rosa-quadrado-de-luz-rosa-banner-quadrado-luz-rosa_1189-2997.jpg?w=740',
      imagemTemporaria2: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Namtheun_2021-10-16_0225Z.jpg',
    };
  },
  components: {
    Breadcrumb,
    ComicCard,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
};
</script>
