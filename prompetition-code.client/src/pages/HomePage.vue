<template>
  <div class="col-12">
    <div class="row d-flex justify-content-center">
      <img src="https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/skybg.PNG" alt="Sky Background Logo" class="img-fluid mt-3">
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <!-- <router-link :to="{ name: 'Write', params: { topicId: state.topics.filter(t => t.createdAt.substring(0, 9) === state.date)[0].id }}"> TODO: Link to WritePage with Today's Prompt -->
      <button class="btn btn-info px-5">
        Daily Prompt[0].id
      </button>
      <!-- </router-link> -->
      <button class="btn btn-dark">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </button>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <button class="btn btn-info px-5">
        Previous Prompts
      </button>
      <button class="btn btn-dark">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </button>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <button class="btn btn-info px-4">
        Judge Today's Daily
      </button>
      <button class="btn btn-dark">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </button>
    </div>
    <div class="row d-flex justify-content-center my-5">
      <button class="btn btn-warning px-4" disabled>
        Prompt Duel
      </button>
      <button class="btn btn-dark">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { topicService } from '../services/TopicService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      topicService.getDate()
    })
    const state = reactive({
      topics: computed(() => AppState.topics),
      date: computed(() => AppState.date)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
img {
  border-radius: 10px;
  max-height: 207px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
}
</style>
