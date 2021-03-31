<template>
  <div class="col-12 text-light">
    This is the page to "Vue" Duels
    <!-- <input type="date" name="date" id="date" class="my-3 rounded p-2 border border-dark"> -->
    <Duel v-for="duel in state.duels" :key="duel.id" :duel="duel" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { duelService } from '../services/DuelsService'
export default {
  name: 'Duels',
  setup() {
    onMounted(() => {
      duelService.getDuels()
    })
    const state = reactive({
      duels: computed(() => AppState.duels)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
input[type="date"] {
  margin-left: -1vh;
}
</style>
