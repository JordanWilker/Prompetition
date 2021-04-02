<template>
  <div class="UserSubmissions">
    <h4>User Submissions</h4>
    <!-- TODO: Display a list of all of the user's submissions -->
    <div class="col-12 text-dark">
      <Response v-for="response in state.responses.filter(r => r.creator.email === state.user.email)" :key="response.id" :response="response" :votes="state.votes.filter(v => v.responseId === response.id)" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import Response from './Response.vue'
import { AppState } from '../AppState'
import { responseService } from '../services/ResponseService'
import { voteService } from '../services/VoteService'
export default {
  name: 'UserSubmissions',
  props: {
    user: { type: Object, default: undefined }
  },
  setup() {
    onMounted(async() => {
      await responseService.getAllResponses()
      await voteService.getAllVotes()
    })
    const state = reactive({
      responses: computed(() => AppState.responses),
      user: computed(() => AppState.user),
      votes: computed(() => AppState.votes)
    })
    return {
      state
    }
  },
  components: { Response }
}
</script>
