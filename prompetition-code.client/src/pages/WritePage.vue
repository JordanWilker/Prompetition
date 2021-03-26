<template>
  <div class="col-12">
    <Topic :topic="state.todaysTopic" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { topicService } from '../services/TopicService'
export default {
  name: 'Write',
  setup() {
    const route = useRoute()
    onMounted(() => {
      topicService.getTodaysTopic()
    })
    const state = reactive({
      todaysTopic: computed(() => AppState.todaysTopic)
    })
    return {
      state,
      route
    }
  }
}
</script>

<style scoped lang="scss">
</style>
