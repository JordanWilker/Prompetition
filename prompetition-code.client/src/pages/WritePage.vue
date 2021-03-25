<template>
  <div class="col-12">
    <Topic :topic="state.topics.filter(t => t.id === route.params.id)" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'Write',
  setup() {
    const route = useRoute()
    const state = reactive({
      topics: computed(() => AppState.topics)
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
