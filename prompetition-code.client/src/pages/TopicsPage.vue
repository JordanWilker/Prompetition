<template>
  <div class="col-12">
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
</style>
