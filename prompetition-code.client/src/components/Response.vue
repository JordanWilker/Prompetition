<template>
  <div class="row response-card">
    <h6 class="col-12 response-date">
      {{ response.creator.name.substring(0, response.creator.name.indexOf('@')) }}
    </h6>
    <div class="col-12 d-inline-flex justify-content-between align-items-center">
      <h5>
        {{ response.body }}
      </h5>
      <div class="d-inline-flex align-items-center">
        {{ votes.length }}
        <i class="fa fa-heart fa-2x ml-2" :class="{ 'text-danger': buttonLiked }" aria-hidden="true" @click="createVote(response.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { Response } from '../models/Response'
import { AppState } from '../AppState'
import { Vote } from '../models/Vote'
import { voteService } from '../services/VoteService'
export default {
  name: 'Response',
  props: {
    response: { type: Object, default: () => new Response() },
    votes: { type: Array, default: v => new Vote(v) }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state
    }
  },
  data() {
    return {
      buttonLiked: false,
      createVote(responseId) {
        this.buttonLiked = !this.buttonLiked
        voteService.createVote(responseId)
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
</style>
