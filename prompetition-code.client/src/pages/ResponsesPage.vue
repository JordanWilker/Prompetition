<template>
  <div class="col-sm-6 text-light" v-if="state.user.isAuthenticated">
    <div class="row p-3 px-0 d-flex justify-content-between align-items-start">
      <Topic :topic="state.topics.filter(t => t.id == route.params.topicId)[0]" />
    </div>
    <div>
      Competitive Response
    </div>
    <div v-if="state.compResponses[0]">
      <Response v-for="response in state.compResponses" :key="response.id" :response="response" :votes="state.votes.filter(v => v.responseId === response.id)" />
    </div>
    <div class="row add-row" @click="moveToWritePage(state.topics.filter(t => t.id == route.params.topicId)[0])">
      <!-- Onclick - Send to Write Page For Current Topic -->
      <h5 class="mb-0 mr-3">
        {{ state.responses.filter(r => r.creator.email === state.user.email)[0] ? 'Edit Response' : 'Add Response' }}
      </h5>
      <i class="fa" :class="state.responses.filter(r => r.creator.email === state.user.email)[0] ? 'fa-pencil' : 'fa-plus'" aria-hidden="true"></i>
    </div>
    <!-- This is for the competitive Responses -->
    <div>
      Practice Responses
    </div>
    <div v-if="state.funResponses[0]">
      <Response v-for="response in state.funResponses" :key="response.id" :response="response" :votes="state.votes.filter(v => v.responseId === response.id)" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { responseService } from '../services/ResponseService'
import { useRoute, useRouter } from 'vue-router'
import { voteService } from '../services/VoteService'

import { topicService } from '../services/TopicService'
export default {
  name: 'Responses',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async() => {
      await topicService.getTopicById(route.params.topicId)
      if (!AppState.votes[0]) {
        voteService.getAllVotes()
      }
      if (!AppState.topics[0]) {
        topicService.getTopics()
      }
      if (AppState.user.isAuthenticated) {
        responseService.getResponsesByTopicId(route.params.topicId)
      }
      if (!AppState.responses[0]) {
        responseService.getResponsesByTopicId(route.params.topicId)
      }
    })
    const state = reactive({
      responses: computed(() => AppState.responses),
      compResponses: computed(() => AppState.responses.filter(dateCheck => {
        return Date.parse(new Date(dateCheck.createdAt).toDateString()) === dateCheck.topicId.challengeStartDate
      })),
      funResponses: computed(() => AppState.responses.filter(dateCheck => {
        return Date.parse(new Date(dateCheck.createdAt).toDateString()) !== dateCheck.topicId.challengeStartDate
      })),
      votes: computed(() => AppState.votes),
      topics: computed(() => AppState.topics),
      user: computed(() => AppState.user)
    })
    return {
      state,
      route,
      moveToWritePage(topic) {
        router.push({ name: 'Write', topicId: topic.id })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.add-row {
  padding: 2vh;
  margin-bottom: 3vh;
  background-color: gray; /* For browsers that do not support gradients */
  background-image: linear-gradient(rgb(145, 145, 145), rgb(65, 65, 65));
  justify-content: center;
  align-items: center;
  color: var(--light);
  transition: all 0.2s ease-in-out;
}
.add-row:hover {
  cursor: pointer;
  transform: scale(0.97);
}
.fa-plus {
  font-size: 18pt;
}
</style>
