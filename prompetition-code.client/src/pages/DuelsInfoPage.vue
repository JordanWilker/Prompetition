<template>
  <div class="component text-light text-center">
    this is the page for the indivi"duel"
    <div class="row">
      <div class="col">
        {{ state.duel.body }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        VOTE ON THE WINNER!!!
      </div>
    </div>
    <div class="row" v-if="state.duel.userA">
      <div class="col-6">
        {{ state.duel.userA.body }}
        <div class="row">
          <div>
            <button class="btn btn-success" @click="voteA">
              Vote
            </button>
            {{ state.duel.userA.votes }}
          </div>
        </div>
      </div>
      <div class="col-6">
        {{ state.duel.userB.body }}
        <div class="row">
          <div>
            <button class="btn btn-success" @click="voteB">
              Vote
            </button>
            {{ state.duel.userB.votes }}
          </div>
        </div>
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
      state,
      async voteA() {
        const res = await duelService.createDuelVote(state.duel.id)
        console.log(res)
        if (await res.status === 200) {
          duelService.increaseDuelVoteA(state.duel.id)
        }
      },
      async voteB() {
        const res = await duelService.createDuelVote(state.duel.id)
        if (await res.status === 200) {
          duelService.increaseDuelVoteB(state.duel.id)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
