<template>
  <div class="UserSubmissions">
    <h4>Yo it's User Submissions</h4>
    <!-- TODO: Display a list of all of the user's submissions -->
    <Response v-for="response in state.responses.filter(r => r.creator.name === state.user.email)" :response="response" :key="response.id" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import Response from './Response.vue'
import { AppState } from '../AppState'
export default {
  name: 'UserSubmissions',
  props: {
    user: { type: Object, default: undefined }
  },
  setup() {
    const state = reactive({
      responses: computed(() => AppState.responses),
      user: computed(() => AppState.user)
    })
    return {
      state
    }
  },
  components: { Response }
}
</script>
