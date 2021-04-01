<template>
  <div class="component text-light">
    this is the page for the indivi"duel"
    <div class="row">
      <div class="col">
        {{ state.duel.body }}
      </div>
    </div>
    <div class="row" v-if="state.duel.userA">
      <div class="col-6">
        {{ state.duel.userA.body }}
      </div>
      <div class="col-6">
        {{ state.duel.userB.body }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { duelService } from '../services/DuelsService'
import { AppState } from '../AppState'
export default {
  name: 'DuelsInfo',
  setup() {
    const route = useRoute()
    onMounted(() => {
      duelService.getDuelById(route.params.id)
    })
    const state = reactive({
      duel: computed(() => AppState.activeDuel)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
