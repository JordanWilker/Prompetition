<template>
  <div class="Write w-100">
    <div class="row">
      <div class="col">
        <div>
          <p>{{ state.todaysTopic.body }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        Time Remaining:
        <div>
          {{ new Date(state.timeLeft).toLocaleTimeString() }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form class="w-100" @submit.prevent="submitResponse">
          <label for="topicResponse">Your Response:</label>
          <textarea name="topicResponse" v-model="state.submission" class="rounded"></textarea>
          <div class="w-100">
            <button type="submit" class="btn btn-primary ml-auto mt-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { topicService } from '../services/TopicService'
import { responseService } from '../services/ResponseService.js'
export default {
  name: 'Write',
  setup() {
    const route = useRoute()
    const state = reactive({
      todaysTopic: computed(() => AppState.todaysTopic),
      submission: '',
      startDate: new Date(AppState.todaysTopic.challengeStartDate),
      submissionEndDate: AppState.todaysTopic.challengeStartDate + 86400000,
      timeLeft: AppState.todaysTopic.challengeStartDate + 86400000 - new Date()
    })
    const timer = setInterval(getTimeLeft, 200)
    onMounted(async() => {
      // TODO: Get the prompt specified in the URL, and not always Daily Challenge
      await topicService.getTodaysTopic()
      await responseService.getResponsesByTopicId(route.params.topicId)
      console.log('Responses', AppState.myResponse)
      state.submission = AppState.myResponse.body
      // TODO: Get user's response to the prompt, and set the state.submission to it
      // Also, send the new submission to the server

      // NOTE: There are 86,400,000 milliseconds in one day
    })
    function getTimeLeft() {
      // TODO: Display time remaining as only hours minutes seconds, and not a time (AM, PM, etc)
      state.timeLeft = new Date(AppState.todaysTopic.challengeStartDate + 86400000 - new Date())

      if (state.timeLeft < 0) {
        console.log('Submission period has ended')
        clearInterval(timer)
      } else if (state.timeLeft < 60000) {
        // TODO: Alert the user to the small amount of time left
      }
    }
    return {
      state,
      route,
      submitResponse() {
        const body = {
          body: state.submission,
          topicId: route.params.topicId,
          votes: 0
        }

        console.log('WritePage:', body)
        if (AppState.myResponse.body === '' || !AppState.myResponse.body) {
          responseService.createResponse(body)
        } else {
          responseService.editResponse(body)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  textarea {
    display: block;
    width: 100%;
    overflow: hidden;
    resize:vertical;
    min-height: 40px;
    max-width: 100%;
  }
</style>
