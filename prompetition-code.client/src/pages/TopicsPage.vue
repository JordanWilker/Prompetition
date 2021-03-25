<template>
  <div class="col-12">
    <input type="date" name="date" id="date" class="my-3 rounded p-2 border border-dark">
    <Topic v-for="topic in state.topics" :key="topic.id" :topic="topic" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { topicService } from '../services/TopicService'
export default {
  name: 'Topics',
  setup() {
    onMounted(() => {
      topicService.getTopics()
    })
    const state = reactive({
      topics: computed(() => AppState.topics)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
input[type="date"] {
  margin-left: -1vh;
}
</style>
