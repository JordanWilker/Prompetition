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
      isDailyChallenge: false,
      startDate: new Date(AppState.todaysTopic.challengeStartDate),
      submissionEndDate: AppState.todaysTopic.challengeStartDate + 86400000,
      timeLeft: AppState.todaysTopic.challengeStartDate + 86400000 - new Date()
    })
    const timer = setInterval(getTimeLeft, 200)
    onMounted(async() => {
      if (route.name === 'Daily-Challenge') {
        await topicService.getTodaysTopic()
        await responseService.getDailyChallengeResponse()
        state.isDailyChallenge = true
      } else {
        await topicService.getTopicById(route.params.topicId)
        await responseService.getResponsesByTopicId(route.params.topicId)
        state.isDailyChallenge = false
      }

      console.log('My Response:', AppState.myResponse)
      state.submission = AppState.myResponse ? AppState.myResponse.body : ''
      // console.log('startDate', state.startDate.getTime())
      // console.log(new Date(AppState.todaysTopic.challengeStartDate).getTime())
      // console.log(new Date().getTime())
    })
    function getTimeLeft() {
      // TODO: Display time remaining as only hours minutes seconds, and not a time (AM, PM, etc)
      state.timeLeft = new Date(AppState.todaysTopic.challengeStartDate + 86400000 - new Date())
      // NOTE: There are 86,400,000 milliseconds in one day

      if (state.timeLeft < 0) {
        window.alert('Submission period has ended')
        clearInterval(timer)
      } else if (state.timeLeft < 60000) {
        window.alert("Time's almost up!")
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

        if (state.isDailyChallenge) {
          body.topicId = state.todaysTopic.id
        }

        if (!AppState.myResponse) {
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
