<template>
  <div class="py-5"></div>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-md red-100-bg">
      <div class="container justify-content-between">
        <div class="navbar-brand">
          <Logo width="139" height="56" class="red-100-bg" />
        </div>

        <button class="btn ms-auto d-md-none p-0 border-0" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
          <HamburgerIcon v-if="!menuIsOpen" @click="menuIsOpen = true" height="48" width="48" color="#fff" />
          <CloseIcon v-if="menuIsOpen" @click="menuIsOpen = false" height="48" width="48" color="#fff" />
        </button>
        <div class="navbar-collapse collapse pb-5 pb-md-0" id="navbarMenu" ref="navbarMenu">

          <hr>

          <div class="pb-5 pb-md-0 ps-1 ps-md-0 text-white ms-auto">
            <ul class="navbar-nav fw-bold gap-2 fs-5 pb-5 pb-md-0">
                <li class="position-relative">
                <RouterLink @click="hideMenu" class="nav-link text-light" to="/">HOME</RouterLink>
                <div v-if="pathRoute === ''" class="position-absolute w-100 pt-2 pb-1 mt-2 bg-white d-none d-md-block"></div>
              </li>
              <li class="position-relative">
                <RouterLink @click="hideMenu" class="nav-link text-light" to="/characters">CHARACTERS</RouterLink>
                <div v-if="pathRoute === 'characters'" class="position-absolute w-100 pt-2 pb-1 mt-2 bg-white d-none d-md-block"></div>
              </li>
              <li class="position-relative">
                <RouterLink @click="hideMenu" class="nav-link text-light" to="/comics">COMICS</RouterLink>
                <div v-if="pathRoute === 'comics'" class="position-absolute w-100 pt-2 pb-1 mt-2 bg-white d-none d-md-block"></div>
              </li>
              <li class="position-relative">
                <RouterLink @click="hideMenu" class="nav-link text-light" to="/events">EVENTS</RouterLink>
                <div v-if="pathRoute === 'events'" class="position-absolute w-100 pt-2 pb-1 mt-2 bg-white d-none d-md-block"></div>
              </li>
              <li class="position-relative">
                <RouterLink @click="hideMenu" class="nav-link text-light" to="/contact">CONTACT</RouterLink>
                <div v-if="pathRoute === 'contact'" class="position-absolute w-100 pt-2 pb-1 mt-2 bg-white d-none d-md-block"></div>
              </li>
            </ul>

            <div class="py-5 py-md-0"></div>
            <div class="py-5 py-md-0"></div>
            <div class="py-5 py-md-0"></div>
            <div class="py-5 py-md-0"></div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Logo from '../icons/Logo.vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';

export default {
  name: 'Header',
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    Logo,
    HamburgerIcon,
    CloseIcon,
  },
  props: {
    pathRoute: String,
  },
  methods: {
    hideMenu() {
      const menu = this.$refs.navbarMenu as HTMLDivElement;
      menu.classList.remove('show');
      this.menuIsOpen = false;
    },
  },
};
</script>
