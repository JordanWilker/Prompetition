<template>
  <div class="row">
    <h6> {{ topic.body }} </h6>
  </div>
</template>

<script>
import { Topic } from '../models/Topic'
export default {
  name: 'Topic',
  props: {
    topic: { type: String, default: () => new Topic() }
  }
}
</script>

<style scoped>
</style>
