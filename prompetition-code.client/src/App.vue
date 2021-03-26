<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-2">
      <a href="https://github.com/JordanWilker/Prompetition">
        <i class="fa fa-github fa-2x text-light" aria-hidden="true" title="GitHub"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
