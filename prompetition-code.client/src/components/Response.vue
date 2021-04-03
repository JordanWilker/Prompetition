<template>
  <div class="row mb-4">
    <div class="col-12 response-card">
      <div class="row d-inline-flex justify-content-between align-items-center w-100">
        <h6 class="response-date mb-0">
          {{ response.creator.name }}
        </h6>
        <i class="fa fa-ban fa-2x text-delete" aria-hidden="true" v-if="response.creator.email === state.user.email" @click="deleteResponse(response)"></i>
      </div>
      <div class="row d-inline-flex justify-content-between align-items-start w-100 mt-3">
        <h5 class="col-10 text-cblue mb-3 pl-0">
          {{ response.body }}
        </h5>
        <div class="col d-inline-flex align-items-center heart-container bold">
          <span class="text-light">{{ votes.length }}</span>
          <!-- Votes are extremely slow with current set-up. TODO: minimize vote api calls -->
          <i class="fa fa-heart fa-2x ml-2"
             :class="{ 'text-red': buttonLiked }"
             aria-hidden="true"
             @click="createVote(response.id)"
             v-if="!(votes.filter(v => v.creator.email === state.user.email).length === 1)"
          ></i>
          <i class="fa fa-heart fa-2x ml-2"
             :class="{ 'text-red': !buttonLiked }"
             aria-hidden="true"
             @click="deleteVote(votes.filter(v => v.creator.email === state.user.email)[0].id)"
             v-else
          ></i>
        </div>
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
import { responseService } from '../services/ResponseService'
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
      },
      deleteResponse(response) {
        responseService.deleteResponse(response)
      }
    }
  }
}
</script>

<style scoped>
.response-card {
  padding: 2vh;
  padding-left: 4vh;
  padding-top: 3vh;
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
.text-red {
  color: rgb(228, 0, 49);
}
.text-delete {
  color: rgb(230, 0, 0);
}
.heart-container {
  /* background-color: rgba(255, 255, 255, 0.493); */
  border: 2px solid gray;
  background-color: rgb(95, 95, 95);
  border-radius: 8px;
  /* border-radius: 50%; */
  padding: 10px;
  min-width: 75px;
  justify-content: center;
  transition: all 0.4s ease-in-out;
}
.fa:hover {
  cursor: pointer;
  transform: scale(0.90);
}
.response-date {
  color: rgb(255, 192, 17);
}
</style>
