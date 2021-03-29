<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="card-custom">
      <router-view />
    </div>
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

.card-custom {
  background-color: white;
}

main {
  background-image: url('https://media.istockphoto.com/vectors/seamless-pattern-made-of-hand-drawn-comic-bubbles-vector-id1169712293?b=1&k=6&m=1169712293&s=170667a&w=0&h=8ItAlfQr8T66c9hXof5D-71RCPau94XgkDM_nRV92Xk=');
}
</style>
