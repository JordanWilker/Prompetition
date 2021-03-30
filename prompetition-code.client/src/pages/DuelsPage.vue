<template>
  <div class="component text-light">
    Duel
    <button class="btn btn-danger" @click="test">
      Testing
    </button>
    {{ state.duels.body }}
    <textarea>
    </textarea>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { socketService } from '../services/SocketsService'
import { useRoute } from 'vue-router'
import { duelService } from '../services/DuelsService'
import { AppState } from '../AppState'

export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    onMounted(() => {
      socketService.emit('join:room', route.params.id)
      duelService.getDuelById(route.params.id)
    })
    const state = reactive({
      duels: computed(() => AppState.activeDuel)
    })
    return {
      state,
      test() {
        duelService.test(route.params.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
