<template>
  <div class="col-12">
    <Response v-for="response in state.responses" :key="response.id" :response="response" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { responseService } from '../services/ResponseService'
import { useRoute } from 'vue-router'
export default {
  name: 'Responses',
  setup() {
    const route = useRoute()
    onMounted(() => {
      responseService.getResponsesByTopicId(route.params.topicId)
    })
    const state = reactive({
      responses: computed(() => AppState.responses)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
</style>
