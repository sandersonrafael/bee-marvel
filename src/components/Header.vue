<template>
  <header class="sticky-top">
    <nav class="navbar p-3 red-100-bg">
      <div class="container justify-content-between">
        <Logo width="139" height="56" class="red-100-bg" />

        <ul class="navbar-nav gap-4 fw-bold fs-5 flex-row">
          <li class="position-relative">
            <RouterLink class="nav-link text-light" to="/">HOME</RouterLink>
            <div v-if="pathRoute === ''" class="position-absolute w-100 pt-2 mt-2 bg-white"></div>
          </li>
          <li class="position-relative">
            <RouterLink class="nav-link text-light" to="/characters">CHARACTERS</RouterLink>
            <div v-if="pathRoute === 'characters'" class="position-absolute w-100 pt-2 mt-2 bg-white"></div>
          </li>
          <li class="position-relative">
            <RouterLink class="nav-link text-light" to="/comics">COMICS</RouterLink>
            <div v-if="pathRoute === 'comics'" class="position-absolute w-100 pt-2 mt-2 bg-white"></div>
          </li>
          <li class="position-relative">
            <RouterLink class="nav-link text-light" to="/events">EVENTS</RouterLink>
            <div v-if="pathRoute === 'events'" class="position-absolute w-100 pt-2 mt-2 bg-white"></div>
          </li>
          <li class="position-relative">
            <RouterLink class="nav-link text-light" to="/contact">CONTACT</RouterLink>
            <div v-if="pathRoute === 'contact'" class="position-absolute w-100 pt-2 mt-2 bg-white"></div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Logo from '../icons/Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
  props: {
    pathRoute: String,
  },
};
</script>
