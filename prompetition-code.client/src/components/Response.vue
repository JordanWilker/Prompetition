<template>
  <div class="row response-card">
    <h6 class="col-12 response-date">
      {{ response.creator.name.substring(0, response.creator.name.indexOf('@')) }}
    </h6>
    <div class="col-12 d-inline-flex justify-content-between align-items-center">
      <h5>
        {{ response.body }}
      </h5>
      <i class="fa fa-heart fa-2x text-dark" aria-hidden="true" @click="createVote(response.id, state.user.id)"></i>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { Response } from '../models/Response'
import { AppState } from '../AppState'
import { voteService } from '../services/VoteService'
export default {
  name: 'Response',
  props: {
    response: { type: Object, default: () => new Response() }
  },
  setup(props) {
    onMounted(() => {
      voteService.getVotesByResponseId(props.response.id)
    })
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state,
      createVote(responseId, creatorId) {
        voteService.createVote(responseId, creatorId)
      }
    }
  }
}
</script>

<style scoped>
.response-card {
  margin: 2vh;
  padding: 3vh;
  border: 2px solid gray;
  border-radius: 15px;
  font-family: 'Lato', sans-serif;
}
.response-date {
  color: gray;
}
.fa-heart:hover {
  color: var(--danger) !important;
  transition: 0.2s ease-in-out;
}
</style>
