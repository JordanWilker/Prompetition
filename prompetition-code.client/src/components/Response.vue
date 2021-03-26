<template>
  <div class="row response-card">
    <h6 class="col-12 response-date">
      {{ response.creator.name.substring(0, response.creator.name.indexOf('@')) }}
    </h6>
    <div class="col-12 d-inline-flex justify-content-between align-items-center">
      <h5>
        {{ response.body }}
      </h5>
      <div class="d-inline-flex align-items-center" v-show="votes">
        {{ votes.length }}
        <i class="fa fa-heart fa-2x ml-2" :class="{ 'text-danger': buttonLiked }" aria-hidden="true" @click="toggleVote()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { Response } from '../models/Response'
import { AppState } from '../AppState'
import { Vote } from '../models/Vote'
export default {
  name: 'Response',
  props: {
    response: { type: Object, default: () => new Response() },
    votes: { type: Array, default: () => new Vote() }
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
      toggleVote() {
        this.buttonLiked = !this.buttonLiked
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
