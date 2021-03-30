<template>
  <header class="bg-none">
    <Navbar />
  </header>
  <main class="container-fluid">
    <router-view />
  </main>
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
.bg-none {
  background-color: rgb(1, 0, 10);
}
.card-custom {
  background-color: white;
}
div {
  font-family: 'Inter', sans-serif !important;
}

main {
  background-image: url('assets/img/writing.jpg');
  background-size: cover;
}

// @media (max-width: 500px) {
//   main {
//     background-image: url('assets/img/writing_mobile.jpg');
//   }
// }
</style>
