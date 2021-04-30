<template>
  <div v-if="state.activeDuel.body">
    <div class="component text-light">
      Duel
      <button class="btn btn-danger" @click="test" hidden>
        TEsting
      </button>
      {{ state.activeDuel.body }}
      <!-- <div v-if="state.activeDuel.userA.creatorId== state.account.id"> -->
      <form @submit.prevent="createUserBody">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Write Reply</label>
          <textarea class="form-control" id="bodyA" rows="3" v-model="state.body"></textarea>
        </div>
        <button class="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      <!-- </div> -->
      <!-- <div v-else-if="state.activeDuel.userB.creatorId== state.account.id">
        <form @submit.prevent="createUserBody">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Write ReplyBB</label>
            <textarea class="form-control" id="bodyB" rows="3" v-model="state.activeDuel.userB.body"></textarea>
          </div>
          <button class="btn btn-success" type="submit">
            Create
          </button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { socketService } from '../services/SocketsService'
import { useRoute, useRouter } from 'vue-router'
import { duelService } from '../services/DuelsService'
import { AppState } from '../AppState'

export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(() => {
      socketService.emit('join:room', route.params.id)
      duelService.getDuelById(route.params.id)
    })
    const state = reactive({
      body: '',
      activeDuel: computed(() => AppState.activeDuel),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,
      test() {
        duelService.test(route.params.id)
        console.log(AppState.activeDuel)
      },
      async createUserBody() {
        await duelService.createUserBody(AppState.activeDuel, { body: state.body })
        console.log('Bames Nonds having a stronk, call a bondulance')
        router.push('list')
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
