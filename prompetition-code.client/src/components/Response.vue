<template>
  <div class="row response-card w-50">
    <h6 class="col-12 response-date mb-0">
      {{ response.creator.name.substring(0, response.creator.name.indexOf('@')) }}
    </h6>
    <div class="col-12 d-inline-flex justify-content-between align-items-center">
      <h5 class="text-cblue">
        {{ response.body }}
      </h5>
      <div class="d-inline-flex align-items-center heart-container bold">
        {{ votes.length }}
        <!-- Votes are extremely slow with current set-up. TODO: minimize vote api calls -->
        <i class="fa fa-heart fa-2x ml-2"
           :class="{ 'text-danger': buttonLiked }"
           aria-hidden="true"
           @click="createVote(response.id)"
           v-if="!(votes.filter(v => v.creator.email === state.user.email).length === 1)"
        ></i>
        <i class="fa fa-heart fa-2x ml-2"
           :class="{ 'text-danger': !buttonLiked }"
           aria-hidden="true"
           @click="deleteVote(votes.filter(v => v.creator.email === state.user.email)[0].id)"
           v-else
        ></i>
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
        voteService.createVote(responseId)
      },
      deleteVote(voteId) {
        voteService.deleteVote(voteId)
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
  border-radius: 0px;
  font-family: 'Lato', sans-serif;
}
.bold {
  font-weight: bolder;
}
.text-cblue {
  color: cornflowerblue;
}
.heart-container {
  background-color: rgba(255, 255, 255, 0.493);
  border: 2px solid gray;
  border-radius: 50%;
  padding: 10px;
}
.fa-heart:hover {
  cursor: pointer;
}
.response-date {
  color: rgb(255, 192, 17);
}
</style>
